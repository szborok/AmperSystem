"use client";

import React from "react";
import { Phone, Clipboard, Calendar, Wrench, Mail } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";
import { useTranslation } from "@/translations/index";

interface WorkProcessCard {
  title: string;
  text: string;
}

export default function WorkProcess() {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  // Get cards as an array
  const cards = t<WorkProcessCard[]>("workProcess.cards");

  return (
    <section id="work-process" className="section-padding bg-background">
      <div className="container">
        <h2 className="text-4xl font-bold mb-6 text-center">
          <span className="text-orange">{t("workProcess.title")}</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto text-center">
          {t("workProcess.text")}
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Array.isArray(cards) ? (
            cards.map((card: WorkProcessCard, index: number) => {
              // Get icon based on index
              const IconComponent = [Phone, Clipboard, Calendar, Wrench, Mail][
                index % 5
              ];

              return (
                <div
                  key={card.title}
                  className="bg-muted p-6 rounded-lg shadow-md"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-orange/10 p-3 rounded-full mr-4">
                      <IconComponent className="h-6 w-6 text-orange" />
                    </div>
                    <h3 className="text-xl font-semibold">{card.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{card.text}</p>
                </div>
              );
            })
          ) : (
            <p>No work process cards found</p>
          )}
        </div>
      </div>
    </section>
  );
}
