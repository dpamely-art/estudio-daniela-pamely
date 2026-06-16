export default function ObrasFilters() {
  return (
    <div
      style={{
        display: "flex",
        gap: "12px",
        flexWrap: "wrap",
      }}
    >
      {[
        "Todas",
        "Publicadas",
        "Borradores",
        "Archivadas",
      ].map((item) => (
        <button
          key={item}
          style={{
            padding: "10px 18px",
            borderRadius: "999px",
            border:
              "1px solid rgba(216,174,136,.20)",
            background: "transparent",
            color: "#ECE3D9",
            cursor: "pointer",
          }}
        >
          {item}
        </button>
      ))}
    </div>
  );
}