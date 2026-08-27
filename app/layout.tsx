import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Header from "@/components/header";
import { BrandonAiFloatingWidget } from "@/components/brandon-ai";

const urbanist = Urbanist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brandon | Full Stack Developer & AI Solutions",
  description: "Portafolio profesional de Brandon, Full Stack Developer con más de 3 años de experiencia y soluciones con IA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={urbanist.className}>
        <Navbar />
        <Header />
        {children}
        <BrandonAiFloatingWidget />
      </body>
    </html>
  );
}
