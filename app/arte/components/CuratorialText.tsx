"use client";

import MuseumDivider from "./MuseumDivider";

type CuratorialTextProps = {
  text: string;
};

export default function CuratorialText({
  text,
}: CuratorialTextProps) {
  return (
  <section
    style={{
      marginTop: "42px",
      width: "100%",
      maxWidth: "640px",
    }}
  >
    <MuseumDivider />

    <p
      style={{
        color: "rgba(255,255,255,.72)",

        fontSize: "18px",

        lineHeight: 1.95,

        fontWeight: 300,

        margin: 0,
      }}
    >
      {text}
    </p>

    <MuseumDivider />
  </section>
);
}