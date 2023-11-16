"use client"
import Image from "next/image";
import styles from "./page.module.css";
import React from "react";
import SecondSlider from "./SecondSlider";
import Footer from "./Footer";
import Header from "./Header";
import Link from "next/link";
import { useEffect, useState } from 'react';

export default function Home() {
  const [scrollTop, setScrollTop] = React.useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const parallaxStyle = {
    transform: `translateY(${scrollTop * 0.4}px) scale(${1 + scrollTop * 0.0005})`,

  };

    return (
        <main className={styles.main}>
           <Header/>
            <div className={styles.parallaxContainer}>
            <div  style={parallaxStyle} className={styles.section1}>
                
            </div>
            <div className={styles.slogan}>
                    <h2 className={styles.title}>
                        Schlusselfertiges <br></br>Haus
                    </h2>
                    <p className={styles.subTitle}>wir bauen ihre zukunft</p>
                    <Link href="/contact"><button className={styles.button}>Detaillierte</button></Link> 
                </div>
            </div>
            <div className={styles.section3}>
            <div className={styles.ourServicesContainer}>
            <h1 className={styles.h1}>Bauarbeiten jeglicher Komplexität</h1>
            <h2 className={styles.mainText}>
            Bauen ist ein komplexer und verantwortungsvoller Prozess, der Fachwissen und Erfahrung erfordert. Unser Unternehmen verfügt über langjährige Erfahrung im Baubereich und ist bereit, alle Bauarbeiten auszuführen, von der Reparatur einer Wohnung bis zum Bau eines Ferienhauses.
                    </h2>
                    <Link href="/about"><button className={styles.buttonBlack}>Detaillierte</button></Link> 
                    </div>
            </div>
            <div className={styles.section4}>
            <div className={styles.ourFavorsContainer}>
            <Image className={styles.favorImg} width={500} height={380} src="/blackman.webp" alt="blackman"/>
               <div className={styles.txt}>
                <h2 className={styles.favorTitle}>Wir bieten eine breite Palette von Baudienstleistungen an, darunter:</h2>
              
                <ul className={styles.favors}>
                    <li className={styles.favor}>Rekonstruktion und Reparatur von Gebäuden und Bauwerken</li>
                    <li className={styles.favor}>Bau von Wohngebäuden, Ferienhäusern, Stadthäusern</li>
                    <li className={styles.favor}>Bau von Gewerbebauten wie Einkaufszentren, Bürogebäuden, Lagerhallen</li>
                    <li className={styles.favor}>Bau von Ingenieurnetzen wie Wasserversorgung, Abwasser, Stromversorgung</li>
                </ul>
               </div>
               
            </div>
            </div>
            <div className={styles.section6}>
            <div className={styles.projectContainer}>
              </div>
              <div className={styles.projectContent}>
                <p>Wir führen Bauarbeiten jeder Komplexität durch, von der Wohnungsrenovierung bis zum Hüttenbau. Wir arbeiten mit hochwertigen Materialien und nutzen moderne Bautechnologien.</p>
                <p>Der beste Weg, sich von unserer Professionalität zu überzeugen, ist, auf die Schaltfläche unten zu klicken</p>
                <Link href="/projects"> <button>Detaillierte</button></Link>
                
              </div>

            </div>
            <div className={styles.section2}>
                <div className={styles.ourServicesContainer}>
                    <h2 className={styles.ourTitle}>
                        Warum sollten Sie mit uns zusammenarbeiten?
                    </h2>
                    <div className={styles.services}>
                        <div className={styles.service}>
                            <h4 className={styles.service_title}>Garantie</h4>
                            <p className={styles.service_description}>
                                Langfristige Gewährleistungspflichten nach
                                Vereinbarung sowie Wartung der Anlage nach
                                Ablauf der Laufzeit;
                            </p>
                        </div>

                        <div className={styles.service}>
                            <h4 className={styles.service_title}>Schätzen</h4>
                            <p className={styles.service_description}>
                                Bereitstellung aller Entwurfsvoranschläge und
                                Empfangsunterlagen für den Kunden;
                            </p>
                        </div>
                        <div className={styles.service}>
                            <h4 className={styles.service_title}>
                                Zuverlässigkeit
                            </h4>
                            <p className={styles.service_description}>
                                Hoher Qualifikationsgrad der beteiligten
                                Mitarbeiter;
                            </p>
                        </div>
                        <div className={styles.service}>
                            <h4 className={styles.service_title}>Qualität</h4>
                            <p className={styles.service_description}>
                                Strenge Kontrolle der Arbeitsleistung gemäß den
                                Normen und Vorschriften von SNiP;
                            </p>
                        </div>
                        <div className={styles.service}>
                            <h4 className={styles.service_title}>
                                Flexibilität
                            </h4>
                            <p className={styles.service_description}>
                                Durchführung von Arbeiten unterschiedlicher
                                Komplexität: von kleinen Reparaturen bis hin zu
                                großen Änderungen mit exklusiven Designprojekten
                            </p>
                        </div>
                        <div className={styles.service}>
                            <h4 className={styles.service_title}>
                                Verantwortung
                            </h4>
                            <p className={styles.service_description}>
                                Einhaltung aller Vertragsbedingungen
                            </p>
                        </div>
                    </div>
                </div>
            </div>
           
            <div className={styles.section5}>
            <SecondSlider/>
            </div>
            <Footer/>
            
        </main>
    );
}
