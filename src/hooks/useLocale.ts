import { usePathname } from 'next/navigation';

type SupportedLanguage = 'en' | 'de';

export const useLocale = () => {
  const pathname = usePathname();
  const pathLang = pathname.split('/')[1];
  const lang = (pathLang === 'en' || pathLang === 'de') ? pathLang : 'en';
  
  return {
    lang,
  };
};
