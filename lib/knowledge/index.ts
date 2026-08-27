import { profileData } from "./profile";
import { experiencesData } from "./experience";
import { projectsData } from "./projects";
import { skillsData, allSkillsList } from "./skills";
import { servicesData } from "./services";
import { contactData } from "./contact";

export * from "./profile";
export * from "./experience";
export * from "./projects";
export * from "./skills";
export * from "./services";
export * from "./contact";

/**
 * Compila y formatea toda la base de conocimiento estructurada
 * como un texto denso en información y optimizado para el System Prompt del LLM.
 */
export function getFormattedKnowledgeContext(): string {
  const experiencesFormatted = experiencesData
    .map(
      (exp) => `
### ${exp.role} en ${exp.company} (${exp.period})
- Tipo: ${exp.type} | Ubicación: ${exp.location}
- Descripción: ${exp.description}
- Responsabilidades clave:
${exp.keyResponsibilities.map((r) => `  * ${r}`).join("\n")}
- Tecnologías usadas: ${exp.technologies.join(", ")}
- Logros destacados: ${exp.achievements.join(" | ")}`
    )
    .join("\n");

  const projectsFormatted = projectsData
    .map(
      (proj) => `
### Proyecto: ${proj.title} [Categoría: ${proj.category}]
- Resumen: ${proj.shortDescription}
- Detalle técnico: ${proj.detailedDescription}
- Puntos destacados:
${proj.highlights.map((h) => `  * ${h}`).join("\n")}
- Tecnologías: ${proj.technologies.join(", ")}
- Enlace Demo: ${proj.demoUrl || "No disponible"}
- Repositorio GitHub: ${proj.githubUrl && proj.githubUrl !== "#!" ? proj.githubUrl : "Privado / No público"}`
    )
    .join("\n");

  const skillsFormatted = skillsData
    .map(
      (cat) => `
### ${cat.categoryName} (${cat.description}):
${cat.skills.map((s) => `- **${s.name}** [${s.level}]: ${s.details}`).join("\n")}`
    )
    .join("\n");

  const servicesFormatted = servicesData
    .map(
      (srv) => `
### Servicio: ${srv.title}
- Resumen: ${srv.shortDescription}
- Detalle: ${srv.detailedDescription}
- Características: ${srv.features.join(" | ")}
- Entregables: ${srv.deliverables.join(" | ")}`
    )
    .join("\n");

  return `
=========================================
BASE DE CONOCIMIENTO OFICIAL DE BRANDON
=========================================

1. PERFIL GENERAL
- Nombre: ${profileData.fullName} (${profileData.name})
- Rol Principal: ${profileData.role}
- Experiencia total: ${profileData.yearsOfExperience}
- Titular: ${profileData.headline}
- Ubicación / Modalidad: ${profileData.location}
- Resumen profesional: ${profileData.summary}
- Filosofía: ${profileData.philosophy}
- Áreas de Especialización:
${profileData.specializationAreas.map((a) => `  * ${a}`).join("\n")}
- Fortalezas clave:
${profileData.keyStrengths.map((s) => `  * ${s}`).join("\n")}

2. TRAYECTORIA LABORAL Y EXPERIENCIA
${experiencesFormatted}

3. PROYECTOS DESTACADOS Y PRODUCTOS CONSTRUIDOS
${projectsFormatted}

4. HABILIDADES TÉCNICAS (STACK)
Listado general: ${allSkillsList.join(", ")}
${skillsFormatted}

5. SERVICIOS QUE OFRECE
${servicesFormatted}

6. INFORMACIÓN DE CONTACTO Y ENLACES OFICIALES
- WhatsApp: ${contactData.whatsappUrl} (Número: ${contactData.phone})
- GitHub: ${contactData.githubUrl}
- LinkedIn: ${contactData.linkedinUrl}
- Descarga de Curriculum Vitae (CV): ${contactData.cvPdfUrl}
- Portafolio Web: En este sitio web actual
- Disponibilidad: ${contactData.availability}
=========================================
`;
}
