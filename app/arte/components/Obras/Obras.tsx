"use client";

import ObrasHeader from "./ObrasHeader";
import ObrasToolbar from "./ObrasToolbar";
import ObrasFilters from "./ObrasFilters";
import ObrasGrid from "./ObrasGrid";

type ObrasProps = {
  onNew: () => void;
};

export default function Obras({
  onNew,
}: ObrasProps) {
  return (
    <>
      <ObrasHeader />

      <div
        style={{
          height: 28,
        }}
      />

      <ObrasToolbar
        onNew={onNew}
      />

      <div
        style={{
          height: 26,
        }}
      />

      <ObrasFilters />

      <div
        style={{
          height: 30,
        }}
      />

      <ObrasGrid />
    </>
  );
}