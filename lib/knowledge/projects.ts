export interface ProjectItem {
  id: string;
  title: string;
  category: "EdTech & IA" | "AI & SaaS" | "Web Apps" | "E-Commerce & Games";
  shortDescription: string;
  detailedDescription: string;
  highlights: string[];
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  isFeatured: boolean;
}

export const projectsData: ProjectItem[] = [
  {
    id: "sanmarcosgo",
    title: "San Marcos Go",
    category: "EdTech & IA",
    shortDescription: "Plataforma educativa para postulantes a la UNMSM con banco de preguntas dinámico, simulacros en tiempo real y asistencia impulsada por Inteligencia Artificial.",
    detailedDescription: "San Marcos Go es un producto digital de impacto real enfocado en la preparación universitaria para la UNMSM. Integra un simulador de exámenes con temporizador estricto, análisis de rendimiento por áreas de conocimiento y herramientas con IA para clarificar dudas de estudio.",
    highlights: [
      "Simulador de examen de admisión en tiempo real con sistema de puntajes oficial.",
      "Banco estructurado con cientos de preguntas categorizadas por cursos.",
      "Funcionalidades con Inteligencia Artificial para explicar paso a paso resoluciones complejas.",
      "Diseño responsivo y amigable para navegación en smartphones y computadoras."
    ],
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "AI / LLM Integration"],
    demoUrl: "https://sanmarcosgo.com/",
    githubUrl: "#!",
    isFeatured: true
  },
  {
    id: "gileai-saas",
    title: "SaaS de Generación con IA / GileAI",
    category: "AI & SaaS",
    shortDescription: "Plataforma SaaS interactiva potenciada por modelos de lenguaje e Inteligencia Artificial para la optimización de interacciones y generación de contenido dinámico.",
    detailedDescription: "Aplicación SaaS desarrollada para explorar e implementar flujos avanzados con Inteligencia Artificial generativa. Permite a los usuarios recibir sugerencias personalizadas, generación de texto contextualmente relevante e interacción conversacional fluida.",
    highlights: [
      "Integración de modelos LLM con prompt engineering avanzado para respuestas de alta calidad.",
      "Interfaz moderna con diseño visual reactivo y animaciones fluidas.",
      "Manejo de estados en tiempo real y arquitectura orientada a la escalabilidad."
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel", "AI APIs / LLMs"],
    demoUrl: "https://gileai.vercel.app/",
    githubUrl: "#!",
    isFeatured: true
  },
  {
    id: "sales-ai-bot",
    title: "Bot de Ventas y Atención Inteligente",
    category: "AI & SaaS",
    shortDescription: "Solución de asistente virtual inteligente con IA para prospección comercial, calificación de clientes potenciales y atención 24/7.",
    detailedDescription: "Sistema automatizado que utiliza procesamiento de lenguaje natural y modelos de IA para interactuar con prospectos comerciales, resolver dudas frecuentes de catálogos de productos o servicios y derivar ventas calificadas a asesores humanos.",
    highlights: [
      "Atención automática 24/7 sin demoras en la respuesta inicial.",
      "Filtro y calificación de leads en base a criterios de negocio.",
      "Integración con canales como WhatsApp y plataformas web.",
      "Reducción de carga operativa manual para el equipo de ventas."
    ],
    technologies: ["Node.js", "TypeScript", "APIs de IA / LLMs", "Webhooks", "WhatsApp API"],
    isFeatured: true
  },
  {
    id: "calorie-tracker",
    title: "Calorie Tracker (Fitness App)",
    category: "Web Apps",
    shortDescription: "Aplicación web interactiva para control y registro de calorías, macronutrientes y actividades físicas con cálculo metabólico diario.",
    detailedDescription: "App orientada al fitness y bienestar que permite a los usuarios registrar alimentos ingeridos, actividades físicas realizadas y visualizar el balance calórico neto en tiempo real.",
    highlights: [
      "Gestión de estado global y persistencia de datos local.",
      "Cálculo automático de calorías consumidas vs quemadas.",
      "Interfaz limpia, rápida y completamente responsiva."
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Hooks & Reducers"],
    demoUrl: "https://calorie-tracker-web.netlify.app/",
    githubUrl: "https://github.com/BrandonDeveloper08/calorie-tracker",
    isFeatured: false
  },
  {
    id: "lyrics-app",
    title: "Lyrics App (Buscador de Letras)",
    category: "Web Apps",
    shortDescription: "Buscador de letras de canciones con integración de APIs musicales, visualización tipográfica y reproducción de muestras de audio.",
    detailedDescription: "Plataforma para entusiastas de la música que permite consultar letras completas de canciones buscando por artista o título, integrando datos desde APIs externas de manera eficiente.",
    highlights: [
      "Consumo y formateo asíncrono de APIs REST externas.",
      "Manejo de estados de carga (skeletons/spinners) y control de errores en búsquedas.",
      "Diseño minimalista con alto contraste."
    ],
    technologies: ["React", "JavaScript", "REST APIs", "CSS Modules / Tailwind"],
    demoUrl: "https://lirycs-dev.netlify.app/",
    githubUrl: "https://github.com/BrandonDeveloper08/lyrics",
    isFeatured: false
  },
  {
    id: "pixabay-search",
    title: "Pixabay Image Search App",
    category: "Web Apps",
    shortDescription: "Motor de búsqueda y galería de imágenes de alta resolución consumiendo la API de Pixabay con filtros por categoría y paginación.",
    detailedDescription: "Herramienta visual para fotógrafos y diseñadores que facilita encontrar recursos gráficos mediante filtros por orientación, color predominante, tamaño y categorías.",
    highlights: [
      "Paginación eficiente y optimización de renderizado de imágenes.",
      "Filtrado avanzado por parámetros dinámicos de consulta.",
      "Modal de previsualización en alta definición y descarga directa."
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Pixabay API REST"],
    demoUrl: "https://pixabay-dev.netlify.app/",
    githubUrl: "https://github.com/BrandonDeveloper08/pixabay",
    isFeatured: false
  },
  {
    id: "crm-web",
    title: "CRM Web Administrativo",
    category: "Web Apps",
    shortDescription: "Sistema de gestión de relaciones con clientes (CRM) para control de cartera, seguimiento de etapas de venta e historial de interacciones.",
    detailedDescription: "Plataforma administrativa orientada a pequeñas y medianas empresas para registrar clientes, asignar tareas a comerciales y visualizar embudos de ventas en tiempo real.",
    highlights: [
      "Panel con métricas clave de clientes activos e inactivos.",
      "Formularios dinámicos con validación estricta de datos.",
      "Arquitectura preparada para conectar con bases de datos relacionales."
    ],
    technologies: ["JavaScript", "HTML5", "CSS3", "REST APIs", "Local Storage"],
    demoUrl: "https://brandodevelop.github.io/CRM/",
    githubUrl: "#!",
    isFeatured: false
  },
  {
    id: "guitarla-shop",
    title: "Tienda / E-commerce GuitarLA",
    category: "E-Commerce & Games",
    shortDescription: "Plataforma de comercio electrónico con catálogo de productos, carrito de compras dinámico, cálculo de impuestos y persistencia de orden.",
    detailedDescription: "Tienda virtual con experiencia de compra fluida implementada con React y useReducer para el manejo robusto del estado del carrito, cantidades, totales y almacenamiento local.",
    highlights: [
      "Gestión de estado avanzada con React useReducer y TypeScript.",
      "Persistencia automática en LocalStorage para no perder la cesta.",
      "Diseño adaptable y optimizado para compras desde el móvil."
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Reducers"],
    demoUrl: "https://guitarla-react-ts-reducers.netlify.app/",
    githubUrl: "#!",
    isFeatured: false
  },
  {
    id: "memorama-game",
    title: "Memorama Game (Memory Match)",
    category: "E-Commerce & Games",
    shortDescription: "Juego interactivo de emparejamiento de cartas con contador de turnos, temporizador y animaciones 3D de volteo de cartas.",
    detailedDescription: "Juego de agilidad mental desarrollado para demostrar destreza en la manipulación del DOM, lógica de algoritmos en JavaScript y animaciones CSS tridimensionales.",
    highlights: [
      "Lógica de barajado aleatorio y detección de coincidencias.",
      "Animaciones CSS 3D de efecto 'card-flip'.",
      "Tabla de récords y puntuaciones."
    ],
    technologies: ["JavaScript ES6+", "HTML5 Canvas/CSS3 3D", "DOM Manipulation"],
    demoUrl: "https://brandodevelop.github.io/Memorama/",
    githubUrl: "#!",
    isFeatured: false
  }
];
