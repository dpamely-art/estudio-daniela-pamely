import Link from "next/link";
import { collections } from "../data/collections";

export default function MuseoPage() {
  return (
    <main
      className="
        min-h-screen

        flex
        flex-col

        justify-center

        px-8
        md:px-16
        xl:px-24

        pt-36
        pb-24
      "
    >
      {/* Introducción */}

      <section className="max-w-4xl">
        <p
          className="
            uppercase

            tracking-[0.45em]

            text-xs

            text-[#D8AE88]
          "
        >
          MUSEO
        </p>

        <h1
          className="
            mt-6

            text-white

            font-extralight

            leading-[1]

            text-5xl
            md:text-7xl
          "
        >
          Las colecciones no están
          <br />
          ordenadas por importancia.
        </h1>

        <p
          className="
            mt-10

            text-white/70

            text-xl

            leading-9

            max-w-2xl
          "
        >
          Cada una responde a una
          pregunta distinta.
        </p>
      </section>

      {/* Salas */}

      <section
        className="
          mt-24

          flex
          flex-col

          gap-10
        "
      >
        {collections.map((item) => (
          <Link
            key={item.id}
            href={item.route}
            className="
              group

              border-b
              border-white/10

              pb-8

              transition-all
              duration-500
            "
          >
            <p
              className="
                text-[#D8AE88]

                uppercase

                tracking-[0.35em]

                text-xs
              "
            >
              {item.number}
            </p>

            <h2
              className="
                mt-3

                text-white

                text-4xl
                md:text-6xl

                font-extralight

                group-hover:text-[#D8AE88]

                transition
              "
            >
              {item.title}
            </h2>

            <p
              className="
                mt-4

                text-white/60

                text-lg

                max-w-2xl
              "
            >
              {item.subtitle}
            </p>

            <p
              className="
                mt-6

                uppercase

                tracking-[0.35em]

                text-xs

                text-[#D8AE88]
              "
            >
              Ver sala →
            </p>
          </Link>
        ))}
      </section>
    </main>
  );
}