"use client";

import { motion, Variants } from "framer-motion";
import { useRouter } from "next/navigation";
import Footer from "@/app/components/Footer";

const ivory = "#F2EEE8";
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

export default function consultoriaestrategicapage() {
  const router = useRouter();

  return (
    <main
  className="
    overflow-x-hidden
    text-red-500
  "

  style={{
    backgroundImage: "url('/background-servicios5.png')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top center",
    backgroundSize:"cover"
  }}
>

      <button
      style={{ color: ivory }}
        onClick={()=>{
router.push("/arquitectura#servicios");
}}
        className="
          fixed
          top-6
          left-6
          z-50
          text-sm
          uppercase
          tracking-[0.2em]
          text-[#F2EEE8]
          hover:opacity-70
          transition-opacity
        "
      >
        ← Servicios
      </button>
            {/* HERO */}

      <section className="relative min-h-screen flex items-center justify-center px-8">

        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.02),rgba(0,0,0,0.08))]" />

        <motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeUp}
  className="max-w-5xl mx-auto md:pl-12"
>
          <h1
  style={{ color: ivory }}
  className="
    text-5xl
    md:text-7xl
    lg:text-[7rem]
    font-light
    leading-[0.95]
    tracking-tight
  "
>
  Las mejores decisiones comienzan
  <br />
  con las preguntas correctas.
