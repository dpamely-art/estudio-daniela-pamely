"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function ArquitecturaPageV2() {
  return (
    <main className="bg-[#F5F2ED] text-[#1E1E1E] overflow-x-hidden">
      {/* HERO */}
      <section className="relative h-screen min-h-[800px]">
        <Image
          src="/arquitectura-hero.png"
          alt="Arquitectura"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#5F8F87]/40" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-8 md:px-16 w-full">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="max-w-4xl"
            >
              <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] tracking-tight">
                Antes de dibujar un muro,
                <br />
                escucho una historia.
              </h1>

              <p className="mt-10 text-white/90 text-lg md:text-2xl font-light max-w-2xl leading-relaxed">
                Arquitectura, dirección creativa y diseño de espacios con
                intención.
              </p>

              <a
                href="#proceso"
                className="inline-flex mt-16 text-white text-lg border-b border-white pb-2 hover:opacity-70 transition"
              >
                Conoce mi proceso ↓
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section
        id="proceso"
        className="max-w-7xl mx-auto px-8 md:px-16 py-32 md:py-44"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-4xl md:text-6xl font-light mb-20">
            Mi proceso
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-[#ECE7E0] p-10 md:p-14">
              <h3 className="text-[#C26D52] text-2xl md:text-3xl font-light mb-10">
                Lo común
              </h3>

              <ul className="space-y-6 text-lg md:text-xl font-light">
                <li>
                  <span className="text-[#C26D52] mr-3">✕</span>
                  Diseño para la fotografía.
                </li>

                <li>
                  <span className="text-[#C26D52] mr-3">✕</span>
                  Repito fórmulas.
                </li>

                <li>
                  <span className="text-[#C26D52] mr-3">✕</span>
                  Persigo tendencias.
                </li>
              </ul>
            </div>

            <div className="bg-white p-10 md:p-14">
              <h3 className="text-[#5F8F87] text-2xl md:text-3xl font-light mb-10">
                Mi enfoque
              </h3>

              <ul className="space-y-6 text-lg md:text-xl font-light">
                <li>
                  <span className="text-[#5F8F87] mr-3">✓</span>
                  Escucho antes de proponer.
                </li>

                <li>
                  <span className="text-[#5F8F87] mr-3">✓</span>
                  Analizo antes de diseñar.
                </li>

                <li>
                  <span className="text-[#5F8F87] mr-3">✓</span>
                  Construyo identidad espacial.
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* MANIFIESTO */}
      <section className="max-w-7xl mx-auto px-8 md:px-16 py-20 md:py-40">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="uppercase tracking-[0.25em] text-sm text-[#5F8F87] mb-8">
              Manifiesto
            </p>

            <h2 className="text-5xl md:text-7xl font-light mb-12">
              Arquitectura
            </h2>

            <div className="space-y-8 text-lg md:text-2xl font-light leading-relaxed text-neutral-700">
              <p>Creo que la arquitectura no comienza con planos.</p>

              <p>Comienza con preguntas.</p>

              <p>
                Cada espacio es una conversación entre quienes lo habitan, su
                contexto y el tiempo.
              </p>

              <p>
                Mi trabajo consiste en escuchar esa conversación y traducirla en
                forma, materia y experiencia.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="relative aspect-[4/5]"
          >
            <Image
              src="/arquitectura-manifiesto.png"
              alt="Manifiesto"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="max-w-7xl mx-auto px-8 md:px-16 py-20 md:py-40">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="relative aspect-[4/5]"
          >
            <Image
              src="/arquitectura-servicios.png"
              alt="Servicios"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="uppercase tracking-[0.25em] text-sm text-[#C26D52] mb-8">
              Servicios
            </p>

            <div className="space-y-10">
              {[
                "Arquitectura",
                "Dirección creativa",
                "Gestión de proyectos",
                "Control físico-financiero",
                "Construcción",
              ].map((item) => (
                <div
                  key={item}
                  className="border-b border-[#D9D2C9] pb-6"
                >
                  <h3 className="text-3xl md:text-5xl font-light">
                    {item}
                  </h3>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROYECTOS */}
      <section className="max-w-7xl mx-auto px-8 md:px-16 py-24 md:py-44">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-5xl md:text-7xl font-light mb-24">
            Proyectos seleccionados
          </h2>

          <div className="grid lg:grid-cols-3 gap-12">
            {[
              {
                title: "Casa Norvann",
                image: "/casa-norvann.png",
                href: "/arquitectura/casa-norvann",
              },
              {
                title: "Casa López Cortés",
                image: "/casa-lopez-cortes.png",
                href: "/arquitectura/casa-lopez-cortes",
              },
              {
                title: "Rescate de espacios públicos",
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

                  <div className="h-px bg-[#C26D52] w-0 group-hover:w-full transition-all duration-500 mt-4" />
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CONTACTO */}
      <section className="relative min-h-[80vh] flex items-center">
        <Image
          src="/arquitectura-contacto.png"
          alt="Contacto"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/35" />

        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 w-full">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-white text-5xl md:text-7xl lg:text-8xl font-light max-w-4xl leading-tight">
              ¿En qué puedo ayudarte?
            </h2>

            <div className="mt-20 flex flex-col gap-8">
              <a
                href="#"
                className="text-white text-2xl md:text-4xl font-light hover:text-[#C26D52] transition-colors duration-300"
              >
                Instagram
              </a>

              <a
                href="#"
                className="text-white text-2xl md:text-4xl font-light hover:text-[#C26D52] transition-colors duration-300"
              >
                LinkedIn
              </a>

              <a
                href="#"
                className="text-white text-2xl md:text-4xl font-light hover:text-[#C26D52] transition-colors duration-300"
              >
                WhatsApp Business
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}