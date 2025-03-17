"use client";

import { CheckCircleIcon } from "lucide-react";
import { useLanguage } from "../LanguageContext";
import { getDictionary } from "../../app/dictionaries";
import { useEffect, useState } from "react";

export default function WhyChooseUs() {
  const { language } = useLanguage();
  const [dict, setDict] = useState<any>(null);

  useEffect(() => {
    const loadDictionary = async () => {
      const dictionary = await getDictionary(language);
      setDict(dictionary);
    };
    loadDictionary();
  }, [language]);

  if (!dict) return null;

  const reasons = [
    dict.whyChooseUs.reason1,
    dict.whyChooseUs.reason2,
    dict.whyChooseUs.reason3,
    dict.whyChooseUs.reason4,
    dict.whyChooseUs.reason5,
    dict.whyChooseUs.reason6,
  ];

  return (
    <section id="why-choose-us" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          {dict.whyChooseUs.title}{" "}
          <span className="gradient-text">{dict.whyChooseUs.company}</span>?
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card p-6 rounded-lg shadow-md hover-lift">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              {dict.whyChooseUs.advantageTitle}
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
              {dict.whyChooseUs.experienceTitle}
            </h3>
            <p className="mb-6">{dict.whyChooseUs.experienceText}</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">20+</div>
                <div className="text-sm">{dict.whyChooseUs.yearsLabel}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">1000+</div>
                <div className="text-sm">{dict.whyChooseUs.projectsLabel}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
