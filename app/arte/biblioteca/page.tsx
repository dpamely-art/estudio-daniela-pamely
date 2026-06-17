"use client";

import NavigationMuseo from "../components/NavigationMuseo";
import FooterMuseo from "../components/FooterMuseo";
import { useMuseum } from "../context/MuseumContext";
import Link from "next/link";

export default function BibliotecaPage() {
  const { userType } = useMuseum();

  if (userType !== "founder") {
    return (
      <>
        <NavigationMuseo
          onOpenConversation={() => {}}
        />

        <main
          style={{
            width: "min(1100px,92%)",
            margin: "0 auto",
            padding: "160px 0",
            color: "#ECE3D9",
            minHeight: "100vh",
          }}
        >
          <div
            style={{
              color: "#D8AE88",
              letterSpacing: ".28em",
              textTransform: "uppercase",
              fontSize: "12px",
            }}
          >
            Acceso restringido
          </div>

          <h1
            style={{
              marginTop: "18px",
              fontSize: "58px",
              fontWeight: 200,
            }}
          >
            Biblioteca Privada
          </h1>

          <p
            style={{
              marginTop: "24px",
              maxWidth: "760px",
              color: "rgba(255,255,255,.65)",
              lineHeight: 1.9,
            }}
          >
            Este espacio forma parte de los
            beneficios exclusivos para
            Coleccionistas Fundadores.
          </p>
        </main>

        <FooterMuseo />
      </>
    );
  }

  return (
    <>
      <NavigationMuseo
        onOpenConversation={() => {}}
      />

      <main
        style={{
          width: "min(1200px,92%)",
          margin: "0 auto",
          padding: "160px 0",
          color: "#ECE3D9",
          minHeight: "100vh",
        }}
      >
        <div
          style={{
            color: "#D8AE88",
            letterSpacing: ".28em",
            textTransform: "uppercase",
            fontSize: "12px",
          }}
        >
          Biblioteca Privada
        </div>

        <h1
          style={{
            marginTop: "18px",
            fontSize: "58px",
            fontWeight: 200,
          }}
        >
          Archivo del Estudio
        </h1>

        <p
          style={{
            marginTop: "24px",
            maxWidth: "760px",
            color: "rgba(255,255,255,.65)",
            lineHeight: 1.9,
          }}
        >
          Ensayos, manifiestos, bitácoras,
          procesos creativos y documentos
          exclusivos del Estudio Daniela Pamely.
        </p>

        <section
  style={{
    marginTop: "60px",
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit,minmax(280px,1fr))",
    gap: "22px",
  }}
>
  {[
  {
    slug: "carta-fundacional",
    icon: "📜",
    title: "Carta Fundacional",
    description:
      "Documento que declara el origen, propósito y vocación del Estudio.",
  },
  {
    slug: "tesis-del-estudio",
    icon: "📖",
    title: "Tesis del Estudio",
    description:
      "Principios conceptuales, filosóficos y curatoriales del proyecto.",
  },
  {
    slug: "constitucion",
    icon: "🏛️",
    title: "Constitución",
    description:
      "Marco simbólico que rige la estructura del Estudio Daniela Pamely.",
  },
  {
    slug: "juramento-fundacional",
    icon: "✍️",
    title: "Juramento Fundacional",
    description:
      "Compromiso ético y creativo que sostiene el proyecto.",
  },
].map((doc) => (
    <Link
      key={doc.title}
      href={`/arte/biblioteca/${doc.slug}`}
      style={{
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <div
      style={{
        padding: "28px",
        borderRadius: "22px",
        background:
          "rgba(255,255,255,.03)",
        border:
          "1px solid rgba(216,174,136,.12)",
      }}
    >
      <div
        style={{
          fontSize: "36px",
        }}
      >
        {doc.icon}
      </div>

      <h3
        style={{
          marginTop: "20px",
          fontSize: "28px",
          fontWeight: 200,
        }}
      >
        {doc.title}
      </h3>

      <p
        style={{
          marginTop: "14px",
          color: "rgba(255,255,255,.65)",
          lineHeight: 1.8,
        }}
      >
        {doc.description}
      </p>

      <div
        style={{
          marginTop: "22px",
          color: "#D8AE88",
          fontSize: "12px",
          letterSpacing: ".18em",
          textTransform: "uppercase",
        }}
      >
        Consultar →
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