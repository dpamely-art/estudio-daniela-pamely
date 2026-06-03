"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Universe =
  | "memoria"
  | "cuerpo"
  | "arte"
  | "arquitectura"
  | "escritura";

const universes = {
  memoria: {
    title: "MEMORIA",
    items: [
      "Investigación",
      "Archivo",
      "Narrativas",
      "Procesos",
    ],
  },

  cuerpo: {
    title: "CUERPO",
    items: [
      "Identidad",
      "Instalación",
      "Exploración material",
    ],
  },

  arte: {
    title: "ARTE",
    items: [
      "Obra original",
      "Grabado",
      "Colecciones",
      "Exposiciones",
    ],
  },

  arquitectura: {
    title: "ARQUITECTURA",
    items: [
      "Diseño espacial",
      "Interiorismo",
      "Dirección creativa",
    ],
  },

  escritura: {
    title: "ESCRITURA",
    quote:
      "Hay libros que tardan años en escribirse porque primero necesitan ser vividos.",
    items: [
      "Ensayos",
      "Cartas",
      "Poesía",
      "Narrativas sobre memoria, identidad y libertad",
    ],
  },
};

const themes = {
  memoria: {
    bg: "#F7F4F1",
    text: "#212121",
    accent: "#AF7A5B",
    atmosphere:
      "radial-gradient(circle at top, rgba(255,255,255,.6), transparent 60%)",
  },

  cuerpo: {
    bg: "#C49A83",
    text: "#F7F4F1",
    accent: "#212121",
    atmosphere:
      "radial-gradient(circle at center, rgba(255,255,255,.15), transparent 70%)",
  },

  arte: {
    bg: "#2F6B63",
    text: "#F7F4F1",
    accent: "#AF7A5B",
    atmosphere:
      "radial-gradient(circle at center, rgba(255,255,255,.08), transparent 60%)",
  },

  arquitectura: {
    bg: "#D8D2CC",
    text: "#212121",
    accent: "#AF7A5B",
    atmosphere:
      "linear-gradient(90deg, rgba(255,255,255,.25), transparent 35%)",
  },

  escritura: {
    bg: "#5C2D35",
    text: "#F7F4F1",
    accent: "#C49A83",
    atmosphere:
      "radial-gradient(circle at bottom, rgba(255,255,255,.08), transparent 60%)",
  },
};

export default function Home() {
  const [activeUniverse, setActiveUniverse] =
    useState<Universe>("memoria");

  const theme = themes[activeUniverse];
  const universe = universes[activeUniverse];

  return (
   <motion.main
  animate={{
    backgroundColor: theme.bg,
    color: theme.text,
    backgroundImage: theme.atmosphere,
  }}
  transition={{
    duration: 1.6,
  }}
  className="min-h-screen"
>
      <div className="max-w-7xl mx-aut px-8 md:px-16 py-24">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="
            text-4xl
            md:text-7xl
            tracking-[0.2em]
            font-light
          "
        >
          ESTUDIO DANIELA PAMELY
        </motion.h1>

        <p
          className="
            mt-6
            text-sm
            md:text-lg
            tracking-[0.35em]
            uppercase
            opacity-70
          "
        >
          Arte · Arquitectura · Escritura
        </p>

        <nav
          className="
            mt-20
            flex
            flex-wrap
            gap-8
            uppercase
            tracking-[0.3em]
            text-sm
          "
        >
          {(Object.keys(
            universes
          ) as Universe[]).map((key) => (
            <button
              key={key}
              onClick={() =>
                setActiveUniverse(key)
              }
              style={{
                color:
                  activeUniverse === key
                    ? theme.accent
                    : theme.text,
              }}
              className="
                transition-all
                duration-300
              "
            >
              {universes[key].title}
            </button>
          ))}
        </nav>

        <AnimatePresence mode="wait">
          <motion.section
            key={activeUniverse}
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.5,
            }}
            className="mt-24"
          >
            <h2
              className="
                text-4xl
                md:text-7xl
                font-light
                tracking-[0.15em]
              "
            >
              {universe.title}
            </h2>

            {"quote" in universe && (
              <blockquote
                className="
                  mt-12
                  max-w-3xl
                  text-xl
                  leading-relaxed
                  italic
                "
              >
                {universe.quote}
              </blockquote>
            )}

            <ul className="mt-16 space-y-8">
              {universe.items.map((item) => (
                <li
                  key={item}
                  className="
                    text-2xl
                    md:text-4xl
                    font-light
                  "
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.section>
        </AnimatePresence>
      </div>
</motion.main>
);
}
