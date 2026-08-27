export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  features: string[];
  deliverables: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "fullstack-dev",
    title: "Desarrollo Full Stack End-to-End",
    shortDescription: "Desarrollo integral de aplicaciones web, desde la arquitectura y experiencia de usuario hasta el backend, APIs y bases de datos.",
    detailedDescription: "Creación de productos digitales completos adaptados a las necesidades específicas de empresas y startups, asegurando código limpio, escalabilidad y alta disponibilidad.",
    features: [
      "Arquitectura desacoplada y modular.",
      "Frontend moderno y reactivo con Next.js/React y TypeScript.",
      "Backend seguro con Node.js / NestJS y base de datos optimizada.",
      "Diseño responsive adaptado a cualquier dispositivo móvil o de escritorio."
    ],
    deliverables: [
      "Aplicación web funcional y desplegada en producción.",
      "Repositorio de código documentado.",
      "Panel de administración / Dashboard si se requiere."
    ]
  },
  {
    id: "frontend-dev",
    title: "Desarrollo Frontend & UI/UX con Next.js",
    shortDescription: "Construcción de interfaces modernas, responsivas y orientadas a una excelente experiencia de usuario con Next.js y Tailwind CSS.",
    detailedDescription: "Transformación de diseños de Figma en interfaces interactivas de alto rendimiento con animaciones elegantes, SEO optimizado y accesibilidad.",
    features: [
      "Renderizado híbrido (SSR, SSG, Server Components).",
      "Puntuación alta en Google Core Web Vitals y SEO técnico.",
      "Animaciones fluidas con Framer Motion y microinteracciones.",
      "Integración de pasarelas de pago y formularios interactivos."
    ],
    deliverables: [
      "Sitio web / Landing Page o SPA optimizada.",
      "Estructura modular de componentes reutilizables."
    ]
  },
  {
    id: "backend-apis",
    title: "Backend, APIs REST & Bases de Datos",
    shortDescription: "Diseño e implementación de APIs REST, lógica de negocio y servicios backend con Node.js, Express, NestJS y PostgreSQL.",
    detailedDescription: "Construcción de capas backend robustas con autenticación segura, control de permisos, validación rigurosa de datos y consultas optimizadas a bases de datos.",
    features: [
      "Diseño de arquitectura de APIs RESTful limpias.",
      "Modelado de datos en PostgreSQL, MySQL o MongoDB.",
      "Autenticación segura con JWT y manejo de roles.",
      "Integración con servicios de terceros y webhooks."
    ],
    deliverables: [
      "API documentada y desplegada.",
      "Esquemas y scripts de migración de base de datos."
    ]
  },
  {
    id: "saas-products",
    title: "Desarrollo de Productos SaaS y MVPs",
    shortDescription: "Desarrollo de productos SaaS de principio a fin, diseñando funcionalidades y arquitecturas preparadas para crecer.",
    detailedDescription: "Acompañamiento integral para convertir una idea en un Producto Mínimo Viable (MVP) listo para ser probado con usuarios reales en el mercado en tiempo récord.",
    features: [
      "Planificación y priorización de funcionalidades clave (Core Features).",
      "Sistemas de suscripciones y facturación.",
      "Arquitecturas escalables para soportar crecimiento continuo de usuarios.",
      "Métricas de uso y analítica integrada."
    ],
    deliverables: [
      "MVP listo para validación y monetización.",
      "Estrategia técnica para escalar."
    ]
  },
  {
    id: "ai-integration",
    title: "Integración de Inteligencia Artificial & Automatización",
    shortDescription: "Integración de IA en aplicaciones web para crear funcionalidades inteligentes, chatbots personalizados y automatizar procesos.",
    detailedDescription: "Implementación de modelos de IA de última generación (LLMs) para automatizar atención al cliente, enriquecer contenidos, analizar documentos y crear asistentes a medida.",
    features: [
      "Asistentes de IA y bots conversacionales con contexto específico (Knowledge Bases).",
      "Automatización de procesos repetitivos y atención por WhatsApp / Web.",
      "Generación y procesamiento inteligente de datos y textos.",
      "Prompt engineering avanzado con guardrails para evitar alucinaciones."
    ],
    deliverables: [
      "Módulo de IA conectado y operativo en tu aplicación o web.",
      "Prompt engineering calibrado y documentación de integración."
    ]
  }
];
