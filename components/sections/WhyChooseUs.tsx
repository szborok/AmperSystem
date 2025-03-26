"use client";

import { CheckCircleIcon } from "lucide-react";
import { useLanguage } from "@/components/shared/LanguageContext";
import { useTranslation } from "@/translations/index";

export default function WhyChooseUs() {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  const reasons = [
    t("whyChooseUs.reason1"),
    t("whyChooseUs.reason2"),
    t("whyChooseUs.reason3"),
    t("whyChooseUs.reason4"),
    t("whyChooseUs.reason5"),
    t("whyChooseUs.reason6"),
  ];

  return (
    <section id="why-choose-us" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          {t("whyChooseUs.title")}{" "}
          <span className="gradient-text">{t("whyChooseUs.company")}</span>?
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card p-6 rounded-lg shadow-md hover-lift">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              {t("whyChooseUs.advantageTitle")}
            </h3>
            <ul className="space-y-4">
              {reasons.map((reason, index) => (
                <li
                  key={index}
                  className="flex items-center text-muted-foreground"
                >
                  <CheckCircleIcon className="h-6 w-6 mr-2 text-secondary flex-shrink-0" />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-primary text-primary-foreground p-6 rounded-lg shadow-md hover-lift">
            <h3 className="text-2xl font-semibold mb-4">
              {t("whyChooseUs.experienceTitle")}
            </h3>
            <p className="mb-6">{t("whyChooseUs.experienceText")}</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">20+</div>
                <div className="text-sm">{t("whyChooseUs.yearsLabel")}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">1000+</div>
                <div className="text-sm">{t("whyChooseUs.projectsLabel")}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
