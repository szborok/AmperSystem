"use client";

import React from "react";
import { Phone, Clipboard, Calendar, Wrench, Mail } from "lucide-react";
import { useLanguage } from "../LanguageContext";
import { getDictionary } from "../../app/dictionaries";

const iconMap = {
  Phone,
  Clipboard,
  Calendar,
  Wrench,
  Mail,
};

export default function WorkProcess() {
  const { language } = useLanguage();
  const [dict, setDict] = React.useState<{ workProcess: any } | null>(null);
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
    <section id="work-process" className="section-padding bg-background">
      <div className="container">
        <h2 className="text-4xl font-bold mb-6 text-center">
          <span className="text-orange">{dict.workProcess.title}</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto text-center">
          {dict.workProcess.text}
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {dict.workProcess.cards.map((card: any, index: number) => (
            <div key={card.title} className="bg-muted p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-orange/10 p-3 rounded-full mr-4">
                  {/* You can map icons based on index or add icon property to dictionary */}
                  <Phone className="h-6 w-6 text-orange" />
                </div>
                <h3 className="text-xl font-semibold">{card.title}</h3>
              </div>
              <p className="text-muted-foreground">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
