type Props = {
  method: "apple" | "mercadopago";
  onChange: (
    method: "apple" | "mercadopago"
  ) => void;
};

export default function PaymentSelector({
  method,
  onChange,
}: Props) {
  return (
    <div
      style={{
        marginTop: "26px",
        display: "flex",
        flexDirection: "column",
        gap: "14px",
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
        Método de incorporación
      </div>

      <button
        onClick={() => onChange("apple")}
        style={{
          height: "56px",
          borderRadius: "999px",
          border:
            method === "apple"
              ? "1px solid #D8AE88"
              : "1px solid rgba(255,255,255,.12)",
          background: "transparent",
          color: "#ECE3D9",
          cursor: "pointer",
        }}
      >
         Apple Pay
      </button>

      <button
        onClick={() => onChange("mercadopago")}
        style={{
          height: "56px",
          borderRadius: "999px",
          border:
            method === "mercadopago"
              ? "1px solid #D8AE88"
              : "1px solid rgba(255,255,255,.12)",
          background: "transparent",
          color: "#ECE3D9",
          cursor: "pointer",
        }}
      >
        Mercado Pago
      </button>
    </div>
  );
}