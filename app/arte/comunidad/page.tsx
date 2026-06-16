"use client";

import Link from "next/link";
import NavigationMuseo from "../components/NavigationMuseo";
import FooterMuseo from "../components/FooterMuseo";

export default function ComunidadPage() {
  return (
    <>
      <NavigationMuseo
        onOpenConversation={() => {}}
      />

      <main
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "150px 60px 100px",
          color: "#ECE3D9",
        }}
      >
        <div
          style={{
            color: "#D8AE88",
            letterSpacing: ".30em",
            textTransform: "uppercase",
            fontSize: "12px",
          }}
        >
          Comunidad
        </div>

        <h1
          style={{
            marginTop: "18px",
            fontSize: "68px",
            fontWeight: 200,
            lineHeight: 1.1,
          }}
        >
          No coleccionamos
          <br />
          obras.
          <br />
          Coleccionamos
          conversaciones.
        </h1>

        <p
          style={{
            marginTop: "30px",
            maxWidth: "760px",
            color: "rgba(255,255,255,.68)",
            lineHeight: 2,
            fontSize: "19px",
          }}
        >
          El Estudio Daniela Pamely es una
          comunidad donde el arte, la
          arquitectura y la memoria dialogan
          constantemente. Aquí las ideas son
          tan importantes como las piezas.
        </p>

        <section
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(300px,1fr))",
            gap: "28px",
            marginTop: "80px",
          }}
        >
          {[
            {
              title: "Conversatorios",
              text: "Encuentros para compartir ideas, procesos y preguntas.",
            },
            {
              title: "Talleres",
              text: "Espacios de aprendizaje y experimentación artística.",
            },
            {
              title: "Visitas al Estudio",
              text: "Conoce el lugar donde nacen las colecciones.",
            },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                padding: "32px",
                borderRadius: "22px",
                border:
                  "1px solid rgba(216,174,136,.18)",
                background:
                  "linear-gradient(180deg,#11141A,#0A0C10)",
              }}
            >
              <h2
                style={{
                  fontWeight: 200,
                  fontSize: "30px",
                }}
              >
                {item.title}
              </h2>

              <p
                style={{
                  marginTop: "18px",
                  color:
                    "rgba(255,255,255,.65)",
                  lineHeight: 1.9,
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </section>

        <div
          style={{
            marginTop: "90px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Link
            href="/arte/experiencias"
            style={{
              textDecoration: "none",
            }}
          >
            <button
              style={{
                width: "300px",
                height: "56px",
                borderRadius: "999px",
                border: "none",
                cursor: "pointer",
                background:
                  "linear-gradient(90deg,#D8AE88,#C98E62)",
                color: "#111",
                fontWeight: 600,
                fontSize: "15px",
                letterSpacing: ".12em",
              }}
            >
              DESCUBRIR EXPERIENCIAS →
            </button>
          </Link>
        </div>
      </main>

      <FooterMuseo />
    </>
  );
}