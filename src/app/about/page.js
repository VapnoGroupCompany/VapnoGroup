"use client"
import styles from './About.module.css';
import Header from '../Header';
import Footer from '../Footer';
function About() {
  return (
    <>
    <Header/>
    <div className={styles.wrapper}>
    <div className={styles.content}>
    <div className={styles.leftContent}>
        SH - <br></br> Schlusselfertiges Haus
        </div>
        <div className={styles.rigthContent}>
        <p>Nun, die Gründung unseres Unternehmens war 2008, als wir unsere Arbeit mit den ersten Kunden aufnahmen.  Wir begannen mit dem, was wir am besten konnten, nämlich Innenausbau in Ferienhäusern und Wohnungen. </p>
        <p>Damals haben wir uns auf schlüsselfertige Bäder und ganze Häuser spezialisiert.  Später begannen wir mit dem Bau von Wohnhäusern und der Installation von schlüsselfertigen Solaranlagen. </p>
        <p>In der langen Zeit unserer erfolgreichen Arbeit hatten wir viele Projekte, mit denen wir sehr zufrieden sind, und wir hätten nichts dagegen, in den kommenden Jahren noch mehr Projekte zu bekommen. Wir verfügen über ein Team von erfahrenen Fachleuten, von denen einige mehr als 20 Jahre Erfahrung im Bauwesen haben, und wir haben auch unsere eigenen Manager, die Kundenaufträge annehmen und sie von Anfang bis Ende mit maximaler Unterstützung ausführen. Derzeit haben wir unseren Sitz in Mainz. </p>
        <p>Wir arbeiten auch für das gesamte Kontingent im Umkreis von 300 km.  Wir verfügen über offene soziale Netzwerke, in denen Sie uns folgen können, sowie über Kontaktdaten, über die Sie mit uns in Kontakt treten können. Wir helfen Ihnen gerne dabei, Ihren Wohntraum zu verwirklichen.</p>
    
    </div>
    
    </div>
    </div>
    <Footer/>
    </>
  );
}
export default About;