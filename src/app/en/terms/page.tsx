import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';

export default function TermsAndConditions() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navigation />
      
      <div className="flex-grow container py-32">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
          
          <div className="prose prose-lg">
            <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p>These terms and conditions outline the rules and regulations for the use of Finoplenia's website. By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use Finoplenia's website if you do not accept all of the terms and conditions stated on this page.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. License to Use Website</h2>
              <p>Unless otherwise stated, Finoplenia and/or its licensors own the intellectual property rights for all material on this website. All intellectual property rights are reserved. You may view and/or print pages from the website for your own personal use subject to restrictions set in these terms and conditions.</p>
              
              <p className="mt-4">You must not:</p>
              <ul className="list-disc pl-6 mt-4">
                <li>Republish material from this website</li>
                <li>Sell, rent, or sub-license material from this website</li>
                <li>Reproduce, duplicate or copy material from this website</li>
                <li>Redistribute content from this website</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Disclaimer</h2>
              <p>To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and the use of this website. Nothing in this disclaimer will:</p>
              <ul className="list-disc pl-6 mt-4">
                <li>Limit or exclude our or your liability for death or personal injury</li>
                <li>Limit or exclude our or your liability for fraud or fraudulent misrepresentation</li>
                <li>Limit any of our or your liabilities in any way that is not permitted under applicable law</li>
                <li>Exclude any of our or your liabilities that may not be excluded under applicable law</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Financial Services</h2>
              <p>The information contained on this website is for general information purposes only. The information is provided by Finoplenia, and while we endeavor to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Changes to Terms</h2>
              <p>We reserve the right to revise these terms and conditions at any time as it sees fit, and by using this website you are expected to review these terms regularly to ensure you understand all terms and conditions governing use of this website.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Governing Law</h2>
              <p>These terms and conditions are governed by and construed in accordance with the laws of Switzerland, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Contact Information</h2>
              <p>If you have any queries regarding any of our terms, please contact us at:</p>
              <div className="mt-4">
                <p>Email: legal@finoplenia.com</p>
                <p>Address: [Your Business Address]</p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
