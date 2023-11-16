"use client"
import styles from './Projects.module.css';
import Header from '../Header';
import Footer from '../Footer';
import Cards from '../Cards';
function Projects() {
  return (
    <>
    <Header/>
    <div className={styles.wrapper}>
    <div className={styles.content}>
    {/* <h2 className={styles.h2}>Unsere Projekte</h2> */}
    <Cards/>
    </div>
    </div>
    <Footer/>
    </>
  );
}
export default Projects;