</h1>

          <div
            className="
              mt-20
              flex
              flex-col
              items-center
              gap-4
              text-[#F2EEE8]
            "
          >
            <span
            style={{ color: ivory }}
              className="
                uppercase
                tracking-[0.35em]
                text-xs
              "
            >
              desliza
            </span>

            <span
  style={{ color: ivory }}
  className="
    text-xl
    transition-opacity
  "
>
  ↓
</span>
          </div>
        </motion.div>

      </section>
            {/* INTRODUCCIÓN */}

      <section className="py-32 md:py-44 px-8 md:px-16">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-5xl mx-auto"
        >

          <h2
          style={{ color: ivory }}
  className="
    text-5xl
    md:text-7xl
    font-light
    leading-[0.95]
    tracking-tight
    text-[#F2EEE8]
    mb-12
  "
          >
            Consultoría 
            <br />
            estratégica
          </h2>

          <div className="w-20 h-px bg-[#F2EEE8] mb-12" />

          <p
          style={{ color: ivory }}
            className="
              max-w-3xl
              text-xl
              md:text-2xl
              leading-[1.9]
              font-light
              text-[#F2EEE8]
            "
          >
            Antes de construir una solución, es necesario comprender el problema desde una mirada amplia, crítica y estratégica.
          </p>

          <p
            style={{ color: ivory }}
            className="
              max-w-3xl
              mt-10
              text-lg
              md:text-xl
              leading-[1.9]
              font-light
              text-[#F2EEE8]
            "
          >
            No todos los proyectos requieren iniciar una obra o desarrollar un diseño arquitectónico. 
            En muchas ocasiones, lo más valioso es contar con una visión externa que permita analizar 
            escenarios, identificar oportunidades y construir una ruta clara para la toma de decisiones.

            La consultoría estratégica ofrece un espacio de reflexión y análisis donde la arquitectura, 
            la planeación y la gestión se convierten en herramientas para resolver problemas complejos 
            con una perspectiva integral.
          </p>

        </motion.div>

      </section>
            {/* ¿QUÉ INCLUYE? */}

      <section className="py-24 md:py-36 px-8 md:px-16 bg-transparent">

        <motion.div
        style={{ color: ivory }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-6xl mx-auto"
        >

          <h2
            className="
              text-4xl
              md:text-6xl
              font-light
              tracking-tight
              mb-28
            "
          >
            ¿Qué incluye?
          </h2>

          <div className="grid md:grid-cols-2 gap-16">

            {[
              {
                number: "01",
                title: "Diagnóstico estratégico",
                text:
                  "Analizamos el contexto, los objetivos y las condiciones particulares del proyecto para comprender su situación actual e identificar oportunidades de mejora.",
              },
              {
                number: "02",
                title: "Evaluación de alternativas",
                text:
                  "Exploramos distintos escenarios posibles, valorando ventajas, riesgos e implicaciones para construir decisiones fundamentadas.",
              },
              {
                number: "03",
                title: "Definición de estrategias",
                text:
                  "Desarrollamos líneas de acción que articulen recursos, tiempos y objetivos, favoreciendo una implementación ordenada y viable.",
              },
              {
                number: "04",
                title: "Acompañamiento en decisiones",
                text:
                  "Brindamos una perspectiva técnica y estratégica durante procesos clave, fortaleciendo la capacidad de análisis y la confianza en la toma de decisiones.",
              },
            ].map((item) => (

              <div
                key={item.number}
                className="border-t border-white/40 pt-8"
              >

                <p
                  style={{ color: ivory }}
                  className="
                    text-[#F2EEE8
                    ]
                    text-sm
                    tracking-[0.3em]
                    uppercase
                    mb-4
                  "
                >
                  {item.number}
                </p>

                <h3
                  className="
                    text-3xl
                    font-light
                    mb-6
                  "
                >
                  {item.title}
                </h3>

                <p
  style={{ color: ivory }}
  className="
    text-[#F2EEE8]/90
    leading-[1.9]
    text-lg
  "
>
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </motion.div>

      </section>
            {/* INVERSIÓN */}

      <section className="py-28 md:py-40 px-8 md:px-16">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-5xl mx-auto"
        >

          <h2
            style={{ color: ivory }}
            className="
              text-4xl
              md:text-6xl
              font-light
              tracking-tight
              mb-10
            "
          >
            Inversión
          </h2>

          <div className="w-20 h-px bg-[#F2EEE8] mb-12" />

          <p
          style={{ color: ivory }}
            className="
              text-lg
              md:text-2xl
              leading-[1.9]
              font-light
              text-[#F2EEE8]/90
              max-w-4xl
            "
          >
            Cada proceso de consultoría responde a necesidades específicas y, por ello, las propuestas se 
            desarrollan de manera personalizada, considerando el alcance y la complejidad de cada caso.
          </p>

          <p
          style={{ color: ivory }}
            className="
              mt-10
              text-base
              md:text-xl
              leading-[1.9]
              text-neutral-600
              max-w-4xl
            "
          >
            El verdadero valor de una consultoría estratégica no consiste únicamente en ofrecer respuestas, 
            sino en construir preguntas, criterios y herramientas que permitan tomar mejores decisiones a largo plazo.
          </p>

          <div
          style={{ color: ivory }}
            className="
              grid
              grid-cols-2
              md:grid-cols-4
              gap-10
              mt-20
            "
          >

            {[
              "Análisis",
              "Estrategia",
              "Visión",
              "Decisión",
            ].map((item) => (

              <div
                key={item}
                className="
                  border-t
                  border-white/40
                  pt-6
                "
              >
                <p
                style={{ color: ivory }}
                  className="
                    uppercase
                    tracking-[0.22em]
                    text-xs
                    text-[#F2EEE8]
                  "
                >
                  {item}
                </p>
              </div>

            ))}

          </div>

        </motion.div>

      </section>
            {/* CTA */}

      <section className="py-24 md:py-32 px-8 md:px-16">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-5xl mx-auto text-center"
        >

          <h2
          style={{ color: ivory }}
            className="
              text-5xl
              md:text-7xl
              font-light
              leading-[0.95]
              tracking-tight
            "
          >
            ¿Conversamos
            <br />
            sobre tu proyecto?
          </h2>

          <p
          style={{ color: ivory }}
            className="
              mt-10
              text-lg
              md:text-2xl
              font-light
              text-[#F2EEE8]/90
              leading-[1.9]
              max-w-3xl
              mx-auto
            "
          >
            Una buena decisión puede transformar todo un proyecto.

            Si te encuentras frente a una idea, una duda o un proyecto que requiere una mirada estratégica, 
            será un gusto acompañarte para analizar posibilidades y construir una ruta clara hacia su desarrollo.
          </p>

          <a
            href="https://api.whatsapp.com/send?phone=525540877942"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: ivory }}
            className="
              inline-flex
              mt-10
              uppercase
              tracking-[0.28em]
              text-sm
              text-[#F2EEE8]
              hover:opacity-70
              transition-opacity
            "
          >
            Iniciar conversación →
          </a>

        </motion.div>

      </section>

      <Footer />

    </main>
  );
}