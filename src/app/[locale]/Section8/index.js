"use client";
import styles from "./Section8.module.css";
import React from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
// import { useEffect} from "react";
import Image from "next/image";
// import { useTranslation } from "next-i18next";
export default function Section8(
  {s8title1,s8title2,s8descr2,s8descr1 }
    ) {
    const locale = useLocale();
    // const [scrollTop, setScrollTop] = React.useState(0);
  //   useEffect(() => {
  //       const handleScroll = () => {
  //           setScrollTop(window.scrollY);
  //       };

  //       window.addEventListener("scroll", handleScroll);

  //       return () => {
  //           window.removeEventListener("scroll", handleScroll);
  //       };
  //   }, []);

  //   const parallaxStyle = {
  //     transform: `translateY(${scrollTop * 0.5}px)`,
  // };

    return (   
      <div className={styles.section8}>
      <div className={styles.section8Container}>
      
      <div className={styles.slogan}>
      
          <h3 className={styles.sloganTitle}>{s8title1}</h3>
          
          <Link className={styles.sloganBottom}  href={`/${locale}/projects`}>
              <span>{s8descr1}</span>
              <div className={styles.sloganButton}><Image
        className={styles.imgSection7}
    src="/arrow.png"
    alt="Description of image"
    width={20}
    height={20}
    />
    </div>
              </Link>
          </div>
         
          <div className={styles.slogan}>
          <h3 className={styles.sloganTitle}>{s8title2}</h3>
          <a  className={styles.sloganBottom} href="/certificate.pdf" download>
              <span>{s8descr2}</span>
              <div className={styles.sloganButton}> <Image
        className={styles.imgSection7}
    src="/arrow.png"
    alt="Description of image"
    width={20}
    height={20}
  /></div>
              </a>               
          </div>
      </div>
      </div>
           
    );
}
