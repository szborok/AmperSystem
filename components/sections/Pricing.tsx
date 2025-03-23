"use client";

import React from "react";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/components/LanguageContext";
import { useTranslation } from "@/translations/index";

export default function Pricing() {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  // Get categories as an array
  const categories = t<any[]>("pricing.categories");

  return (
    <section
      id="pricing"
      className="pricing-section section-padding bg-background border-b"
    >
      <div className="container px-4 py-16 mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center">
          <span className="text-orange">{t("pricing.title1")}</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto text-center">
          {t("pricing.text1")}
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {Array.isArray(categories) &&
            categories.map((category) => (
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
                        {Array.isArray(category.jobs) &&
                          category.jobs.map((job) => (
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
