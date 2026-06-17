"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  ReactNode,
  useEffect,
} from "react";

export type Artwork = {
  id: string;
  title: string;
  collection: string;
  price: string;
  image: string;
};

type UserType =
  | "guest"
  | "collector"
  | "founder";

type MuseumContextType = {
  userType: UserType;

  setUserType: React.Dispatch<
    React.SetStateAction<UserType>
  >;

  selectedWorks: Artwork[];
  favoriteWorks: Artwork[];

  addWork: (work: Artwork) => void;
  removeWork: (id: string) => void;

  addFavorite: (work: Artwork) => void;
  removeFavorite: (id: string) => void;

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

  const [favoriteWorks, setFavoriteWorks] =
    useState<Artwork[]>([]);

  const [userType, setUserType] =
    useState<UserType>("founder");

  useEffect(() => {
    const saved =
      localStorage.getItem(
        "museum-selection"
      );

    if (saved) {
      setSelectedWorks(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "museum-selection",
      JSON.stringify(selectedWorks)
    );
  }, [selectedWorks]);

  useEffect(() => {
    const savedFavorites =
      localStorage.getItem(
        "museum-favorites"
      );

    if (savedFavorites) {
      setFavoriteWorks(
        JSON.parse(savedFavorites)
      );
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "museum-favorites",
      JSON.stringify(favoriteWorks)
    );
  }, [favoriteWorks]);

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
      prev.filter(
        (item) => item.id !== id
      )
    );
  }

  function addFavorite(work: Artwork) {
    setFavoriteWorks((prev) => {
      const exists = prev.some(
        (item) => item.id === work.id
      );

      if (exists) {
        return prev;
      }

      return [...prev, work];
    });
  }

  function removeFavorite(id: string) {
    setFavoriteWorks((prev) =>
      prev.filter(
        (item) => item.id !== id
      )
    );
  }

  function clearCollection() {
    setSelectedWorks([]);
  }

  const value = useMemo(
    () => ({
      selectedWorks,
      favoriteWorks,

      userType,
      setUserType,

      addWork,
      removeWork,

      addFavorite,
      removeFavorite,

      clearCollection,
    }),
    [
      selectedWorks,
      favoriteWorks,
      userType,
    ]
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