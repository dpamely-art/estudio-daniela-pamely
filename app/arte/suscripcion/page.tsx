"use client";

import NavigationMuseo from "../components/NavigationMuseo";
import FooterMuseo from "../components/FooterMuseo";

export default function SuscripcionPage() {
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
            letterSpacing: ".32em",
            textTransform: "uppercase",
          }}
        >
          Círculo del Estudio
        </div>

        <h1
          style={{
            marginTop: "18px",
            fontSize: "68px",
            fontWeight: 200,
            lineHeight: 1.1,
          }}
        >
          Círculo de
          <br />
          Coleccionistas
        </h1>

        <p
          style={{
            marginTop: "28px",
            maxWidth: "760px",
            color: "rgba(255,255,255,.68)",
            lineHeight: 2,
            fontSize: "19px",
          }}
        >
          No creemos que el arte deba vivir
          únicamente en las paredes.
          <br />
          También creemos que debe vivir en
          las conversaciones, en los procesos
          y en las personas que hacen posible
          este proyecto.
        </p>

        <section
          style={{
            marginTop: "90px",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(420px,1fr))",
            gap: "32px",
          }}
        >
          {/* Mensual */}

          <div
            style={{
              border:
                "1px solid rgba(216,174,136,.18)",
              borderRadius: "24px",
              padding: "38px",
              background:
                "linear-gradient(180deg,#11141A,#0A0C10)",
            }}
          >
            <div
              style={{
                color: "#D8AE88",
                fontSize: "11px",
                letterSpacing: ".24em",
                textTransform: "uppercase",
              }}
            >
              Membresía mensual
            </div>

            <h2
              style={{
                marginTop: "16px",
                fontSize: "42px",
                fontWeight: 200,
              }}
            >
              Coleccionista
            </h2>

            <div
              style={{
                marginTop: "24px",
                fontSize: "56px",
                fontWeight: 200,
              }}
            >
              $45
            </div>

            <div
              style={{
                color: "rgba(255,255,255,.58)",
              }}
            >
              MXN / mes
            </div>

            <div
              style={{
                marginTop: "34px",
                lineHeight: 2,
                color: "rgba(255,255,255,.74)",
              }}
            >
              ✓ Acceso anticipado a nuevas
              colecciones
              <br />
              ✓ Bitácora del taller
              <br />
              ✓ Escritos privados
              <br />
              ✓ Biblioteca digital
              <br />
              ✓ Invitaciones a talleres y
              conversaciones
              <br />
              ✓ Participar en futuras decisiones
              curatoriales
            </div>

            <button
              style={{
                marginTop: "40px",
                width: "100%",
                height: "54px",
                borderRadius: "999px",
                border: "none",
                cursor: "pointer",
                background:
                  "linear-gradient(90deg,#D8AE88,#C98E62)",
                color: "#111",
                fontSize: "15px",
                fontWeight: 600,
              }}
            >
              UNIRME
            </button>
          </div>

          {/* Anual */}

          <div
            style={{
              border:
                "1px solid rgba(216,174,136,.22)",
              borderRadius: "24px",
              padding: "38px",
              background:
                "linear-gradient(180deg,#17120D,#0A0C10)",
            }}
          >
            <div
              style={{
                color: "#D8AE88",
                fontSize: "11px",
                letterSpacing: ".24em",
                textTransform: "uppercase",
              }}
            >
              Membresía anual
            </div>

            <h2
              style={{
                marginTop: "16px",
                fontSize: "42px",
                fontWeight: 200,
              }}
            >
              Coleccionista
              <br />
              Fundador
            </h2>

            <div
              style={{
                marginTop: "24px",
                fontSize: "56px",
                fontWeight: 200,
              }}
            >
              $450
            </div>

            <div
              style={{
                color: "rgba(255,255,255,.58)",
              }}
            >
              MXN / año
            </div>

            <div
              style={{
                marginTop: "8px",
                color: "#D8AE88",
              }}
            >
              Ahorras $90
            </div>

            <div
              style={{
                marginTop: "30px",
                lineHeight: 2,
                color: "rgba(255,255,255,.74)",
              }}
            >
              ✓ Todo lo incluido en la membresía
              mensual
              <br />
              ✓ Certificado digital de
              Coleccionista Fundador
              <br />
              ✓ Una edición exclusiva anual
              <br />
              ✓ Precio preferencial durante la
              vigencia
              <br />
              ✓ Reconocimiento dentro del
              proyecto
            </div>

            <button
              style={{
                marginTop: "40px",
                width: "100%",
                height: "54px",
                borderRadius: "999px",
                border: "none",
                cursor: "pointer",
                background:
                  "linear-gradient(90deg,#D8AE88,#C98E62)",
                color: "#111",
                fontSize: "15px",
                fontWeight: 600,
              }}
            >
              QUIERO FORMAR PARTE
            </button>
          </div>
        </section>

        <section
          style={{
            marginTop: "100px",
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
            Manifiesto
          </div>

          <p
            style={{
              marginTop: "26px",
              color: "rgba(255,255,255,.72)",
              lineHeight: 2.2,
              fontSize: "19px",
            }}
          >
            No sostenemos este proyecto con
            publicidad ni con algoritmos.
            <br />
            Lo sostenemos gracias a personas
            que creen que el arte merece existir
            con libertad.
            <br />
            <br />
            Si decides formar parte del Círculo
            de Coleccionistas, estarás ayudando
            a construir el Estudio Daniela
            Pamely.
          </p>
        </section>
      </main>

      <FooterMuseo />
    </>
  );
}