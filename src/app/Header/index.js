"use client"
import Image from "next/image";
import styles from "./Header.module.css";
import React from "react";
import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
export default function Header() {
  const pathname = usePathname()
  let  [open,setOpen] = React.useState(true);
  let  [active,setActive] = React.useState(0);
  useEffect(() => {
   if(pathname === "/") setActive(0);
   if(pathname === "/projects") setActive(1);
   if(pathname === "/about") setActive(2);
   if(pathname === "/contact") setActive(3);
  }, [pathname]);
  let openHandler= () => {
    setOpen(!open);
  }
    return (
       <>
            <header className={styles.header}>
            <Link href="/"><p className={styles.logo}>SH</p></Link>
                <div className={open ? styles.menu : styles.menu + " " + styles.active }>
                <ul onClick={() => openHandler()}  className={styles.menuList}>
                    <Link href="/"><li onClick={() => setActive(0)} className={ (active === 0) ? styles.menuActive  : styles.menuItem }>Startseite</li></Link>
                    <Link href="/projects">  <li onClick={() => setActive(1)}  className={ (active === 1) ? styles.menuActive  : styles.menuItem }>Projekte</li></Link>
                    <Link href="/about"> <li onClick={() => setActive(2)}  className={ (active === 2) ? styles.menuActive  : styles.menuItem }>Über uns</li></Link>
                    <Link href="/contact"><li onClick={() => setActive(3)}  className={ (active === 3) ? styles.menuActive  : styles.menuItem }>Kontakt</li></Link>
                </ul>
                </div>
      <div onClick={() => openHandler()}  className={ open ? styles.burger :  styles.burger + " " + styles.active}>
        <span></span>
      </div>
            </header>
            </>
    );
}
