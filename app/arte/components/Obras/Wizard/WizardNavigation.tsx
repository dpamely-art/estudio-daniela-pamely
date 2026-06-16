"use client";

const TOTAL_STEPS = 5;

type Props = {
  step: number;
  setStep: React.Dispatch<
    React.SetStateAction<number>
  >;
};

export default function WizardNavigation({
  step,
  setStep,
}: Props) {
  const isFirstStep = step === 0;

  const isLastStep =
    step === TOTAL_STEPS - 1;

  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",

        marginTop: "60px",

        paddingTop: "30px",

        borderTop:
          "1px solid rgba(255,255,255,.08)",
      }}
    >
      <button
        onClick={() =>
          setStep((s) => Math.max(0, s - 1))
        }
        disabled={isFirstStep}
        style={{
          width: "170px",
          height: "48px",

          borderRadius: "999px",

          border:
            "1px solid rgba(216,174,136,.28)",

          background: "transparent",

          color: isFirstStep
            ? "rgba(255,255,255,.25)"
            : "#ECE3D9",

          cursor: isFirstStep
            ? "default"
            : "pointer",
        }}
      >
        ← Anterior
      </button>

      <div
        style={{
          color: "#D8AE88",

          fontSize: "13px",

          letterSpacing: ".18em",

          textTransform: "uppercase",
        }}
      >
        Paso {step + 1} de {TOTAL_STEPS}
      </div>

      <button
        onClick={() =>
          setStep((s) =>
            Math.min(TOTAL_STEPS - 1, s + 1)
          )
        }
        style={{
          width: "170px",
          height: "48px",

          borderRadius: "999px",

          border: "none",

          background: isLastStep
            ? "linear-gradient(90deg,#C9A16F,#B98657)"
            : "linear-gradient(90deg,#D8AE88,#C98E62)",

          color: "#111",

          cursor: "pointer",

          fontWeight: 500,

          letterSpacing: ".08em",
        }}
      >
        {isLastStep
          ? "Guardar obra"
          : "Siguiente →"}
      </button>
    </section>
  );
}