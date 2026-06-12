"use client";

import React from "react";

type ObraLayoutProps = {
  left: React.ReactNode;
  right: React.ReactNode;
};

export default function ObraLayout({
  left,
  right,
}: ObraLayoutProps) {
  return (
    <section
      className="
        w-full
        px-8
        lg:px-10
        xl:px-14
        pt-6
        pb-8
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1600px]

          grid
          grid-cols-1
          xl:grid-cols-[58%_42%]

          gap-8
          xl:gap-12

          items-start
        "
      >
        {/* Columna izquierda */}
        <div
          className="
            w-full

            xl:sticky
            xl:top-24

            flex
            items-center
            justify-center
          "
        >
          {left}
        </div>

        {/* Columna derecha */}
        <div
          className="
            w-full

            flex
            flex-col
          "
        >
          {right}
        </div>
      </div>
    </section>
  );
}