type Props = {
  titulo: string;
  coleccion: string;
  estado: string;
  precio: number;
};

export default function ObraCard({
  titulo,
  coleccion,
  estado,
  precio,
}: Props) {
  return (
    <div
      style={{
        border: "1px solid rgba(216,174,136,.16)",
        borderRadius: "18px",
        padding: "22px",
        background:
          "linear-gradient(180deg,#11141A,#0A0C10)",

        display: "flex",
        flexDirection: "column",
        gap: "14px",
      }}
    >
      <div
        style={{
          height: "180px",
          borderRadius: "12px",
          background:
            "linear-gradient(135deg,#1A2230,#0B0E13)",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          color: "rgba(255,255,255,.28)",

          fontSize: "42px",
        }}
      >
        🖼
      </div>

      <div
        style={{
          color: "#ECE3D9",
          fontSize: "24px",
          fontWeight: 200,
        }}
      >
        {titulo}
      </div>

      <div
        style={{
          color: "rgba(255,255,255,.62)",
        }}
      >
        {coleccion}
      </div>

      <div
        style={{
          color: "#D8AE88",
          fontSize: "13px",
          letterSpacing: ".08em",
        }}
      >
        {estado.toUpperCase()}
      </div>

      <div
        style={{
          color: "#ECE3D9",
          fontSize: "20px",
        }}
      >
        ${precio.toLocaleString()}
      </div>

      <div
        style={{
          display: "flex",
          gap: "10px",
          marginTop: "8px",
        }}
      >
        <button
          style={{
            flex: 1,
            height: "42px",
            borderRadius: "999px",
            border: "1px solid rgba(216,174,136,.25)",
            background: "transparent",
            color: "#ECE3D9",
            cursor: "pointer",
          }}
        >
          Editar
        </button>

        <button
          style={{
            flex: 1,
            height: "42px",
            borderRadius: "999px",
            border: "none",
            background:
              "linear-gradient(90deg,#D8AE88,#C98E62)",
            color: "#111",
            cursor: "pointer",
          }}
        >
          Abrir
        </button>
      </div>
    </div>
  );
}