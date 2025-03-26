// types.ts

export interface Card {
  title: string;
  text: string;
}

export interface Category {
  title: string;
  cards: Card[];
}

export interface ServicesTranslations {
  services: {
    servicesTitle10: string;
    servicesText10: string;
    categories: Category[];
  };
}

export interface AboutTranslations {
  about: {
    title10: string;
    text10: string;
    text11: string;
    title30: string;
    text30: string;
    text40: string;
    cards: Card[];
  };
}

export interface PricingTranslations {
  pricing: {
    title1: string;
    text1: string;
    categories: {
      title: string;
      text: string;
      jobs: { name: string; priceRange: string; details?: string }[];
    }[];
  };
}

export interface HeroTranslations {
  hero: {
    heroTitle1: string;
    heroText1: string;
    heroButton1: string;
    heroButton2: string;
    heroCard1: string;
    heroCard2: string;
    heroCard3: string;
  };
}

export interface FooterTranslations {
  footer: {
    title1: string;
    text11: string;
    text12: string;
    title2: string;
    text21: string;
    text22: string;
    text23: string;
    text24: string;
    text25: string;
    title3: string;
    footerRights: string;
  };
}

export interface Translations {
  header: {
    header2: string;
    header3: string;
    header4: string;
    header5: string;
  };
  hero: HeroTranslations;
  services: ServicesTranslations;
  about: AboutTranslations;
  pricing: PricingTranslations;
  footer: FooterTranslations;
}
