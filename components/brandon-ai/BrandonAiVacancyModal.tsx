"use client";

import React, { useState } from "react";
import { Sparkles, X, FileSearch, CheckCircle2, ArrowRight, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

interface VacancyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAnalyze: (jobDescription: string) => void;
  isLoading: boolean;
}

const SAMPLE_VACANCIES = [
  {
    title: "Full Stack Developer (Next.js + Node.js)",
    content: "Buscamos Desarrollador Full Stack con experiencia en React, Next.js, TypeScript, Node.js y PostgreSQL. Requisitos: Creación de APIs REST, buenas prácticas de desarrollo, experiencia en frontend y backend, integración de servicios y trabajo con Git.",
  },
  {
    title: "Frontend Engineer (React + TypeScript)",
    content: "Buscamos Frontend Developer con más de 2 años de experiencia en React, TypeScript y Tailwind CSS. Se valora conocimiento en consumo de APIs REST, optimización SEO y experiencia de usuario moderna.",
  },
  {
    title: "Full Stack + Soluciones con IA",
    content: "Empresa de tecnología busca Ingeniero Full Stack con dominio de TypeScript, Next.js y backend Node.js. Deseable experiencia integrando modelos de Inteligencia Artificial (LLMs), automatizaciones y desarrollo de productos SaaS.",
  },
];

export const BrandonAiVacancyModal: React.FC<VacancyModalProps> = ({
  isOpen,
  onClose,
  onAnalyze,
  isLoading,
}) => {
  const [jobDescription, setJobDescription] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!jobDescription.trim() || isLoading) return;
    onAnalyze(jobDescription.trim());
    onClose();
  };

  const handleSelectSample = (sample: string) => {
    setJobDescription(sample);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 15 }}
        transition={{ duration: 0.2 }}
        className="relative w-full max-w-lg bg-[#181330] border border-purple-500/30 rounded-2xl shadow-2xl shadow-purple-950/80 overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Cabecera del Modal */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-[#141029]">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-secondary/20 border border-secondary/40 text-secondary">
              <FileSearch size={18} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                Analizar mi Vacante
                <span className="px-1.5 py-0.2 text-[9px] font-semibold text-secondary bg-secondary/15 rounded">
                  Recruiter Tool
                </span>
              </h3>
              <p className="text-[11px] text-gray-400">
                Evalúa la compatibilidad técnica de Brandon para tu oferta
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Cuerpo del Modal */}
        <div className="p-5 overflow-y-auto space-y-4">
          <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-500/20 text-xs text-gray-300 space-y-1">
            <div className="font-semibold text-purple-200 flex items-center gap-1.5">
              <Sparkles size={13} className="text-secondary" />
              ¿Qué analizará Brandon AI?
            </div>
            <ul className="space-y-1 text-[11px] text-gray-300 pl-4 list-disc marker:text-secondary">
              <li>Requisitos que coinciden con su stack y proyectos reales.</li>
              <li>Experiencia laboral aplicable a los retos del rol.</li>
              <li>Fortalezas técnicas diferenciales para la posición.</li>
              <li>Requisitos no cubiertos con total honestidad (sin inventar experiencia).</li>
            </ul>
          </div>

          {/* Plantillas de Ejemplo */}
          <div className="space-y-1.5">
            <span className="text-[11px] font-medium text-gray-400 flex items-center gap-1">
              <Lightbulb size={12} className="text-yellow-400" />
              O prueba con una plantilla de ejemplo:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {SAMPLE_VACANCIES.map((s, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSelectSample(s.content)}
                  className="px-2.5 py-1 text-[11px] text-gray-300 bg-white/5 hover:bg-white/10 hover:text-white border border-white/10 hover:border-secondary/40 rounded-lg transition-all text-left"
                >
                  {s.title}
                </button>
              ))}
            </div>
          </div>

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                Pega la descripción o requisitos de la vacante:
              </label>
              <textarea
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                placeholder="Ejemplo: Requerimos Desarrollador Full Stack con 2+ años de experiencia en React, TypeScript, Node.js y PostgreSQL para desarrollar nuevas aplicaciones..."
                rows={5}
                required
                className="w-full p-3 text-xs sm:text-sm bg-[#110d24] border border-white/15 focus:border-secondary rounded-xl text-white placeholder-gray-400 outline-none resize-none leading-relaxed transition-colors"
              />
            </div>

            {/* Acciones */}
            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
              >
                Cancelar
              </button>

              <button
                type="submit"
                disabled={!jobDescription.trim() || isLoading}
                className={`flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-xl shadow-lg transition-all ${
                  jobDescription.trim() && !isLoading
                    ? "bg-gradient-to-r from-secondary to-orange-500 hover:from-orange-500 hover:to-secondary text-white shadow-orange-950/50 active:scale-95 cursor-pointer"
                    : "bg-white/10 text-gray-500 cursor-not-allowed"
                }`}
              >
                <Sparkles size={14} className={isLoading ? "animate-spin" : ""} />
                <span>{isLoading ? "Analizando..." : "Analizar Compatibilidad"}</span>
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};
