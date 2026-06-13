import { notFound } from "next/navigation";

import NavigationMuseo from "../../components/NavigationMuseo";
import FooterMuseo from "../../components/FooterMuseo";

import { collections } from "../../data/collections";
import { artworks } from "../../data/artworks";

import Link from "next/link";

type Props = {
  params: {
    slug: string;
  };
};

export default function SalaPage({
  params,
}: Props) {
  const collection = collections.find(
  (item) => item.id === params.slug
);

  if (!collection) {
    notFound();
  }

  const works = artworks.filter(
    (item) => item.collection === params.slug
  );

  return (
    <>
      <NavigationMuseo
        onOpenConversation={() => {}}
      />

      <main
        style={{
          maxWidth: "1500px",
          margin: "0 auto",
          padding: "140px 60px 80px",
          color: "#ECE3D9",
        }}
      >
        <div
          style={{
            color: "#D8AE88",
            fontSize: "12px",
            letterSpacing: ".28em",
            textTransform: "uppercase",
          }}
        >
          Colección
        </div>

        <h1
          style={{
            marginTop: "12px",
            fontSize: "64px",
            fontWeight: 200,
          }}
        >
          {collection.title}
        </h1>

      <div
  style={{
    marginTop: "26px",
    maxWidth: "820px",
  }}
>
  <div
    style={{
      color: "#D8AE88",
      fontSize: "12px",
      letterSpacing: ".30em",
      textTransform: "uppercase",
    }}
  >
    {collection.number}
  </div>

  <div
    style={{
      marginTop: "18px",
      color: "rgba(255,255,255,.72)",
      fontSize: "22px",
      lineHeight: 1.8,
      fontWeight: 200,
    }}
  >
    {collection.subtitle}
  </div>

  <div
    style={{
      marginTop: "28px",
      color: "rgba(255,255,255,.58)",
      lineHeight: 2,
      fontSize: "17px",
    }}
  >
    {collection.description}
  </div>

  <div
    style={{
      marginTop: "34px",
      color: "#D8AE88",
      fontStyle: "italic",
      fontSize: "18px",
      fontWeight: 200,
    }}
  >
    “{collection.phrase}”
  </div>
</div>

        <section
          style={{
            marginTop: "120px",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(320px,1fr))",
            gap: "70px",
          }}
        >
          {works.map((work) => (
            <Link
              key={work.id}
              href={`/arte/obras/${work.id}`}
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div
                style={{
                  cursor: "pointer",
                }}
              >
                <img
                  src={work.images[0]}
                  alt={work.title}
                  style={{
                    width: "100%",
                    aspectRatio: "1",
                    objectFit: "cover",
                    borderRadius: "26px",
                  }}
                />

                <div
                  style={{
                    marginTop: "18px",
                    color: "#D8AE88",
                    fontSize: "11px",
                    letterSpacing: ".22em",
                    textTransform: "uppercase",
                  }}
                >
                  {work.category}
                </div>

                <div
                  style={{
                    marginTop: "8px",
                    fontSize: "38px",
                    fontWeight: 200,
                  }}
                >
                  {work.title}
                </div>

                <div
                  style={{
                    marginTop: "10px",
                    color: "rgba(255,255,255,.6)",
                  }}
                >
                  ${work.price.toLocaleString()}{" "}
                  {work.currency}
                </div>
              </div>
            </Link>
          ))}
        </section>
      </main>

      <FooterMuseo />
    </>
  );
}