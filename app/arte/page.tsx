"use client";

import { motion } from "framer-motion";

export default function ArtePage() {
  return (
    <main
      className="
        min-h-screen
        flex
        items-center
        justify-center
        px-8
        relative
        overflow-hidden
      "
    >
      {/* Fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/arte-background.png')",
        }}
      />

      {/* Velo */}
      <div className="absolute inset-0 bg-[#F7F4F1]/50" />

      {/* Contenido */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 text-center max-w-3xl"
      >
        <h1 className="text-7xl md:text-9xl font-light mb-10 text-[#C46A4A]">
          Arte
        </h1>

        <p className="text-3xl md:text-5xl font-light mb-8 italic text-[#C46A4A]">
          Muy pronto.
        </p>

        <p className="text-lg md:text-xl text-neutral-700 leading-relaxed">
          Obra original, procesos, exposiciones y proyectos en desarrollo.
          
        </p>

        <div className="mt-14 max-w-xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-light mb-6 text-[#C46A4A]">
            ¿Te gustaría estar en la inauguración?
          </h3>

          <p className="text-neutral-700 leading-relaxed mb-10">
            Déjame tu correo y te enviaré una invitación para descubrir la colección.
          </p>

          <form
  action="https://formsubmit.co/dpev.arq@gmail.com"
  method="POST"
  className="flex flex-col gap-4"
>
  <input
    type="hidden"
    name="_subject"
    value="Nueva solicitud de invitación - Arte"
  />

  <input
    type="hidden"
    name="_captcha"
    value="false"
  />

  <input
    type="hidden"
    name="_template"
    value="table"
  />

  <input
    type="hidden"
    name="_next"
    value="https://www.estudiodanielapamely.com/arte"
  />

  <input
    type="email"
    name="email"
    required
    placeholder="correo@ejemplo.com"
    className="
      w-full
      border
      border-[#C46A4A]
      text-[#C46A4A]
      px-8
      py-4
    "
  />

  <button
    type="submit"
    className="
      w-full
      bg-[#C46A4A]
      text-white
      px-8
      py-4
    "
  >
    Recibir invitación
  </button>
</form>
        </div>
      </motion.div>
    </main>
  );
}