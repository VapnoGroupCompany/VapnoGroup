"use client";
import styles from "./Section4.module.css";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";
// import { useTranslation } from "next-i18next";
export default function Section4(
    {s4title,s4textItem2,s4textItem1,s4textItem3,s4titleItem1,
        s4titleItem2,s4titleItem3,}
    ) {
    const locale = useLocale();
    return (   
        <div className={styles.section4}>      
        <div className={styles.containerSection4}>
        <h2 className={styles.h1m}>{s4title}</h2>
        <div className={styles.containerInner}>
        <div className={styles.Section4Item}>
        <div className={styles.headBlock}>
        <Image
         className={styles.icon}
    src="/icon1.webp"
    alt="Description of image"
    width={70}
    height={70}
  />
  <h2 className={styles.TitleSection4}>{s4titleItem1}</h2>
        </div>
        <p className={styles.TextSection4}>{s4textItem1}</p>
           
            </div>
            <div className={styles.Section4Item}>
        <div className={styles.headBlock}>
        <Image
           className={styles.icon}
    src="/icon2.webp"
    alt="Description of image"
    width={70}
    height={70}
  />
  <h2 className={styles.TitleSection4}>{s4titleItem2}</h2>
        </div>
        <p className={styles.TextSection4}>{s4textItem2}</p>
           
            </div>
            <div className={styles.Section4Item}>
        <div className={styles.headBlock}>
        <Image
           className={styles.icon}
    src="/icon3.svg"
    alt="Description of image"
    width={70}
    height={70}
  />
  <h2 className={styles.TitleSection4}>{s4titleItem3}</h2>
        </div>
        <p className={styles.TextSection4}>{s4textItem3}</p>
            </div>
        </div>
        </div>
        </div>
    );
}
