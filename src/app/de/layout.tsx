import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Finoplenia - Ihre finanzielle Zukunft beginnt hier',
  description: 'Professionelle Finanzberatung, Versicherungslösungen und Vermögensverwaltung für Privatkunden und Unternehmen.',
};

export default function GermanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div lang="de">
      {children}
    </div>
  );
}
