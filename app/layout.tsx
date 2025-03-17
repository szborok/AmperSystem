import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/components/LanguageContext";
import { Toaster } from "@/components/ui/toaster";
import { headers } from "next/headers";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Amper System Electrical | Professional Electrician Services",
  description:
    "Amper System Electrical offers expert electrical services for residential and commercial properties. 24/7 emergency service available.",
  keywords:
    "electrician, electrical services, residential electrician, commercial electrician, emergency electrician",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = headers();
  const acceptLanguage = headersList.get("accept-language") || "";
  const initialLocale = acceptLanguage.includes("hu") ? "hu" : "en";

  return (
    <html lang={initialLocale}>
      <body className={inter.variable}>
        <ThemeProvider>
          <LanguageProvider>
            {children}
            <Toaster />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
