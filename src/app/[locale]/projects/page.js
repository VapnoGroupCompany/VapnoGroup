import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Cards from '../Cards';
import Image from 'next/image';
import { unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import styles from './Projects.module.css';


function Projects({ params: { locale } }) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('Index');
  const projectsData = [
    {
      title: t("good5Title"),
      subTitle: t("good5Descr"),
      applicationAreas: [
        t("good5ListItem1"),
        t("good5ListItem2"),
        t("good5ListItem3"),
        t("good5ListItem4"),
      ],
      imageSrc: '/i4.png',
      description: t("good5DetailDescr"),
      characteristics: [
        { name: t("country"), value: t("good5countryValue"), },
        { name: t("producer"), value: t("good5producerValue")},
        { name: t("weight"), value: t("good5weightValue") },
        { name: t("wrap"), value: t("good5wrapValue") },
        { name:t("countbags"), value: t("good5countbagsValue") },
      ],
    },
    {
      title: t("good51Title"),
      subTitle: t("good51Descr"),
      applicationAreas: [
        t("good51ListItem1"),
        t("good51ListItem2"),
        t("good51ListItem3"),
        t("good51ListItem4"),
      ],
      imageSrc: '/i7.png',
      description: t("good51DetailDescr"),
      characteristics: [
        { name: t("country"), value: t("good51countryValue"), },
        { name: t("producer"), value: t("good51producerValue")},
        { name: t("weight"), value: t("good51weightValue") },
        { name: t("wrap"), value: t("good51wrapValue") },
        { name:t("countbags"), value: t("good51countbagsValue") },
      ],
    },
    
    {
      title: t("good52Title"),
      subTitle: t("good52Descr"),
      applicationAreas: [
        t("good52ListItem1"),
        t("good52ListItem2"),
        t("good52ListItem3"),
        t("good52ListItem4"),
      ],
      imageSrc: '/i8.png',
      description: t("good52DetailDescr"),
      characteristics: [
        { name: t("country"), value: t("good52countryValue"), },
        { name: t("producer"), value: t("good52producerValue")},
        { name: t("weight"), value: t("good52weightValue") },
        { name: t("wrap"), value: t("good52wrapValue") },
        { name:t("countbags"), value: t("good52countbagsValue") },
      ],
    },
    {
      title: t("good2Title"),
      subTitle: t("good2Descr"),
      applicationAreas: [
        t("good2ListItem1"),
        t("good2ListItem2"),
        t("good2ListItem3"),
        t("good2ListItem4"),
      ],
      imageSrc: '/i3.png',
      description: t("good2DetailDescr"),
      characteristics: [
        { name: t("country"), value: t("good2countryValue"), },
        { name: t("producer"), value: t("good2producerValue")},
        { name: t("weight"), value: t("good2weightValue") },
        { name: t("wrap"), value: t("good2wrapValue") },
        { name:t("countbags"), value: t("good2countbagsValue") },
      ],
    },
    
    {
      title: t("good1Title"),
      subTitle: t("good1Descr"),
      applicationAreas: [
        t("good1ListItem1"),
        t("good1ListItem2"),
        t("good1ListItem3"),
        t("good1ListItem4"),
        
      ],
      imageSrc: '/i2.png',
      description: t("good1DetailDescr"),
      characteristics: [
        { name: t("country"), value: t("good1countryValue"), },
        { name: t("producer"), value: t("good1producerValue")},
        { name: t("weight"), value: t("good1weightValue") },
        { name: t("wrap"), value: t("good1wrapValue") },
        { name:t("countbags"), value: t("good1countbagsValue") },
      ],
    },

    {
      title: t("good11Title"),
      subTitle: t("good11Descr"),
      applicationAreas: [
        t("good11ListItem1"),
        t("good11ListItem2"),
        t("good11ListItem3"),
        t("good11ListItem4"),
        
      ],
      imageSrc: '/i6.png',
      description: t("good11DetailDescr"),
      characteristics: [
        { name: t("country"), value: t("good11countryValue"), },
        { name: t("producer"), value: t("good11producerValue")},
        { name: t("weight"), value: t("good11weightValue") },
        { name: t("wrap"), value: t("good11wrapValue") },
        { name:t("countbags"), value: t("good11countbagsValue") },
      ],
    },
    
    {
      title: t("good3Title"),
      subTitle: t("good3Descr"),
      applicationAreas: [
        t("good3ListItem1"),
        t("good3ListItem2"),
        t("good3ListItem3"),
        t("good3ListItem4"),
      ],
      imageSrc: '/i1.png',
      description: t("good3DetailDescr"),
      characteristics: [
        { name: t("country"), value: t("good3countryValue"), },
        { name: t("producer"), value: t("good3producerValue")},
        { name: t("weight"), value: t("good3weightValue") },
        { name: t("wrap"), value: t("good3wrapValue") },
        { name:t("countbags"), value: t("good3countbagsValue") },
      ],
    },

    {
      title: t("good31Title"),
      subTitle: t("good31Descr"),
      applicationAreas: [
        t("good31ListItem1"),
        t("good31ListItem2"),
        t("good31ListItem3"),
        t("good31ListItem4"),
      ],
      imageSrc: '/i9.png',
      description: t("good31DetailDescr"),
      characteristics: [
        { name: t("country"), value: t("good31countryValue"), },
        { name: t("producer"), value: t("good31producerValue")},
        { name: t("weight"), value: t("good31weightValue") },
        { name: t("wrap"), value: t("good31wrapValue") },
        { name:t("countbags"), value: t("good31countbagsValue") },
      ],
    },
    {
      title: t("good4Title"),
      subTitle: t("good4Descr"),
      applicationAreas: [
        t("good4ListItem1"),
        t("good4ListItem2"),
        t("good4ListItem3"),
        t("good4ListItem4"),
      ],
      imageSrc: '/i5.png',
      description: t("good4DetailDescr"),
      characteristics: [
        { name: t("country"), value: t("good4countryValue"), },
        { name: t("producer"), value: t("good4producerValue")},
        { name: t("weight"), value: t("good4weightValue") },
        { name: t("wrap"), value: t("good4wrapValue") },
        { name:t("countbags"), value: t("good4countbagsValue") },
      ],
    },

    

    

  ];
  
  return (
    <>
      <Header
        home={t('home')}
        projects={t('projects')}
        about={t('about')}
        contact={t('contact')}
        prices={t("prices")}
      />
      <Cards
      // good1Title={t("footerTitle1")}
      // good1Descr={t("good1Descr")}
        good1ListTitle={t("good1ListTitle")}
      // good1ListItem1={t("good1ListItem1")}
      // good1ListItem2={t("good1ListItem2")}
      // good1ListItem3={t("good1ListItem3")}
      // good1ListItem4={t("good1ListItem4")}
      // good1DetailDescr={t("good1DetailDescr")}
      // good1countryValue= {t("good1countryValue")}
      // good1producerValue={t(" good1producerValue")}
      // good1weightValue={t("good1weightValue")}
      // good1wrapValue={t(" good1wrapValue")}
      // good1countbagsValue={t("good1countbagsValue")}
      projectsData={projectsData}
      char={t("char")}
      // country={t("country")}
      // producer={t("produce")}
      // weight={t("weight")}
      // wrap={t("wrap")}
      // countbags={t("countbags")}
      button={t("button")}
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
      subTitle23={t("subTitle23")}
      button={t('button')}/>
      
    </>
  );
}

export default Projects;
