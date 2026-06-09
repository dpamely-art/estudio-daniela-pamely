"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "@/app/components/Footer";
import { useRouter } from "next/navigation";

const ivory = "#F2EEE8";
export default function CasalopezcortesPage() {
      const router = useRouter();
  return (
    <>
<section
  className="
    relative
    h-screen
    flex
    items-center
    justify-center
    overflow-hidden
  "
  style={{
    backgroundColor: "#1d1d1d",
    backgroundImage: "url('/LC-1.jpeg')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
  }}
>

  <div className="absolute inset-0 bg-black/20" />

  <button
      style={{ color: ivory }}
        onClick={()=>{
router.push("/arquitectura#proyectos");
}}
    className="
      absolute
      top-10
      left-6
      md:left-10
      z-20
      uppercase
      tracking-[0.25em]
      text-sm
      text-white/80
      hover:opacity-70
      transition
    "
  >
    ← Proyectos
  </button>

  <motion.div
  style={{ color: ivory }}
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="
      relative
      z-10
      text-center
      max-w-5xl
      px-6
    "
  >

    <p
      className="
        uppercase
        tracking-[0.35em]
        text-sm
        text-[#C26D52]
        mb-8
      "
    >
      Proyecto residencial
    </p>

    <div className="text-center">

  <p
    className="
      uppercase
      tracking-[0.45em]
      text-xs
      md:text-sm
      text-[#212121]
      mb-6
    "
  >
    Diseño arquitectónico · 2017
  </p>

  <h1
  style={{ color: ivory }}
    className="
      text-6xl
      md:text-8xl
      font-light
      tracking-[0.08em]
      text-white/80
    "
  >
    CASA LÓPEZ CORTÉS
  </h1>

</div>

    <div
    style={{ color: ivory }}
      className="
        mt-20
        flex
        flex-col
        items-center
        gap-3
      "
    >
      <span
        className="
          uppercase
          tracking-[0.35em]
          text-xs
          text-white/80
        "
      >
        DESLIZA
      </span>

      <span
      style={{ color: ivory }}
        className="
          text-xl
          text-white/80
          animate-bounce
        "
      >
        ↓
      </span>
    </div>

  </motion.div>

</section>
<section className="py-32 md:py-44 px-8 md:px-16">

  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9 }}
    viewport={{ once: true }}
    className="max-w-6xl mx-auto"
  >

    <p
      className="
        uppercase
        tracking-[0.35em]
        text-sm
        text-[#C26D52]
      "
    >
      CASA LÓPEZ CORTÉS
      </p>
    <p
  className="
    mt-12
    text-2xl
    md:text-4xl
    font-light
    leading-[1.45]
    tracking-tight
    max-w-4xl
    mx-auto
  "
>
Toda arquitectura comienza mucho antes de ser construida.
</p>

<p
  className="
    mt-10
    text-base
    md:text-xl
    font-light
    leading-[1.9]
    text-[#B8ADA1]
    max-w-4xl
    mx-auto
  "
>
  Nace como un ejercicio de proyecto donde la arquitectura se entiende 
  como una herramienta para ordenar la vida cotidiana a través del espacio. Desde sus 
  primeras decisiones, la propuesta busca construir una vivienda clara, serena y atemporal, 
  en la que la proporción, la luz y la materialidad dialogan de manera natural.
</p>
<div
  className="
    mt-20
    flex
    flex-col
    items-center
    justify-center
    gap-2
  "
>

</div>
      <p
        className="
          mt-12
          text-lg
          md:text-[1.35rem]
          leading-[1.9]
          font-light
          text-[#5A514A]
        "
      >
        El proyecto ejecutivo fue concebido como un sistema integral en el que cada elemento responde 
        a una lógica común. Más que resolver únicamente una distribución funcional, la arquitectura 
        establece relaciones entre recorridos, escalas y vacíos que permiten habitar el espacio con sencillez y permanencia.
      </p>



  </motion.div>

</section>
{/* CONCEPTO */}

<section className="py-32 md:py-40 px-8 md:px-16">

  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9 }}
    viewport={{ once: true }}
    className="max-w-7xl mx-auto"
  >

    <div className="grid lg:grid-cols-2 gap-24">

      <div>

       <p
  className="
    uppercase
    tracking-[0.35em]
    text-xs
    text-[#C26D52]
  "
>
  Concepto
</p>

<h2
  className="
    mt-8
    text-4xl
    md:text-6xl
    font-light
    leading-[1.05]
    tracking-tight
    text-[#5A514A]
    max-w-3xl
  "
>
  La arquitectura comienza  
  <br />
  cuando una idea
  <br />
  encuentra su lugar.
</h2>

      </div>

      <div>

        <p
          className="
            text-lg
            md:text-xl
            leading-[2]
            font-light
            text-[#5A514A]
          "
        >
          Cada decisión proyectual parte de una idea fundamental: 
          una buena arquitectura no depende de la complejidad de 
          sus formas, sino de la claridad con la que organiza la 
          experiencia de quienes la viven. Por ello, la propuesta
          privilegia una composición equilibrada, una materialidad 
          honesta y una identidad capaz de trascender el paso del tiempo.
        </p>

        <p
          className="
mt-16
text-lg
md:text-[1.35rem]
leading-[2]
font-light
text-[#5A514A]
max-w-3xl
"
        >
          Diseñada en 2017, Casa López Cortés representa una etapa fundamental 
          dentro de mi desarrollo profesional como arquitecta. El proyecto 
          significó la oportunidad de traducir una idea en un documento técnico 
          completo, donde cada plano, detalle y decisión debía anticipar la futura construcción de la vivienda.
        </p>

      </div>

    </div>

  </motion.div>

</section>
<section className="py-8 md:py-16">

  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
  >

    <img
      src="/LC-3.jpeg"
      alt="Casa López Cortés"
      className="
        w-full
        h-[75vh]
        object-cover
      "
    />

  </motion.div>

</section>
{/* FICHA TÉCNICA */}

<section className="py-28 md:py-36 px-8 md:px-16">

  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9 }}
    viewport={{ once: true }}
    className="max-w-7xl mx-auto"
  >

    <div className="grid md:grid-cols-4 gap-12">

      {[
        {
          title: "Proyecto",
          value: "Casa López Cortés",
        },
        {
          title: "Tipología",
          value: "Residencial",
        },
        {
          title: "Ubicación",
          value: "México",
        },
        {
          title: "Estado",
          value: "Proyecto Arquitectónico",
        },
      ].map((item) => (

        <div
          key={item.title}
          className="
            border-t
            border-[#C26D52]
            pt-6
          "
        >

          <p
            className="
              uppercase
              tracking-[0.25em]
              text-xs
              text-[#C26D52]
            "
          >
            {item.title}
          </p>

          <p
            className="
              mt-4
              text-2xl
              font-light
              leading-relaxed
              text-[#5A514A]
            "
          >
            {item.value}
          </p>

        </div>

      ))}

    </div>

  </motion.div>

</section>

{/* GALERÍA */}

<section className="py-10">

  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
    className="w-full"
  >

    <img
      src="/LC-4.jpeg"
      alt="Casa López Cortés"
      className="
        w-full
        h-[90vh]
        object-cover
      "
    />

  </motion.div>

</section>
{/* HISTORIA */}

<section className="py-32 md:py-40 px-8 md:px-16">

  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9 }}
    viewport={{ once: true }}
    className="max-w-5xl mx-auto"
  >

    <p
      className="
        uppercase
        tracking-[0.35em]
        text-sm
        text-[#C26D52]
        mb-8
      "
    >
      HISTORIA
    </p>

    <h2
      className="
        text-5xl
        md:text-6xl
        font-light
        leading-[0.95]
        tracking-tight
        text-[#5A514A]
        mb-12
      "
    >
      Toda obra se construye dos veces:  
      <br />
      primero en el pensamiento
      <br />
      y después en el espacio.
    </h2>

    <p
      className="
        text-xl
        leading-[2]
        font-light
        text-[#5A514A]
      "
    >
      Casa López Cortés refleja una manera de entender la arquitectura basada en el rigor 
      del proyecto y en la responsabilidad de imaginar con precisión aquello que aún no existe. 
      Cada línea dibujada representa una decisión sobre la forma en que una persona vivirá, recorrerá y recordará un lugar.
      La arquitectura no comienza con el concreto ni termina con la construcción. Comienza con una idea y permanece 
      en la experiencia cotidiana de quienes la habitan. 
    </p>

    <p
      className="
        mt-12
        text-lg
        leading-[2]
        font-light
        text-[#5A514A]
      "
    >
      Cada decisión responde a la búsqueda de una arquitectura
      serena, capaz de permanecer vigente con el paso del tiempo,
      privilegiando proporción, claridad espacial y honestidad
      constructiva.
    </p>

  </motion.div>

</section>

{/* REFLEXIÓN */}

<section className="py-36 md:py-48 px-8 md:px-16">

  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
    className="max-w-5xl mx-auto text-center"
  >

    <p
      className="
        uppercase
        tracking-[0.35em]
        text-sm
        text-[#C26D52]
        mb-10
      "
    >
      REFLEXIÓN
    </p>

    <h2
      className="
        text-5xl
        md:text-7xl
        font-light
        leading-[0.95]
        tracking-tight
        text-[#5A514A]
      "
    >
      Un diseño para acompañar
      <br />
      permanecer
      <br />
      y dar sentido a la vida.
    </h2>

    <p
      className="
        mt-14
        text-lg
        md:text-2xl
        leading-[2]
        font-light
        text-[#5A514A]
        max-w-3xl
        mx-auto
      "
    >
      Con el paso del tiempo he comprendido que los proyectos permanecen no 
      solo por su construcción, sino por la claridad de las ideas que les 
      dieron origen. Casa López Cortés me recuerda que la buena arquitectura 
      no busca protagonismo; busca permanecer, acompañar y dar sentido a la vida 
      cotidiana de quienes la habitan.
    </p>

  </motion.div>

</section>
{/* SIGUIENTE PROYECTO */}

<section className="py-28 px-8 md:px-16">

  <Link
    href="/arquitectura/Rescate-espacios"
    className="
      group
      block
      max-w-7xl
      mx-auto
      border-t
      border-[#C26D52]
      pt-10
    "
  >

    <p
      className="
        uppercase
        tracking-[0.35em]
        text-xs
        text-[#C26D52]
      "
    >
      Siguiente proyecto
    </p>

    <h2
      className="
        mt-6
        text-3xl
        md:text-5xl
        font-light
        leading-none
        tracking-tight
        text-[#5A514A]
        transition-all
        duration-500
        group-hover:translate-x-4
      "
    >
      Rescate de
      <br />
      Espacios públicos →
    </h2>

  </Link>

</section>
<Footer />
    </>

  );
}