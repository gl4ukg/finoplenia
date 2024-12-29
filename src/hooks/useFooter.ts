import { usePathname } from 'next/navigation';

export function useFooter() {
  const pathname = usePathname();
  const locale = pathname?.split('/')[1] || 'en';

  const footer = {
    company: {
      title: locale === 'de' ? 'Unternehmen' : 'Company',
      links: [
        {
          name: locale === 'de' ? 'Über uns' : 'About',
          href: '/about'
        },
        {
          name: locale === 'de' ? 'Karriere' : 'Careers',
          href: '/careers'
        },
        {
          name: locale === 'de' ? 'Kontakt' : 'Contact',
          href: '/contact'
        }
      ]
    },
    services: {
      title: locale === 'de' ? 'Dienstleistungen' : 'Services',
      links: [
        {
          name: 'Private Banking',
          href: '/private'
        },
        {
          name: locale === 'de' ? 'Firmenkunden' : 'Corporate Banking',
          href: '/corporate'
        },
        {
          name: locale === 'de' ? 'Vermögensverwaltung' : 'Wealth Management',
          href: '/private/wealth'
        }
      ]
    },
    legal: {
      title: locale === 'de' ? 'Rechtliches' : 'Legal',
      links: [
        {
          name: locale === 'de' ? 'Datenschutz' : 'Privacy Policy',
          href: '/privacy'
        },
        {
          name: locale === 'de' ? 'Nutzungsbedingungen' : 'Terms of Service',
          href: '/terms'
        },
        {
          name: locale === 'de' ? 'Cookie-Richtlinie' : 'Cookie Policy',
          href: '/cookies'
        }
      ]
    },
    social: {
      title: locale === 'de' ? 'Social Media' : 'Social',
      links: [
        {
          name: 'LinkedIn',
          href: 'https://linkedin.com'
        },
        {
          name: 'Twitter',
          href: 'https://twitter.com'
        },
        {
          name: 'Instagram',
          href: 'https://instagram.com'
        }
      ]
    }
  };

  return { footer, locale };
}
