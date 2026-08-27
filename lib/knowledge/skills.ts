export interface SkillCategory {
  categoryName: string;
  description: string;
  skills: {
    name: string;
    level: "Dominio Avanzado" | "Intermedio - Sólido" | "En constante aplicación";
    details: string;
  }[];
}

export const skillsData: SkillCategory[] = [
  {
    categoryName: "Frontend",
    description: "Creación de interfaces modernas, reactivas, accesibles y con alto rendimiento.",
    skills: [
      { name: "React", level: "Dominio Avanzado", details: "Hooks, Context API, Reducers, Custom Hooks, optimización de renderizado (useMemo, useCallback)." },
      { name: "Next.js", level: "Dominio Avanzado", details: "App Router, Server Components (RSC), SSR, SSG, API Routes, Server Actions, optimización de imágenes y fuentes." },
      { name: "TypeScript", level: "Dominio Avanzado", details: "Tipado estricto, interfaces, generics, types avanzados, refactorización segura y prevención de errores." },
      { name: "Tailwind CSS", level: "Dominio Avanzado", details: "Diseño responsivo, utility-first, animaciones, temas oscuros/claros, custom themes y layouts complejos." },
      { name: "HTML5 & CSS3 / JavaScript Moderno", level: "Dominio Avanzado", details: "ES6+, Async/Await, Web APIs, semántica, flexbox, CSS grid, animaciones." },
      { name: "Framer Motion & Animaciones", level: "Intermedio - Sólido", details: "Transiciones de página, componentes animados, motion effects y microinteracciones interactivas." }
    ]
  },
  {
    categoryName: "Backend & APIs",
    description: "Desarrollo de lógica de negocio, servicios RESTful, autenticación y comunicación de datos.",
    skills: [
      { name: "Node.js", level: "Dominio Avanzado", details: "Entorno de ejecución, eventos, streams, manejo asíncrono, creación de servicios backend escalables." },
      { name: "Express.js", level: "Dominio Avanzado", details: "Enrutamiento, middlewares, validaciones, CORS, manejo centralizado de errores y controladores." },
      { name: "NestJS", level: "Intermedio - Sólido", details: "Arquitectura modular empresarial, inyección de dependencias, TypeScript backend estructurado y decorators." },
      { name: "APIs RESTful", level: "Dominio Avanzado", details: "Diseño de endpoints REST, estandarización de respuestas HTTP, paginación, filtros y documentación." },
      { name: "Autenticación & Seguridad", level: "Intermedio - Sólido", details: "Manejo de JWT, OAuth, hash de contraseñas (bcrypt), validación y sanitización de inputs." }
    ]
  },
  {
    categoryName: "Bases de Datos",
    description: "Modelado relacional y no relacional, diseño de esquemas y optimización de queries.",
    skills: [
      { name: "PostgreSQL", level: "Dominio Avanzado", details: "Diseño relacional, consultas SQL, índices, relaciones complejas, integridad referencial y optimización." },
      { name: "MySQL", level: "Intermedio - Sólido", details: "Modelado de datos, tablas relacionales, procedimientos y consultas eficientes." },
      { name: "MongoDB", level: "Intermedio - Sólido", details: "Bases de datos NoSQL, esquemas flexibles con Mongoose, agregaciones y documentos JSON." }
    ]
  },
  {
    categoryName: "Inteligencia Artificial & Automatización",
    description: "Integración de modelos generativos y flujos automatizados en aplicaciones reales.",
    skills: [
      { name: "Integración de LLMs (Gemini / OpenAI / Claude)", level: "Dominio Avanzado", details: "Consumo de APIs de modelos generativos, configuración de parámetros (temperature, topP) y streaming." },
      { name: "Prompt Engineering & Guardrails", level: "Dominio Avanzado", details: "Diseño de prompts estructurados, instrucciones de sistema, prevención de alucinaciones y delimitación de roles." },
      { name: "Structured Outputs & Function Calling", level: "Intermedio - Sólido", details: "Extracción de datos en esquemas JSON tipados y activación de herramientas externas mediante LLMs." },
      { name: "Arquitecturas RAG & Knowledge Bases", level: "Intermedio - Sólido", details: "Inyección de contexto, preparación de bases de conocimiento modulares y búsqueda semántica." },
      { name: "Bots y Automatizaciones", level: "Dominio Avanzado", details: "Bots de ventas, flujos conversacionales, webhooks e integración con canales como WhatsApp." }
    ]
  },
  {
    categoryName: "Cloud, DevOps & Herramientas",
    description: "Despliegue, control de versiones y flujo de trabajo ágil.",
    skills: [
      { name: "Git & GitHub", level: "Dominio Avanzado", details: "Control de versiones, ramas, pull requests, conventional commits y colaboración en equipo." },
      { name: "AWS (S3, EC2)", level: "Intermedio - Sólido", details: "Almacenamiento de archivos estáticos en S3, despliegue en instancias y configuración de accesos." },
      { name: "Azure", level: "Intermedio - Sólido", details: "Servicios cloud, despliegue de aplicaciones y servicios administrados." },
      { name: "Vercel / Netlify", level: "Dominio Avanzado", details: "Despliegue continuo de aplicaciones Next.js y React, variables de entorno y optimizaciones de borde (Edge)." },
      { name: "Figma", level: "Intermedio - Sólido", details: "Interpretación de prototipos, diseño de componentes UI, layout grids y colaboración con diseñadores." }
    ]
  }
];

export const allSkillsList: string[] = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript (ES6+)",
  "Node.js",
  "Express",
  "NestJS",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Tailwind CSS",
  "APIs REST",
  "AWS",
  "Azure",
  "Git / GitHub",
  "Figma",
  "Inteligencia Artificial (LLMs, Prompt Engineering, Agentes)"
];
