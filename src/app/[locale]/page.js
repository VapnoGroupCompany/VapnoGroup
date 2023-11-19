import Image from "next/image";
import styles from "./page.module.css";
import React from "react";
import SecondSlider from "./SecondSlider";
import Footer from "./Footer";
import Header from "./Header";
import Link from "next/link";
// import { useEffect, useState } from "react";
// import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import Paralaximage from "./Paralaximage";
import {unstable_setRequestLocale} from 'next-intl/server';
import Section1 from "./Section1";
import Section2 from "./Section2";
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
            <div className={styles.section4}>
                <div className={styles.ourFavorsContainer}>
                    <Image
                        className={styles.favorImg}
                        width={500}
                        height={380}
                        src="/blackman.webp"
                        alt="blackman"
                    />
                    <div className={styles.txt}>
                        <h2 className={styles.favorTitle}>
                            {t("s2title")}
                        </h2>

                        <ul className={styles.favors}>
                            <li className={styles.favor}>
                            {t("s2item1")}
                            </li>
                            <li className={styles.favor}>
                            {t("s2item2")}
                            </li>
                            <li className={styles.favor}>
                            {t("s2item3")}
                            </li>
                            <li className={styles.favor}>
                            {t("s2item4")}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
           <Section2 button={t("button")}
                     s3text1={t("s3text1")}
                     s3text2={t("s3text2")} />
            <div className={styles.section2}>
                <div className={styles.ourServicesContainer}>
                    <h2 className={styles.ourTitle}>
                       {t("s4main")}
                    </h2>
                    <div className={styles.services}>
                        <div className={styles.service}>
                            <h4 className={styles.service_title}>  {t("s4title1")}</h4>
                            <p className={styles.service_description}>
                            {t("s4text1")}
                            </p>
                        </div>

                        <div className={styles.service}>
                            <h4 className={styles.service_title}>{t("s4title2")}</h4>
                            <p className={styles.service_description}>
                            {t("s4text2")}
                            </p>
                        </div>
                        <div className={styles.service}>
                            <h4 className={styles.service_title}>
                            {t("s4title3")}
                            </h4>
                            <p className={styles.service_description}>
                            {t("s4text3")}
                            </p>
                        </div>
                        <div className={styles.service}>
                            <h4 className={styles.service_title}>{t("s4title4")}</h4>
                            <p className={styles.service_description}>
                            {t("s4text4")}
                            </p>
                        </div>
                        <div className={styles.service}>
                            <h4 className={styles.service_title}>
                            {t("s4title5")}
                            </h4>
                            <p className={styles.service_description}>
                            {t("s4text5")}
                            </p>
                        </div>
                        <div className={styles.service}>
                            <h4 className={styles.service_title}>
                            {t("s4title6")}
                            </h4>
                            <p className={styles.service_description}>
                            {t("s4text6")}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.section5}>
                <SecondSlider 
                     s5main={t("s5main")}
                     s5text1={t("s5text1")}
                     s5text2={t("s5text2")}
                     s5text3={t("s5text3")}
                     s5name1={t("s5name1")}
                     s5name2={t("s5name2")}
                     s5name3={t("s5name3")} />
            </div>
            <Footer />
        </main>
    );
}
