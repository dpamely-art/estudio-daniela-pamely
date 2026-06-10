import Link from "next/link";

export default function ObraPage() {
  return (
    <main
      className="
        min-h-screen

        px-8
        md:px-16
        xl:px-24

        pt-32
        pb-24

        flex
        flex-col
      "
    >
      {/* Obra */}

      <section
        className="
          flex
          justify-center
          items-center

          flex-1
        "
      >
        <div
          className="
            w-full
            max-w-5xl

            aspect-[4/3]

            rounded-3xl

            border
            border-white/10

            bg-white/5

            backdrop-blur-md

            flex
            items-center
            justify-center
          "
        >
          <p
            className="
              uppercase

              tracking-[0.35em]

              text-white/40
            "
          >
            Obra
          </p>
        </div>
      </section>

      {/* Placa museográfica */}

      <section
        className="
          mt-16

          max-w-3xl
        "
      >
        <p
          className="
            uppercase

            tracking-[0.35em]

            text-xs

            text-[#D8AE88]
          "
        >
          Linograbado
        </p>

        <h1
          className="
            mt-4

            text-white

            text-4xl
            md:text-6xl

            font-extralight
          "
        >
          Título de la obra
        </h1>

        <p
          className="
            mt-10

            text-white/70

            leading-8

            text-lg
          "
        >
          Aquí aparecerá la historia de la obra,
          el texto curatorial y el contexto que
          acompaña la pieza.
        </p>
      </section>

      {/* Acciones */}

      <section
        className="
          mt-20

          flex
          flex-wrap

          gap-6
        "
      >
        <button
          className="
            uppercase

            tracking-[0.30em]

            text-xs

            text-[#D8AE88]
          "
        >
          Añadir a mi colección →
        </button>

        <button
          className="
            uppercase

            tracking-[0.30em]

            text-xs

            text-white/60
          "
        >
          Conocer su historia →
        </button>

        <Link
          href="/arte/museo"
          className="
            uppercase

            tracking-[0.30em]

            text-xs

            text-white/40
          "
        >
          ← Volver al museo
        </Link>
      </section>
    </main>
  );
}