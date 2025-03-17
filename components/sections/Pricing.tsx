"use client";
import React from "react";
import { useLanguage } from "../LanguageContext";
import { getDictionary } from "../../app/dictionaries";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Job {
  name: string;
  details?: string;
  priceRange: string;
}

interface Category {
  title: string;
  text: string;
  jobs: Job[];
}

interface PricingData {
  title1: string;
  text1: string;
  categories: Category[];
}

export default function Pricing() {
  const { language } = useLanguage();
  const [dict, setDict] = React.useState<{ pricing: PricingData } | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      const dictionary = await getDictionary(language);
      setDict(dict);
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
    <section
      id="pricing"
      className="pricing-section section-padding bg-background border-b"
    >
      <div className="container px-4 py-16 mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center">
          <span className="text-orange">{dict.pricing.title1}</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto text-center">
          {dict.pricing.text1}
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {dict.pricing.categories.map((category) => (
            <div key={category.title} className="flex flex-col h-full">
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-center text-2xl">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 text-center">
                    {category.text}
                  </p>
                  <Table>
                    <TableBody>
                      {category.jobs.map((job) => (
                        <TableRow
                          key={job.name}
                          className="hover:bg-muted/50 transition-colors"
                        >
                          <TableCell className="font-medium py-4">
                            {job.name}
                            {job.details && (
                              <p className="text-sm text-muted-foreground mt-1">
                                {job.details}
                              </p>
                            )}
                          </TableCell>
                          <TableCell className="text-right text-orange font-semibold">
                            {job.priceRange}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
