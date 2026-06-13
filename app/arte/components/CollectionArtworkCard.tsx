type Props = {
  image: string;
  title: string;
  collection: string;
  price: string;
  onRemove: () => void;
};

export default function CollectionArtworkCard({
  image,
  title,
  collection,
  price,
  onRemove,
}: Props) {
  return (
    <article
      style={{
        display: "flex",
        gap: "28px",
        alignItems: "center",
        padding: "28px 0",
        borderBottom:
          "1px solid rgba(255,255,255,.08)",
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: "140px",
          height: "140px",
          objectFit: "cover",
          borderRadius: "12px",
        }}
      />

      <div
        style={{
          flex: 1,
        }}
      >
        <div
          style={{
            color: "#D8AE88",
            fontSize: "11px",
            letterSpacing: ".25em",
            textTransform: "uppercase",
          }}
        >
          {collection}
        </div>

        <h2
          style={{
            margin: "10px 0 0 0",
            fontSize: "34px",
            fontWeight: 200,
            color: "#ECE3D9",
          }}
        >
          {title}
        </h2>

        <div
          style={{
            marginTop: "14px",
            color: "#D8AE88",
            fontSize: "18px",
          }}
        >
          {price}
        </div>
      </div>

      <button
        onClick={onRemove}
        style={{
          background: "transparent",
          border:
            "1px solid rgba(216,174,136,.35)",
          color: "#D8AE88",
          borderRadius: "999px",
          padding: "10px 18px",
          cursor: "pointer",
          fontSize: "11px",
          letterSpacing: ".16em",
          textTransform: "uppercase",
        }}
      >
        Eliminar
      </button>
    </article>
  );
}