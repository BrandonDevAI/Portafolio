export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  location: string;
  type: "Full-time" | "Freelance" | "Co-Founder / Project";
  description: string;
  keyResponsibilities: string[];
  technologies: string[];
  achievements: string[];
}

export const experiencesData: ExperienceItem[] = [
  {
    id: "protecta-security",
    company: "Protecta Security",
    role: "Desarrollador Full Stack",
    period: "Mayo 2024 - Presente",
    startDate: "2024-05",
    endDate: "Presente",
    isCurrent: true,
    location: "Lima, Perú",
    type: "Full-time",
    description: "Desarrollo y evolución de aplicaciones web para digitalizar y automatizar procesos del sector asegurador y financiero, integrando pasarelas de pago y múltiples servicios externos.",
    keyResponsibilities: [
      "Diseño y desarrollo de arquitecturas frontend y backend para flujos de cotización, contratación y gestión de pólizas de seguros.",
      "Construcción e integración de APIs REST seguras, con autenticación robusta y comunicación con servicios externos.",
      "Integración de pasarelas de pago online y validación de transacciones en tiempo real.",
      "Modelado y optimización de consultas en bases de datos relacionales y no relacionales para garantizar alta disponibilidad.",
      "Mantenimiento continuo, auditoría de seguridad y mejoras en el rendimiento y tiempo de carga de las aplicaciones."
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "APIs REST",
      "Pasarelas de Pago",
      "Git"
    ],
    achievements: [
      "Digitalización exitosa de procesos de contratación de seguros reduciendo tiempos manuales.",
      "Alta estabilidad y rendimiento en aplicaciones críticas con alto volumen de consultas de usuarios."
    ]
  },
  {
    id: "builderhome",
    company: "BuilderHome",
    role: "Desarrollador Full Stack",
    period: "Julio 2025 (y trayectoria previa en proyectos proptech)",
    startDate: "2025-07",
    endDate: "2025-08",
    isCurrent: false,
    location: "Remoto",
    type: "Full-time",
    description: "Desarrollo integral de una plataforma inmobiliaria que integra Landing Page comercial de alto impacto y un CRM interno avanzado para la gestión de propiedades, clientes potenciales y ventas.",
    keyResponsibilities: [
      "Desarrollo full stack de la plataforma: Landing Page orientada a conversión y panel CRM administrativo.",
      "Implementación de módulos para gestión de catálogo de inmuebles, filtrado dinámico y captura de leads.",
      "Optimización de SEO técnico, Core Web Vitals y tiempos de carga para posicionamiento orgánico en motores de búsqueda.",
      "Implementación de mecanismos de seguridad, validación de datos y roles de usuario.",
      "Mantenimiento preventivo, escalabilidad de la base de datos y despliegue continuo."
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Tailwind CSS",
      "PostgreSQL",
      "APIs REST",
      "SEO Técnico"
    ],
    achievements: [
      "Lanzamiento de plataforma completa con CRM operativo para el seguimiento centralizado de clientes.",
      "Mejora notable en métricas de SEO y velocidad de navegación en dispositivos móviles."
    ]
  },
  {
    id: "sanmarcosgo",
    company: "San Marcos Go",
    role: "Desarrollador Full Stack / Co-Creador",
    period: "Mayo 2023 - Presente",
    startDate: "2023-05",
    endDate: "Presente",
    isCurrent: true,
    location: "Remoto / Perú",
    type: "Co-Founder / Project",
    description: "Plataforma educativa tecnológica (EdTech) dirigida a estudiantes postulantes a la Universidad Nacional Mayor de San Marcos (UNMSM), que incluye banco de preguntas interactivo, simulacros en tiempo real y asistencia con IA.",
    keyResponsibilities: [
      "Arquitectura completa del sistema (Frontend, Backend, DB y hosting).",
      "Implementación de motor de simulacros de examen cronometrados con cálculo de puntajes en tiempo real.",
      "Integración de módulos de Inteligencia Artificial para retroalimentación y resolución asistida de preguntas complejas.",
      "Diseño de interfaz de usuario atractiva, intuitiva y gamificada para motivar el estudio constante.",
      "Optimización del rendimiento de la base de datos para soportar miles de preguntas y concurrencia de postulantes."
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Integración IA / LLMs",
      "Tailwind CSS"
    ],
    achievements: [
      "Creación y puesta en producción de la plataforma activa en https://sanmarcosgo.com/.",
      "Adopción por parte de estudiantes preuniversitarios que practican con simulacros reales."
    ]
  },
  {
    id: "freelance",
    company: "Experiencia Freelance / Consultoría Web",
    role: "Desarrollador Web Full Stack",
    period: "Agosto 2022 - Presente",
    startDate: "2022-08",
    endDate: "Presente",
    isCurrent: true,
    location: "Remoto",
    type: "Freelance",
    description: "Desarrollo de aplicaciones web a medida, plataformas de reservas online, catálogos digitales y automatizaciones para diversos clientes de sectores como gastronomía, fitness, servicios profesionales y retail.",
    keyResponsibilities: [
      "Levantamiento de requerimientos y consultoría técnica directa con dueños de negocio y clientes.",
      "Desarrollo frontend y backend de sitios web dinámicos, sistemas de reservas y pasarelas de pedidos.",
      "Integración de bots y recordatorios automatizados por WhatsApp para reducir inasistencias y aumentar ventas.",
      "Desarrollo de MVPs rápidos y funcionales para validación de ideas de negocio en el mercado.",
      "Configuración de dominios, hosting, bases de datos en la nube y optimización de conversión."
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "MongoDB",
      "Tailwind CSS",
      "WhatsApp API / Webhooks"
    ],
    achievements: [
      "Casos de éxito documentados con clientes reales (incremento del 40% en reservas online para restaurantes, automatización de agendamiento y validación de MVPs para startups)."
    ]
  }
];
