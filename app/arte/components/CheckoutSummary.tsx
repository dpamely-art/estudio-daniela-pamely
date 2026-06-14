type Props = {
  total: number;
  works: number;
};

export default function CheckoutSummary({
  total,
  works,
}: Props) {
  return (
    <aside
      style={{
        position: "sticky",
        top: "140px",

        padding: "34px",

        borderRadius: "22px",

        background:
          "linear-gradient(180deg,#11141A,#0A0C10)",

        border:
          "1px solid rgba(216,174,136,.18)",

        boxShadow:
          "0 24px 70px rgba(0,0,0,.35)",
      }}
    >
      <div
        style={{
          color: "#D8AE88",
          fontSize: "11px",
          letterSpacing: ".28em",
          textTransform: "uppercase",
        }}
      >
        Resumen de incorporación
      </div>

      <div
        style={{
          marginTop: "30px",
          display: "flex",
          flexDirection: "column",
          gap: "18px",
        }}
      >
        <Row
          label="Obras seleccionadas"
          value={`${works}`}
        />

        <Row
          label="Certificados"
          value="Incluidos"
        />

        <Row
          label="Envío protegido"
          value="Incluido"
        />
      </div>

      <hr
        style={{
          margin: "30px 0",
          border: 0,
          borderTop:
            "1px solid rgba(255,255,255,.08)",
        }}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span
          style={{
            color: "#D8AE88",
            fontSize: "13px",
            letterSpacing: ".22em",
            textTransform: "uppercase",
          }}
        >
          Total
        </span>

        <span
          style={{
            fontSize: "32px",
            fontWeight: 200,
          }}
        >
          ${total.toLocaleString()} MXN
        </span>
      </div>

      <div
  style={{
    marginTop: "30px",
    color: "rgba(255,255,255,.55)",
    lineHeight: 1.9,
    fontSize: "14px",
  }}
>
  Al continuar, el Estudio verificará la
  disponibilidad de las obras, registrará
  sus certificados de autenticidad e
  iniciará formalmente el proceso de
  incorporación a tu colección.
</div>

      <div
  style={{
    marginTop: "26px",
    paddingTop: "22px",
    borderTop: "1px solid rgba(255,255,255,.08)",
    color: "#D8AE88",
    fontSize: "11px",
    letterSpacing: ".22em",
    textTransform: "uppercase",
    textAlign: "center",
  }}
>
  Estudio Daniela Pamely
</div>

      <button
        style={{
          marginTop: "34px",

          width: "100%",
          height: "52px",

          borderRadius: "999px",

          border: "none",

          cursor: "pointer",

          background:
            "linear-gradient(90deg,#D8AE88,#C98E62)",

          color: "#111",

          fontSize: "12px",

          letterSpacing: ".18em",

          textTransform: "uppercase",

          fontWeight: 500,
        }}
      >
        Incorporar obras
      </button>

      <button
        style={{
          marginTop: "12px",

          width: "100%",
          height: "52px",

          borderRadius: "999px",

          background: "transparent",

          border:
            "1px solid rgba(216,174,136,.35)",

          color: "#D8AE88",

          cursor: "pointer",

          fontSize: "12px",

          letterSpacing: ".18em",

          textTransform: "uppercase",
        }}
      >
         Apple Pay
      </button>

      <button
        style={{
          marginTop: "12px",

          width: "100%",
          height: "52px",

          borderRadius: "999px",

          background: "transparent",

          border:
            "1px solid rgba(216,174,136,.35)",

          color: "#D8AE88",

          cursor: "pointer",

          fontSize: "12px",

          letterSpacing: ".18em",

          textTransform: "uppercase",
        }}
      >
        Mercado Pago
      </button>
    </aside>
  );
}

function Row({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <span
        style={{
          color: "rgba(255,255,255,.62)",
        }}
      >
        {label}
      </span>

      <span>{value}</span>
    </div>
  );
}