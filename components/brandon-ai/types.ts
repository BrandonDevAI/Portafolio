export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
  source?: "gemini-ai" | "knowledge-base";
  isError?: boolean;
}

export interface QuickPrompt {
  id: string;
  label: string;
  query: string;
  icon?: string;
  isSpecial?: boolean;
}

export const QUICK_PROMPTS: QuickPrompt[] = [
  {
    id: "exp",
    label: "¿Qué experiencia tiene?",
    query: "¿Qué experiencia laboral tiene Brandon y en qué empresas ha trabajado?",
    icon: "💼"
  },
  {
    id: "tech",
    label: "¿Qué tecnologías domina?",
    query: "¿Qué tecnologías, lenguajes y herramientas domina Brandon en su stack?",
    icon: "🛠️"
  },
  {
    id: "proj",
    label: "¿Qué proyectos ha construido?",
    query: "¿Cuáles son los principales proyectos y productos digitales que ha construido Brandon?",
    icon: "🚀"
  },
  {
    id: "ai-exp",
    label: "¿Qué experiencia tiene con IA?",
    query: "¿Qué experiencia y casos de uso tiene Brandon integrando Inteligencia Artificial?",
    icon: "🤖"
  },
  {
    id: "why-hire",
    label: "¿Por qué contratar a Brandon?",
    query: "¿Por qué contratar a Brandon como Full Stack Developer y qué valor aporta a un equipo?",
    icon: "⭐"
  }
];
