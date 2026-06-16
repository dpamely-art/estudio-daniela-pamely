"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

import { NuevaObraDraft } from "../../../data/models/NuevaObraDraft";

type WizardContextType = {
  draft: NuevaObraDraft;

  setDraft: React.Dispatch<
    React.SetStateAction<NuevaObraDraft>
  >;
};

const WizardContext =
  createContext<WizardContextType | null>(null);

const initialDraft: NuevaObraDraft = {
  // Identidad

  title: "",

  subtitle: "",

  slug: "",

  // Curaduría

  collectionId: "",

  category: "",

  description: "",

  concept: "",

  // Producción

  year: new Date().getFullYear(),

  medium: "",

  support: "",

  dimensions: "",

  // Comercial

  currency: "MXN",

  price: 0,
};

export function WizardProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [draft, setDraft] =
    useState(initialDraft);

  return (
    <WizardContext.Provider
      value={{
        draft,
        setDraft,
      }}
    >
      {children}
    </WizardContext.Provider>
  );
}

export function useWizard() {
  const context =
    useContext(WizardContext);

  if (!context) {
    throw new Error(
      "useWizard debe utilizarse dentro de WizardProvider"
    );
  }

  return context;
}