export interface Collector {

  id: string;

  // Identidad

  firstName: string;

  lastName: string;

  email: string;

  phone: string;

  // Dirección

  country: string;

  state: string;

  city: string;

  address: string;

  postalCode: string;

  // Fiscal

  taxId?: string;

  company?: string;

  // Preferencias

  preferredLanguage: string;

  preferredCurrency: string;

  // Historial

  createdAt: Date;

  updatedAt: Date;
}