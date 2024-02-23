import styles from "./About.module.css";
import Header from "../Header";
import Footer from "../Footer";
import { useTranslations } from "next-intl";
import {unstable_setRequestLocale} from 'next-intl/server';
function About({
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
            prices={t("prices")}
            />
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <div className={styles.leftContent}>
                        SH - <br></br> Schlusselfertiges Haus
                    </div>
                    <div className={styles.rigthContent}>
                        <p>
                           {t("about1")}
                        </p>
                        <p>
                        {t("about2")}
                        </p>
                        <p>
                        {t("about3")}
                        </p>
                        <p>
                        {t("about4")}
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
export default About;
