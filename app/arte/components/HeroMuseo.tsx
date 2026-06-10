"use client";

import { useState } from "react";

type HeroMuseoProps = {
  openConversation: boolean;
};

export default function HeroMuseo({
  openConversation,
}: HeroMuseoProps) {
    void openConversation;
    
  
  return (
    <section
  className="
    w-full

    flex
    flex-col
    items-center
    justify-center

    px-8
  "
>
      {/* Título */}

     <h1
  style={{
    fontSize: "clamp(42px, 7vw, 82px)",
    lineHeight: "0.95",
    fontWeight: 300,
    letterSpacing: "0.02em",
    color: "#D8D2CC",
    textAlign: "center",
    maxWidth: "980px",
    margin: "0 auto",
    transform: "translateY(clamp(10px,3vw,42px))",
    padding: "0 16px",
  }}
>
  ARTE PARA HABITAR
  <br />
  EL MUNDO
</h1>
      {/* Línea */}

<div
  style={{
    width: "clamp(120px,18vw,200px)",
    height: "1.5px",
    background: "#C46A4A",
    marginTop: "clamp(50px,8vw,100px)",
  }}
/>

      {/* Texto */}

    <p
  style={{
    color: "#D8D2CC",
    fontSize: "clamp(17px,2vw,22px)",
    lineHeight: "1.8",
    fontWeight: 300,
    textAlign: "center",
    maxWidth: "760px",
    padding: "0 24px",
  }}
>
  Un museo virtual donde el arte y la historia
  <br />
  se encuentran para transformar espacios
  <br />
  y maneras de habitar.
</p>

      {/* Separador */}

      <div
  style={{
    width: "0.2px",
    height: "clamp(30px,5vw,50px)",
    background: "#C46A4A",
    marginTop: "10px",
    marginBottom: "10px",
  }}
/>

      {/* Categorías */}

      <div
  className="
    mt-12
    flex
    flex-wrap
    items-center
    justify-center
    gap-8
    uppercase
    tracking-[0.25em]
    text-[18px]
  "
>
  <span style={{ color: "#C46A4A" }}>
    LINOGRABADO
  </span>

  <span className="text-white/30">•</span>

  <span style={{ color: "#5F8F87" }}>
    ACRÍLICO
  </span>

  <span className="text-white/30">•</span>

  <span style={{ color: "#4F6588" }}>
    ACUARELA
  </span>

  <span className="text-white/30">•</span>

  <span style={{ color: "#B58A3D" }}>
    OBJETOS
  </span>
</div>
      
    </section>
  );
}