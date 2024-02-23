import React from "react";
import styles from "./Contacts.module.css";
import Header from "../Header";
import Footer from "../Footer";
import Image from "next/image";
import ContactComponent from "../ContactComponent";
import {unstable_setRequestLocale} from 'next-intl/server';
import { useTranslations } from "next-intl";
function Contacts({
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
             
            <ContactComponent
            contacTitle={t("contacTitle")}
            contacttext1={t("contacttext1")}
            name={t("name")}
            email={t("email")}
            phone={t("phone")}
            region={t("region")}
            region1={t("region1")}
            region2={t("region2")}
            region3={t("region3")}
            region4={t("region4")}
            region5={t("region5")}
            region6={t("region6")}
            region7={t("region7")}
            region8={t("region8")}
            region9={t("region9")}
            region10={t("region10")}
            region11={t("region11")}
            region12={t("region12")}
            region13={t("region13")}
            region14={t("region14")}
            region15={t("region15")}
            region16={t("region16")}
            region17={t("region17")}
            region18={t("region18")}
            region19={t("region19")}
            region20={t("region20")}
            region21={t("region21")}
            region22={t("region22")}
            region23={t("region23")}
            region24={t("region24")}
            region25={t("region25")}
            require={t("require")}
            submit={t("submit")}
            error={t("error")}
            />
             <Footer 
             footerTitle1={t("footerTitle1")}
             footerTitle2={t("footerTitle2")}
             footerText={t("footerText")}
             subTitle11={t("subTitle11")}
             subTitle12={t("subTitle12")}
             subTitle13={t("subTitle13")}
             subTitle14={t("subTitle14")}
             subTitle15={t("subTitle15")}
             subTitle21={t("subTitle21")}
             subTitle22={t("subTitle22")}
             button={t('button')}/>
             
        </>
    );
}
export default Contacts;
