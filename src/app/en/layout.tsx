import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Finoplenia - Your Financial Future Starts Here',
  description: 'Expert financial advice, insurance solutions, and wealth management services for private individuals and corporate customers.',
};

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div lang="en">
      {children}
    </div>
  );
}
