import {
  profileData,
  experiencesData,
  projectsData,
  skillsData,
  allSkillsList,
  servicesData,
  contactData
} from "../knowledge";

/**
 * Motor de contingencia inteligente (Fallback Engine)
 * Proporciona respuestas ricas, formateadas y certeras basadas 100% en la Knowledge Base
 * en caso de que no haya una API Key configurada o la llamada al LLM sufra alguna interrupción.
 */
export function generateFallbackResponse(
  prompt: string,
  isVacancyAnalysis: boolean = false
): string {
  const query = prompt.toLowerCase().trim();

  // 1. MODO: ANÁLISIS DE VACANTE (JOB DESCRIPTION)
  if (isVacancyAnalysis || query.includes("vacante") || query.includes("oferta") || query.includes("job description") || query.includes("perfil requerido") || query.includes("requisitos:")) {
    return analyzeJobVacancyFallback(prompt);
  }

  // 2. INTENCIÓN: EXPERIENCIA CON INTELIGENCIA ARTIFICIAL (Específica)
  if (
    query.includes("con ia") ||
    query.includes("con inteligencia artificial") ||
    query.includes("inteligencia artificial") ||
    query.includes("experiencia con ia") ||
    query.includes("experiencia en ia") ||
    query.includes("llm") ||
    query.includes("chatbots") ||
    query.includes("gemini") ||
    query.includes("agentes")
  ) {
    return `
### 🤖 Experiencia de Brandon con Inteligencia Artificial

Brandon integra activamente soluciones con Inteligencia Artificial en productos de software reales:

- **Integración de Modelos LLM**: Conexión e implementación de APIs de modelos generativos de última generación (\`Gemini\`, \`OpenAI\`) en aplicaciones web con Next.js y Node.js.
- **Prompt Engineering Avanzado & Guardrails**: Diseño de instrucciones estructuradas, delimitación de contexto y mitigación de alucinaciones para asistentes confiables.
- **Productos con IA en Producción**:
  * **San Marcos Go**: Módulo de asistencia inteligente para resolución de preguntas académicas y simulacros.
  * **GileAI**: Plataforma SaaS para generación y análisis inteligente de contenido.
  * **Bots de Ventas Inteligentes**: Automatización de prospección comercial y atención al cliente 24/7.
  * **Brandon AI** (este asistente): Arquitectura modular con Knowledge Base, fallback inteligente y análisis automatizado de vacantes.
- **RAG & Structured Outputs**: Preparación de datos estructurados para consultas semánticas precisas.

📲 Si deseas consultar un proyecto con IA, puedes [contactarlo por WhatsApp](${contactData.whatsappUrl}) o [descargar su CV](${contactData.cvPdfUrl}).
`.trim();
  }

  // 3. INTENCIÓN: POR QUÉ CONTRATAR A BRANDON
  if (
    query.includes("por qué contratar") ||
    query.includes("por que contratar") ||
    query.includes("contratar") ||
    query.includes("por qué elegir") ||
    query.includes("beneficios") ||
    query.includes("fortalezas")
  ) {
    return `
### 🌟 ¿Por qué contratar a Brandon como Full Stack Developer?

1. **Desarrollo End-to-End Real**: Domina tanto la creación de interfaces visuales atractivas y de alto rendimiento (Next.js, Tailwind, React) como la arquitectura backend robusta (Node.js, NestJS, PostgreSQL).
2. **Experiencia Comprobada (+3 años)**: Ha trabajado en entornos corporativos exigentes como **Protecta Security** (sector asegurador/fintech) y en plataformas inmobiliarias como **BuilderHome**.
3. **Pionero en Integración de IA**: No solo programa funcionalidades tradicionales, sino que incorpora modelos de Inteligencia Artificial para automatizar procesos y crear productos innovadores.
4. **Visión de Producto y Negocio**: Se enfoca en el retorno y valor para el usuario final (conversión, SEO, rendimiento y reducción de tiempos de carga).
5. **Autonomía y Adaptabilidad**: Capacidad para liderar módulos completos, integrarse rápidamente a equipos de trabajo y asimilar nuevas tecnologías en tiempo récord.

📲 ¿Listo para conversar? Escríbele directamente por [WhatsApp](${contactData.whatsappUrl}) o descarga su [Curriculum Vitae](${contactData.cvPdfUrl}).
`.trim();
  }

  // 4. INTENCIÓN: EXPERIENCIA LABORAL GENERAL
  if (
    query.includes("experiencia") ||
    query.includes("trabaj") ||
    query.includes("protecta") ||
    query.includes("builderhome") ||
    query.includes("trayectoria") ||
    query.includes("empresas") ||
    query.includes("años")
  ) {
    return `
### 💼 Trayectoria Profesional de Brandon (+3 años de experiencia)

Brandon cuenta con una trayectoria sólida desarrollando productos digitales tanto en empresas de alta exigencia como en entornos ágiles:

1. **Protecta Security** (Mayo 2024 - Presente | *Desarrollador Full Stack*):
   - Desarrollo y evolución de aplicaciones web para digitalizar procesos clave del sector asegurador.
   - Integración de **APIs REST**, pasarelas de pago online y servicios externos.
   - Stack: \`React\`, \`Next.js\`, \`TypeScript\`, \`Node.js\`, \`PostgreSQL\`.

2. **BuilderHome** (Julio 2025 | *Desarrollador Full Stack*):
   - Creación integral de una plataforma inmobiliaria que incluye Landing Page orientada a conversión y un **CRM administrativo** para gestión de propiedades, leads y ventas.
   - Optimización de **SEO técnico**, Core Web Vitals y rendimiento web.

3. **San Marcos Go** (Mayo 2023 - Presente | *Desarrollador Full Stack / Co-Creador*):
   - Plataforma EdTech para postulantes a la UNMSM con banco de preguntas interactivo, simulacros en tiempo real y asistencia impulsada por **Inteligencia Artificial**.

4. **Experiencia Freelance & Consultoría** (Desde Agosto 2022):
   - Creación de plataformas de reservas online, catálogos digitales y automatizaciones con WhatsApp API para clientes de diversos rubros.

📄 Puedes descargar su [Curriculum Vitae completo aquí](${contactData.cvPdfUrl}) o escribirle directamente por [WhatsApp](${contactData.whatsappUrl}).
`.trim();
  }

  // 3. INTENCIÓN: STACK / TECNOLOGÍAS DOMINADAS
  if (
    query.includes("tecnolog") ||
    query.includes("stack") ||
    query.includes("habilidad") ||
    query.includes("skills") ||
    query.includes("domina") ||
    query.includes("lenguajes") ||
    query.includes("frameworks")
  ) {
    return `
### 🛠️ Stack Tecnológico Dominado por Brandon

Brandon domina un stack moderno y centrado en TypeScript para desarrollo Full Stack:

- **Frontend**: \`React\`, \`Next.js (App Router, RSC)\`, \`TypeScript\`, \`Tailwind CSS\`, \`HTML5/CSS3\`, \`Framer Motion\`.
- **Backend & APIs**: \`Node.js\`, \`Express\`, \`NestJS\`, \`APIs RESTful\`, autenticación \`JWT\`, arquitecturas modulares.
- **Bases de Datos**: \`PostgreSQL\` (avanzado), \`MySQL\`, \`MongoDB\` (NoSQL).
- **Inteligencia Artificial**: Integración de LLMs (\`Gemini\`, \`OpenAI\`), Prompt Engineering, Function Calling, Agentes y flujos RAG.
- **Cloud & Herramientas**: \`AWS (S3, EC2)\`, \`Azure\`, \`Vercel\`, \`Git / GitHub\`, \`Figma\`.

💡 Su enfoque prioriza **código limpio**, tipado estricto con TypeScript y componentes reutilizables de alto rendimiento.
`.trim();
  }

  // 4. INTENCIÓN: PROYECTOS CONSTRUIDOS
  if (
    query.includes("proyect") ||
    query.includes("construid") ||
    query.includes("hecho") ||
    query.includes("portfolio") ||
    query.includes("demos") ||
    query.includes("aplicaciones")
  ) {
    return `
### 🚀 Proyectos Destacados Construidos por Brandon

Estos son algunos de los proyectos más relevantes que demuestran sus capacidades:

1. **[San Marcos Go](https://sanmarcosgo.com/)** (*EdTech & IA*):
   - Plataforma educativa activa con simulacros de examen cronometrados en tiempo real y asistencia mediante Inteligencia Artificial para postulantes a la UNMSM.
   - *Stack*: Next.js, React, TypeScript, Node.js, PostgreSQL, Tailwind CSS.

2. **[SaaS de Generación con IA / GileAI](https://gileai.vercel.app/)** (*AI & SaaS*):
   - Aplicación SaaS interactiva potenciada por modelos de lenguaje e Inteligencia Artificial generativa para optimización de interacciones de usuario.
   - *Stack*: Next.js, React, TypeScript, Tailwind CSS, LLMs.

3. **Bot de Ventas y Atención Inteligente**:
   - Asistente conversacional con IA para prospección comercial, calificación automática de leads y atención 24/7 integrado con WhatsApp Webhooks.

4. **[Calorie Tracker](https://calorie-tracker-web.netlify.app/)** (*Fitness App*):
   - Aplicación para cálculo metabólico y registro de macronutrientes. ([Ver Código en GitHub](https://github.com/BrandonDeveloper08/calorie-tracker)).

5. **[Lyrics App](https://lirycs-dev.netlify.app/)** y **[Pixabay Search App](https://pixabay-dev.netlify.app/)**:
   - Soluciones con consumo optimizado de APIs REST externas y diseño reactivo.

🌐 Puedes ver más proyectos en la sección [Portfolio](/portfolio) de este sitio web.
`.trim();
  }

  // 5. INTENCIÓN: EXPERIENCIA CON INTELIGENCIA ARTIFICIAL
  if (
    query.includes("ia") ||
    query.includes("inteligencia artificial") ||
    query.includes("ai") ||
    query.includes("llm") ||
    query.includes("gpt") ||
    query.includes("gemini") ||
    query.includes("agentes")
  ) {
    return `
### 🤖 Experiencia de Brandon con Inteligencia Artificial

Brandon integra activamente soluciones con Inteligencia Artificial en productos de software reales:

- **Integración de Modelos LLM**: Conexión e implementación de APIs de modelos generativos de última generación (\`Gemini\`, \`OpenAI\`) en aplicaciones web con Next.js y Node.js.
- **Prompt Engineering Avanzado & Guardrails**: Diseño de instrucciones estructuradas, delimitación de contexto y mitigación de alucinaciones para asistentes confiables.
- **Productos con IA en Producción**:
  * **San Marcos Go**: Módulo de asistencia inteligente para resolución de preguntas académicas.
  * **GileAI**: Plataforma SaaS para generación y análisis inteligente de contenido.
  * **Bots de Ventas Inteligentes**: Automatización de prospección comercial y atención al cliente 24/7.
  * **Brandon AI** (este asistente): Arquitectura modular con Knowledge Base, fallback inteligente y análisis automatizado de vacantes.
- **RAG & Structured Outputs**: Preparación de datos estructurados para consultas semánticas precisas.
`.trim();
  }

  // 6. INTENCIÓN: POR QUÉ CONTRATAR A BRANDON
  if (
    query.includes("por qué contratar") ||
    query.includes("por que contratar") ||
    query.includes("contratar") ||
    query.includes("por qué elegir") ||
    query.includes("beneficios") ||
    query.includes("fortalezas")
  ) {
    return `
### 🌟 ¿Por qué contratar a Brandon como Full Stack Developer?

1. **Desarrollo End-to-End Real**: Domina tanto la creación de interfaces visuales atractivas y de alto rendimiento (Next.js, Tailwind, React) como la arquitectura backend robusta (Node.js, NestJS, PostgreSQL).
2. **Experiencia Comprobada (+3 años)**: Ha trabajado en entornos corporativos exigentes como **Protecta Security** (sector asegurador/fintech) y en plataformas inmobiliarias como **BuilderHome**.
3. **Pionero en Integración de IA**: No solo programa funcionalidades tradicionales, sino que incorpora modelos de Inteligencia Artificial para automatizar procesos y crear productos innovadores.
4. **Visión de Producto y Negocio**: Se enfoca en el retorno y valor para el usuario final (conversión, SEO, rendimiento y reducción de tiempos de carga).
5. **Autonomía y Adaptabilidad**: Capacidad para liderar módulos completos, integrarse rápidamente a equipos de trabajo y asimilar nuevas tecnologías en tiempo récord.

📲 ¿Listo para conversar? Escríbele directamente por [WhatsApp](${contactData.whatsappUrl}) o descarga su [Curriculum Vitae](${contactData.cvPdfUrl}).
`.trim();
  }

  // 7. INTENCIÓN: CONTACTO / CV / ENLACES
  if (
    query.includes("contacto") ||
    query.includes("contactar") ||
    query.includes("whatsapp") ||
    query.includes("cv") ||
    query.includes("curriculum") ||
    query.includes("telefono") ||
    query.includes("correo") ||
    query.includes("email") ||
    query.includes("linkedin") ||
    query.includes("github")
  ) {
    return `
### 📬 Canales de Contacto Directo de Brandon

- 🟢 **WhatsApp Directo**: [Enviar mensaje (+51 954 309 429)](${contactData.whatsappUrl})
- 📄 **Curriculum Vitae**: [Descargar CV en PDF](${contactData.cvPdfUrl})
- 💼 **LinkedIn**: [Perfil Profesional de Brandon](${contactData.linkedinUrl})
- 💻 **GitHub**: [Repositorios y Código (${contactData.githubUrl})](${contactData.githubUrl})
- 📧 **Correo Electrónico**: \`${contactData.email}\`

⚡ **Disponibilidad**: ${contactData.availability}.
`.trim();
  }

  // 8. INTENCIÓN: SERVICIOS OFRECIDOS
  if (
    query.includes("servicio") ||
    query.includes("ofrece") ||
    query.includes("que hace") ||
    query.includes("qué hace") ||
    query.includes("costo") ||
    query.includes("freelance")
  ) {
    return `
### 🛠️ Servicios Profesionales que Ofrece Brandon

1. **Desarrollo Full Stack de Aplicaciones Web**: Soluciones completas con Next.js, Node.js y PostgreSQL.
2. **Desarrollo Frontend & UI/UX**: Interfaces modernas, responsivas y optimizadas para SEO.
3. **Backend, APIs REST & Bases de Datos**: Arquitecturas seguras con autenticación, validaciones y queries eficientes.
4. **Desarrollo de Productos SaaS y MVPs**: Construcción rápida de productos para validación comercial.
5. **Integración de Inteligencia Artificial**: Asistentes virtuales a medida, automatizaciones con IA y procesamiento de datos.

👉 Puedes conocer más detalles en la sección [Servicios](/services) o coordinar un proyecto por [WhatsApp](${contactData.whatsappUrl}).
`.trim();
  }

  // 9. RESPUESTA DEFAULT INTELIGENTE
  return `
Hola, soy **Brandon AI**, el asistente inteligente de Brandon Núñez.

Puedo ayudarte a conocer en detalle su perfil técnico y trayectoria profesional. ¿Sobre qué te gustaría profundizar?

- 💼 **Experiencia**: Trayectoria en *Protecta Security*, *BuilderHome*, *San Marcos Go* y proyectos freelance.
- 🛠️ **Stack Tecnológico**: *React*, *Next.js*, *TypeScript*, *Node.js*, *NestJS*, *PostgreSQL*, *Tailwind CSS*.
- 🤖 **Inteligencia Artificial**: Integración de modelos LLM, automatizaciones y agentes.
- 🚀 **Proyectos**: Productos digitales reales y demostraciones interactivas.
- 🎯 **Analizar mi vacante**: Pega los requisitos de tu oferta de empleo y evaluaré la compatibilidad técnica de Brandon.
- 📄 **Contacto y CV**: [Descargar Curriculum Vitae](${contactData.cvPdfUrl}) o escribirle por [WhatsApp](${contactData.whatsappUrl}).

¿Qué te gustaría consultar?
`.trim();
}

