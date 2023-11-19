import styles from "./Projects.module.css";
import Header from "../Header";
import Footer from "../Footer";
import Cards from "../Cards";
import {unstable_setRequestLocale} from 'next-intl/server';
import { useTranslations } from "next-intl";
function Projects({
    params: {locale}
  }) {
    unstable_setRequestLocale(locale);
  const t = useTranslations('Index');
    return (
        <>
            <Header 
               home={t("home")}
               projects={t("projects")}
               about={t("about")}
               contact={t("contact")} 
                />
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    {/* <h2 className={styles.h2}>Unsere Projekte</h2> */}
                    <Cards
                     prtitle1={t("prtitle1")}
                     prtitle2={t("prtitle2")}
                     prtitle3={t("prtitle3")}
                     prtitle4={t("prtitle4")}
                     prtitle5={t("prtitle5")}
                     prtitle6={t("prtitle6")}
                     prtitle7={t("prtitle7")}
                     prtitle8={t("prtitle8")}
                     prtext1={t("prtext1")}
                     prtext2={t("prtext2")}
                     prtext3={t("prtext3")}
                     prtext4={t("prtext4")}
                     prtext5={t("prtext5")}
                     prtext6={t("prtext6")}
                     prtext7={t("prtext7")}
                     prtext8={t("prtext8")}
                     />
                </div>
            </div>
            <Footer />
        </>
    );
}
export default Projects;
