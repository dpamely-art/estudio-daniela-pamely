type Props = {
  visible: boolean;
};

export default function ProcessingIncorporation({
  visible,
}: Props) {
  if (!visible) return null;

  return (
    <div
      style={{
        marginTop: "34px",
        padding: "28px",
        borderRadius: "22px",
        background:
          "linear-gradient(180deg,#11141A,#0A0C10)",
        border:
          "1px solid rgba(216,174,136,.18)",
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
        Proceso de incorporación
      </div>

      <div
        style={{
          marginTop: "18px",
          fontSize: "28px",
          fontWeight: 200,
          color: "#ECE3D9",
        }}
      >
        Preparando tu incorporación…
      </div>

      <div
        style={{
          marginTop: "18px",
          color: "rgba(255,255,255,.62)",
          lineHeight: 1.9,
        }}
      >
        Verificando certificado de autenticidad.
        <br />
        Reservando la edición seleccionada.
        <br />
        Generando el expediente del Estudio.
      </div>
    </div>
  );
}
