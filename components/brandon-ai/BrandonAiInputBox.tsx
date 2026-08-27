"use client";

import React, { useState, useRef, useEffect } from "react";
import { Send, Sparkles, FileSearch, CornerDownLeft } from "lucide-react";

interface InputBoxProps {
  onSendMessage: (content: string) => void;
  isLoading: boolean;
  onOpenVacancyModal: () => void;
}

export const BrandonAiInputBox: React.FC<InputBoxProps> = ({
  onSendMessage,
  isLoading,
  onOpenVacancyModal,
}) => {
  const [input, setInput] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim() || isLoading) return;

    onSendMessage(input.trim());
    setInput("");

    // Reset height
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    // Auto-expand textarea hasta 120px
    const target = e.target;
    target.style.height = "auto";
    target.style.height = `${Math.min(target.scrollHeight, 120)}px`;
  };

  return (
    <div className="p-3 border-t border-white/10 bg-[#16122b]/95 backdrop-blur-md rounded-b-2xl">
      <form onSubmit={handleSubmit} className="relative flex flex-col gap-2">
        <div className="relative flex items-end gap-2 bg-[#1f1938]/80 border border-white/10 focus-within:border-secondary/60 rounded-xl p-2 transition-all shadow-inner">
          {/* Botón rápido para abrir analizador de vacante */}
          <button
            type="button"
            onClick={onOpenVacancyModal}
            title="Pegar descripción de vacante"
            className="p-1.5 text-gray-400 hover:text-secondary hover:bg-white/5 rounded-lg transition-colors shrink-0 mb-0.5"
          >
            <FileSearch size={18} />
          </button>

          {/* Textarea */}
          <textarea
            ref={textareaRef}
            rows={1}
            value={input}
            onChange={handleInput}
            onKeyDown={handleKeyDown}
            disabled={isLoading}
            placeholder="Pregúntale a Brandon AI... (ej. ¿Qué stack domina?)"
            className="flex-1 bg-transparent text-xs sm:text-sm text-white placeholder-gray-400 resize-none outline-none max-h-[120px] py-1 leading-relaxed"
          />

          {/* Botón de Enviar */}
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className={`flex items-center justify-center w-8 h-8 rounded-lg transition-all shrink-0 mb-0.5 ${
              input.trim() && !isLoading
                ? "bg-secondary text-white hover:bg-orange-500 shadow-md shadow-secondary/30 scale-100"
                : "bg-white/5 text-gray-500 cursor-not-allowed"
            }`}
          >
            <Send size={14} className={isLoading ? "animate-pulse" : ""} />
          </button>
        </div>

        {/* Barra inferior: Hints y estado */}
        <div className="flex items-center justify-between px-1 text-[10px] text-gray-400">
          <span className="hidden sm:inline flex items-center gap-1">
            Presiona <kbd className="px-1 py-0.5 bg-white/10 rounded text-[9px] text-gray-300 font-mono">Enter ↵</kbd> para enviar
          </span>
          <span className="sm:hidden text-[9px]">Respuestas basadas en datos reales</span>
          <span className="text-[9px] text-gray-400 font-mono">{input.length}/1000</span>
        </div>
      </form>
    </div>
  );
};
