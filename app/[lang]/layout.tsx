// app/layout.tsx
import { Inter } from "next/font/google";
import "../../app/globals.css";
import { ThemeProvider } from "@/components/shared/ThemeProvider";
import { LanguageProvider } from "@/components/shared/LanguageContext";
import { companyInfo } from "@/data/companyInfo";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Amper System",
  description: "Electrical services for your home and business",
  icons: companyInfo.images.favicon,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
