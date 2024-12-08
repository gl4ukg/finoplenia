import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { CookieProvider } from '@/contexts/CookieContext';
import { CookieConsent } from './components/CookieConsent';
import { GoogleAnalytics } from '@/components/GoogleAnalytics';
import { Providers } from "./providers";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Finoplenia',
  description: 'Expert financial advice and services',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CookieProvider>
          <Providers>
            {children}
          </Providers>
          <CookieConsent />
          <GoogleAnalytics />
        </CookieProvider>
      </body>
    </html>
  );
}
