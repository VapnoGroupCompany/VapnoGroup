"use client"
import styles from './SecondSlider.module.css';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
// import { Helmet } from 'react-helmet';
function SecondSlider() {
     // --------------------------------------------
     const slides2= [
        {src:"/people2.jpg" ,    p :"Das Ergebnis hat unsere Erwartungen übertroffen. Die neuen Räumlichkeiten sehen beeindruckend aus und die Qualität der Arbeiten hat uns und unsere Gäste beeindruckt. Schlüsselfertiges Haus weiß wirklich, wie man seinen Job macht!" ,   name:"Sabine"},
        {src:"/peple1.jpg",  p :"Schlüsselfertiges Haus hat Planung und Ausführung auf ein neues Niveau gehoben. Die Arbeiten wurden termingerecht und unter Einhaltung höchster Qualitätsstandards ausgeführt. Jeder Arbeitsschritt wurde mit Liebe zum Detail ausgeführt." ,   name:"Gabriel"},
        {src:"/people3.jpg" , p :"Vielen Dank für Ihren großartigen Beitrag zu unserem Projekt und für die Schaffung eines magischen Raums. Wir empfehlen Sie gerne jedem weiter, der einen zuverlässigen und professionellen Partner im Bauwesen sucht." ,   name:"Irma"},
    ];
      const [currentIndex2,setСurrentIndex2]= React.useState(0);

      // Set up automatic slide transition
      useEffect(() => {
        const intervalId = setInterval(() => {
          goToNext2();
        }, 5000); // Change the delay time as needed
        return () => clearInterval(intervalId);
      }, [currentIndex2]);
    
      const goToPrevios2 = () => {
        const isFirstSlide = currentIndex2 === 0;
        const newIndex = isFirstSlide ? slides2.length - 1 : currentIndex2 - 1;
        setСurrentIndex2(newIndex);
      };
    
      const goToNext2 = () => {
        const isLastSlide = currentIndex2 === slides2.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex2 + 1;
        setСurrentIndex2(newIndex);
      };
    
      const goToSlide2 = (slideIndex) => {
        setСurrentIndex2(slideIndex);
      };
    
      
  return (
    <>
              <h2 className={styles.titleSlider}> Was sagen andere über uns?</h2>
                    <div  className={styles.slideStyles2} >
                    <div  className={styles.slideItem} >
                       <Image  height={150} width={150} src={slides2[currentIndex2].src} alt="peple"/> 
                       <h4>{slides2[currentIndex2].name}</h4>
                          <p>{slides2[currentIndex2].p}</p>
                          <div  className={styles.dotsContainer}>
              {slides2.map((item,slideIndex)=><div onClick={() => goToSlide2(slideIndex)} className={styles.dots}  key={slideIndex}>.</div>)}
                    </div>
                          </div>
                        {/* <div className={styles.leftArrowStyles2} onClick={goToPrevios2}>
                        <Image height={22} width={22} src="/images/rarrow.png"  alt="arrow" />
                          </div>
                        <div className={styles.rightArrowStyles2} onClick={goToNext2}> 
                        <Image height={22} width={22} src="/images/larrow.png" alt="arrow" />
                          </div> */}
                    </div>
                    
    </>
  );
}
export default SecondSlider;
