"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

export default function ArquitecturaPageV2() {
  return (
    <main className="bg-[#F7F4F1] text-[#212121] overflow-x-hidden">
      
      {/* HERO */}
      <section className="relative h-screen min-h-[800px]">
      <Image
  src="/arquitectura-hero.png"
  alt="Arquitectura"
  fill
  className="object-cover"
/>

<div className="absolute inset-0 bg-[#000000]/5" />

<div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-8 md:px-16 w-full">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="max-w-4xl"
            >
              <h1
              className="text-[#F3ECE2] text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] tracking-tight"
              style={{
               textShadow: "0 4px 18px rgba(0,0,0,0.22)"
              }}
            >

                Antes de dibujar un muro,
                <br />
                escucho una historia.
              </h1>

              <p className="mt-10 text-[#C49A83] text-lg md:text-2xl font-normal max-w-2xl leading-relaxed">
                Arquitectura, dirección creativa y diseño de espacios con
                intención.
              </p>

              <a
               href="#proceso"
               className="
               inline-flex
               flex-col
               gap-4
               mt-20
               uppercase
               tracking-[0.35em]
               text-[#2B2B2B]
               text-sm
              "
             >
               <span>CONOCE MI PROCESO</span>

               <span className="self-center text-xl">
               ↓
               </span>

               <span className="self-center text-xs tracking-[0.35em]">
               2026
               </span>
          </a>
            </motion.div>
          </div>
        </div>
      </section>

    {/* PROCESO */}
<section
  id="proceso"
  className="bg-[#F7F4F1]"
>
  <div className="max-w-6xl mx-auto px-8 md:px-16 py-32 md:py-44">

    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
    >
      <h2 className="text-6xl md:text-[6.5rem] leading-[0.95] font-light mb-36">
        Antes del primer
        <br />
        trazo.
      </h2>

      <div className="space-y-56">

        {/* 01 */}
        <div className="relative">
          <span className="absolute -left-2 -top-14 text-[9rem] md:text-[11rem] font-light text-black/[0.02] leading-none">
            01
          </span>

          <div className="relative max-w-2xl">
            <h3 className="text-3xl md:text-4xl font-light mb-6">
              Escucho antes de proponer.
            </h3>

            <p className="text-lg md:text-xl text-neutral-600 leading-relaxed">
              Comprender a quienes habitarán el espacio es parte esencial del diseño.
            </p>
          </div>
        </div>

        {/* 02 */}
        <div className="relative">
          <span className="absolute left-20 -top-14 text-[9rem] md:text-[11rem] font-light text-black/[0.02] leading-none">
            02
          </span>

          <div className="relative ml-20 md:ml-40 max-w-2xl">
            <h3 className="text-3xl md:text-4xl font-light mb-6">
              Analizo antes de diseñar.
            </h3>

            <p className="text-lg md:text-xl text-neutral-600 leading-relaxed">
              La arquitectura no comienza con respuestas. Comienza con preguntas.
            </p>
          </div>
        </div>

        {/* 03 */}
        <div className="relative">
          <span className="absolute left-40 -top-14 text-[9rem] md:text-[11rem] font-light text-black/[0.02] leading-none">
            03
          </span>

          <div className="relative ml-40 md:ml-80 max-w-2xl">
            <h3 className="text-3xl md:text-4xl font-light mb-6">
              Construyo identidad espacial.
            </h3>

            <p className="text-lg md:text-xl text-neutral-600 leading-relaxed">
              Cada proyecto merece una voz propia, una atmósfera propia y una forma única de ser habitado.
            </p>
          </div>
        </div>

      </div>
    </motion.div>

  </div>
</section>

      {/* MANIFIESTO */}
<section className="max-w-[1700px] mx-auto pl-8 md:pl-16 pr-0 py-20 md:py-40">
  <div className="grid lg:grid-cols-[0.85fr_1.3fr] gap-20 items-center">

    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className="flex flex-col justify-center"
    >

      <h2 className="text-5xl md:text-6xl font-light italic text-[#5F8F87] mb-20 text-center">
        Arquitectura
      </h2>

      <div className="max-w-xl mx-auto space-y-10 text-base md:text-lg font-light leading-relaxed text-neutral-700 text-center">

        <p>
          Cada proyecto comienza con una historia.
        </p>

        <p>
          Una forma de vivir, una visión y una aspiración.
        </p>

        <p>
          Mi trabajo consiste en descubrir esas capas invisibles y traducirlas en luz, materia y atmósfera.
        </p>

        <p>
          A través de la proporción, la sensibilidad y el detalle, construyo espacios que reflejan la identidad de quienes lo habitan.
        </p>

        <p className="italic text-neutral-800 pt-1">
          Arquitectura concebida para permanecer, evolucionar y adquirir significado con el tiempo.
        </p>

      </div>

    </motion.div>

    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className="relative h-[580px] md:h-[720px]"
    >
      <Image
        src="/arquitectura-manifiesto.png"
        alt="Arquitectura"
        fill
        className="object-cover"
      />
    </motion.div>

  </div>
</section>

 {/* PROYECTOS */}
<section className="max-w-7xl mx-auto px-8 md:px-16 pt-16 pb-24 md:pt-20 md:pb-32">
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeUp}
  >
    <h2 className="text-5xl md:text-7xl font-light mb-24">
      Proyectos
    </h2>

    <div className="grid lg:grid-cols-3 gap-12">
      {[
        {
          title: "Casa Norvann",
          category: "Diseño de interiores",
          image: "/casa-norvann.png",
          href: "/arquitectura/casa-norvann",
        },
        {
          title: "Casa López Cortés",
          category: "Proyecto ejecutivo y construcción",
          image: "/casa-lopez-cortes.png",
          href: "/arquitectura/casa-lopez-cortes",
        },
        {
          title: "Rescate de espacios públicos",
          category: "Espacio urbano",
          image: "/rescate-espacios-publicos.png",
          href: "/arquitectura/rescate-espacios-publicos",
        },
      ].map((project) => (
        <Link
          key={project.title}
          href={project.href}
          className="group block"
        >
          <div className="relative overflow-hidden aspect-[4/5]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          <div className="mt-8">
            <h3 className="text-2xl md:text-3xl font-light">
              {project.title}
            </h3>

            <p className="mt-3 text-sm uppercase tracking-[0.18em] text-neutral-500">
              {project.category}
            </p>

            <div className="h-px bg-[#C26D52] w-0 group-hover:w-full transition-all duration-500 mt-4" />
          </div>
        </Link>
      ))}
    </div>
  </motion.div>
</section>

{/* SERVICIOS */}
<section className="max-w-7xl mx-auto px-8 md:px-16 py-20 md:py-28">

  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeUp}
  >

    <h2 className="text-center text-5xl md:text-7xl font-light mb-6">
      ¿En qué puedo ayudarte?
    </h2>

    <div className="w-16 h-px bg-[#C26D52] mx-auto mb-20" />
    <p className="max-w-3xl mx-auto text-center text-lg md:text-xl font-light text-neutral-600 leading-relaxed mb-20">
  Cada proyecto requiere necesidades distintas.
  Algunas personas llegan con una idea, otras con un terreno,
  una obra en proceso o una decisión importante por tomar.
  Puedo acompañarte en cualquiera de esas etapas.
</p>

    <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-6">

      <div className="border border-[#E7E0D8] p-8 min-h-[320px]">
        <h3 className="text-2xl font-light mb-6">
          Diseño arquitectónico
        </h3>

        <p className="text-neutral-600 leading-relaxed">
          Desde la primera idea hasta el proyecto ejecutivo.
          Espacios concebidos para responder a quienes los habitan.
        </p>
      </div>

      <div className="border border-[#E7E0D8] p-8 min-h-[320px]">
        <h3 className="text-2xl font-light mb-6">
          Planeación de proyectos
        </h3>

        <p className="text-neutral-600 leading-relaxed">
          Estrategia, coordinación y claridad para transformar una visión
          en una ruta realizable.
        </p>
      </div>

      <div className="border border-[#E7E0D8] p-8 min-h-[320px]">
        <h3 className="text-2xl font-light mb-6">
          Dirección y supervisión de obra
        </h3>

        <p className="text-neutral-600 leading-relaxed">
          Acompañamiento técnico para asegurar calidad, tiempo y ejecución
          durante cada etapa de la obra.
        </p>
      </div>

      <div className="border border-[#E7E0D8] p-8 min-h-[320px]">
        <h3 className="text-2xl font-light mb-6">
          Control físico-financiero
        </h3>

        <p className="text-neutral-600 leading-relaxed">
          Seguimiento integral de avance, presupuesto y cumplimiento
          para una toma de decisiones informada.
        </p>
      </div>

      <div className="border border-[#E7E0D8] p-8 min-h-[320px]">
        <h3 className="text-2xl font-light mb-6">
          Consultoría estratégica
        </h3>

        <p className="text-neutral-600 leading-relaxed">
          Análisis y acompañamiento para proyectos que requieren visión,
          estructura y dirección a largo plazo.
        </p>
      </div>

    </div>

  </motion.div>

</section>

{/* CONTACTO */}
<section className="relative min-h-screen flex items-start">

  <Image
    src="/arquitectura-contacto.png"
    alt="Contacto"
    fill
    className="object-cover"
  />

  <div className="absolute inset-0 bg-black/25" />

  <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 w-full pt-40 md:pt-52">

    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
    >

      <h2 className="text-white text-6xl md:text-8xl font-light mb-12">
        ¿Comenzamos?
      </h2>

      <p className="text-white/90 text-xl md:text-3xl font-light mb-20">
        Toda arquitectura comienza con una conversación.
      </p>

      <a
        href="https://api.whatsapp.com/send?phone=525540877942"
        target="_blank"
        rel="noopener noreferrer"
        className="
          inline-flex
          items-center
          text-white
          text-3xl
          md:text-5xl
          font-light
          hover:text-[#C26D52]
          transition-colors
          duration-300
        "
      >
        Iniciar conversación →
      </a>

    </motion.div>

  </div>

</section>

    </main>
  );
}