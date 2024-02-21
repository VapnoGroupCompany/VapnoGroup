"use client";
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { Element } from 'react-scroll';
import { motion } from "framer-motion";
import Link from 'next/link';
import styles from './Section1.module.css';
import { useLocale } from "next-intl";

export default function Section1({ button, s1title, s1text }) {
    const controls = useAnimation();
    const locale = useLocale();
    useEffect(() => {
        const section1Element = document.getElementById('section1');
        const handleScroll = () => {
            const { top } = section1Element.getBoundingClientRect();
            if (top < window.innerHeight * 0.5) {
                controls.start({ opacity: 1, y: 0 });
            } else {
                controls.start({ opacity: 0, y: 50 });
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [controls]);

    return (
        <Element name="section1" id="section1" className="element">
            <div className={styles.section3}>
                <div className={styles.ourServicesContainer}>
                    <motion.h1
                        className={styles.h1}
                        initial={{ opacity: 0, y: 50 }}
                        animate={controls}
                        transition={{ duration: 0.5 }}
                    >
                        {s1title}
                    </motion.h1>
                    <motion.p
                        className={styles.mainText}
                        initial={{ opacity: 0, y: 50 }}
                        animate={controls}
                        transition={{ duration: 0.5}}
                    >
                        {s1text}
                    </motion.p>
                </div>
                <Link className={styles.link} href={`/${locale}/projects`}>
                    <button
                        className={styles.button}
                    >
                        {button}
                    </button>
                </Link>
            </div>
        </Element>
    );
}