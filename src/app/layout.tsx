import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: 'Finoplenia',
  description: 'Expert financial advice and services',
};

export default function RootLayout({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: string;
}) {
  return (
    <html lang={locale}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
