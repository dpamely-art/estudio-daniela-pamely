export interface NuevaObraDraft {
  // Identidad

  title: string;

  subtitle: string;

  slug: string;

  // Curaduría

  collectionId: string;

  category: string;

  description: string;

  concept: string;

  // Producción

  year: number;

  medium: string;

  support: string;

  dimensions: string;

  // Comercial

  currency: string;

  price: number;
}