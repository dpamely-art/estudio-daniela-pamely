type Props = {
  total: number;
};

export default function CollectionSummary({
  total,
}: Props) {
  return (
    <section
      style={{
        marginTop: "40px",
        marginBottom: "40px",
        padding: "28px",
        border: "1px solid rgba(216,174,136,.15)",
        borderRadius: "18px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <div
          style={{
            color: "rgba(255,255,255,.55)",
            fontSize: "12px",
            letterSpacing: ".18em",
            textTransform: "uppercase",
          }}
        >
          Total de la colección
        </div>

        <div
          style={{
            marginTop: "8px",
            fontSize: "40px",
            fontWeight: 200,
            color: "#ECE3D9",
          }}
        >
          ${total.toLocaleString()} MXN
        </div>
      </div>
    </section>
  );
}