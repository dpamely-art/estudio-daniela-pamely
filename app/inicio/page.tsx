"use client";

import { useState } from "react";

export default function Inicio() {
  const [hoverText, setHoverText] = useState(
    "Espacios que narran."
  );

  return (
    <main
      className="
        min-h-screen
        bg-[#f5f2ef]
        flex
        flex-col
        items-center
        justify-center
        px-4
        md:px-12
        text-center
      "
    >
      {/* TITULO */}

      <h1
        className="
        fade-up
        delay-2
        italic
        font-light
        text-[#756a63]
        leading-[1.1]
        mb-16
        text-[3rem]
        md:text-7xl
  "
>
        Arte, arquitectura
        <br />
        y objetos para habitar.
      </h1>

      {/* LINEA */}

      <div
      className="fade-up delay-1 w-48 md:w-[400px] mb-8"
  style={{
    height: "3px",
    backgroundColor:"#C46A4A",
    marginTop: "30px",
    marginBottom: "30px",
  }}
></div>

      {/* PUERTAS */}

      <nav
        className="
          fade-up
          delay-1
          flex
          flex-wrap
          justify-center
          items-center
          gap-6
          md:gap-10
          uppercase
          tracking-[0.18em]
          text-3xl
          md:text-4xl
          font-light
        "
      >
        <a
         href="/arte"
         style={{ color: "#C46A4A" }}
         className="
         fade-up
         delay-1
         transition-all
         duration-300
          "
          onMouseEnter={() =>
            setHoverText("Procesos que transforman.")
          }
        >
          ARTE
        </a>

        <span className="text-[#c7b9af]">·</span>

        <a
          href="/arquitectura"
          style={{ color: "#5F8F87" }}
          className="
            fade-up
            delay-1
            transition-all
            duration-300
            hover:opacity-70
          "
          onMouseEnter={() =>
            setHoverText("Espacios que narran.")
          }
        >
          ARQUITECTURA
        </a>

        <span className="text-[#c7b9af]">·</span>

        <a
          href="/escritura"
          style={{ color: "#4F6588" }}
          className="
            fade-up
            delay-1
            transition-all
            duration-300
            hover:opacity-70
          "
          onMouseEnter={() =>
            setHoverText("Palabras para habitar.")
          }
        >
          ESCRITURA
        </a>

        <span className="text-[#c7b9af]">·</span>

        <a
          href="/manifiesto"
          style={{ color: "#B58A3D" }}
          className="
            fade-up
            delay-1
            transition-all
            duration-300
            hover:opacity-70
          "
          onMouseEnter={() =>
            setHoverText(
              "Una práctica construida desde la libertad."
            )
          }
        >
          MANIFIESTO
        </a>
      </nav>

      {/* TEXTO DINÁMICO */}

      <p
        className="
          fade-up
          delay-2
          mt-16
          italic
          text-xl
          md:text-[1.8rem]
          text-[#8b817a]
          transition-all
          duration-300
        "
      >
        | {hoverText} |
      </p>

      {/* FIRMA */}

      <p
        className="
          fade-up
          delay-3
          mt-16
          text-sm
          md:text-base
          tracking-[0.15em]
          text-[#8b817a]
        "
      >
        por Daniela Pamely
      </p>
    </main>
  );
}