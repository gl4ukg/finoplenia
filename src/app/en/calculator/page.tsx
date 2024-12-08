import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { InsuranceCalculator } from '@/app/components/InsuranceCalculator';

export default function CalculatorPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navigation />
      
      <div className="flex-grow container py-32">
        <InsuranceCalculator language="en" />
      </div>

      <Footer />
    </main>
  );
}
