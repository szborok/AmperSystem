"use client";

import Link from "next/link";
import { ShieldCheck, Zap, Clock, Phone } from "lucide-react";
import { companyInfo } from "@/data/companyInfo";
import { useLanguage } from "@/components/LanguageContext";
import { useTranslation } from "@/translations/index";

export default function Hero() {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  return (
    <section
      className="relative bg-cover bg-center py-20 md:py-28"
      style={{
        backgroundImage: `url('${companyInfo.images.hero}')`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50 dark:opacity-70"></div>
      <div className="container relative z-10">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-orange">{t("hero.heroTitle1")}</span>
          </h1>
          <p className="text-lg md:text-xl mb-10 text-gray-200 max-w-2xl">
            {t("hero.heroText1")}
          </p>

          <div className="flex flex-col md:flex-row gap-8 mb-12">
            {[
              { icon: ShieldCheck, text: t("hero.heroCard1") },
              { icon: Zap, text: t("hero.heroCard2") },
              { icon: Clock, text: t("hero.heroCard3") },
            ].map((item, index) => (
              <div key={index} className="flex items-center">
                <div
                  className={`bg-white bg-opacity-20 backdrop-blur-sm p-3 rounded-full mr-4 shadow-lg`}
                >
                  <item.icon className="h-7 w-7 text-orange" />
                </div>
                <p className="text-base md:text-lg font-semibold">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-5">
            <Link
              href="#contact"
              className="btn bg-orange text-white hover:bg-orange/90 transition-all duration-300 flex items-center justify-center space-x-2 px-8 py-4 text-lg font-semibold rounded-full shadow-lg"
            >
              <span>{t("hero.heroButton1")}</span>
              <Zap className="h-5 w-5 ml-2" />
            </Link>
            <Link
              href={`tel:${companyInfo.phone}`}
              className="btn bg-white bg-opacity-20 backdrop-blur-md text-white hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center space-x-2 px-8 py-4 text-lg font-semibold rounded-full shadow-lg"
            >
              <Phone className="h-5 w-5 mr-2" />
              <span>{t("hero.heroButton2")}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
