"use client";
import styles from "./Section2.module.css";
import React from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
// import { useTranslation } from "next-i18next";
export default function Section2({button,s3text1,s3text2}) {
    const locale = useLocale();
    

    return (
        
           
        <div className={styles.section6}>
        <div className={styles.projectContainer}></div>
        <div className={styles.projectContent}>
            <p>
               {s3text1}
            </p>
            <p>
              {s3text2}
            </p>
            <Link className={styles.link} href={`/${locale}/projects`}>
                {" "}
                <button>{button}</button>
            </Link>
        </div>
    </div>
           
    );
}
