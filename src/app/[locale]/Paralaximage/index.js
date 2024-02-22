"use client";
import styles from "./Paralaximage.module.css";
import React from "react";
import Link from "next/link";
import { useEffect} from "react";
import { useLocale } from "next-intl";
import { motion } from 'framer-motion';
// import { useTranslation } from "next-i18next";
export default function Paralaximage({title,button}) {
    const locale = useLocale();
    const [scrollTop, setScrollTop] = React.useState(0);
    useEffect(() => {
        const handleScroll = () => {
            setScrollTop(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const parallaxStyle = {
        transform: `translateY(${scrollTop * 0.4}px) scale(${
            1 + scrollTop * 0.0005
        })`,
    };

    return (
           
            <div className={styles.parallaxContainer}>
                <div style={parallaxStyle} className={styles.section1}></div>
                <div className={styles.slogan}>
                
                <div className={styles.sloganInner}>
                    {/* <h2 className={styles.title}>
                     Vapno Group
                    </h2> */}
                      <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
                    <p className={styles.subTitle}>{title}</p></motion.div>
                    <Link className={styles.link} href={`/${locale}/contact`}>
                        <button className={styles.button}>{button}</button>
                    </Link>
                    </div>
                </div>
            </div>
            
           
    );
}
