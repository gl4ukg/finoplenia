import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import { GoogleAnalytics } from '@/components/GoogleAnalytics';
import { CookieConsent } from '@/components/CookieConsent';
import { CookieProvider } from '@/contexts/CookieContext';
import { i18n } from '@/i18n/settings';
import type { Locale } from '@/i18n/settings';

const inter = Inter({ subsets: ['latin'] });

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: 'Finoplenia - Professional Financial Services',
  description: 'Professional financial advisory, insurance solutions, and wealth management for private individuals and corporations.',
};

export default function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <CookieProvider>
          {children}
          <CookieConsent />
          <GoogleAnalytics />
        </CookieProvider>
      </body>
    </html>
  );
}
