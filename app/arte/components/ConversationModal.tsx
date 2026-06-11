"use client";

import { useState } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function ConversationModal({
  open,
  onClose,
}: Props) {
  const [step, setStep] = useState(0);

  const [visible, setVisible] = useState(true);

  const slides = [
  {
    title: "Una conversación",
    text:
      "No fundamos este museo para vender obras.\n\nLo fundamos porque creemos que otra forma de habitar el mundo es posible.",
    button: "Siguiente →",
  },

  {
    title: "¿Por qué existe?",
    text:
      "Durante mucho tiempo nos hicieron creer que el arte pertenece a algunas personas.\n\nNosotras creemos que pertenece a quien está dispuesto a detenerse a mirar.",
    button: "Siguiente →",
  },

  {
    title: "¿Qué encontrarás aquí?",
    text:
      "Este museo está organizado por colecciones.\n\nAlgunas son permanentes.\n\nOtras aparecen una sola vez.\n\nAlgunas obras podrán acompañarte toda la vida.\n\nOtras jamás volverán a existir.",
    button: "Siguiente →",
  },

  {
    title: "¿Cómo recorrerlo?",
    text:
      "Puedes entrar y salir cuando quieras.\n\nGuardar piezas.\n\nConstruir tu propia selección.\n\nO simplemente caminar.\n\nNo hay una forma correcta de recorrer este lugar.",
    button: "Siguiente →",
  },

  {
    title: "Este espacio también puede ser tuyo.",
    text:
      "Creemos que los museos no solo resguardan historias.\n\nTambién pueden acompañar a quienes están construyendo la suya.\n\nSi deseas compartir tu trabajo o desarrollar una colaboración con el Estudio, será un honor caminar a tu lado.",
    button: "Siguiente →",
  },

  {
    title: "Comunidad",
    text:
      "Creemos en la unión antes que en la competencia.\n\nSuscríbete para conocer nuevas colecciones, piezas especiales, talleres y conversaciones antes que nadie.\n\nNos alegrará que este camino también forme parte del tuyo.",
    button: "Siguiente →",
  },

  {
    title:
      "Si alguna obra logra recordarte que mereces belleza, descanso, justicia o libertad…",
    text:
      "entonces este museo habrá cumplido su propósito.",
    button: "Entrar al museo →",
  },
];
const current = slides[step];

  if (!open) return null;

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,

       transform: visible
? "translateY(0px) scale(1)"
: "translateY(18px) scale(.96)",

        transition:
        "opacity .45s ease, transform .45s ease",

        position: "fixed",
        inset: 0,

        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        background:
  "linear-gradient(rgba(3,6,12,.42), rgba(3,6,12,.42))",

backdropFilter: "blur(18px)",
WebkitBackdropFilter: "blur(18px)",

        zIndex: 500,
        padding: "24px",
      }}
    >
      <div
        style={{
          width: "min(780px,92vw)",

          minHeight: "560px",

          borderRadius: "30px",

          background:
            "linear-gradient(180deg, rgba(20,28,42,.78) 0%, rgba(10,16,28,.72) 100%)",

          backdropFilter: "blur(42px)",

          border:
            "1px solid rgba(212,174,136,.42)",

          boxShadow: `
0 50px 140px rgba(0,0,0,.45),
0 0 0 1px rgba(255,255,255,.05),
0 0 80px rgba(212,174,136,.10)
`,

          position: "relative",

          padding:
            "clamp(28px,4vw,54px)",

          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <button
          onClick={onClose}
          style={{
  position: "absolute",

  right: "30px",
  top: "28px",

  width: "42px",
  height: "42px",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  background: "transparent",

  border: "1px solid rgba(212,174,136,.18)",

  borderRadius: "999px",

  color: "#D8AE88",

  fontSize: "20px",

  cursor: "pointer",

  transition: ".3s ease",
}}
        >
          ✕
        </button>

        <div
  style={{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    paddingTop: "28px",
    paddingBottom: "28px",
  }}
>

          <h2
  style={{
    color: "#E8D5B2",

    fontSize:
      "clamp(40px,5vw,56px)",

    fontWeight: 300,

    textAlign: "center",

    letterSpacing: ".01em",

    marginBottom: "28px",
  }}
>
  {current.title}
</h2>

<div
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "14px",
    marginBottom: "42px",
  }}
>
  <div
    style={{
      width: "170px",
      height: "1px",
      background: "rgba(212,174,136,.45)",
    }}
  />

  <div
    style={{
      width: "10px",
      height: "10px",
      borderRadius: "999px",
      background: "#D8AE88",
      boxShadow: "0 0 12px rgba(216,174,136,.5)",
    }}
  />

  <div
    style={{
      width: "170px",
      height: "1px",
      background: "rgba(212,174,136,.45)",
    }}
  />
</div>

          <p
  style={{
    color: "rgba(245,240,234,.92)",

    fontSize:
      "clamp(21px,2.2vw,28px)",

    lineHeight: 1.75,

    fontWeight: 300,

    textAlign: "center",

    whiteSpace: "pre-line",

    maxWidth: "640px",

    margin: "0 auto",

    letterSpacing: ".01em",
  }}
>
  {current.text}
</p>

        </div>

          <button
  style={{
    alignSelf: "center",

    marginTop: "42px",

    minWidth: "260px",

    height: "58px",

    padding: "0 34px",

    borderRadius: "999px",

    border: "1px solid rgba(212,174,136,.75)",

    background: "transparent",

    color: "#E8D5B2",

    fontSize: "15px",

    letterSpacing: ".24em",

    textTransform: "uppercase",

    fontWeight: 300,

    cursor: "pointer",

    transition: ".35s ease",
  }}

onClick={() => {

setVisible(false);

setTimeout(() => {

if(step < slides.length-1){

setStep(step+1);

setVisible(true);

}

else{

setStep(0);

setVisible(true);

onClose();

}

},350);

}}
        >
          {current.button}
        </button>

      </div>
    </div>
  );
}