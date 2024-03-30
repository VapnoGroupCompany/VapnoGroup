// Функція для генерації метаданих та навігаційного меню залежно від локалізації
export function generateMetadata({ locale }) {
    let title, description, keywords;
    let navigation = null; // Змінна для зберігання навігаційного меню
  
    if (locale === 'uk') {
      title = 'Інноваційна група Vapno Group';
      description = "Інноваційна група Vapno Group - провідний виробник вапна та будівельних матеріалів в Україні. Переконайтеся у високій якості нашої продукції та послуг, включаючи негашене вапно, гранульоване вапно, пушонку та сільськогосподарське вапно. Дізнайтеся більше на нашому сайті!"
      keywords = 'купити вапно оптом, вапно, виробництво вапна, негашене вапно , гранульоване вапно, пушонка, сільськогосподарське вапно, будівельні суміші, бетон, ph грунту, кислотність грунту,';

    } else if (locale === 'en') {
      title = 'Innovative group Vapno Group';
      description = 
      "Innovative group Vapno Group is a leading manufacturer of lime and construction materials in Ukraine. Discover the high quality of our products and services, including hydrated lime, granulated lime, putty, and agricultural lime. Learn more on our website!"
      keywords = "buy lime wholesale, lime, lime production, quicklime, granular lime, lime putty, agricultural lime, building mixes, concrete, soil ph, soil acidity"

    } else {
      // Default to English if locale is not 'uk' or 'en'
      title = 'Інноваційна група Vapno Group';
      description = "Інноваційна група Vapno Group - провідний виробник вапна та будівельних матеріалів в Україні. Переконайтеся у високій якості нашої продукції та послуг, включаючи негашене вапно, гранульоване вапно, пушонку та сільськогосподарське вапно. Дізнайтеся більше на нашому сайті!"
      keywords = 'купити вапно оптом, вапно, виробництво вапна, негашене вапно , гранульоване вапно, пушонка, сільськогосподарське вапно, будівельні суміші, бетон, ph грунту, кислотність грунту,';
    }
  
    return { title, description, keywords };
  }
  