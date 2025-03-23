"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";
import { useTranslation } from "@/translations/index";

interface Testimonial {
  content: string;
  name: string;
  role: string;
}

export default function Testimonials() {
  const { language } = useLanguage();
  const { t } = useTranslation(language);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Get testimonials as an array
  const testimonials = t<Testimonial[]>("testimonials.items");

  const nextTestimonial = () => {
    if (!Array.isArray(testimonials) || testimonials.length === 0) return;
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    if (!Array.isArray(testimonials) || testimonials.length === 0) return;
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section id="testimonials" className="section-padding bg-muted">
      <div className="container">
        <h2 className="text-4xl font-bold mb-6 text-center">
          <span className="text-orange">{t("testimonials.title1")}</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto text-center">
          {t("testimonials.text1")}
        </p>
        <div className="relative max-w-3xl mx-auto">
          {Array.isArray(testimonials) && testimonials.length > 0 ? (
            <div className="bg-card p-8 rounded-lg shadow-md">
              <Quote className="h-12 w-12 text-orange mb-4" />
              <p className="text-lg mb-4 text-muted-foreground italic">
                {testimonials[currentIndex].content}
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={prevTestimonial}
                    className="p-2 rounded-full bg-orange/20 text-orange hover:bg-orange/30 transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="p-2 rounded-full bg-orange/20 text-orange hover:bg-orange/30 transition-colors"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <p>No testimonials found</p>
          )}
        </div>
      </div>
    </section>
  );
}
