import Link from "next/link";
import { notFound } from "next/navigation";
import { collections } from "../../data/collections";
import { artworks } from "../../data/artworks";

type Props = {
  params: {
    slug: string;
  };
};

export default function SalaPage({ params }: Props) {
  const collection = collections.find(
    (item) => item.id === params.slug
  );

  if (!collection) {
    notFound();
  }
  const works = artworks.filter(
  (artwork) => artwork.collection === collection.id
);

  return (
    <main
      className="
        min-h-screen

        px-8
        md:px-16
        xl:px-24

        pt-36
        pb-24
      "
    >
      {/* Encabezado */}

      <section className="max-w-5xl">
        <p
          className="
            uppercase

            tracking-[0.45em]

            text-xs

            text-[#D8AE88]
          "
        >
          {collection.number} · COLECCIÓN PERMANENTE
        </p>

        <h1
          className="
            mt-6

            text-white

            text-5xl
            md:text-7xl

            font-extralight

            leading-[0.95]
          "
        >
          {collection.title}
        </h1>

        <h2
          className="
            mt-12

            text-[#D8AE88]

            text-2xl
            md:text-5xl

            italic

            font-extralight

            leading-relaxed
          "
        >
          {collection.subtitle}
        </h2>
      </section>

      {/* Obras de la colección */}

      <section
        className="
          mt-32

          flex
          items-center
          justify-center
        "
      >
       <div
  className="
    w-full
    max-w-5xl

    flex
    flex-col

    gap-6
  "
>
  {works.map((work) => (
    <Link
      key={work.id}
      href={`/arte/obras/${work.id}`}
      className="
        border
        border-white/10

        rounded-3xl

        p-8

        bg-white/5

        hover:border-[#D8AE88]

        transition
      "
    >
      <p className="text-[#D8AE88] text-xs uppercase tracking-[0.3em]">
        {work.edition}
      </p>

      <h3 className="mt-3 text-3xl text-white font-extralight">
        {work.title}
      </h3>

      <p className="mt-4 text-white/60">
        {work.description}
      </p>
    </Link>
  ))}
</div>
      </section>

      {/* Acción */}

      <section
        className="
          mt-20

          flex
          justify-between
          items-center

          flex-wrap

          gap-6
        "
      >
        <Link
          href="/arte/museo"
          className="
            uppercase

            tracking-[0.30em]

            text-xs

            text-white/60
          "
        >
          ← Volver al museo
        </Link>

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
      </section>
    </main>
  );
}