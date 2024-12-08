import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';

export default function PrivacyPolicy() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navigation />
      
      <div className="flex-grow container py-32">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Datenschutzerklärung</h1>
          
          <div className="prose prose-lg">
            <p className="text-gray-600 mb-8">Zuletzt aktualisiert: {new Date().toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Einführung</h2>
              <p>Willkommen bei Finoplenia. Wir respektieren Ihre Privatsphäre und verpflichten uns, Ihre personenbezogenen Daten zu schützen. Diese Datenschutzerklärung informiert Sie darüber, wie wir mit Ihren personenbezogenen Daten umgehen, wenn Sie unsere Website besuchen, und klärt Sie über Ihre Datenschutzrechte und den gesetzlichen Schutz auf.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Die Daten, die wir sammeln</h2>
              <p>Wir können verschiedene Arten von personenbezogenen Daten über Sie sammeln, verwenden, speichern und übertragen, die wir wie folgt gruppiert haben:</p>
              <ul className="list-disc pl-6 mt-4">
                <li>Identitätsdaten: beinhalten Vorname, Nachname, Benutzername oder ähnliche Kennungen</li>
                <li>Kontaktdaten: beinhalten E-Mail-Adresse und Telefonnummern</li>
                <li>Technische Daten: beinhalten Internet-Protokoll (IP)-Adresse, Browsertyp und -version, Zeitzoneneinstellung und Standort</li>
                <li>Nutzungsdaten: beinhalten Informationen darüber, wie Sie unsere Website und Dienstleistungen nutzen</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Wie wir Ihre Daten verwenden</h2>
              <p>Wir werden Ihre personenbezogenen Daten nur verwenden, wenn das Gesetz dies erlaubt. Am häufigsten werden wir Ihre personenbezogenen Daten unter folgenden Umständen verwenden:</p>
              <ul className="list-disc pl-6 mt-4">
                <li>Um unsere Dienstleistungen für Sie zu erbringen</li>
                <li>Um unsere Website und Dienstleistungen zu verbessern</li>
                <li>Um mit Ihnen über unsere Dienstleistungen zu kommunizieren</li>
                <li>Um rechtliche Verpflichtungen zu erfüllen</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Datensicherheit</h2>
              <p>Wir haben angemessene Sicherheitsmaßnahmen getroffen, um zu verhindern, dass Ihre personenbezogenen Daten versehentlich verloren gehen, verwendet oder unbefugt zugänglich gemacht, verändert oder offengelegt werden. Wir beschränken den Zugriff auf Ihre personenbezogenen Daten auf Mitarbeiter, Vertreter, Auftragnehmer und andere Dritte, die ein geschäftliches Erfordernis haben, diese zu kennen.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Ihre gesetzlichen Rechte</h2>
              <p>Nach den Datenschutzgesetzen haben Sie folgende Rechte:</p>
              <ul className="list-disc pl-6 mt-4">
                <li>Das Recht auf Zugang zu Ihren personenbezogenen Daten</li>
                <li>Das Recht auf Berichtigung Ihrer personenbezogenen Daten</li>
                <li>Das Recht auf Löschung Ihrer personenbezogenen Daten</li>
                <li>Das Recht auf Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten</li>
                <li>Das Recht auf Datenübertragbarkeit</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Cookies</h2>
              <p>Unsere Website verwendet Cookies, um Sie von anderen Nutzern unserer Website zu unterscheiden. Dies hilft uns, Ihnen ein gutes Erlebnis zu bieten, wenn Sie unsere Website durchsuchen, und ermöglicht uns auch, unsere Website zu verbessern. Sie können Ihren Browser so einstellen, dass er alle oder einige Browser-Cookies ablehnt oder Sie benachrichtigt, wenn Websites Cookies setzen oder darauf zugreifen.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Kontaktieren Sie uns</h2>
              <p>Wenn Sie Fragen zu dieser Datenschutzerklärung oder unseren Datenschutzpraktiken haben, kontaktieren Sie uns bitte unter:</p>
              <div className="mt-4">
                <p>E-Mail: privacy@finoplenia.com</p>
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
