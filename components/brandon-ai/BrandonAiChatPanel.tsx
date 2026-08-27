"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChatMessage } from "./types";
import { BrandonAiHeader } from "./BrandonAiHeader";
import { BrandonAiMessageList } from "./BrandonAiMessageList";
import { BrandonAiInputBox } from "./BrandonAiInputBox";

interface ChatPanelProps {
  isOpen: boolean;
  onClose: () => void;
  messages: ChatMessage[];
  isLoading: boolean;
  onSendMessage: (content: string) => void;
  onClearMessages: () => void;
  onSelectPrompt: (query: string) => void;
  onOpenVacancyModal: () => void;
}

export const BrandonAiChatPanel: React.FC<ChatPanelProps> = ({
  isOpen,
  onClose,
  messages,
  isLoading,
  onSendMessage,
  onClearMessages,
  onSelectPrompt,
  onOpenVacancyModal,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.88, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.88, y: 25 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-24 right-3 sm:right-6 md:right-8 z-50 w-[94vw] sm:w-[420px] md:w-[450px] h-[78vh] max-h-[640px] flex flex-col bg-[#140f2b]/95 border border-purple-500/25 rounded-2xl md:rounded-3xl shadow-2xl shadow-purple-950/80 backdrop-blur-xl overflow-hidden font-sans"
        >
          {/* Cabecera */}
          <BrandonAiHeader
            onClose={onClose}
            onClear={onClearMessages}
            onOpenVacancyModal={onOpenVacancyModal}
            messageCount={messages.length}
          />

          {/* Lista de Mensajes y Bienvenida */}
          <BrandonAiMessageList
            messages={messages}
            isLoading={isLoading}
            onSelectPrompt={onSelectPrompt}
            onOpenVacancyModal={onOpenVacancyModal}
          />

          {/* Barra de Entrada */}
          <BrandonAiInputBox
            onSendMessage={onSendMessage}
            isLoading={isLoading}
            onOpenVacancyModal={onOpenVacancyModal}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
