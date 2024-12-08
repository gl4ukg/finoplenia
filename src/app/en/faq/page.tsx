import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { FaqAccordion } from '@/app/components/FaqAccordion';
import { faqData } from '@/constants/faq';

export default function FaqPage() {
  const { general, private: privateServices, corporate } = faqData.en;

  return (
    <main className="flex min-h-screen flex-col">
      <Navigation />
      
      <div className="flex-grow container py-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>
          
          <div className="space-y-12">
            <FaqAccordion title={general.title} items={general.items} />
            <FaqAccordion title={privateServices.title} items={privateServices.items} />
            <FaqAccordion title={corporate.title} items={corporate.items} />
          </div>

          <div className="mt-16 p-6 bg-primary/5 rounded-2xl">
            <h2 className="text-xl font-semibold mb-4">Still have questions?</h2>
            <p className="text-gray-600 mb-6">
              Can't find the answer you're looking for? Please contact our support team.
            </p>
            <a
              href="/en/contact"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}