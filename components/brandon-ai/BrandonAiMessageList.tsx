"use client";

import React, { useEffect, useRef } from "react";
import { Bot, Sparkles } from "lucide-react";
import { ChatMessage } from "./types";
import { BrandonAiMessageBubble } from "./BrandonAiMessageBubble";
import { BrandonAiWelcomeScreen } from "./BrandonAiWelcomeScreen";

interface MessageListProps {
  messages: ChatMessage[];
  isLoading: boolean;
  onSelectPrompt: (query: string) => void;
  onOpenVacancyModal: () => void;
}

export const BrandonAiMessageList: React.FC<MessageListProps> = ({
  messages,
  isLoading,
  onSelectPrompt,
  onOpenVacancyModal,
}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-2 scrollbar-thin scrollbar-thumb-purple-900 scrollbar-track-transparent">
      {messages.length === 0 ? (
        <BrandonAiWelcomeScreen
          onSelectPrompt={onSelectPrompt}
          onOpenVacancyModal={onOpenVacancyModal}
        />
      ) : (
        <>
          {messages.map((msg) => (
            <BrandonAiMessageBubble key={msg.id} message={msg} />
          ))}

          {/* Indicador de Carga / Typing State */}
          {isLoading && (
            <div className="flex items-start gap-2.5 my-2.5 justify-start animate-fadeIn">
              <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-gradient-to-tr from-purple-600 to-secondary p-0.5 shrink-0 mt-0.5 shadow-sm">
                <div className="flex items-center justify-center w-full h-full bg-[#16122b] rounded-[6px]">
                  <Bot size={14} className="text-secondary animate-pulse" />
                </div>
              </div>

              <div className="px-3.5 py-2.5 rounded-2xl rounded-tl-sm bg-[#1d1838]/90 border border-white/10 text-xs text-gray-300 flex items-center gap-2">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-bounce [animation-delay:-0.3s]"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce [animation-delay:-0.15s]"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-bounce"></span>
                </span>
                <span className="text-[11px] text-gray-400">Brandon AI está pensando...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </>
      )}
    </div>
  );
};
