import { usePathname } from 'next/navigation';

export function useNavigation() {
  const pathname = usePathname();
  const locale = pathname?.split('/')[1] || 'en';

  const navigation = {
    languages: [
      { name: 'EN', code: 'en' },
      { name: 'DE', code: 'de' },
    ],
    main: [
      {
        name: 'Private',
        href: `/${locale}/private`,
        submenu: [
          {
            name: locale === 'de' ? 'Versicherung' : 'Insurance',
            href: `/${locale}/private/insurance`,
            description: locale === 'de'
              ? 'Umfassende Versicherungslösungen'
              : 'Comprehensive insurance solutions'
          },
          {
            name: locale === 'de' ? 'Ruhestand' : 'Retirement',
            href: `/${locale}/private/retirement`,
            description: locale === 'de'
              ? 'Planung für Ihren Ruhestand'
              : 'Planning for your retirement'
          },
          {
            name: locale === 'de' ? 'Vermögen' : 'Wealth',
            href: `/${locale}/private/wealth`,
            description: locale === 'de'
              ? 'Vermögensverwaltung und -planung'
              : 'Wealth management and planning'
          },
          {
            name: locale === 'de' ? 'Immobilien' : 'Property',
            href: `/${locale}/private/property`,
            description: locale === 'de'
              ? 'Immobilieninvestments und -verwaltung'
              : 'Property investments and management'
          },
          {
            name: locale === 'de' ? 'Steuern' : 'Tax',
            href: `/${locale}/private/tax`,
            description: locale === 'de'
              ? 'Steuerplanung und -optimierung'
              : 'Tax planning and optimization'
          }
        ]
      },
      {
        name: 'Corporate',
        href: `/${locale}/corporate`,
        submenu: [
          {
            name: locale === 'de' ? 'Beratung' : 'Advisory',
            href: `/${locale}/corporate/advisory`,
            description: locale === 'de'
              ? 'Professionelle Unternehmensberatung'
              : 'Professional business consulting'
          },
          {
            name: locale === 'de' ? 'Steuern' : 'Tax',
            href: `/${locale}/corporate/tax`,
            description: locale === 'de'
              ? 'Unternehmenssteuerberatung'
              : 'Corporate tax consulting'
          }
        ]
      },
      { 
        name: locale === 'de' ? 'Über uns' : 'About',
        href: `/${locale}/about`
      },
      {
        name: 'Blog',
        href: `/${locale}/blog`
      },
      {
        name: locale === 'de' ? 'Kontakt' : 'Contact',
        href: `/${locale}/contact`
      }
    ],
    calculator: {
      text: locale === 'de' ? 'Rechner' : 'Calculator',
      href: `/${locale}/calculator`
    }
  };

  return { navigation, locale, pathname };
}
