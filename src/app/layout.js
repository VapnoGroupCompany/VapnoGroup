import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Schlüsselfertiges Haus - Bauexperten',
  description: 'Entdecken Sie höchste Qualität im Hausbau mit Schlüsselfertiges Haus. Unsere erfahrene Baufirma bietet schlüsselfertige Lösungen für individuelle Wohnträume in Deutschland. Erleben Sie Sorglosigkeit vom Grundstück bis zum schlüsselübergabefertigen Haus.',
  keywords: 'Renovierung, Hausrenovierung,Innenrenovierung,Außenrenovierung,Sanierung,Modernisierung,Badsanierung,Küchenrenovierung,Dachsanierung,Fassadenrenovierung,Komplettsanierung,Umbauarbeiten,Wohnungsrenovierung,Renovierungskosten,Renovierungsarbeiten,Renovierungsideen,Renovierungsfirma,Renovierungsplan,Renovierungsprojekt,Renovierungsleistungen,Schlüsselfertiges Haus,Hausbau,Baufirma Deutschland,Moderne Hausentwürfe,Schlüsselfertig bauen,Hausplanung,Bauunternehmen,Massivhaus,Energiesparhaus,Architektenhaus,Neubau,Eigenheim,Bauprojekte,Fertighaus,Wohntraum realisieren,Grundstückssuche,Bauexperten,Finanzierung Hausbau,Baugenehmigung,Umweltfreundliches Bauen, Streichen der Wände,Wandbehandlung,Verlegung des Bodens,Fliesen verlegen,Dekoration von Räumlichkeiten,Den Boden verlegen,Ausgezeichnetes Belüftungssystem,Klempnerarbeiten,Bau und Dekoration von Wänden,Einbau von Türen und Türen,Planung von Räumlichkeiten,Auswahl und Installation von Lampen,Raumdekoration,Einbau von Treppen,Installation von Solarpaneelen,Treppe,Solarplatten'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
