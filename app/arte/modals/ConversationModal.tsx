"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const cristales = [
  {
    title: "Una conversación",
    text: `No fundamos este museo para vender obras.

Lo fundamos porque creemos que otra forma de habitar el mundo es posible.`,
  },
  {
    title: "¿Por qué existe?",
    text: `Durante mucho tiempo nos hicieron creer que el arte pertenece a algunas personas.

Nosotras creemos que pertenece a quien está dispuesto a detenerse a mirar.`,
  },
  {
    title: "¿Qué encontrarás aquí?",
    text: `Este museo está organizado por colecciones.

Algunas son permanentes.

Otras aparecen una sola vez.

Algunas obras podrán acompañarte toda la vida.

Otras jamás volverán a existir.`,
  },
  {
    title: "¿Cómo recorrerlo?",
    text: `Puedes entrar y salir cuando quieras.

Guardar piezas.

Construir tu propia selección.

O simplemente caminar.

No hay una forma correcta de recorrer este lugar.`,
  },
  {
    title: "Este espacio también puede ser tuyo",
    text: `Si deseas compartir tu trabajo o desarrollar una colaboración con el Estudio, será un honor caminar a tu lado.`,
  },
  {
    title: "Comunidad",
    text: `Creemos en la unión.

Suscríbete para conocer nuevas colecciones, piezas especiales, talleres y conversaciones antes que nadie.`,
  },
  {
    title: "",
    text: `Si alguna obra logra recordarte que mereces belleza, descanso, justicia o libertad…

entonces este museo habrá cumplido su propósito.`,
  },
];

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function ConversationModal({
  open,
  onClose,
}: Props) {
  const [step, setStep] = useState(0);
  const router = useRouter();

  if (!open) return null;

  const last = step === cristales.length - 1;

  function handleNext() {
    if (!last) {
      setStep((s) => s + 1);
      return;
    }

    onClose();
    router.push("/arte/museo");
  }

  return (
    <div
      className="
        fixed
        inset-0
        z-[9999]

        flex
        items-center
        justify-center

        bg-black/55
        backdrop-blur-md

        p-6
      "
    >
      <div
        className="
          w-full
          max-w-3xl

          rounded-3xl

          border
          border-white/20

          bg-white/10

          backdrop-blur-2xl

          p-8
          md:p-12
        "
      >
        <button
          onClick={onClose}
          className="
            ml-auto
            block

            text-white/60

            hover:text-white

            transition
          "
        >
          ✕
        </button>

        {cristales[step].title && (
          <p
            className="
              mt-2

              uppercase

              tracking-[0.35em]

              text-xs

              text-[#D8AE88]
            "
          >
            {cristales[step].title}
          </p>
        )}

        <div
          className="
            mt-8

            whitespace-pre-line

            text-white

            text-xl
            md:text-3xl

            leading-relaxed

            font-extralight
          "
        >
          {cristales[step].text}
        </div>

        <div className="mt-12 flex justify-end">
          <button
            onClick={handleNext}
            className="
              uppercase

              tracking-[0.35em]

              text-sm

              text-[#D8AE88]

              hover:opacity-80

              transition
            "
          >
            {last ? "Entrar al museo →" : "Siguiente →"}
          </button>
        </div>
      </div>
    </div>
  );
}