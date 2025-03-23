"use client";

import {
  LightbulbIcon as LightBulb,
  Home,
  Building2,
  Zap,
  Wrench,
  ShieldCheck,
  Sun,
  Cpu,
} from "lucide-react";
import { useLanguage } from "../LanguageContext";
import { useTranslation } from "../../translations/index";

export default function Services() {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  // Define services with their icons
  const residentialServices = [
    {
      icon: Home,
      title: t("services.categories[0].cards[0].title"),
      text: t("services.categories[0].cards[0].text"),
    },
    {
      icon: LightBulb,
      title: t("services.categories[0].cards[1].title"),
      text: t("services.categories[0].cards[1].text"),
    },
    {
      icon: Cpu,
      title: t("services.categories[0].cards[2].title"),
      text: t("services.categories[0].cards[2].text"),
    },
    {
      icon: Sun,
      title: t("services.categories[0].cards[3].title"),
      text: t("services.categories[0].cards[3].text"),
    },
  ];

  const industrialServices = [
    {
      icon: Building2,
      title: t("services.categories[1].cards[0].title"),
      text: t("services.categories[1].cards[0].text"),
    },
    {
      icon: Wrench,
      title: t("services.categories[1].cards[1].title"),
      text: t("services.categories[1].cards[1].text"),
    },
    {
      icon: Zap,
      title: t("services.categories[1].cards[2].title"),
      text: t("services.categories[1].cards[2].text"),
    },
    {
      icon: ShieldCheck,
      title: t("services.categories[1].cards[3].title"),
      text: t("services.categories[1].cards[3].text"),
    },
  ];

  return (
    <section id="services" className="section-padding bg-background border-b">
      <div className="container">
        <h2 className="text-4xl font-bold mb-6 text-center">
          <span className="text-orange">{t("services.servicesTitle10")}</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto text-center">
          {t("services.servicesText10")}
        </p>

        <div className="grid gap-16">
          {/* Residential Services */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center">
              <span className="text-orange">
                {t("services.categories[0].title")}
              </span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {residentialServices.map((service) => (
                <div
                  key={service.title}
                  className="bg-muted dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-orange/10 p-3 rounded-full mr-4 flex-shrink-0">
                      <service.icon className="h-8 w-8 text-orange" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-800 dark:text-white leading-tight">
                      {service.title}
                    </h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {service.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Industrial Services */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center">
              <span className="text-orange">
                {t("services.categories[1].title")}
              </span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industrialServices.map((service) => (
                <div
                  key={service.title}
                  className="bg-muted dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-orange/10 p-3 rounded-full mr-4 flex-shrink-0">
                      <service.icon className="h-8 w-8 text-orange" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-800 dark:text-white leading-tight">
                      {service.title}
                    </h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {service.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
