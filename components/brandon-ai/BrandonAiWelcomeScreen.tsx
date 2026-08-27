"use client";

import React from "react";
import { Sparkles, Bot, ArrowRight, Briefcase, FileSearch, CheckCircle2 } from "lucide-react";
import { QUICK_PROMPTS, QuickPrompt } from "./types";

interface WelcomeProps {
  onSelectPrompt: (query: string) => void;
  onOpenVacancyModal: () => void;
}

export const BrandonAiWelcomeScreen: React.FC<WelcomeProps> = ({
  onSelectPrompt,
  onOpenVacancyModal,
}) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 py-6 text-center select-none space-y-4">
      {/* Icono Principal con efecto Halo */}
      <div className="relative flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-tr from-purple-600 via-secondary to-indigo-500 p-0.5 shadow-xl shadow-purple-900/40 animate-pulse">
        <div className="flex items-center justify-center w-full h-full bg-[#16122b] rounded-[14px]">
          <Bot size={28} className="text-secondary" />
        </div>
      </div>

      {/* Saludo y Presentación */}
      <div className="space-y-1 max-w-xs">
        <h3 className="text-base font-bold text-white tracking-wide">
          Hola, soy <span className="text-secondary">Brandon AI</span>
        </h3>
        <p className="text-xs text-gray-300 leading-relaxed">
          Conozco la experiencia, proyectos y tecnologías de Brandon.
        </p>
        <p className="text-xs font-semibold text-purple-300">
          ¿Quieres conocer mejor su perfil?
        </p>
      </div>

      {/* Tarjeta Destacada: Analizar mi Vacante (Función Diferencial) */}
      <div className="w-full max-w-sm">
        <div
          onClick={onOpenVacancyModal}
          className="group relative flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-purple-900/40 via-indigo-900/30 to-purple-950/50 border border-purple-500/40 hover:border-secondary transition-all duration-300 cursor-pointer shadow-lg shadow-purple-950/50 hover:scale-[1.02]"
        >
          <div className="flex items-center gap-2.5 text-left">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-secondary/20 border border-secondary/40 text-secondary shrink-0">
              <FileSearch size={16} />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold text-white group-hover:text-secondary transition-colors">
                  Analizar mi vacante
                </span>
                <span className="px-1 py-0.2 text-[8px] font-bold text-yellow-300 bg-yellow-500/20 rounded uppercase">
                  Reclutadores
                </span>
              </div>
              <p className="text-[11px] text-gray-300">
                Pega una oferta y evalúa compatibilidad al instante
              </p>
            </div>
          </div>
          <ArrowRight
            size={15}
            className="text-gray-400 group-hover:text-secondary group-hover:translate-x-0.5 transition-all shrink-0 ml-1"
          />
        </div>
      </div>

      {/* Botones de Preguntas Rápidas */}
      <div className="w-full max-w-sm space-y-1.5 pt-1 text-left">
        <span className="text-[11px] font-medium text-gray-400 uppercase tracking-wider px-1">
          Preguntas sugeridas:
        </span>
        <div className="flex flex-wrap gap-1.5">
          {QUICK_PROMPTS.map((item: QuickPrompt) => (
            <button
              key={item.id}
              onClick={() => onSelectPrompt(item.query)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-gray-200 bg-white/5 hover:bg-white/10 hover:text-white border border-white/10 hover:border-secondary/40 rounded-full transition-all active:scale-95 shadow-sm text-left"
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
