"use client";

type LegalModalProps = {
  open: boolean;
  title: string;
  onClose: () => void;
};

export default function LegalModal({
  open,
  title,
  onClose,
}: LegalModalProps) {
  if (!open) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(2,4,10,.82)",
        backdropFilter: "blur(18px)",
        zIndex: 9999,

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "min(760px,92vw)",
          padding: "56px",
          borderRadius: "22px",

          background:
            "linear-gradient(180deg,#08101D,#04070C)",

          border:
            "1px solid rgba(216,174,136,.22)",

          boxShadow:
            "0 40px 120px rgba(0,0,0,.45)",

          position: "relative",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "22px",
            right: "22px",

            background: "transparent",
            border: "none",

            color: "#D8AE88",

            fontSize: "28px",

            cursor: "pointer",
          }}
        >
          ×
        </button>

        <h1
          style={{
            textAlign: "center",
            color: "#ECE3D9",
            fontWeight: 200,
            fontSize: "48px",
          }}
        >
          {title}
        </h1>

        <div
          style={{
            marginTop: "36px",
            color: "rgba(255,255,255,.72)",
            textAlign: "center",
            lineHeight: 2,
            fontSize: "18px",
          }}
        >
          Contenido en construcción.
          <br />
          Será incorporado durante la
          implementación del sistema legal del
          Estudio Daniela Pamely.
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "18px",
            marginTop: "52px",
          }}
        >
          <button
            onClick={onClose}
            style={{
              width: "180px",
              height: "48px",

              borderRadius: "999px",

              background: "transparent",

              border:
                "1px solid rgba(216,174,136,.45)",

              color: "#ECE3D9",

              cursor: "pointer",
            }}
          >
            NO ACEPTO
          </button>

          <button
            onClick={onClose}
            style={{
              width: "180px",
              height: "48px",

              borderRadius: "999px",

              border: "none",

              background:
                "linear-gradient(90deg,#D8AE88,#C98E62)",

              color: "#111",

              cursor: "pointer",
            }}
          >
            ACEPTO
          </button>
        </div>
      </div>
    </div>
  );
}