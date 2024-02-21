"use client";
import styles from "./Section7.module.css";
import React from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import Image from "next/image";
// import { useTranslation } from "next-i18next";
export default function Section7(
  { s7title,s7titleItem1,s7titleItem2,s7titleItem3,s7textItem1,s7textItem2,s7textItem3}
    ) {
    const locale = useLocale();
    return ( 
        <div className={styles.section7}>
        <div className={styles.section7Container}>
        <h2 className={styles.h2s7}>{s7title}</h2>
        <div className={styles.section7Item}>
        <Image
        className={styles.imgSection7}
    src="/lab.jpg"
    alt="Description of image"
    width={500}
    height={500}
  />
  <div className={styles.section7ItemSide}>
  <h3 className={styles.TitleSection7}>{s7titleItem1} </h3>
  <p  className={styles.descrSection7} >
 {s7textItem1}
  </p>
  </div>
        </div>
        <div className={styles.section7Item2}>
        <Image
        className={styles.imgSection7}
    src="/Quality.jpeg"
    alt="Description of image"
    width={500}
    height={500}
  />
  <div className={styles.section7ItemSide}>
  <h3 className={styles.TitleSection7}>{s7titleItem2}</h3>
  <p  className={styles.descrSection7} >
  {s7textItem2}
  </p>
  </div>
        </div>
        <div className={styles.section7Item}>
        <Image
        className={styles.imgSection7}
    src="/imk3.png"
    alt="Description of image"
    width={500}
    height={500}
  />
  <div className={styles.section7ItemSide}>
  <h3 className={styles.TitleSection7}>{s7titleItem3} </h3>
  <p  className={styles.descrSection7} >
  {s7textItem3}
  </p>
  </div>
        </div>
        </div>
        </div>
            
           
    );
}
