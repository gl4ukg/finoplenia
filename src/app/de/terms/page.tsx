import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';

export default function TermsAndConditions() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navigation />
      
      <div className="flex-grow container py-32">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Allgemeine Geschäftsbedingungen</h1>
          
          <div className="prose prose-lg">
            <p className="text-gray-600 mb-8">Zuletzt aktualisiert: {new Date().toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Einführung</h2>
              <p>Diese Allgemeinen Geschäftsbedingungen regeln die Nutzung der Website von Finoplenia. Mit dem Zugriff auf diese Website gehen wir davon aus, dass Sie diese Bedingungen vollständig akzeptieren. Nutzen Sie die Website von Finoplenia nicht weiter, wenn Sie nicht alle auf dieser Seite aufgeführten Bedingungen akzeptieren.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Lizenz zur Nutzung der Website</h2>
              <p>Sofern nicht anders angegeben, besitzen Finoplenia und/oder seine Lizenzgeber die geistigen Eigentumsrechte für das gesamte Material auf dieser Website. Alle geistigen Eigentumsrechte sind vorbehalten. Sie können Seiten von der Website für Ihren persönlichen Gebrauch ansehen und/oder ausdrucken, vorbehaltlich der in diesen Bedingungen festgelegten Einschränkungen.</p>
              
              <p className="mt-4">Sie dürfen nicht:</p>
              <ul className="list-disc pl-6 mt-4">
                <li>Material von dieser Website neu veröffentlichen</li>
                <li>Material von dieser Website verkaufen, vermieten oder unterlizenzieren</li>
                <li>Material von dieser Website reproduzieren, duplizieren oder kopieren</li>
                <li>Inhalte von dieser Website weiterverbreiten</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Haftungsausschluss</h2>
              <p>Im maximal zulässigen gesetzlichen Umfang schließen wir alle Zusicherungen, Gewährleistungen und Bedingungen in Bezug auf unsere Website und die Nutzung dieser Website aus. Nichts in diesem Haftungsausschluss wird:</p>
              <ul className="list-disc pl-6 mt-4">
                <li>Unsere oder Ihre Haftung für Tod oder Personenschäden einschränken oder ausschließen</li>
                <li>Unsere oder Ihre Haftung für Betrug oder betrügerische Falschdarstellung einschränken oder ausschließen</li>
                <li>Unsere oder Ihre Haftung in einer Weise beschränken, die nach geltendem Recht nicht zulässig ist</li>
                <li>Jegliche unserer oder Ihrer Haftungen ausschließen, die nach geltendem Recht nicht ausgeschlossen werden können</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Finanzdienstleistungen</h2>
              <p>Die auf dieser Website enthaltenen Informationen dienen ausschließlich der allgemeinen Information. Die Informationen werden von Finoplenia bereitgestellt, und obwohl wir uns bemühen, die Informationen aktuell und korrekt zu halten, geben wir keinerlei ausdrückliche oder stillschweigende Zusicherungen oder Gewährleistungen hinsichtlich der Vollständigkeit, Richtigkeit, Zuverlässigkeit, Eignung oder Verfügbarkeit der Website oder der darin enthaltenen Informationen, Produkte, Dienstleistungen oder zugehörigen Grafiken für irgendeinen Zweck.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Änderungen der Bedingungen</h2>
              <p>Wir behalten uns das Recht vor, diese Allgemeinen Geschäftsbedingungen jederzeit nach eigenem Ermessen zu überarbeiten, und durch die Nutzung dieser Website wird von Ihnen erwartet, dass Sie diese Bedingungen regelmäßig überprüfen, um sicherzustellen, dass Sie alle Bedingungen verstehen, die die Nutzung dieser Website regeln.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Geltendes Recht</h2>
              <p>Diese Allgemeinen Geschäftsbedingungen unterliegen den Gesetzen der Schweiz und werden nach diesen ausgelegt, und Sie unterwerfen sich unwiderruflich der ausschließlichen Zuständigkeit der Gerichte an diesem Ort.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Kontaktinformationen</h2>
              <p>Wenn Sie Fragen zu unseren Bedingungen haben, kontaktieren Sie uns bitte unter:</p>
              <div className="mt-4">
                <p>E-Mail: legal@finoplenia.com</p>
                <p>Adresse: [Ihre Geschäftsadresse]</p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
