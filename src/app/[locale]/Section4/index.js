"use client"
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { Element } from 'react-scroll';
import { motion } from "framer-motion";
import styles from './Section4.module.css';
import Image from 'next/image';

export default function Section4(
    {s4title, s4textItem2, s4textItem1, s4textItem3, s4titleItem1,
        s4titleItem2, s4titleItem3}
    ) {
        const controls1 = useAnimation();
        const controls2 = useAnimation();
        const controls3 = useAnimation();
        
        useEffect(() => {
            const handleScroll = async () => {
                const offsetY = window.pageYOffset;
                const element1 = document.getElementById("section4Item1");
                const element2 = document.getElementById("section4Item2");
                const element3 = document.getElementById("section4Item3");

                if (element1 && offsetY > element1.offsetTop - window.innerHeight ) {
                    await controls1.start({ opacity: 1, y: 0 });
                }
                if (element2 && offsetY > element2.offsetTop - window.innerHeight/ 1.3 ) {
                    await controls2.start({ opacity: 1, y: 0 });
                }
                if (element3 && offsetY > element3.offsetTop - window.innerHeight / 1.5) {
                    await controls3.start({ opacity: 1, y: 0 });
                }
            };

            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }, [controls1, controls2, controls3]);
    
    return (   
        <Element name="section4" id="section4" className="element">
            <div className={styles.section4}>      
                <div className={styles.containerSection4}>
                    <h2 className={styles.h1m}>{s4title}</h2>
                    <div className={styles.containerInner}>
                        <motion.div 
                            id="section4Item1"
                            initial={{ opacity: 0, y: 50 }} 
                            animate={controls1}
                            transition={{ duration: 0.5 }} 
                            className={styles.Section4Item}>
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
                        </motion.div>
        
                        <motion.div 
                            id="section4Item2"
                            initial={{ opacity: 0, y: 50 }} 
                            animate={controls2}
                            transition={{ duration: 0.5}} 
                            className={styles.Section4Item}>
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
                        </motion.div>
        
                        <motion.div 
                            id="section4Item3"
                            initial={{ opacity: 0, y: 50 }} 
                            animate={controls3}
                            transition={{ duration: 0.5 }} 
                            className={styles.Section4Item}>
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
                        </motion.div>
                    </div>
                </div>
            </div>
        </Element>
    );
}
