export const navigation = {
  languages: [
    { name: 'EN', code: 'en' },
    { name: 'DE', code: 'de' },
  ],
  en: {
    main: [
      { name: 'Home', href: '/en' },
      {
        name: 'Private',
        href: '/en/private',
        submenu: [
          {
            name: 'Wealth Management',
            href: '/en/private/wealth-management',
            description: 'Comprehensive wealth management solutions for individuals and families',
          },
          {
            name: 'Investment Advisory',
            href: '/en/private/investment-advisory',
            description: 'Expert guidance for your investment portfolio',
          },
          {
            name: 'Estate Planning',
            href: '/en/private/estate-planning',
            description: 'Strategic planning for your legacy and succession',
          },
        ],
      },
      {
        name: 'Corporate',
        href: '/en/corporate',
        submenu: [
          {
            name: 'M&A Advisory',
            href: '/en/corporate/ma-advisory',
            description: 'Strategic guidance for mergers and acquisitions',
          },
          {
            name: 'Capital Markets',
            href: '/en/corporate/capital-markets',
            description: 'Access to global capital markets and financing solutions',
          },
          {
            name: 'Corporate Finance',
            href: '/en/corporate/finance',
            description: 'Comprehensive financial solutions for businesses',
          },
        ],
      },
      { name: 'About', href: '/en/about' },
      { name: 'Contact', href: '/en/contact' },
    ],
  },
  de: {
    main: [
      { name: 'Home', href: '/de' },
      {
        name: 'Privat',
        href: '/de/private',
        submenu: [
          {
            name: 'Vermögensverwaltung',
            href: '/de/private/wealth-management',
            description: 'Umfassende Vermögensverwaltungslösungen für Privatpersonen und Familien',
          },
          {
            name: 'Anlageberatung',
            href: '/de/private/investment-advisory',
            description: 'Professionelle Beratung für Ihr Investmentportfolio',
          },
          {
            name: 'Nachlassplanung',
            href: '/de/private/estate-planning',
            description: 'Strategische Planung für Ihre Vermögensnachfolge',
          },
        ],
      },
      {
        name: 'Unternehmen',
        href: '/de/corporate',
        submenu: [
          {
            name: 'M&A-Beratung',
            href: '/de/corporate/ma-advisory',
            description: 'Strategische Beratung für Fusionen und Übernahmen',
          },
          {
            name: 'Kapitalmärkte',
            href: '/de/corporate/capital-markets',
            description: 'Zugang zu globalen Kapitalmärkten und Finanzierungslösungen',
          },
          {
            name: 'Unternehmensfinanzierung',
            href: '/de/corporate/finance',
            description: 'Umfassende Finanzierungslösungen für Unternehmen',
          },
        ],
      },
      { name: 'Über uns', href: '/de/about' },
      { name: 'Kontakt', href: '/de/contact' },
    ],
  },
};
