import { GoogleGenAI } from "@google/genai";
import { getBrandonAiSystemPrompt } from "./prompts";

export interface ChatMessageInput {
  role: "user" | "assistant" | "system";
  content: string;
}

/**
 * Llama a la API de Google Gemini para generar respuestas usando el System Prompt
 * y la base de conocimiento de Brandon AI.
 */
export async function callGeminiAi(
  messages: ChatMessageInput[],
  isVacancyAnalysis: boolean = false
): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error("GEMINI_API_KEY_NOT_CONFIGURED");
  }

  const systemPrompt = getBrandonAiSystemPrompt();

  // Construir historial de mensajes para el SDK de Gemini
  // Filtramos mensajes previos si los hay
  const recentMessages = messages.slice(-10); // Mantener ventana de contexto ágil
  const lastUserMessage = recentMessages[recentMessages.length - 1]?.content || "";

  // Si es análisis de vacante, preparamos un prompt explícito
  const promptToRun = isVacancyAnalysis
    ? `Por favor realiza un análisis exhaustivo y profesional de compatibilidad de Brandon para la siguiente oferta de empleo / vacante:\n\n"""\n${lastUserMessage}\n"""\n\nAplica el formato estructurado con niveles de coincidencia, experiencia aplicable, fortalezas, requisitos no cubiertos con honestidad y llamado a la acción.`
    : lastUserMessage;

  try {
    const ai = new GoogleGenAI({ apiKey });
    
    // Usamos gemini-2.5-flash o gemini-1.5-flash
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        {
          role: "user",
          parts: [
            {
              text: `${systemPrompt}\n\n---\nHistorial previo relevante:\n${recentMessages
                .slice(0, -1)
                .map((m) => `${m.role === "user" ? "Usuario" : "Brandon AI"}: ${m.content}`)
                .join("\n")}\n\nPregunta / Mensaje del Usuario:\n${promptToRun}`
            }
          ]
        }
      ],
      config: {
        temperature: 0.3, // Temperatura baja para evitar alucinaciones y mantener precisión
        maxOutputTokens: 1500,
      }
    });

    const text = response.text;
    if (text) {
      return text.trim();
    }
    throw new Error("EMPTY_RESPONSE_FROM_GEMINI");
  } catch (sdkError: any) {
    // Si falla con 2.5-flash, intentamos con gemini-1.5-flash o direct fetch
    try {
      const fallbackAi = new GoogleGenAI({ apiKey });
      const fallbackResponse = await fallbackAi.models.generateContent({
        model: "gemini-1.5-flash",
        contents: [
          {
            role: "user",
            parts: [
              {
                text: `${systemPrompt}\n\nPregunta del usuario:\n${promptToRun}`
              }
            ]
          }
        ],
        config: {
          temperature: 0.3,
          maxOutputTokens: 1200,
        }
      });

      if (fallbackResponse.text) {
        return fallbackResponse.text.trim();
      }
    } catch (innerError) {
      console.error("Error in fallback Gemini model:", innerError);
    }

    throw sdkError;
  }
}
