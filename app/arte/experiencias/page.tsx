"use client";

import Link from "next/link";
import NavigationMuseo from "../components/NavigationMuseo";
import FooterMuseo from "../components/FooterMuseo";

export default function ExperienciasPage() {
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
            fontSize: "12px",
            letterSpacing: ".30em",
            textTransform: "uppercase",
          }}
        >
          Experiencias
        </div>

        <h1
          style={{
            marginTop: "18px",
            fontSize: "68px",
            fontWeight: 200,
            lineHeight: 1.1,
          }}
        >
          Las obras
          <br />
          también se viven.
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
          El Estudio no es únicamente un lugar
          donde se producen piezas. También es
          un espacio para conversar, aprender,
          compartir procesos y construir
          comunidad alrededor del arte.
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
              text:
                "Encuentros para reflexionar sobre arte, arquitectura y memoria.",
            },
            {
              title: "Talleres",
              text:
                "Sesiones prácticas donde el proceso creativo se comparte.",
            },
            {
              title: "Visitas al Estudio",
              text:
                "Recorridos para conocer cómo nacen las colecciones.",
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
                  fontSize: "30px",
                  fontWeight: 200,
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

        <section
          style={{
            marginTop: "90px",
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
            Próximamente
          </div>

          <div
            style={{
              marginTop: "30px",
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(280px,1fr))",
              gap: "24px",
            }}
          >
            {[
              "Conversatorio sobre memoria y ciudad",
              "Taller de linograbado",
              "Visita guiada al Estudio",
            ].map((event) => (
              <div
                key={event}
                style={{
                  padding: "26px",
                  borderRadius: "18px",
                  border:
                    "1px solid rgba(216,174,136,.14)",
                  background:
                    "linear-gradient(180deg,#10141B,#090B10)",
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
                  Próxima experiencia
                </div>

                <div
                  style={{
                    marginTop: "14px",
                    fontSize: "22px",
                    fontWeight: 200,
                  }}
                >
                  {event}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div
          style={{
            marginTop: "90px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Link
            href="/arte/proximas-colecciones"
            style={{
              textDecoration: "none",
            }}
          >
            <button
              style={{
                width: "360px",
                height: "56px",
                borderRadius: "999px",
                border: "none",
                cursor: "pointer",
                background:
                  "linear-gradient(90deg,#D8AE88,#C98E62)",
                color: "#111",
                fontSize: "15px",
                fontWeight: 600,
                letterSpacing: ".12em",
              }}
            >
              CONOCER LAS PRÓXIMAS COLECCIONES →
            </button>
          </Link>
        </div>
      </main>

      <FooterMuseo />
    </>
  );
}