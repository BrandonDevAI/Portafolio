"use client";

import React from "react";
import { Bot, Sparkles, Trash2, X, FileText, Minimize2 } from "lucide-react";

interface HeaderProps {
  onClose: () => void;
  onClear: () => void;
  onOpenVacancyModal: () => void;
  messageCount: number;
}

export const BrandonAiHeader: React.FC<HeaderProps> = ({
  onClose,
  onClear,
  onOpenVacancyModal,
  messageCount,
}) => {
  return (
    <div className="flex items-center justify-between px-4 py-3.5 border-b border-white/10 bg-[#16122b]/80 backdrop-blur-md rounded-t-2xl">
      {/* Información del Asistente */}
      <div className="flex items-center gap-3">
        <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 to-secondary p-0.5 shadow-md shadow-purple-900/30">
          <div className="flex items-center justify-center w-full h-full bg-[#16122b] rounded-[10px]">
            <Bot size={18} className="text-secondary" />
          </div>
          <span className="absolute -bottom-0.5 -right-0.5 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 border border-[#16122b]"></span>
          </span>
        </div>

        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-sm font-bold text-white tracking-wide flex items-center gap-1.5">
              Brandon AI
              <span className="px-1.5 py-0.2 text-[9px] font-semibold text-secondary bg-secondary/10 border border-secondary/30 rounded">
                PRO
              </span>
            </h2>
          </div>
          <p className="text-[11px] text-gray-400 flex items-center gap-1">
            <span>Asistente Oficial</span>
            <span className="text-gray-600">•</span>
            <span className="text-emerald-400">En línea</span>
          </p>
        </div>
      </div>

      {/* Botones de Acción */}
      <div className="flex items-center gap-1.5">
        {/* Atajo: Analizar Vacante */}
        <button
          onClick={onOpenVacancyModal}
          title="Analizar compatibilidad con oferta laboral"
          className="flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-white bg-gradient-to-r from-purple-600/80 to-indigo-600/80 hover:from-purple-600 hover:to-indigo-600 border border-purple-400/30 rounded-lg transition-all shadow-sm active:scale-95"
        >
          <Sparkles size={12} className="text-yellow-300 animate-pulse" />
          <span className="hidden sm:inline">Analizar Vacante</span>
          <span className="sm:hidden">Vacante</span>
        </button>

        {/* Limpiar Conversación */}
        {messageCount > 0 && (
          <button
            onClick={onClear}
            title="Reiniciar chat"
            className="p-1.5 text-gray-400 hover:text-red-400 hover:bg-white/5 rounded-lg transition-colors"
          >
            <Trash2 size={15} />
          </button>
        )}

        {/* Cerrar / Minimizar */}
        <button
          onClick={onClose}
          title="Minimizar chat"
          className="p-1.5 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
};
