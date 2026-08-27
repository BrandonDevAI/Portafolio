export interface ProfileData {
  name: string;
  fullName: string;
  role: string;
  headline: string;
  yearsOfExperience: string;
  location: string;
  summary: string;
  specializationAreas: string[];
  keyStrengths: string[];
  philosophy: string;
}

export const profileData: ProfileData = {
  name: "Brandon",
  fullName: "Brandon",
  role: "Full Stack Developer & AI Solutions Creator",
  headline: "Desarrollador Full Stack con más de 3 años de experiencia creando aplicaciones web, productos digitales y soluciones con Inteligencia Artificial.",
  yearsOfExperience: "+3 años de experiencia profesional (desde 2022)",
  location: "Disponible para trabajo remoto / híbrido internacional",
  summary: "Brandon es un Desarrollador Full Stack apasionado por transformar ideas en productos digitales de alto impacto. Cuenta con más de 3 años de experiencia profesional trabajando en el desarrollo integral de aplicaciones web, desde la concepción de interfaces intuitivas y optimizadas hasta la arquitectura backend, modelado de bases de datos e integración de soluciones inteligentes con IA.",
  specializationAreas: [
    "Desarrollo Full Stack end-to-end (Frontend + Backend + DBs)",
    "Arquitectura y desarrollo con React, Next.js y TypeScript",
    "Diseño e implementación de APIs REST robustas y escalables con Node.js, Express y NestJS",
    "Modelado y gestión de bases de datos relacionales (PostgreSQL, MySQL) y no relacionales (MongoDB)",
    "Integración de Inteligencia Artificial (LLMs, Prompt Engineering, Agentes conversacionales y automatización)",
    "Optimización de rendimiento web, SEO técnico y experiencia de usuario (UX/UI)",
    "Desarrollo de productos digitales y plataformas SaaS de principio a fin"
  ],
  keyStrengths: [
    "Visión de producto: Capacidad para entender el negocio y crear valor, no solo escribir código.",
    "Autonomía y resolución de problemas: Experiencia liderando proyectos tanto en empresas estructuradas como en entornos ágiles y freelance.",
    "Clean Code & Buenas Prácticas: Código modular, tipado estricto con TypeScript y arquitecturas limpias y escalables.",
    "Velocidad de aprendizaje y adaptación: Rápida asimilación de nuevas tecnologías, librerías y modelos de IA.",
    "Comunicación efectiva: Orientación profesional y transparente con reclutadores, líderes técnicos y clientes."
  ],
  philosophy: "Combinar diseño moderno, ingeniería de software sólida e inteligencia artificial para construir herramientas que resuelvan problemas reales y generen valor medible."
};
