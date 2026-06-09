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
    backgroundImage: "url('/RP-3.jpeg')",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
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
        text-[#F2EEE8]
        mb-8
      "
    >
      Proyecto urbano
    </p>

    <div className="text-center">

  <p
    className="
      uppercase
      tracking-[0.45em]
      text-xs
      md:text-sm
      text-[#F2EEE8]
      mb-6
    "
  >
    Diseño arquitectónico · 2018
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
    RESCATE DE ESPACIOS PÚBLICOS
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
      RESCATE DE ESPACIOS PÚBLICOS
      </p>
    <p
  className="
    mt-12
    text-2xl
    md:text-4xl
    font-light
    leading-[1.45]
    tracking-tight
    text-[#F2EEE8]
    max-w-4xl
    mx-auto
  "
>
Espacios públicos como lugares de encuentro.
</p>

<p
  className="
    mt-10
    text-base
    md:text-xl
    font-light
    leading-[1.9]
    text-[#F2EEE8]/85
    max-w-3xl
    mx-auto
  "
>
  Un anteproyecto concebido para recuperar el espacio público como escenario cotidiano de convivencia, identidad y apropiación social.
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
        Más que intervenir una superficie urbana, la propuesta busca construir relaciones entre 
        las personas y el territorio mediante una estrategia arquitectónica capaz de integrar paisaje, 
        movilidad y permanencia.
        El proyecto entiende que una ciudad se transforma cuando sus espacios comunes vuelven a pertenecer a quienes los habitan.
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
  La ciudad también se diseña
  <br />
  desde quienes la viven.
  <br />
  
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
          El espacio público constituye una de las expresiones más importantes de la vida colectiva. 
          Por ello, el proyecto plantea una intervención que prioriza la escala humana, la accesibilidad 
          y la continuidad de los recorridos, entendiendo la arquitectura como una herramienta para fortalecer el tejido social.

          
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
          Cada decisión proyectual busca equilibrar paisaje, infraestructura y permanencia, generando espacios flexibles 
          capaces de adaptarse a distintas formas de apropiación cotidiana.
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
      src="/RP-4.jpeg"
      alt="Rescate de espacios públicos"
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
          value: "Rescate de Espacios Públicos",
        },
        {
          title: "Tipología",
          value: "Espacio público · Anteproyecto urbano",
        },
        {
          title: "Ubicación",
          value: "México",
        },
        {
          title: "Estado",
          value: "Anteproyecto arquitectónico",
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
      src="/RP-6.jpeg"
      alt="Rescate de espacios públicos"
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
      Toda ciudad
      <br />
      guarda posibilidades
      <br />
      que desean ser descubiertas.
    </h2>

    <p
      className="
        text-xl
        leading-[2]
        font-light
        text-[#5A514A]
      "
    >
      Este anteproyecto surge de la reflexión sobre el papel del espacio público como 
      infraestructura social. Más que diseñar un lugar específico, propone una metodología 
      para recuperar áreas urbanas mediante la creación de ambientes seguros, accesibles y capaces de generar comunidad.

      
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
      La propuesta reconoce que una intervención urbana no se limita a incorporar elementos 
      físicos, sino que debe construir oportunidades para el encuentro, el descanso, la cultura y la permanencia.
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
      La mejor arquitectura pública 
      <br />
      es aquella 
      <br />
      que deja de sentirse ajena.
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
      Rescatar un espacio no significa únicamente transformarlo físicamente, 
      sino devolverle significado para quienes lo recorren todos los días. 
      Este anteproyecto representa una búsqueda por entender que la calidad urbana 
      nace cuando la arquitectura se convierte en una extensión natural de la vida colectiva.
    </p>

  </motion.div>

</section>
{/* SIGUIENTE PROYECTO */}

<section className="py-28 px-8 md:px-16">

  <Link
    href="/arquitectura#proyectos"
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
      
      <br />
      Volver →
    </h2>

  </Link>

</section>
<Footer />
    </>

  );
}