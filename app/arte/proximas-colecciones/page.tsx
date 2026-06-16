"use client";

import Link from "next/link";
import NavigationMuseo from "../components/NavigationMuseo";
import FooterMuseo from "../components/FooterMuseo";

export default function ProximasColeccionesPage() {
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
          Archivo del Estudio
        </div>

        <h1
          style={{
            marginTop: "18px",
            fontSize: "68px",
            fontWeight: 200,
            lineHeight: 1.1,
          }}
        >
          Algunas obras
          <br />
          todavía están
          <br />
          aprendiendo su nombre.
        </h1>

        <p
          style={{
            marginTop: "30px",
            maxWidth: "780px",
            color: "rgba(255,255,255,.68)",
            lineHeight: 2,
            fontSize: "19px",
          }}
        >
          Antes de convertirse en colección,
          una idea pasa por muchas formas.
          Bocetos, notas, conversaciones,
          errores y descubrimientos forman
          parte del mismo proceso creativo.
        </p>

        <section
          style={{
            marginTop: "80px",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(300px,1fr))",
            gap: "28px",
          }}
        >
          {[
            {
              title: "Arquitecturas de la memoria",
              text:
                "Investigación sobre espacios habitados y recuerdos.",
            },
            {
              title: "Objetos cotidianos",
              text:
                "Piezas que transforman lo doméstico en símbolo.",
            },
            {
              title: "Nuevos linograbados",
              text:
                "Serie en desarrollo inspirada en rituales y paisaje.",
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
              <div
                style={{
                  color: "#D8AE88",
                  fontSize: "11px",
                  letterSpacing: ".22em",
                  textTransform: "uppercase",
                }}
              >
                En desarrollo
              </div>

              <h2
                style={{
                  marginTop: "16px",
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
            maxWidth: "900px",
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
            Bitácora
          </div>

          <p
            style={{
              marginTop: "24px",
              color: "rgba(255,255,255,.72)",
              lineHeight: 2.1,
              fontSize: "18px",
            }}
          >
            No todas las ideas llegan a
            convertirse en obra. Algunas
            simplemente enseñan el camino para
            que otras existan. Por eso este
            archivo también forma parte del
            museo.
          </p>
        </section>

        <div
          style={{
            marginTop: "90px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Link
            href="/arte/taller"
            style={{
              textDecoration: "none",
            }}
          >
            <button
              style={{
                width: "320px",
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
              ENTRAR AL TALLER →
            </button>
          </Link>
        </div>
      </main>

      <FooterMuseo />
    </>
  );
}