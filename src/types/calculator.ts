export type InsuranceType = 'health' | 'life' | 'property' | 'liability';

export interface InsuranceOption {
  id: InsuranceType;
  title: {
    en: string;
    de: string;
  };
  description: {
    en: string;
    de: string;
  };
  icon: string; // Heroicon name
  basePrice: number;
}

export interface UserDetails {
  age: number;
  occupation: string;
  preExistingConditions: boolean;
  coverageAmount: number;
}

export interface CalculatorState {
  step: number;
  selectedInsurance: InsuranceType | null;
  userDetails: UserDetails | null;
  estimatedPrice: number | null;
}
