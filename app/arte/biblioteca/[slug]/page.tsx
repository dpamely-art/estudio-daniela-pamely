import { notFound } from "next/navigation";
import { biblioteca } from "../../data/biblioteca";
import Link from "next/link";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function DocumentoPage({
  params,
}: Props) {
  const { slug } = await params;

  const documento = biblioteca.find(
    (item) => item.slug === slug
  );

  if (!documento) {
    notFound();
  }

  return (
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
          fontSize: "12px",
          letterSpacing: ".28em",
          textTransform: "uppercase",
        }}
      >
        {documento.categoria}
      </div>

       <Link
  href="/arte/biblioteca"
  style={{
    display: "inline-block",
    marginBottom: "24px",
    color: "#D8AE88",
    textDecoration: "none",
    fontSize: "14px",
    letterSpacing: ".12em",
    textTransform: "uppercase",
  }}
>
  ← Volver al Archivo
</Link>

      <h1
        style={{
          marginTop: "18px",
          fontSize: "64px",
          fontWeight: 200,
          lineHeight: 1,
        }}
      >
        {documento.titulo}
      </h1>

      <p
        style={{
          marginTop: "24px",
          maxWidth: "760px",
          color: "rgba(255,255,255,.68)",
          lineHeight: 1.9,
          fontSize: "18px",
        }}
      >
        {documento.descripcion}
      </p>

      <section
        style={{
          marginTop: "60px",
          padding: "40px",
          borderRadius: "24px",
          background:
            "rgba(255,255,255,.03)",
          border:
            "1px solid rgba(216,174,136,.12)",
        }}
      >
        <div
          style={{
            color: "#D8AE88",
            fontSize: "11px",
            letterSpacing: ".22em",
            textTransform: "uppercase",
          }}
        >
          Fragmento destacado
        </div>

        <blockquote
          style={{
            marginTop: "24px",
            fontSize: "30px",
            lineHeight: 1.6,
            fontWeight: 200,
          }}
        >
          “{documento.cita}”
        </blockquote>
      </section>

      <section
        style={{
          marginTop: "60px",
          maxWidth: "900px",
        }}
      >
        <div
          style={{
            color: "#D8AE88",
            fontSize: "11px",
            letterSpacing: ".22em",
            textTransform: "uppercase",
          }}
        >
          Introducción Curatorial
        </div>

        <p
          style={{
            marginTop: "22px",
            lineHeight: 2,
            color: "rgba(255,255,255,.72)",
          }}
        >
          {documento.contenido}
        </p>
      </section>

      <button
        style={{
          marginTop: "50px",
          height: "54px",
          padding: "0 30px",
          borderRadius: "999px",
          border: "none",
          cursor: "pointer",
          background:
            "linear-gradient(90deg,#D8AE88,#C98E62)",
          color: "#111",
          fontWeight: 500,
        }}
      >
        Consultar manuscrito →
      </button>
    </main>
  );
}