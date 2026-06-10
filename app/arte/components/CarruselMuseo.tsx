"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { collections } from "../data/collections";

export default function CarruselMuseo() {
  const [index, setIndex] = useState(0);

  const visibleCards = useMemo(() => {
    const total = collections.length;

    return Array.from({ length: 5 }, (_, i) => {
      return collections[(index + i) % total];
    });
  }, [index]);

  const next = () => {
    setIndex((prev) => (prev + 1) % collections.length);
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? collections.length - 1 : prev - 1
    );
  };

  return (
    <section
      style={{
        width: "100%",
        marginTop: "90px",
        paddingBottom: "80px",
        display: "flex",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          width: "92%",
          maxWidth: "1500px",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          gap: "14px",
          transition: "all .6s cubic-bezier(.22,.61,.36,1)",
        }}
      >
        {visibleCards.map((item) => (
          <Link
            key={item.id}
            href={item.route}
            style={{
              width: "245px",
              height: "545px",
              borderRadius: "14px",
              overflow: "hidden",
              background: "rgba(5,6,8,.55)",
              border: "1px solid rgba(196,106,74,.35)",
              boxShadow: "0 20px 60px rgba(0,0,0,.45)",
              backdropFilter: "blur(10px)",
              display: "flex",
              flexDirection: "column",
              textDecoration: "none",
              cursor: "pointer",
              transition:
                "transform .45s ease, box-shadow .45s ease, border .45s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform =
                "translateY(-8px) scale(1.02)";
              e.currentTarget.style.boxShadow =
                "0 30px 80px rgba(0,0,0,.55)";
              e.currentTarget.style.border =
                "1px solid rgba(196,106,74,.65)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform =
                "translateY(0px) scale(1)";
              e.currentTarget.style.boxShadow =
                "0 20px 60px rgba(0,0,0,.45)";
              e.currentTarget.style.border =
                "1px solid rgba(196,106,74,.35)";
            }}
            onTouchStart={(e) => {
              e.currentTarget.style.transform =
                "translateY(-8px) scale(1.02)";
            }}
            onTouchEnd={(e) => {
              e.currentTarget.style.transform =
                "translateY(0px) scale(1)";
            }}
          >
                        <div
              style={{
                width: "100%",
                height: "380px",
                overflow: "hidden",
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  transition: "transform .7s ease",
                }}
              />
            </div>

            <div
              style={{
                padding: "22px",
                height: "165px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <p
                  style={{
                    color: "#CFC3B5",
                    fontSize: "11px",
                    letterSpacing: ".22em",
                    textTransform: "uppercase",
                  }}
                >
                  {item.number}
                </p>

                <h3
                  style={{
                    marginTop: "12px",
                    color: "#E6DDD3",
                    fontSize: "17px",
                    fontWeight: 300,
                    lineHeight: "30px",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    marginTop: "10px",
                    color: "rgba(255,255,255,.60)",
                    fontSize: "14px",
                    lineHeight: "24px",
                  }}
                >
                  {item.subtitle}
                </p>
              </div>

              <p
                style={{
                  marginTop: "8px",
                  color: "#C46A4A",
                  fontSize: "12px",
                  letterSpacing: ".20em",
                  textTransform: "uppercase",
                }}
              >
                VER MÁS →
              </p>
            </div>
          </Link>
        ))}
      </div>
            {/* Flecha izquierda */}

      <button
        onClick={prev}
        style={{
          position: "absolute",
          left: "28px",
          top: "50%",
          transform: "translateY(-50%)",

          width: "48px",
          height: "48px",

          borderRadius: "50%",

          border: "1px solid rgba(196,106,74,.25)",

          background: "rgba(5,8,12,.30)",

          backdropFilter: "blur(10px)",

          color: "#C46A4A",

          fontSize: "28px",

          cursor: "pointer",

          transition: "all .35s ease",

          zIndex: 20,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background =
            "rgba(196,106,74,.12)";
          e.currentTarget.style.transform =
            "translateY(-50%) scale(1.08)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background =
            "rgba(5,8,12,.30)";
          e.currentTarget.style.transform =
            "translateY(-50%) scale(1)";
        }}
      >
        ‹
      </button>

      {/* Flecha derecha */}

      <button
        onClick={next}
        style={{
          position: "absolute",
          right: "28px",
          top: "50%",
          transform: "translateY(-50%)",

          width: "48px",
          height: "48px",

          borderRadius: "50%",

          border: "1px solid rgba(196,106,74,.25)",

          background: "rgba(5,8,12,.30)",

          backdropFilter: "blur(10px)",

          color: "#C46A4A",

          fontSize: "28px",

          cursor: "pointer",

          transition: "all .35s ease",

          zIndex: 20,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background =
            "rgba(196,106,74,.12)";
          e.currentTarget.style.transform =
            "translateY(-50%) scale(1.08)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background =
            "rgba(5,8,12,.30)";
          e.currentTarget.style.transform =
            "translateY(-50%) scale(1)";
        }}
      >
        ›
      </button>

      {/* Indicadores */}

      <div
        style={{
          position: "absolute",
          bottom: "18px",
          left: "50%",
          transform: "translateX(-50%)",

          display: "flex",
          gap: "10px",
          alignItems: "center",
        }}
      >
        {collections.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            style={{
              width: index === i ? "8px" : "6px",
              height: index === i ? "8px" : "6px",

              borderRadius: "50%",

              background:
                index === i
                  ? "#C46A4A"
                  : "rgba(255,255,255,.22)",

              boxShadow:
                index === i
                  ? "0 0 8px rgba(196,106,74,.45)"
                  : "none",

              transform:
                index === i
                  ? "scale(1.35)"
                  : "scale(1)",

              transition: "all .35s ease",

              cursor: "pointer",
            }}
          />
        ))}
      </div>
    </section>
  );
}