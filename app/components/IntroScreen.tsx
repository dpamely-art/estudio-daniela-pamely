"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

const phrases = [
  "La memoria nos construye.",
  "El cuerpo nos permite sentir.",
  "El arte nos ayuda a nombrarlo.",
  "La arquitectura nos permite habitarlo.",
  "La libertad ocurre cuando las cuatro conversan entre sí.",
];

export default function IntroScreen() {
  const router = useRouter();

  const [step, setStep] = useState(0);

  useEffect(() => {
    let locked = false;
    let touchStartY = 0;

    const handleWheel = (e: WheelEvent) => {
      if (locked) return;

      locked = true;

      setTimeout(() => {
        locked = false;
      }, 700);

      if (e.deltaY > 0) {
        setStep((prev) => Math.min(prev + 1, 5));
      }

      if (e.deltaY < 0) {
        setStep((prev) => Math.max(prev - 1, 0));
      }
    };
const handleTouchStart = (e: TouchEvent) => {
  touchStartY = e.touches[0].clientY;
};

const handleTouchEnd = (e: TouchEvent) => {
  if (locked) return;

  const touchEndY = e.changedTouches[0].clientY;
  const difference = touchStartY - touchEndY;

  if (Math.abs(difference) < 50) return;

  locked = true;

  setTimeout(() => {
    locked = false;
  }, 700);

  if (difference > 0) {
    setStep((prev) => Math.min(prev + 1, 5));
  }

  if (difference < 0) {
    setStep((prev) => Math.max(prev - 1, 0));
  }
};
    window.addEventListener("wheel", handleWheel);
window.addEventListener("touchstart", handleTouchStart);
window.addEventListener("touchend", handleTouchEnd);

return () => {
  window.removeEventListener("wheel", handleWheel);
  window.removeEventListener("touchstart", handleTouchStart);
  window.removeEventListener("touchend", handleTouchEnd);
};
  }, []);

  return (
    <div className="fixed inset-0 bg-[#f5f2ef] text-[#6f655f] overflow-hidden touch-none">
      <AnimatePresence mode="wait">
        {step < 5 ? (
          <motion.div
            key={step}
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 60 }}
            transition={{ duration: 0.8 }}
            className="
              h-screen
              flex
              items-center
              justify-start
              px-12
              md:px-28
            "
          >
            <h1
              className="
                text-5xl
                md:text-8xl
                font-light
                tracking-wide
                leading-tight
                max-w-5xl
              "
            >
              {phrases[step]}
            </h1>
          </motion.div>
        ) : (
          <motion.div
            key="identity"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="
              h-screen
              flex
              flex-col
              items-center
              justify-center
              text-center
              px-8
              -mt-12
            "
          >
            <img
              src="/logo-dp.png"
              alt="logo"
        className="w-40 md:w-[200px] mb-8"            />

            <h1
              className="
                text-2xl
                md:text-5xl
                font-light
                tracking-[0.28em]
                text-[#6f655f]
              "
            >
              ESTUDIO DANIELA PAMELY
            </h1>

        <div
              className="
              w-64
              md:w-[500px]
              h-[1px]
              bg-[#c69a7d]
              my-8
             "
  />

          <p
              className="
              uppercase
              tracking-[0.35em]
              text-[#c69a7d]
              text-xs
              md:text-base
             "
  >
              Arte · Arquitectura · Escritura
            </p>

            <button
             onClick={() => router.push("/inicio")}
              className="
              mt-10
              border
              border-[#c69a7d]
              px-12
              py-4
              uppercase
              tracking-[0.25em]
              transition-all
              duration-300
              hover:bg-[#c69a7d]
              hover:text-white
             "
  >
              Entrar
          </button>
        </motion.div>
                )}
      </AnimatePresence>
    </div>
  );
}