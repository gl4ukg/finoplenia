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
        href: `/private`,
        submenu: [
          {
            name: locale === 'de' ? 'Versicherung' : 'Insurance',
            href: `/private#insurance`,
            description: locale === 'de'
              ? 'Umfassende Versicherungslösungen'
              : 'Comprehensive insurance solutions'
          },
          {
            name: locale === 'de' ? 'Ruhestand' : 'Retirement',
            href: `/private#retirement`,
            description: locale === 'de'
              ? 'Planung für Ihren Ruhestand'
              : 'Planning for your retirement'
          },
          {
            name: locale === 'de' ? 'Vermögen' : 'Wealth',
            href: `/private#wealth`,
            description: locale === 'de'
              ? 'Vermögensverwaltung und -planung'
              : 'Wealth management and planning'
          },
          {
            name: locale === 'de' ? 'Immobilien' : 'Property',
            href: `/private#property`,
            description: locale === 'de'
              ? 'Immobilieninvestments und -verwaltung'
              : 'Property investments and management'
          },
          {
            name: locale === 'de' ? 'Steuern' : 'Tax',
            href: `/private#tax`,
            description: locale === 'de'
              ? 'Steuerplanung und -optimierung'
              : 'Tax planning and optimization'
          }
        ]
      },
      {
        name: 'Corporate',
        href: `/corporate`,
        submenu: [
          {
            name: locale === 'de' ? 'Beratung' : 'Advisory',
            href: `/corporate#beratung`,
            description: locale === 'de'
              ? 'Professionelle Unternehmensberatung'
              : 'Professional business consulting'
          },
          {
            name: locale === 'de' ? 'Steuern' : 'Tax',
            href: `/corporate#steuern`,
            description: locale === 'de'
              ? 'Unternehmenssteuerberatung'
              : 'Corporate tax consulting'
          }
        ]
      },
      { 
        name: locale === 'de' ? 'Über uns' : 'About',
        href: `/about`
      },
      {
        name: locale === 'de' ? 'Karriere' : 'Career',
        href: `/career`
      },
      {
        name: locale === 'de' ? 'Kontakt' : 'Contact',
        href: `/contact`
      }
    ],
    calculator: {
      text: locale === 'de' ? 'Rechner' : 'Calculator',
      href: `/calculator`
    }
  };

  return { navigation, locale, pathname };
}
