import type { Locale } from './settings';

// Client-side dictionary type that will be passed as props
export type Dictionary = {
  [key: string]: any;
};

// Helper function to access nested dictionary values
export const getTranslation = (dict: Dictionary, path: string) => {
  return path.split('.').reduce((obj, key) => obj?.[key], dict);
};
