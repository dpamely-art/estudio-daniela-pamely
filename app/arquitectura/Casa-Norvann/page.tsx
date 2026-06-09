"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "@/app/components/Footer";
import { useRouter } from "next/navigation";

const ivory = "#F2EEE8";
export default function CasaNorvannPage() {
      const router = useRouter();
  return (
    <>
<section
  className="
    relative
    isolate
    h-screen
    flex
    items-center
    justify-center
    overflow-hidden
  "
  style={{
  backgroundColor:"#1d1d1d",
  backgroundImage: "url('/casa-norvann.png')",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  backgroundSize: "cover",
}}

>

 <div className="absolute inset-0 z-0 bg-black/20" />

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
      z-20
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
        text-white/80
        mb-8
      "
    >
      Proyecto residencial
    </p>

    <div className="text-center">

  <p
  style={{ color: ivory }}
    className="
      uppercase
      tracking-[0.45em]
      text-xs
      md:text-sm
      text-white/80
      mb-6
    "
  >
    Diseño de interiores · 2025
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
    CASA NORVANN
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
      CASA NORVANN
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
  Espacios que acompañan la vida.
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
  Un proyecto de diseño de interiores concebido para transformar
  la cotidianidad en una experiencia de calma, identidad y permanencia.
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
        El proyecto busca equilibrar funcionalidad, identidad y
        sensibilidad espacial mediante una composición limpia,
        materiales honestos y una relación constante entre luz,
        vacío y materia.
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
  Habitar también
  <br />
  es una forma
  <br />
  de construir.
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
          Más que responder a una distribución funcional,
          el proyecto busca construir una experiencia de
          habitar. La organización espacial permite que la
          luz, las circulaciones y las relaciones entre los
          distintos ambientes generen una arquitectura
          flexible y atemporal.
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
          Cada decisión proyectual pretende equilibrar
          claridad formal, eficiencia y sensibilidad,
          entendiendo que la calidad de un espacio se
          encuentra tanto en sus proporciones como en la
          manera en que es vivido por quienes lo habitan.
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
      src="/CN-2.jpeg"
      alt="Casa Norvann"
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
          value: "Casa Norvann",
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
          value: "Diseño de Interiores",
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
      src="/CN-5.jpeg"
      alt="Casa Norvann"
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
      La arquitectura
      <br />
      también se construye
      <br />
      desde la memoria.
    </h2>

    <p
      className="
        text-xl
        leading-[2]
        font-light
        text-[#5A514A]
      "
    >
      Casa Norvann parte de la intención de crear un espacio
      donde las actividades cotidianas encuentren una relación
      natural con la luz, el vacío y la materialidad. Más que
      resolver un programa arquitectónico, el proyecto busca
      construir una experiencia de permanencia y apropiación.
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
      La arquitectura
      <br />
      permanece cuando
      <br />
      la vida comienza.
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
      Casa Norvann representa una búsqueda por construir
      espacios capaces de acompañar el tiempo, la memoria
      y la vida cotidiana. Más que una propuesta formal,
      es una reflexión sobre la manera en que habitamos
      el mundo.
    </p>

  </motion.div>

</section>
{/* SIGUIENTE PROYECTO */}

<section className="py-28 px-8 md:px-16">

  <Link
    href="/arquitectura/Casa-lopezcortes"
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
      Casa López
      <br />
      Cortés →
    </h2>

  </Link>

</section>
<Footer />
    </>

  );
}