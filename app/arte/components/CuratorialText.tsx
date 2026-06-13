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
      marginTop: "10px",
      width: "100%",
      maxWidth: "560px",
    }}
  >
    <MuseumDivider />
    <p
  style={{
    color: "rgba(255,255,255,.72)",

    fontSize: "14px",

    lineHeight: 1.55,

    fontWeight: 300,

    margin: 0,
  }}
>
  {text}
</p>
    
  </section>
);
}