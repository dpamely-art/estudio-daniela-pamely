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

        background: "rgba(3,6,12,.18)",
        backdropFilter: "blur(10px)",

        zIndex: 500,
        padding: "24px",
      }}
    >
      <div
        style={{
          width: "min(760px,92vw)",

          minHeight: "520px",

          borderRadius: "26px",

          background:"linear-gradient(180deg,rgba(18,24,34,.62) 0%,rgba(9,13,20,.48) 100%)",

          backdropFilter: "blur(34px)",

          border: "1px solid rgba(212,174,136,.28)",

          boxShadow:
`
0 40px 120px rgba(0,0,0,.45),
0 0 0 1px rgba(255,255,255,.04),
0 0 120px rgba(212,174,136,.08)
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

            right: "22px",
            top: "18px",

            background: "transparent",

            border: "none",

            color: "#D8AE88",

            fontSize: "28px",

            cursor: "pointer",
          }}
        >
          ✕
        </button>

        <div>

          <h2
            style={{
              color: "#ECE3D9",

              fontSize:
                "clamp(28px,4vw,42px)",

              fontWeight: 300,

              marginBottom: "22px",
            }}
          >
            {current.title}
          </h2>

          <p
            style={{
  color: "rgba(255,255,255,.82)",

  fontSize:
    "clamp(18px,2vw,22px)",

  lineHeight: 1.9,

  whiteSpace: "pre-line",
}}
         >
  {current.text}
</p>

        </div>

          <button
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