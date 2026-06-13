"use client";

import Link from "next/link";
import { useMuseum } from "../context/MuseumContext";

export default function MiColeccionPage() {
  const {
    selectedWorks,
    removeWork,
    clearCollection,
  } = useMuseum();

  const total = selectedWorks.reduce((sum, work) => {
    const value = Number(
      work.price.replace(/[^\d]/g, "")
    );

    return sum + value;
  }, 0);

  return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "80px 40px",
        color: "#ECE3D9",
      }}
    >
      <h1
        style={{
          fontSize: "42px",
          fontWeight: 200,
          marginBottom: "50px",
        }}
      >
        Mi colección
      </h1>

      {selectedWorks.length === 0 ? (
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            alignItems: "flex-start",
          }}
        >
          <p
            style={{
              color: "rgba(255,255,255,.65)",
              fontSize: "18px",
            }}
          >
            Todavía no has seleccionado ninguna obra.
          </p>

          <Link
            href="/arte/colecciones"
            style={{
              color: "#D8AE88",
              textDecoration: "none",
              letterSpacing: ".18em",
              textTransform: "uppercase",
              fontSize: "12px",
            }}
          >
            Explorar colecciones
          </Link>
        </section>
      ) : (
        <>
          <section
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "28px",
            }}
          >
            {selectedWorks.map((work) => (
              <div
                key={work.id}
                style={{
                  display: "flex",
                  gap: "24px",
                  alignItems: "center",
                  borderBottom:
                    "1px solid rgba(255,255,255,.08)",
                  paddingBottom: "24px",
                }}
              >
                <img
                  src={work.image}
                  alt={work.title}
                  style={{
                    width: "130px",
                    height: "130px",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />

                <div
                  style={{
                    flex: 1,
                  }}
                >
                  <h2
                    style={{
                      margin: 0,
                      fontWeight: 300,
                      fontSize: "24px",
                    }}
                  >
                    {work.title}
                  </h2>

                  <div
                    style={{
                      marginTop: "8px",
                      color: "rgba(255,255,255,.6)",
                    }}
                  >
                    {work.collection}
                  </div>

                  <div
                    style={{
                      marginTop: "12px",
                      color: "#D8AE88",
                    }}
                  >
                    {work.price}
                  </div>
                </div>

                <button
                  onClick={() =>
                    removeWork(work.id)
                  }
                  style={{
                    background: "transparent",
                    border:
                      "1px solid rgba(216,174,136,.4)",
                    color: "#D8AE88",
                    borderRadius: "999px",
                    padding:
                      "10px 18px",
                    cursor: "pointer",
                  }}
                >
                  Eliminar
                </button>
              </div>
            ))}
          </section>

          <section
            style={{
              marginTop: "60px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <div
                style={{
                  color:
                    "rgba(255,255,255,.55)",
                  fontSize: "13px",
                  letterSpacing: ".18em",
                  textTransform:
                    "uppercase",
                }}
              >
                Total
              </div>

              <div
                style={{
                  fontSize: "42px",
                  fontWeight: 200,
                  marginTop: "8px",
                }}
              >
                ${total.toLocaleString()} MXN
              </div>
            </div>

            <div
              style={{
                display: "flex",
                gap: "12px",
              }}
            >
              <button
                onClick={clearCollection}
                style={{
                  background: "transparent",
                  border:
                    "1px solid rgba(216,174,136,.4)",
                  color: "#D8AE88",
                  borderRadius: "999px",
                  padding:
                    "12px 22px",
                  cursor: "pointer",
                }}
              >
                Vaciar colección
              </button>

              <Link
                href="/arte/checkout"
                style={{
                  textDecoration: "none",
                  background:
                    "linear-gradient(90deg,#D8AE88,#C98E62)",
                  color: "#111",
                  borderRadius: "999px",
                  padding:
                    "12px 24px",
                  fontWeight: 500,
                }}
              >
                Continuar
              </Link>
            </div>
          </section>
        </>
      )}
    </main>
  );
}