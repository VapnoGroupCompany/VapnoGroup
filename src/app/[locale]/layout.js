import './globals.css'
import { Inter } from 'next/font/google'
import {notFound} from 'next/navigation';
import {unstable_setRequestLocale} from 'next-intl/server';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Schlüsselfertiges Haus - Bauexperten',
  description: 'Entdecken Sie höchste Qualität im Hausbau mit Schlüsselfertiges Haus. Unsere erfahrene Baufirma bietet schlüsselfertige Lösungen für individuelle Wohnträume in Deutschland. Erleben Sie Sorglosigkeit vom Grundstück bis zum schlüsselübergabefertigen Haus.',
  keywords: 'Renovierung, Hausrenovierung,Innenrenovierung,Außenrenovierung,Sanierung,Modernisierung,Badsanierung,Küchenrenovierung,Dachsanierung,Fassadenrenovierung,Komplettsanierung,Umbauarbeiten,Wohnungsrenovierung,Renovierungskosten,Renovierungsarbeiten,Renovierungsideen,Renovierungsfirma,Renovierungsplan,Renovierungsprojekt,Renovierungsleistungen,Schlüsselfertiges Haus,Hausbau,Baufirma Deutschland,Moderne Hausentwürfe,Schlüsselfertig bauen,Hausplanung,Bauunternehmen,Massivhaus,Energiesparhaus,Architektenhaus,Neubau,Eigenheim,Bauprojekte,Fertighaus,Wohntraum realisieren,Grundstückssuche,Bauexperten,Finanzierung Hausbau,Baugenehmigung,Umweltfreundliches Bauen, Streichen der Wände,Wandbehandlung,Verlegung des Bodens,Fliesen verlegen,Dekoration von Räumlichkeiten,Den Boden verlegen,Ausgezeichnetes Belüftungssystem,Klempnerarbeiten,Bau und Dekoration von Wänden,Einbau von Türen und Türen,Planung von Räumlichkeiten,Auswahl und Installation von Lampen,Raumdekoration,Einbau von Treppen,Installation von Solarpaneelen,Treppe,Solarplatten'
}

const locales = ['de', 'uk'];
 
export default function LocaleLayout({children, params: {locale}}) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) notFound();
  unstable_setRequestLocale(locale);
  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}
