"use client";

import React, { useState, useEffect } from "react";
import { ChatMessage } from "./types";
import { BrandonAiTriggerButton } from "./BrandonAiTriggerButton";
import { BrandonAiChatPanel } from "./BrandonAiChatPanel";
import { BrandonAiVacancyModal } from "./BrandonAiVacancyModal";

const STORAGE_KEY = "brandon_ai_chat_history_v1";

export const BrandonAiFloatingWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVacancyOpen, setIsVacancyOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Cargar historial previo de LocalStorage si existe
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setMessages(parsed);
        }
      }
    } catch (e) {
      console.warn("No se pudo cargar el historial de chat previo:", e);
    }
  }, []);

  // Guardar historial en LocalStorage
  useEffect(() => {
    try {
      if (messages.length > 0) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
      }
    } catch (e) {
      console.warn("No se pudo guardar el historial en LocalStorage:", e);
    }
  }, [messages]);

  const handleSendMessage = async (content: string, isVacancyAnalysis: boolean = false) => {
    if (!content.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: `usr-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
      role: "user",
      content: content.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
          isVacancyAnalysis,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP Error ${response.status}`);
      }

      const data = await response.json();

      const assistantMessage: ChatMessage = {
        id: `ai-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
        role: "assistant",
        content: data.message || "No se pudo obtener una respuesta en este momento.",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        source: data.source || "knowledge-base",
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error: any) {
      console.error("Error al enviar mensaje a Brandon AI:", error);

      const errorMessage: ChatMessage = {
        id: `err-${Date.now()}`,
        role: "assistant",
        content:
          "Ocurrió un inconveniente temporal de conexión. Puedes consultar directamente el [Curriculum Vitae](/CVV-DEVWEB.pdf) o escribirle a Brandon por [WhatsApp](https://wa.me/51954309429).",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        source: "knowledge-base",
        isError: true,
      };

      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearMessages = () => {
    setMessages([]);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.warn("Error al limpiar LocalStorage:", e);
    }
  };

  const handleAnalyzeVacancy = (jobDescription: string) => {
    setIsOpen(true);
    handleSendMessage(
      `Por favor analiza esta vacante para evaluar compatibilidad con Brandon:\n\n${jobDescription}`,
      true
    );
  };

  return (
    <>
      {/* Botón Flotante con Glow y Tooltip */}
      <BrandonAiTriggerButton
        isOpen={isOpen}
        onToggle={() => setIsOpen((prev) => !prev)}
        unreadCount={0}
      />

      {/* Panel de Chat */}
      <BrandonAiChatPanel
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        messages={messages}
        isLoading={isLoading}
        onSendMessage={(msg) => handleSendMessage(msg, false)}
        onClearMessages={handleClearMessages}
        onSelectPrompt={(query) => handleSendMessage(query, false)}
        onOpenVacancyModal={() => setIsVacancyOpen(true)}
      />

      {/* Modal Dedicado de Análisis de Vacante */}
      <BrandonAiVacancyModal
        isOpen={isVacancyOpen}
        onClose={() => setIsVacancyOpen(false)}
        onAnalyze={handleAnalyzeVacancy}
        isLoading={isLoading}
      />
    </>
  );
};
