"use client";

import Link from "next/link";
import { Phone, Mail, Facebook, Twitter, Instagram } from "lucide-react";
import { companyInfo } from "@/data/companyInfo";

export default function Footer({ translations }: { translations: any }) {
  return (
    <footer className="bg-muted dark:bg-gray-900 text-foreground dark:text-gray-300 py-12 border-t border-gray-200 dark:border-gray-800">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
              {companyInfo.fullName}
            </h3>
            <p className="mb-2">{translations.footer.text11}</p>
            <p>{translations.footer.text12}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
              {translations.footer.title2}
            </h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="#services"
                className="hover:text-orange transition-colors"
              >
                {translations.footer.text21}
              </Link>
              <Link
                href="#about"
                className="hover:text-orange transition-colors"
              >
                {translations.footer.text22}
              </Link>
              <Link
                href="#pricing"
                className="hover:text-orange transition-colors"
              >
                {translations.footer.text23}
              </Link>
              <Link
                href="#testimonials"
                className="hover:text-orange transition-colors"
              >
                {translations.footer.text24}
              </Link>
              <Link
                href="#contact"
                className="hover:text-orange transition-colors"
              >
                {translations.footer.text25}
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
              {translations.footer.title3}
            </h3>
            <p className="flex items-center mb-2">
              <Phone className="h-5 w-5 mr-2 text-orange" />
              <a
                href={`tel:${companyInfo.phone}`}
                className="hover:text-orange transition-colors"
              >
                {companyInfo.phone}
              </a>
            </p>
            <p className="flex items-center mb-4">
              <Mail className="h-5 w-5 mr-2 text-orange" />
              <a
                href={`mailto:${companyInfo.email}`}
                className="hover:text-orange transition-colors"
              >
                {companyInfo.email}
              </a>
            </p>
            <div className="flex space-x-4">
              <a
                href={companyInfo.socialMedia.facebook}
                className="text-gray-600 dark:text-gray-400 hover:text-orange transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href={companyInfo.socialMedia.twitter}
                className="text-gray-600 dark:text-gray-400 hover:text-orange transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href={companyInfo.socialMedia.instagram}
                className="text-gray-600 dark:text-gray-400 hover:text-orange transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            &copy; {new Date().getFullYear()} {companyInfo.fullName}.{" "}
            {translations.footer.footerRights}
          </p>
        </div>
      </div>
    </footer>
  );
}
