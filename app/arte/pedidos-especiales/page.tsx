"use client";

import NavigationMuseo from "../components/NavigationMuseo";
import FooterMuseo from "../components/FooterMuseo";

export default function PedidosEspecialesPage() {
  return (
    <>
      <NavigationMuseo onOpenConversation={() => {}} />

      <main
        style={{
          maxWidth: "1500px",
          margin: "0 auto",
          padding: "140px 60px 100px",
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
          Pedido especial
        </div>

        <h1
          style={{
            marginTop: "14px",
            fontSize: "68px",
            fontWeight: 200,
          }}
        >
          Creamos una obra para ti
        </h1>

        <p
          style={{
            marginTop: "30px",
            maxWidth: "900px",
            fontSize: "22px",
            lineHeight: 1.8,
            color: "rgba(255,255,255,.72)",
          }}
        >
          Algunas historias merecen una pieza única. Este espacio está
          pensado para desarrollar obras personalizadas a partir de tus
          recuerdos, ideas o fotografías, mediante un proceso de diálogo y
          creación conjunta.
        </p>

        <section
          style={{
            marginTop: "90px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "70px",
          }}
        >
          <div>
            <div
              style={{
                color: "#D8AE88",
                letterSpacing: ".25em",
                textTransform: "uppercase",
                fontSize: "12px",
              }}
            >
              Cuéntanos
            </div>

            <h2
              style={{
                marginTop: "18px",
                fontSize: "42px",
                fontWeight: 200,
              }}
            >
              ¿Qué deseas crear?
            </h2>

            <div
              style={{
                marginTop: "35px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <input
                placeholder="Nombre"
                style={inputStyle}
              />

              <input
                placeholder="Correo electrónico"
                style={inputStyle}
              />

              <select style={inputStyle}>
                <option>Selecciona una técnica</option>
                <option>Acrílico</option>
                <option>Acuarela</option>
                <option>Grafito</option>
                <option>Linograbado</option>
                <option>Digital</option>
                <option>Técnica mixta</option>
              </select>

              <select style={inputStyle}>
                <option>Selecciona un tamaño</option>
                <option>XS</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>

              <textarea
                placeholder="Cuéntame tu idea..."
                rows={7}
                style={{
                  ...inputStyle,
                  resize: "vertical",
                }}
              />

              <button
                style={{
                  marginTop: "10px",
                  height: "58px",
                  border: "1px solid #D8AE88",
                  background: "transparent",
                  color: "#D8AE88",
                  letterSpacing: ".22em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  transition: ".35s",
                }}
              >
                Solicitar propuesta
              </button>
            </div>
          </div>

          <div>
            <div
              style={{
                color: "#D8AE88",
                letterSpacing: ".25em",
                textTransform: "uppercase",
                fontSize: "12px",
              }}
            >
              Referencia
            </div>

            <h2
              style={{
                marginTop: "18px",
                fontSize: "42px",
                fontWeight: 200,
              }}
            >
              Precios orientativos
            </h2>

            <div
              style={{
                marginTop: "35px",
                lineHeight: 2.3,
                color: "rgba(255,255,255,.72)",
                fontSize: "18px",
              }}
            >
              <div>Grafito — desde $1,500 MXN</div>
              <div>Acuarela — desde $2,300 MXN</div>
              <div>Linograbado — desde $2,800 MXN</div>
              <div>Acrílico — desde $3,800 MXN</div>
              <div>Digital — desde $1,200 MXN</div>
              <div>Técnica mixta — Cotización personalizada</div>
            </div>

            <p
              style={{
                marginTop: "40px",
                color: "rgba(255,255,255,.58)",
                lineHeight: 2,
              }}
            >
              El precio final depende de la técnica, dimensiones,
              complejidad, número de elementos y tiempo estimado de
              elaboración. Cada proyecto recibe una propuesta personalizada.
            </p>
          </div>
        </section>
      </main>

      <FooterMuseo />
    </>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "18px",
  background: "rgba(255,255,255,.03)",
  border: "1px solid rgba(216,174,136,.35)",
  color: "#ECE3D9",
  fontSize: "16px",
  outline: "none",
};