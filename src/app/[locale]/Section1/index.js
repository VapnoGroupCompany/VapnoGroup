"use client";
import styles from "./Section1.module.css";
import React from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
// import { useTranslation } from "next-i18next";
export default function Section1({button,s1title,s1text}) {
    const locale = useLocale();
    

    return (
        
           
        <div className={styles.section3}>
        <div className={styles.ourServicesContainer}>
            <h1 className={styles.h1}>
            {s1title}
            </h1>
            <h2 className={styles.mainText}>
                {s1text}
            </h2>
            <Link className={styles.link} href={`/${locale}/about`}>
                <button className={styles.buttonBlack}>
                  {button}
                </button>
            </Link>
        </div>
    </div>
            
           
    );
}
