import { NextRequest, NextResponse } from "next/server";
import { callGeminiAi, ChatMessageInput } from "@/lib/ai/gemini";
import { generateFallbackResponse } from "@/lib/ai/fallback-engine";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { messages, isVacancyAnalysis = false } = body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "El cuerpo de la solicitud debe contener un array de mensajes válido." },
        { status: 400 }
      );
    }

    // Obtener el último mensaje del usuario
    const lastMessage = messages[messages.length - 1];
    if (!lastMessage || typeof lastMessage.content !== "string" || !lastMessage.content.trim()) {
      return NextResponse.json(
        { error: "El mensaje del usuario no puede estar vacío." },
        { status: 400 }
      );
    }

    // Sanitización y límite de longitud preventiva
    const trimmedContent = lastMessage.content.trim().slice(0, 4000);
    const sanitizedMessages: ChatMessageInput[] = messages.map((m: any) => ({
      role: m.role === "assistant" ? "assistant" : "user",
      content: String(m.content || "").trim().slice(0, 4000),
    }));

    // Reemplazar el último mensaje con la versión sanitizada
    sanitizedMessages[sanitizedMessages.length - 1].content = trimmedContent;

    const apiKey = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;

    if (apiKey) {
      try {
        const aiResponse = await callGeminiAi(sanitizedMessages, isVacancyAnalysis);
        return NextResponse.json({
          success: true,
          message: aiResponse,
          source: "gemini-ai"
        });
      } catch (geminiError: any) {
        console.warn("Fallo en llamada a Gemini API, activando fallback local:", geminiError?.message || geminiError);
        // Continuar al motor de contingencia
      }
    }

    // Motor de contingencia inteligente (Fallback Engine)
    const fallbackResponse = generateFallbackResponse(trimmedContent, isVacancyAnalysis);
    return NextResponse.json({
      success: true,
      message: fallbackResponse,
      source: "knowledge-base"
    });
  } catch (error: any) {
    console.error("Error en API /api/chat:", error);
    return NextResponse.json(
      {
        error: "Ocurrió un error inesperado al procesar tu consulta.",
        details: error?.message || "Internal server error"
      },
      { status: 500 }
    );
  }
}
