type Props = {
  price: string;
  subtitle?: string;
};

export default function ObraInvestment({
  price,
  subtitle,
}: Props) {
  return (
    <section
      style={{
        marginTop: "24px",
      }}
    >
      <div
        style={{
          color: "#D8AE88",
          fontSize: "12px",
          letterSpacing: ".30em",
          textTransform: "uppercase",
          marginBottom: "10px",
        }}
      >
        Inversión
      </div>

      <div
        style={{
          color: "#ECE3D9",
          fontSize: "46px",
          fontWeight: 200,
          lineHeight: 1,
        }}
      >
        {price}
      </div>

      {subtitle && (
        <div
          style={{
            marginTop: "6px",
            color: "rgba(255,255,255,.60)",
            fontSize: "15px",
            lineHeight: 1.5,
          }}
        >
          {subtitle}
        </div>
      )}
    </section>
  );
}