/**
 * Analizador estructurado de vacantes de contingencia
 */
function analyzeJobVacancyFallback(jobDescription: string): string {
  const jd = jobDescription.toLowerCase();

  // Detección de tecnologías presentes en la JD
  const foundTechs: string[] = [];
  const missingTechs: string[] = [];

  const techChecks = [
    { name: "React / Next.js", matches: ["react", "next.js", "nextjs", "next"], matchKey: "React / Next.js" },
    { name: "TypeScript", matches: ["typescript", "ts"], matchKey: "TypeScript" },
    { name: "JavaScript", matches: ["javascript", "js", "es6"], matchKey: "JavaScript" },
    { name: "Node.js", matches: ["node", "node.js", "nodejs"], matchKey: "Node.js" },
    { name: "Express / NestJS", matches: ["express", "nestjs", "nest"], matchKey: "Express / NestJS" },
    { name: "PostgreSQL / SQL", matches: ["postgresql", "postgres", "sql", "mysql"], matchKey: "PostgreSQL / MySQL" },
    { name: "MongoDB", matches: ["mongodb", "mongo", "nosql"], matchKey: "MongoDB" },
    { name: "Tailwind CSS / CSS3", matches: ["tailwind", "tailwindcss", "css", "css3"], matchKey: "Tailwind CSS" },
    { name: "APIs RESTful", matches: ["api", "apis", "rest", "restful"], matchKey: "APIs REST" },
    { name: "Git / GitHub", matches: ["git", "github"], matchKey: "Git / GitHub" },
    { name: "Inteligencia Artificial / LLMs", matches: ["ia", "ai", "llm", "openai", "gemini", "inteligencia artificial"], matchKey: "IA & LLMs" },
    { name: "AWS / Cloud", matches: ["aws", "azure", "cloud", "s3"], matchKey: "AWS / Azure" }
  ];

  techChecks.forEach((tech) => {
    if (tech.matches.some((m) => jd.includes(m))) {
      foundTechs.push(tech.matchKey);
    }
  });

  // Requisitos no presentes en perfil habitual
  const potentialMissing = [
    { name: "Docker / Kubernetes", matches: ["docker", "kubernetes", "k8s"] },
    { name: "Python / Django", matches: ["python", "django", "fastapi"] },
    { name: "Java / Spring", matches: ["java", "spring", "springboot"] },
    { name: "GraphQL", matches: ["graphql"] },
    { name: "PHP / Laravel", matches: ["php", "laravel"] },
    { name: ".NET / C#", matches: [".net", "c#", "dotnet"] },
    { name: "Flutter / React Native", matches: ["flutter", "react native", "mobile"] }
  ];

  potentialMissing.forEach((item) => {
    if (item.matches.some((m) => jd.includes(m))) {
      missingTechs.push(item.name);
    }
  });

  const compatibilityLevel = foundTechs.length >= 3 ? "Muy Alta (85% - 95%)" : foundTechs.length >= 1 ? "Alta (75% - 85%)" : "Media-Alta";

  return `
### 🎯 Análisis de Compatibilidad: Nivel ${compatibilityLevel}

He evaluado los requerimientos de la posición frente a la base de conocimiento y experiencia real de Brandon:

#### ✅ Requisitos que Coinciden con el Perfil de Brandon:
${foundTechs.length > 0
  ? foundTechs.map((t) => `- **${t}**: Dominio demostrado en proyectos en producción y en empresas como **Protecta Security** y **BuilderHome**.`).join("\n")
  : `- **Desarrollo Full Stack**: Experiencia integral con frontend reactivo (\`React/Next.js/TS\`) y backend escalable (\`Node.js/PostgreSQL\`).`
}
- **Experiencia Profesional**: Cuenta con más de 3 años de trayectoria (+3 años) en desarrollo web end-to-end.
- **Buenas Prácticas**: Clean Architecture, tipado estricto con TypeScript, optimización de rendimiento y SEO.

#### 💼 Experiencia Relevante Aplicable:
- **Protecta Security**: Desarrollo de flujos críticos de cotización, integración de APIs y pasarelas de pago.
- **BuilderHome**: Arquitectura completa de Landing Page de alta velocidad y CRM de gestión inmobiliaria.
- **San Marcos Go**: Aplicación EdTech con miles de registros de preguntas y microservicios asistidos por IA.

#### 🚀 Fortalezas Clave para esta Posición:
- Capacidad para resolver tanto la interfaz visual (UI/UX) como la arquitectura backend y base de datos sin fricciones.
- Experiencia probada integrando soluciones de **Inteligencia Artificial** para automatizar y diferenciar el producto.
- Rapidez y autonomía para entregar funcionalidades de negocio listas para producción.

#### 🔍 Requisitos No Mencionados o Complementarios:
${missingTechs.length > 0
  ? missingTechs.map((m) => `- **${m}**: No es su stack principal actual, pero cuenta con sólida base de ingeniería y rápida curva de adaptación.`).join("\n")
  : `- No se detectan brechas tecnológicas críticas frente al stack estándar de desarrollo web moderno.`
}

#### 📲 Siguiente Paso Recomendado:
Brandon está disponible para conversar sobre esta vacante. Puedes [Descargar su CV aquí](${contactData.cvPdfUrl}) o coordinar una breve entrevista por [WhatsApp al +51 954 309 429](${contactData.whatsappUrl}).
`.trim();
}
