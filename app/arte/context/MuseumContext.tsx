"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  ReactNode,
} from "react";

export type Artwork = {
  id: string;
  title: string;
  collection: string;
  price: string;
  image: string;
};

type MuseumContextType = {
  selectedWorks: Artwork[];

  addWork: (work: Artwork) => void;

  removeWork: (id: string) => void;

  clearCollection: () => void;
};

const MuseumContext =
  createContext<MuseumContextType | null>(
    null
  );

export function MuseumProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [selectedWorks, setSelectedWorks] =
    useState<Artwork[]>([]);

  function addWork(work: Artwork) {
  setSelectedWorks((prev) => {
    const exists = prev.some(
      (item) => item.id === work.id
    );

    if (exists) {
      return prev;
    }

    return [...prev, work];
  });
}

  function removeWork(id: string) {
    setSelectedWorks((prev) =>
      prev.filter((item) => item.id !== id)
    );
  }

  function clearCollection() {
    setSelectedWorks([]);
  }

  const value = useMemo(
    () => ({
      selectedWorks,
      addWork,
      removeWork,
      clearCollection,
    }),
    [selectedWorks]
  );

  return (
    <MuseumContext.Provider value={value}>
      {children}
    </MuseumContext.Provider>
  );
}

export function useMuseum() {
  const context =
    useContext(MuseumContext);

  if (!context) {
    throw new Error(
      "useMuseum debe utilizarse dentro de MuseumProvider"
    );
  }

  return context;
}