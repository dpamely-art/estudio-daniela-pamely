"use client";

import { useRouter } from "next/navigation";

type BreadcrumbMuseoProps = {
  href: string;
  label: string;
};

export default function BreadcrumbMuseo({
  href,
  label,
}: BreadcrumbMuseoProps){
  const router = useRouter();

  return (
    <div
      style={{
        position: "sticky",
        top: "40px",
        zIndex: 30,
      }}
      className="
        w-full
        flex
        justify-center
        px-2
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
        <button
          type="button"
         onClick={() => {
  console.log("CLICK BREADCRUMB", href);
  router.push(href);
}}
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
            background: "none",
            border: "none",
            padding: 0,
            cursor: "pointer",
          }}
        >
          <span>←</span>
          <span>{label}</span>
        </button>
      </div>
    </div>
  );
}