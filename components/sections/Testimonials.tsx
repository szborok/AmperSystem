"use client";

import React from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useLanguage } from "../LanguageContext";
import { getDictionary } from "../../app/dictionaries";

export default function Testimonials() {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [dict, setDict] = React.useState<{ testimonials: any } | null>(null);
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

  const testimonials = dict.testimonials.items;

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section id="testimonials" className="section-padding bg-muted">
      <div className="container">
        <h2 className="text-4xl font-bold mb-6 text-center">
          <span className="text-orange">{dict.testimonials.title1}</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto text-center">
          {dict.testimonials.text1}
        </p>
        <div className="relative max-w-3xl mx-auto">
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
        </div>
      </div>
    </section>
  );
}
