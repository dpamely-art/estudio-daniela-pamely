"use client";

export default function MuseumDivider() {
  return (
    <div
      style={{
        width: "100%",

        display: "flex",

        alignItems: "center",

        gap: "8px",

        margin: "6px 0",
      }}
    >
      <div
        style={{
          flex: 1,

          height: "1px",

          background:
            "rgba(216,174,136,.22)",
        }}
      />

      <span
        style={{
          color: "#D8AE88",

          fontSize: "11px",

          fontWeight: 300,

          letterSpacing: ".18em",
        }}
      >
        ✦
      </span>

      <div
        style={{
          flex: 1,

          height: "1px",

          background:
            "rgba(216,174,136,.22)",
        }}
      />
    </div>
  );
}