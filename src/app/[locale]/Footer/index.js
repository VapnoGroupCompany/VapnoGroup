"use client"
import styles from './Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale } from "next-intl";
import React, { useState, useEffect } from 'react';
// import { Link as ScrollLink, scroller  } from "react-scroll";
// import { isMobile } from 'react-device-detect';
// function handleClickStart()  {
//     scroller.scrollTo("home", {
//       duration: 800,
//       delay: 0,
//       smooth: "easeInOutQuart",
//     });
//   }
  
function Footer({
footerTitle1,
footerTitle2,
footerText,
subTitle11,
subTitle12,
subTitle13,
subTitle14,
subTitle15,
subTitle21,
subTitle22,
subTitle23,
button}) {  
  const locale = useLocale();
  return (
    <>
    <footer className={styles.footer}>
   {/* <a  href="https://t.me/+380968336006" target="_blank" className={styles.fd}>© 2023 Simplifier of business processes.</a>
   <a  className={styles.fd} href="tel:+49 1517 2640531">+49-1517-2640531</a>
           <div className={styles.threeBlock}>
             <a href='' target="_blank"><Image className={styles.icon}  width={30} height={30} src="/instagram.png" alt="instagram" /></a>
             <a href='https://www.facebook.com/profile.php?id=100088519397111' target="_blank"><Image className={styles.icon} width={30} height={30} src="/facebook.png" alt="facebook" /></a>
             <a href=""><Image className={styles.icon} width={30} height={30} src="/viber.png" alt="viber" /></a>
             <a  href="" target="_blank" ><Image className={styles.icon} width={35} height={35} src="/telegram.png" alt="telegram" /></a>
           </div> */}
           <div className={styles.footerContainer}>
           <div className={styles.footerColums}>
           <div className={styles.footerColum}>
           <div className={styles.footerColumInner}>
            <h3 className={styles.logoTitle}>
           VAPNO GROUP
            </h3>
            <p className={styles.footerDescr}>
            {footerText}
            </p>
            <Link className={styles.link} href={`/${locale}/contact`}>
                <button className={styles.buttonBlack}>
                 {button}
                </button>
            </Link>
            </div>
           </div>

           <div className={styles.footerColum}>
           <div className={styles.footerColumInner}>
           <h3 className={styles.titleColums}>
           {footerTitle1}
            </h3>
            <div className={styles.ItemFooter}> 
            <p className={styles.ItemFooterTitle}>
            {subTitle11}
            </p>
            <p className={styles.ItemFooterDescr}>09:00 – 20:00</p>
            </div>
            <div className={styles.ItemFooter}> 
            <p className={styles.ItemFooterTitle}>
            {subTitle12}
            </p>
            <p className={styles.ItemFooterDescr}>{subTitle13}</p>
            </div>
            <div className={styles.ItemFooter}> 
            <p className={styles.ItemFooterTitle}>
            {subTitle14}
            </p>
            <p className={styles.ItemFooterDescr}> {subTitle15}</p>
            </div>
            </div>
           </div>

           <div className={styles.footerColum}>
           <div className={styles.footerColumInner}>
           <h3 className={styles.titleColums}>
           {footerTitle2}
            </h3>
            <div className={styles.ItemFooter}> 
            <p className={styles.ItemFooterTitle}>
            {subTitle21}
            </p>
            <a target="_blank" href="https://www.google.com/maps/place/%D0%98%D0%BD%D0%BD%D0%BE%D0%B2%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D0%B0%D1%8F+%D0%B3%D1%80%D1%83%D0%BF%D0%B0+%C2%ABVapno+Group%C2%BB+(%D0%A4%D0%9E%D0%9F+%D0%94%D0%B0%D0%BD%D0%B8%D0%BB%D1%8E%D0%BA+%D0%A0.%D0%92.)+%7C/@48.3596645,25.4076787,17z/data=!4m12!1m5!3m4!2zNDjCsDIxJzM0LjgiTiAyNcKwMjQnMzYuOSJF!8m2!3d48.3596645!4d25.4102536!3m5!1s0x4736b1b42fd8c989:0x281fab21cf96340b!8m2!3d48.3589722!4d25.4099167!16s%2Fg%2F11j01_hdrd?entry=ttu" className={styles.itemFooterDescr}>{subTitle22}</a>
            </div>
            <div className={styles.ItemFooter}> 
            <p className={styles.ItemFooterTitle}>
            {subTitle23}
            </p>
            <a href="tel:+380662264460" className={styles.itemFooterDescr}>+380 (66) 226-44-60</a><br></br>
            <a href="tel:+380992484343" className={styles.itemFooterDescr}>+380 (99) 248-43-43</a><br></br>
            <a href="tel:+380673725165" className={styles.itemFooterDescr}>+380 (67) 372-51-65</a>
            </div>
            <div className={styles.ItemFooter}> 
            <p className={styles.ItemFooterTitle}>
            Email
            </p>
            <a href="mailto:vapnogroup@ukr.net" className={styles.itemFooterDescr}>vapnogroup@ukr.net</a>
            </div>
            </div>
           </div>
            </div>
           </div>
    </footer>
    </>
  );
}

export default Footer;