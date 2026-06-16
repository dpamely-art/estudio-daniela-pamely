"use client";

type Props = {
  onNew: () => void;
};

export default function ObrasToolbar({
  onNew,
}: Props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <button
        onClick={onNew}
        style={{
          height: "52px",
          padding: "0 28px",
          borderRadius: "999px",
          border: "none",
          background:
            "linear-gradient(90deg,#D8AE88,#C98E62)",
          color: "#111",
          fontSize: "15px",
          cursor: "pointer",
        }}
      >
        + Nueva obra
      </button>
    </div>
  );
}