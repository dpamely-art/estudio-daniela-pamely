import { ObraCategory } from "../obraCategory";
import { ObraStatus } from "../obraStatus";
import { ObraVisibility } from "../obraVisibility";

export interface Obra {
  // =========================
  // Identidad
  // =========================

  id: string;

  slug: string;

  title: string;

  subtitle?: string;

  // =========================
  // Curaduría
  // =========================

  collectionId: string;

  category: ObraCategory;

  description: string;

  concept?: string;

  // =========================
  // Producción
  // =========================

  year: number;

  medium: string;

  support: string;

  dimensions: string;

  // =========================
  // Comercial
  // =========================

  currency: string;

  price: number;

  available: boolean;

  // =========================
  // Estado
  // =========================

  status: ObraStatus;

  visibility: ObraVisibility;

  // =========================
  // Multimedia
  // =========================

  coverImage: string;

  gallery: string[];

  // =========================
  // Auditoría
  // =========================

  createdAt: string;

  updatedAt: string;
}