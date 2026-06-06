import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";

const acumin = localFont({
  src: "../Fonts/Acumin-Variable-Concept.ttf",
  variable: "--font-acumin",
});

export const metadata: Metadata = {
  title: "Estudio Daniela Pamely",
  description: "Memoria, cuerpo, arte y arquitectura para habitar el mundo con libertad.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={acumin.variable}>
        {children}
        <GoogleAnalytics gaId="G-G63FZRJVJH" />
        <Analytics />
      </body>
    </html>
  );
}