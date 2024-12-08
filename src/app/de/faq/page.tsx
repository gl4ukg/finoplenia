import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { FaqAccordion } from '@/app/components/FaqAccordion';
import { faqData } from '@/constants/faq';

export default function FaqPage() {
  const { general, private: privateServices, corporate } = faqData.de;

  return (
    <main className="flex min-h-screen flex-col">
      <Navigation />
      
      <div className="flex-grow container py-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Häufig gestellte Fragen</h1>
          
          <div className="space-y-12">
            <FaqAccordion title={general.title} items={general.items} />
            <FaqAccordion title={privateServices.title} items={privateServices.items} />
            <FaqAccordion title={corporate.title} items={corporate.items} />
          </div>

          <div className="mt-16 p-6 bg-primary/5 rounded-2xl">
            <h2 className="text-xl font-semibold mb-4">Noch Fragen?</h2>
            <p className="text-gray-600 mb-6">
              Sie können die gesuchte Antwort nicht finden? Kontaktieren Sie unser Support-Team.
            </p>
            <a
              href="/de/contact"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-colors"
            >
              Kontakt aufnehmen
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
