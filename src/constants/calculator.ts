import { InsuranceOption } from '@/types/calculator';

export const insuranceOptions: InsuranceOption[] = [
  {
    id: 'health',
    title: {
      en: 'Health Insurance',
      de: 'Krankenversicherung'
    },
    description: {
      en: 'Comprehensive health coverage for medical expenses',
      de: 'Umfassende Krankenversicherung für medizinische Kosten'
    },
    icon: 'HeartIcon',
    basePrice: 200
  },
  {
    id: 'life',
    title: {
      en: 'Life Insurance',
      de: 'Lebensversicherung'
    },
    description: {
      en: 'Financial security for your loved ones',
      de: 'Finanzielle Sicherheit für Ihre Angehörigen'
    },
    icon: 'ShieldCheckIcon',
    basePrice: 150
  },
  {
    id: 'property',
    title: {
      en: 'Property Insurance',
      de: 'Eigentumsversicherung'
    },
    description: {
      en: 'Protection for your home and belongings',
      de: 'Schutz für Ihr Zuhause und Eigentum'
    },
    icon: 'HomeIcon',
    basePrice: 100
  },
  {
    id: 'liability',
    title: {
      en: 'Liability Insurance',
      de: 'Haftpflichtversicherung'
    },
    description: {
      en: 'Coverage against third-party claims',
      de: 'Schutz gegen Ansprüche Dritter'
    },
    icon: 'ScaleIcon',
    basePrice: 80
  }
];

export const calculatePrice = (
  basePrice: number,
  age: number,
  coverageAmount: number,
  preExistingConditions: boolean
): number => {
  let price = basePrice;

  // Age factor
  if (age < 30) {
    price *= 0.8;
  } else if (age > 60) {
    price *= 1.5;
  }

  // Coverage amount factor
  price *= (coverageAmount / 100000) * 1.2;

  // Pre-existing conditions factor
  if (preExistingConditions) {
    price *= 1.3;
  }

  return Math.round(price * 100) / 100;
};
