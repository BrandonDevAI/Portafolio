"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Download, ExternalLink, MessageCircle, Github, Copy, Check } from "lucide-react";

interface Props {
  content: string;
}

export const BrandonAiMarkdownRenderer: React.FC<Props> = ({ content }) => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  // Parsea líneas de markdown básicas con formato elegante
  const parseMarkdown = (text: string) => {
    const lines = text.split("\n");
    const elements: React.ReactNode[] = [];

    let inList = false;
    let listItems: React.ReactNode[] = [];

    const flushList = (keyPrefix: number) => {
      if (inList && listItems.length > 0) {
        elements.push(
          <ul key={`ul-${keyPrefix}`} className="space-y-1.5 my-2 pl-2">
            {listItems}
          </ul>
        );
        listItems = [];
        inList = false;
      }
    };

    lines.forEach((line, index) => {
      const trimmed = line.trim();

      // Encabezados H3 / H4
      if (trimmed.startsWith("### ")) {
        flushList(index);
        const headingText = trimmed.replace("### ", "");
        elements.push(
          <h3
            key={`h3-${index}`}
            className="text-base font-bold text-white mt-3 mb-1.5 flex items-center gap-2 border-b border-white/10 pb-1"
          >
            {renderInlineMarkdown(headingText)}
          </h3>
        );
        return;
      }

      if (trimmed.startsWith("#### ")) {
        flushList(index);
        const headingText = trimmed.replace("#### ", "");
        elements.push(
          <h4
            key={`h4-${index}`}
            className="text-sm font-semibold text-secondary mt-2.5 mb-1"
          >
            {renderInlineMarkdown(headingText)}
          </h4>
        );
        return;
      }

      // Viñetas / Listas
      if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
        inList = true;
        const itemContent = trimmed.substring(2);
        listItems.push(
          <li key={`li-${index}`} className="text-sm text-gray-200 flex items-start gap-2 leading-relaxed">
            <span className="text-secondary mt-1.5 text-[8px] shrink-0">●</span>
            <div>{renderInlineMarkdown(itemContent)}</div>
          </li>
        );
        return;
      }

      // Línea numerada
      const numberedMatch = trimmed.match(/^(\d+)\.\s+(.*)/);
      if (numberedMatch) {
        flushList(index);
        const num = numberedMatch[1];
        const itemContent = numberedMatch[2];
        elements.push(
          <div key={`num-${index}`} className="text-sm text-gray-200 flex items-start gap-2 my-1.5 leading-relaxed">
            <span className="font-semibold text-secondary shrink-0">{num}.</span>
            <div>{renderInlineMarkdown(itemContent)}</div>
          </div>
        );
        return;
      }

      // Si es línea vacía
      if (!trimmed) {
        flushList(index);
        elements.push(<div key={`empty-${index}`} className="h-1.5" />);
        return;
      }

      // Párrafo estándar
      flushList(index);
      elements.push(
        <p key={`p-${index}`} className="text-sm text-gray-200 leading-relaxed my-1">
          {renderInlineMarkdown(trimmed)}
        </p>
      );
    });

    flushList(lines.length);
    return elements;
  };

  // Parsea formato en línea: **negrita**, `código`, [enlaces](url)
  const renderInlineMarkdown = (text: string): React.ReactNode => {
    // Regex para capturar enlaces markdown [label](url)
    const linkRegex = /\[(.*?)\]\((.*?)\)/g;
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = linkRegex.exec(text)) !== null) {
      const matchIndex = match.index;
      if (matchIndex > lastIndex) {
        parts.push(renderTextDecorations(text.substring(lastIndex, matchIndex), `txt-${lastIndex}`));
      }

      const label = match[1];
      const url = match[2];

      // Detección de botones interactivos según el destino
      const isPdf = url.endsWith(".pdf") || url.includes("CV");
      const isWhatsApp = url.includes("wa.me") || url.includes("whatsapp");
      const isGitHub = url.includes("github.com");

      if (isPdf) {
        parts.push(
          <a
            key={`link-${matchIndex}`}
            href={url}
            download
            className="inline-flex items-center gap-1.5 px-2.5 py-0.5 my-0.5 mx-1 text-xs font-semibold text-secondary bg-secondary/15 hover:bg-secondary hover:text-white border border-secondary/30 rounded-lg transition-all shadow-sm"
          >
            <Download size={12} />
            <span>{label}</span>
          </a>
        );
      } else if (isWhatsApp) {
        parts.push(
          <a
            key={`link-${matchIndex}`}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-2.5 py-0.5 my-0.5 mx-1 text-xs font-semibold text-emerald-400 bg-emerald-500/15 hover:bg-emerald-500 hover:text-white border border-emerald-500/30 rounded-lg transition-all shadow-sm"
          >
            <MessageCircle size={12} />
            <span>{label}</span>
          </a>
        );
      } else if (isGitHub) {
        parts.push(
          <a
            key={`link-${matchIndex}`}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-2.5 py-0.5 my-0.5 mx-1 text-xs font-semibold text-purple-300 bg-purple-500/15 hover:bg-purple-500 hover:text-white border border-purple-500/30 rounded-lg transition-all shadow-sm"
          >
            <Github size={12} />
            <span>{label}</span>
          </a>
        );
      } else {
        parts.push(
          <a
            key={`link-${matchIndex}`}
            href={url}
            target={url.startsWith("http") ? "_blank" : undefined}
            rel={url.startsWith("http") ? "noopener noreferrer" : undefined}
            className="inline-flex items-center gap-1 text-secondary underline hover:text-orange-400 font-medium transition-colors"
          >
            <span>{label}</span>
            {url.startsWith("http") && <ExternalLink size={10} />}
          </a>
        );
      }

      lastIndex = linkRegex.lastIndex;
    }

    if (lastIndex < text.length) {
      parts.push(renderTextDecorations(text.substring(lastIndex), `txt-${lastIndex}`));
    }

    return parts;
  };

  // Procesa negritas **texto** y código en línea `code`
  const renderTextDecorations = (text: string, keyPrefix: string): React.ReactNode => {
    // Primero procesamos bloques de código `codigo`
    const codeSplit = text.split(/`([^`]+)`/g);
    return codeSplit.map((segment, i) => {
      if (i % 2 === 1) {
        return (
          <code
            key={`${keyPrefix}-code-${i}`}
            className="px-1.5 py-0.5 text-xs font-mono bg-purple-950/60 border border-purple-500/30 text-purple-200 rounded mx-0.5"
          >
            {segment}
          </code>
        );
      }

      // Procesamos negritas **negrita**
      const boldSplit = segment.split(/\*\*([^*]+)\*\*/g);
      return boldSplit.map((subSegment, j) => {
        if (j % 2 === 1) {
          return (
            <strong key={`${keyPrefix}-b-${i}-${j}`} className="font-semibold text-white">
              {subSegment}
            </strong>
          );
        }
        return subSegment;
      });
    });
  };

  return <div className="space-y-1">{parseMarkdown(content)}</div>;
};
