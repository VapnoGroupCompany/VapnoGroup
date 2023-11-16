"use client"
import styles from './Cards.module.css';
function Cards() {
  return (
    <>
     <div className={styles.cards}>
    <div className={styles.card}>
      <div className={styles.cardInner}>
        <div className={styles.cardFront1}>
          <p></p>
        </div>
        <div className={styles.cardBack1}>
          <div className={styles.text}>
          <h2>Außenseite des Hauses</h2>
          <p>Wir schaffen wunderschöne Fassaden und integrieren dabei exquisites Design und hohe Qualität. Wir verwandeln die umliegende Landschaft in eine magische Umgebung, in der Natur und Architektur harmonisch miteinander verbunden sind. Wir errichten Gebäude vom Fundament und sorgen für Zuverlässigkeit und Stabilität der Bauwerke.</p>
          </div>
        </div>
      </div>
    </div>

    {/* <div className={styles.card}>
      <div className={styles.cardInner}>
        <div className={styles.cardFront2}>
          <p></p>
        </div>
        <div className={styles.cardBack2}>
          <div className={styles.text}>
          <h2>Back Content</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque nulla iste incidunt nihil dicta aspernatur, quod unde magni cum possimus, id, dolore nostrum quisquam totam nesciunt nobis consequuntur voluptatibus? Expedita!</p>
          </div>
        </div>
      </div>
    </div> */}

     <div className={styles.card}>
      <div className={styles.cardInner}>
        <div className={styles.cardFront3}>
          <p></p>
        </div>
        <div className={styles.cardBack3}>
          <div className={styles.text}>
          <h2>Schlafzimmer</h2>
          <p>Wir führen umfassende Reparaturen von Schlafzimmern durch und bieten eine breite Palette von Dienstleistungen an. Unser Spezialistenteam führt Bodenaustausch, Wandanstrich, Installation neuer Veredelungsmaterialien sowie Beleuchtungsinstallation und -wartung durch.</p>
          </div>
        </div>
      </div>
    </div>

    <div className={styles.card}>
      <div className={styles.cardInner}>
        <div className={styles.cardFront5}>
          <p></p>
        </div>
        <div className={styles.cardBack5}>
          <div className={styles.text}>
          <h2>Küche</h2>
          <p>Wir renovieren Küchen und schaffen stilvolle und funktionale Räume. Unser Team sorgt für die Installation neuer Geräte, die Optimierung des Arbeitsraums und den Einsatz ergonomischer Lösungen.</p>
          </div>
        </div>
      </div>
    </div>


    <div className={styles.card}>
      <div className={styles.cardInner}>
        <div className={styles.cardFront6}>
          <p></p>
        </div>
        <div className={styles.cardBack6}>
          <div className={styles.text}>
          <h2>Badezimmer</h2>
          <p>Wir sind auf Badezimmerrenovierungen spezialisiert und bieten Dienstleistungen von kosmetischen Renovierungen bis hin zu kompletten Umbauten an. Wir verwenden moderne Materialien und technische Lösungen, um einen komfortablen und ästhetischen Raum zu schaffen.</p>
          </div>
        </div>
      </div>
    </div>

    <div className={styles.card}>
      <div className={styles.cardInner}>
        <div className={styles.cardFront7}>
          <p></p>
        </div>
        <div className={styles.cardBack7}>
          <div className={styles.text}>
          <h2>Toilette</h2>
          <p>Unser Team führt Reparaturen von Toilettenanlagen durch und gewährleistet dabei hohe Qualität und eine individuelle Betreuung jedes Kunden. Wir installieren neue Sanitäranlagen, Farben und Fliesen und schaffen so einen komfortablen und stilvollen Raum.</p>
          </div>
        </div>
      </div>
    </div>
   

    <div className={styles.card}>
      <div className={styles.cardInner}>
        <div className={styles.cardFront8}>
          <p></p>
        </div>
        <div className={styles.cardBack8}>
          <div className={styles.text}>
          <h2>Treppen</h2>
          <p>Wir schaffen einzigartige und komfortable Treppen und achten dabei auf Ästhetik und Sicherheit.</p>
          </div>
        </div>
      </div>
    </div>


    <div className={styles.card}>
      <div className={styles.cardInner}>
        <div className={styles.cardFront9}>
          <p></p>
        </div>
        <div className={styles.cardBack9}>
          <div className={styles.text}>
          <h2>Wohnzimmer</h2>
          <p>Sorgfältige Endbearbeitung und Nivellierung der Wände, einschließlich Spachteln und Entfernen der alten Beschichtung, Einbau neuer Fenster, die nicht nur für eine wirksame Wärme- und Schalldämmung sorgen, sondern auch den Stil des Raumes betonen.</p>
          </div>
        </div>
      </div>
      
    </div>
   

    <div className={styles.card}>
      <div className={styles.cardInner}>
        <div className={styles.cardFront4}>
          <p></p>
        </div>
        <div className={styles.cardBack4}>
          <div className={styles.text}>
          <h2>Solarplatten</h2>
          <p>Professionelle Installation von Solarmodulen auf dem Dach oder anderen geeigneten Orten.
            Gewährleistung einer sicheren Montage und korrekten Ausrichtung zur Maximierung der Sonnenenergiegewinnung.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}
export default  Cards;