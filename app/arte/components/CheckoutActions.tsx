type Props = {
  disabled?: boolean;
};

export default function CheckoutActions({
  disabled = false,
}: Props) {
  return (
    <div
      style={{
        marginTop: "34px",
        display: "flex",
        flexDirection: "column",
        gap: "14px",
      }}
    >
      <button
        disabled={disabled}
        style={{
          width: "100%",
          height: "58px",
          borderRadius: "999px",
          border: "none",
          cursor: disabled ? "default" : "pointer",

          background:
            "linear-gradient(90deg,#D8AE88,#C98E62)",

          color: "#111",

          fontSize: "16px",

          fontWeight: 500,
        }}
      >
         Continuar con Apple Pay
      </button>

      <div
        style={{
          textAlign: "center",
          color: "rgba(255,255,255,.45)",
          fontSize: "12px",
          lineHeight: 1.7,
        }}
      >
        En el siguiente paso podrás revisar
        nuevamente tu incorporación antes de
        confirmar el pago.
      </div>
    </div>
  );
}