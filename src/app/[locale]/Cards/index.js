"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Cards.module.css';



function Cards({projectsData,button,char, good1ListTitle}) {
  const [popupData, setPopupData] = useState(null);

  const handleDetailClick = (data) => {
    setPopupData(data);
  };

  const handleClosePopup = () => {
    setPopupData(null);
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          {/* <h2 className={styles.sh2}>Асортимент нашої вапняної продукції</h2> */}
          <div className={styles.goods}>
            {projectsData.map((project, index) => (
              <div className={styles.good} key={index}>
                <div className={styles.goodforButton}>
                <div className={styles.goodLeft}>
                  <div className={styles.goodHead}>
                    <h3 className={styles.goodTitle}>{project.title}</h3>
                    <h4 className={styles.goodSubTitle}>{project.subTitle}</h4>
                  </div>
                  <div className={styles.goodBottom}>
                    <h3 className={styles.goodTitleList}>{good1ListTitle}</h3>
                    <ul className={styles.list}>
                      {project.applicationAreas.map((area, index) => (
                        <li className={styles.listItem} key={index}>
                          {area}
                        </li>
                      ))}
                    </ul>
                  </div>
                  </div>
                  <button className={styles.button} onClick={() => handleDetailClick(project)}>
                  {button}
                  </button>
                </div>
                <Image  className={styles.goodImg} src={project.imageSrc} alt="Description of image" width={500} height={500} />
              </div>
            ))}
          </div>
        </div>
      </div>
      {popupData && (
  <div className={styles.popup}>
    <div className={styles.popupContent}>
    <button className={styles.closeButton} onClick={handleClosePopup}>
  <div className={styles.closeIcon}></div>
</button>
      <h3 className={styles.goodTitleList}>{popupData.title}</h3>
      <p className={styles.description}>{popupData.description}</p>
      <h4 className={styles.char}>{char}</h4>
      <table className={styles.characteristicsTable}>
        <tbody>
          {popupData.characteristics.map((item, index) => (
            <tr key={index}>
              <td className={styles.characteristicsCell}>{item.name}</td>
              <td className={styles.characteristicsCell}>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
)}
    </>
  );
}

export default Cards;
