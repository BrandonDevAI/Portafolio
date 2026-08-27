"use client";

import React, { useState } from "react";
import { Sparkles, Bot, X, MessageSquareCode } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface TriggerProps {
  isOpen: boolean;
  onToggle: () => void;
  unreadCount?: number;
}

export const BrandonAiTriggerButton: React.FC<TriggerProps> = ({
  isOpen,
  onToggle,
  unreadCount = 0,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex items-center gap-3 select-none">
      {/* Tooltip con efecto Glow */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-darkBg/90 border border-purple-500/30 text-xs font-medium text-white shadow-lg backdrop-blur-md cursor-pointer hover:border-secondary/50 transition-colors"
            onClick={onToggle}
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-gray-200">Pregúntale a mi <span className="text-secondary font-semibold">IA</span></span>
            <Sparkles size={13} className="text-secondary animate-pulse" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botón Principal con Aura de Luz */}
      <div className="relative group">
        {/* Aura / Halo pulsante */}
        <div
          className={`absolute -inset-1 rounded-full bg-gradient-to-r from-purple-600 via-secondary to-indigo-600 opacity-70 blur-md transition duration-500 group-hover:opacity-100 group-hover:blur-lg ${
            isOpen ? "opacity-30" : "animate-pulse"
          }`}
        />

        {/* Botón interactivo */}
        <motion.button
          onClick={onToggle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          aria-label={isOpen ? "Cerrar Brandon AI" : "Abrir Brandon AI"}
          className={`relative flex items-center justify-center w-14 h-14 rounded-full border shadow-2xl transition-all duration-300 ${
            isOpen
              ? "bg-[#1f1934] border-white/20 text-gray-300 hover:text-white"
              : "bg-gradient-to-br from-[#1a1333] via-[#241a4a] to-[#131424] border-secondary/40 text-white hover:border-secondary"
          }`}
        >
          {isOpen ? (
            <X size={24} className="transition-transform duration-200" />
          ) : (
            <div className="relative flex items-center justify-center">
              <Bot size={26} className="text-white group-hover:scale-110 transition-transform duration-300" />
              <Sparkles
                size={14}
                className="absolute -top-1.5 -right-1.5 text-secondary animate-bounce"
              />
            </div>
          )}

          {/* Badge 'IA' */}
          {!isOpen && (
            <span className="absolute -bottom-1 -right-1 px-1.5 py-0.2 bg-secondary text-[10px] font-bold text-white rounded-full border border-[#131424] shadow">
              IA
            </span>
          )}
        </motion.button>
      </div>
    </div>
  );
};
