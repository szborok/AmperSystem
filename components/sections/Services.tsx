"use client";

import React from "react";
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
import { getDictionary } from "../../app/dictionaries";

const iconMap = {
  Home,
  LightBulb,
  Cpu,
  Sun,
  Building2,
  Wrench,
  Zap,
  ShieldCheck,
};

export default function Services() {
  const { language } = useLanguage();
  const [dict, setDict] = React.useState<{ services: any } | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      const dictionary = await getDictionary(language);
      setDict(dictionary);
      setIsLoading(false);
    };
    loadData();
  }, [language]);

  if (isLoading || !dict) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-pulse">Loading...</div>
      </div>
    );
  }

  return (
    <section id="services" className="section-padding bg-background border-b">
      <div className="container">
        <h2 className="text-4xl font-bold mb-6 text-center">
          <span className="text-orange">{dict.services.servicesTitle10}</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto text-center">
          {dict.services.servicesText10}
        </p>

        <div className="grid gap-16">
          {dict.services.categories.map((category: any) => (
            <div key={category.title}>
              <h3 className="text-2xl font-semibold mb-6 text-center">
                <span className="text-orange">{category.title}</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {category.cards.map((card: any) => (
                  <div
                    key={card.title}
                    className="bg-muted dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
                  >
                    <div className="flex items-center mb-4">
                      <div className="bg-orange/10 p-3 rounded-full mr-4 flex-shrink-0">
                        {/* You'll need to map the icons appropriately */}
                        <Home className="h-8 w-8 text-orange" />
                      </div>
                      <h4 className="text-xl font-semibold text-gray-800 dark:text-white leading-tight">
                        {card.title}
                      </h4>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      {card.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
