"use client";

type Item = {
  label: string;
  value: string;
};

type Props = {
  items: Item[];
};

export default function ObraTechnicalSheet({
  items,
}: Props) {
  return (
    <section
      style={{
        width: "100%",
        maxWidth: "520px",
        marginTop: "6px",
      }}
    >
      <h3
        style={{
          color: "#D8AE88",

          fontSize: "14px",

          letterSpacing: ".28em",

          fontWeight: 400,

          textTransform: "uppercase",

          marginBottom: "16px",
        }}
      >
        Ficha técnica
      </h3>

      {items.map((item) => (
        <div
          key={item.label}
          style={{
            display: "flex",

            justifyContent: "space-between",

            alignItems: "flex-start",

            padding: "0px 0",

            borderBottom:
              "1px solid rgba(255,255,255,.05)",
          }}
        >
          <span
            style={{
              color: "rgba(255,255,255,.55)",

              fontSize: "13px",
            }}
          >
            {item.label}
          </span>

          <span
            style={{
              color: "rgba(255,255,255,.86)",

              fontSize: "13px",

              textAlign: "right",

              maxWidth: "55%",
            }}
          >
            {item.value}
          </span>
        </div>
      ))}
    </section>
  );
}