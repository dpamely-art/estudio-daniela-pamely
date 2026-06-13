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
        marginTop: "10px",
      }}
    >
      <div
        style={{
          color: "#D8AE88",
          fontSize: "14px",
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
          fontSize: "20px",
          fontWeight: 200,
          lineHeight: 1,
        }}
      >
        {price}
      </div>

      {subtitle && (
        <div
          style={{
            marginTop: "3px",
            color: "rgba(255,255,255,.60)",
            fontSize: "10px",
            lineHeight: 1.5,
          }}
        >
          {subtitle}
        </div>
      )}
    </section>
  );
}