"use client";

import { CheckCircleIcon } from "lucide-react";
import { useLanguage } from "@/components/shared/LanguageContext";

export default function WhyChooseUs({ translations }: { translations: any }) {
  const { language } = useLanguage();

  const reasons = [
    translations("whyChooseUs.reason1"),
    translations("whyChooseUs.reason2"),
    translations("whyChooseUs.reason3"),
    translations("whyChooseUs.reason4"),
    translations("whyChooseUs.reason5"),
    translations("whyChooseUs.reason6"),
  ];

  return (
    <section id="why-choose-us" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          {translations("whyChooseUs.title")}{" "}
          <span className="gradient-text">
            {translations("whyChooseUs.company")}
          </span>
          ?
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card p-6 rounded-lg shadow-md hover-lift">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              {translations("whyChooseUs.advantageTitle")}
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
              {translations("whyChooseUs.experienceTitle")}
            </h3>
            <p className="mb-6">{translations("whyChooseUs.experienceText")}</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">20+</div>
                <div className="text-sm">
                  {translations("whyChooseUs.yearsLabel")}
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">1000+</div>
                <div className="text-sm">
                  {translations("whyChooseUs.projectsLabel")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
