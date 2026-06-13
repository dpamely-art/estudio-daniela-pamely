type Props = {
  onAdd?: () => void;
  onSave?: () => void;
};

export default function ObraActions({
  onAdd,
  onSave,
}: Props) {
  return (
    <section
      style={{
        marginTop: "12px",

        display: "flex",

        flexDirection: "column",

        gap: "8px",
      }}
    >
      <button
  onClick={() => {
  alert("SI FUNCIONA");
  onAdd?.();
}}
        style={{
          width: "100%",

          height: "40px",

          borderRadius: "999px",

          border: "none",

          background:
            "linear-gradient(90deg,#D8AE88,#C98E62)",

          color: "#111",

          fontSize: "11px",

          letterSpacing: ".18em",

          textTransform: "uppercase",

          cursor: "pointer",

          fontWeight: 500,
        }}
      >
        Agregar a mi colección
      </button>

     <button
  onClick={() => {
    console.log("CLICK BOTÓN");
    onAdd?.();
  }}
        style={{
          width: "100%",

          height: "40px",

          borderRadius: "999px",

          background: "transparent",

          border:
            "1px solid rgba(216,174,136,.55)",

          color: "#D8AE88",

          fontSize: "11px",

          letterSpacing: ".18em",

          textTransform: "uppercase",

          cursor: "pointer",

          fontWeight: 500,
        }}
      >
        Guardar en mi selección
      </button>
    </section>
  );
}