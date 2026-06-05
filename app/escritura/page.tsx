"use client";

import { useRouter } from "next/navigation";

export default function Escritura() {
  const router = useRouter();

  return (

    <main className="min-h-screen flex flex-col items-center px-6 text-center pt-32 md:pt-40 relative overflow-hidden">

  <button
    onClick={() => router.push("/inicio")}
    className="
      fixed
      top-6
      left-6
      z-50
      text-sm
      uppercase
      tracking-[0.2em]
      text-[#212121]
      drop-shadow-[0_2px_8px_rgba(255,255,255,0.5)]
      transition-opacity
      hover:opacity-70
    "
  >
    ← Inicio
  </button>

      {/* Fondo */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: -1,
          backgroundImage:
          "linear-gradient(rgba(255,255,255,0.55), rgba(255,255,255,0.55)), url('/background-escri.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 1,
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Título */}
        <h1
          className="
            fade-up
            text-5xl
            md:text-7xl
            italic
            font-light
            tracking-[0.04em]
            text-[#4F6588]
            mb-12
          "
        >
          Escritura
        </h1>

        {/* Línea */}
        <div
          className="fade-up delay-1 mb-24 mx-auto"
          style={{
            width: "140px",
            height: "2px",
            backgroundColor: "#C46A4A",
          }}
        />

        {/* Frase principal */}
        <p
          className="
            fade-up
            delay-2
            text-3xl
            md:text-5xl
            leading-[1.9]
            text-[#625852]
            font-light
            max-w-5xl
            mx-auto
          "
        >
          Hay libros que tardan años en escribirse 
          porque primero necesitan ser vividos.
        </p>

        {/* Texto secundario */}
        <div
          className="
            fade-up
            delay-3
            mt-16
            text-[#887d76]
            text-lg
            md:text-xl
            italic
          "
        >
          Algunas historias todavía están ocurriendo.
        </div>

        <div
          className="
            fade-up
            delay-3
            mt-2
            text-[#887d76]
            text-lg
            md:text-xl
            italic
          "
        >
          Otras apenas comienzan.
        </div>

        {/* Comunidad */}
        <div
          className="
            fade-up
            delay-3
            mt-36
            max-w-xl
            mx-auto
            text-center
          "
        >
          <p
            className="
              text-[#756a63]
              text-lg
              md:text-xl
              leading-[1.9]
              mb-8
            "
          >
            Si quieres caminar conmigo mientras estas historias toman forma,
            deja tu correo.
          </p>

          <p
            className="
              text-[#9a8f88]
              italic
              leading-[1.8]
              mb-10
            "
          >
            Te avisaré cuando publique nuevos textos,
            libros, proyectos y noticias del estudio.
          </p>

          <form
  action="https://formsubmit.co/dpev.arq@gmail.com"
  method="POST"
  className="
    flex
    flex-col
    md:flex-row
    gap-4
    justify-center
    items-center
  "
>
  <input
  type="hidden"
  name="_subject"
  value="Nuevo contacto - Puerta Escritura"
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
  value="https://www.estudiodanielapamely.com/escritura"
/>
            <input
              type="email"
              name="email"
              placeholder="tu correo electrónico"
              className="
                w-full
                md:w-80
                px-4
                py-3
                border
                border-[#d6ccc5]
                bg-white/70
                text-[#756a63]
                focus:outline-none
              "
              required
            />

            <button
              type="submit"
              className="
                px-8
                py-3
                bg-[#4F6588]
                text-white
                tracking-[0.15em]
                uppercase
                text-sm
                hover:opacity-80
                transition
              "
            >
              Quiero saber más
            </button>
          </form>

          <p
            className="
              mt-8
              text-sm
              italic
              text-[#9a8f88]
            "
          >
            Sin spam. Solo historias, arte y proyectos.
          </p>

          {/* Aire inferior */}
          <div className="h-40" />
        </div>

      </div>

    </main>
  );
}