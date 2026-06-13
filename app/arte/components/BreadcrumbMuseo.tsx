"use client";

import Link from "next/link";

type BreadcrumbMuseoProps = {
  href: string;
  label: string;
};

export default function BreadcrumbMuseo({
  href,
  label,
}: BreadcrumbMuseoProps) {
  return (
    <div
    style={{
  position: "sticky",
  top: "140px",
  zIndex: 30,
}}
      className="
        w-full
        flex
        justify-center

        px-8
        lg:px-12
        xl:px-16

        pt-8
      "
    >
      <div
        className="
          w-full
          max-w-[1500px]
        "
      >
        <Link
          href={href}
          className="
            inline-flex
            items-center
            gap-2

            text-sm

            font-light

            tracking-wide

            text-[#D8AE88]

            hover:opacity-80

            transition-opacity
          "
          style={{
            textDecoration: "none",
          }}
        >
          <span>←</span>

          <span>{label}</span>
        </Link>
      </div>
    </div>
  );
}