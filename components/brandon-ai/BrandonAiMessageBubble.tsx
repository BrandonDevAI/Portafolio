"use client";

import React, { useState } from "react";
import { Bot, User, Copy, Check, Sparkles } from "lucide-react";
import { ChatMessage } from "./types";
import { BrandonAiMarkdownRenderer } from "./BrandonAiMarkdownRenderer";

interface BubbleProps {
  message: ChatMessage;
}

export const BrandonAiMessageBubble: React.FC<BubbleProps> = ({ message }) => {
  const isAssistant = message.role === "assistant";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(message.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={`flex items-start gap-2.5 my-2.5 ${
        isAssistant ? "justify-start" : "justify-end"
      }`}
    >
      {/* Avatar del Asistente */}
      {isAssistant && (
        <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-gradient-to-tr from-purple-600 to-secondary p-0.5 shrink-0 mt-0.5 shadow-sm">
          <div className="flex items-center justify-center w-full h-full bg-[#16122b] rounded-[6px]">
            <Bot size={14} className="text-secondary" />
          </div>
        </div>
      )}

      {/* Contenedor del Mensaje */}
      <div
        className={`relative max-w-[88%] sm:max-w-[82%] px-3.5 py-2.5 rounded-2xl text-xs sm:text-sm shadow-md transition-all ${
          isAssistant
            ? "bg-[#1d1838]/90 text-gray-100 border border-white/10 rounded-tl-sm backdrop-blur-sm"
            : "bg-gradient-to-r from-purple-700 to-indigo-600 text-white rounded-tr-sm shadow-purple-900/30"
        }`}
      >
        {/* Renderizado de contenido */}
        {isAssistant ? (
          <div className="relative">
            <BrandonAiMarkdownRenderer content={message.content} />

            {/* Pie del mensaje del Asistente: Fuente y Botón de Copiar */}
            <div className="flex items-center justify-between mt-2 pt-1.5 border-t border-white/5 text-[10px] text-gray-400">
              <span className="flex items-center gap-1 font-mono text-[9px] text-purple-300/80">
                <Sparkles size={10} className="text-secondary" />
                {message.source === "gemini-ai" ? "Gemini LLM" : "Knowledge Base"}
              </span>

              <div className="flex items-center gap-2">
                <span>{message.timestamp}</span>
                <button
                  onClick={handleCopy}
                  title="Copiar respuesta"
                  className="p-1 hover:text-white hover:bg-white/10 rounded transition-colors text-gray-400"
                >
                  {copied ? (
                    <span className="flex items-center gap-0.5 text-emerald-400 font-sans text-[9px]">
                      <Check size={11} /> Copiado
                    </span>
                  ) : (
                    <Copy size={11} />
                  )}
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <p className="whitespace-pre-wrap leading-relaxed">{message.content}</p>
            <div className="text-right mt-1 text-[9px] text-purple-200/70">
              {message.timestamp}
            </div>
          </div>
        )}
      </div>

      {/* Avatar del Usuario */}
      {!isAssistant && (
        <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-purple-900 border border-purple-500/30 shrink-0 mt-0.5 shadow-sm">
          <User size={14} className="text-purple-200" />
        </div>
      )}
    </div>
  );
};
