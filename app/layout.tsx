import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";

const acumin = localFont({
  src: "../Fonts/Acumin-Variable-Concept.ttf",
  variable: "--font-acumin",
});

export const metadata = {
  title: "Estudio Daniela Pamely",
  description: "Arquitectura, Arte y Escritura",
  icons: {
    icon: "/DP_PAG-01.png",
  },
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