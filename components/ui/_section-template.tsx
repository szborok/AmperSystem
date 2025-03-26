"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "../shared/LanguageContext";
import { getDictionary } from "@/app/dictionaries";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";

// Add types for dictionary data
type DictionaryData = Record<string, any>; // Replace 'any' with actual dictionary structure

interface SectionComponentProps {
  className?: string;
}

export default function SectionComponent({ className }: SectionComponentProps) {
  const { language } = useLanguage();
  const [data, setData] = useState<DictionaryData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        const dictionary = await getDictionary(language);
        setData(dictionary);
      } catch (error) {
        console.error("Failed to load dictionary:", error);
        toast({
          variant: "destructive",
          title: "Error loading content",
          description:
            error instanceof Error ? error.message : "Unknown error occurred",
        });
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, [language, toast]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <Loader2 className="h-8 w-8 animate-spin text-orange" />
      </div>
    );
  }

  if (!data) return null;

  return <section className={className}>{/* Section content */}</section>;
}
