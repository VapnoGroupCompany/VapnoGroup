import Image from "next/image";
import styles from "./page.module.css";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Link from "next/link";
// import { useEffect, useState } from "react";
// import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import Paralaximage from "./Paralaximage";
import {unstable_setRequestLocale} from 'next-intl/server';
import Section1 from "./Section1";
import ContactComponent from "./ContactComponent";
import Section4 from "./Section4";
import Section7 from "./Section7";
import Section8 from "./Section8";

// import {locales} from '..';
// import { useTranslation } from "next-i18next";
export default function Home({
    params: {locale}
  }) {
    unstable_setRequestLocale(locale);
  const t = useTranslations('Index');

    return (
        <main className={styles.main}>
            <Header home={t("home")}
                    projects={t("projects")}
                    about={t("about")}
                    contact={t("contact")} />
        <Paralaximage title={t("title") } button={t("button")}/>
           <Section1 button={t("button")}
                     s1title={t("s1title")}
                     s1text={t("s1text")}/>

           <Section4
           s4title={t("s4title")}
           s4titleItem1={t("s4titleItem1")}
           s4titleItem2={t("s4titleItem2")}
           s4titleItem3={t("s4titleItem3")}
           s4textItem1={t("s4textItem1")}
           s4textItem2={t("s4textItem2")}
           s4textItem3={t("s4textItem3")}
           
           />
            {/* <div className={styles.section2}>
                <div className={styles.ourServicesContainer}>
                    <h2 className={styles.ourTitle}>
                       {t("s4main")}
                    </h2>
                   
                </div>
            </div> */}
             
               <Section7
               s7title={t("s7title")}
               s7titleItem1={t("s7titleItem1")}
               s7titleItem2={t("s7titleItem2")}
               s7titleItem3={t("s7titleItem3")}
               s7textItem1={t("s7textItem1")}
               s7textItem2={t("s7textItem2")}
               s7textItem3={t("s7textItem3")}/>

           <Section8
           s8title1={t("s8title1")}
           s8title2={t("s8title2")}
           s8descr1={t("s8descr1")}
           s8descr2={t("s8descr2")}
           />
                     <ContactComponent
            contacTitle={t("contacTitle")}
            contacttext1={t("contacttext1")}
            name={t("name")}
            email={t("email")}
            phone={t("phone")}
            region={t("region")}
            region1={t("region1")}
            region2={t("region2")}
            region3={t("region3")}
            region4={t("region4")}
            region5={t("region5")}
            region6={t("region6")}
            region7={t("region7")}
            region8={t("region8")}
            region9={t("region9")}
            region10={t("region10")}
            region11={t("region11")}
            region12={t("region12")}
            region13={t("region13")}
            region14={t("region14")}
            region15={t("region15")}
            region16={t("region16")}
            region17={t("region17")}
            region18={t("region18")}
            region19={t("region19")}
            region20={t("region20")}
            region21={t("region21")}
            region22={t("region22")}
            region23={t("region23")}
            region24={t("region24")}
            region25={t("region25")}
            require={t("require")}
            submit={t("submit")}
            error={t("error")}
            />
            {/* <div className={styles.section5}>
                <SecondSlider 
                     s5main={t("s5main")}
                     s5text1={t("s5text1")}
                     s5text2={t("s5text2")}
                     s5text3={t("s5text3")}
                     s5name1={t("s5name1")}
                     s5name2={t("s5name2")}
                     s5name3={t("s5name3")} />
            </div> */}
            <Footer 
             footerTitle1={t("footerTitle1")}
             footerTitle2={t("footerTitle2")}
             footerText={t("footerText")}
             subTitle11={t("subTitle11")}
             subTitle12={t("subTitle12")}
             subTitle13={t("subTitle13")}
             subTitle14={t("subTitle14")}
             subTitle15={t("subTitle15")}
             subTitle21={t("subTitle21")}
             subTitle22={t("subTitle22")}
             subTitle23={t("subTitle23")}
             button={t('button')}/>
        

             
        </main>
    );
}
