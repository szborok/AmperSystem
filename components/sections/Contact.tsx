"use client";

import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { companyInfo } from "../../data/companyInfo";
import { useLanguage } from "../LanguageContext";
import { useTranslation } from "../../translations/index";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type Errors = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
};

export default function Contact() {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const tempErrors: Errors = {};
    if (!formData.name.trim())
      tempErrors.name =
        t("contact.fields.name.title") + " " + t("contact.errors.required");
    if (!formData.email.trim())
      tempErrors.email =
        t("contact.fields.email.title") + " " + t("contact.errors.required");
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      tempErrors.email = t("contact.errors.invalidEmail");
    if (!formData.phone.trim())
      tempErrors.phone =
        t("contact.fields.phone.title") + " " + t("contact.errors.required");
    else if (!/^\+?[1-9]\d{1,14}$/.test(formData.phone))
      tempErrors.phone = t("contact.errors.invalidPhone");
    if (!formData.message.trim())
      tempErrors.message =
        t("contact.fields.message.title") + " " + t("contact.errors.required");
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container">
        <h2 className="text-4xl font-bold mb-6 text-center">
          <span className="text-orange">{t("contact.title")}</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto text-center">
          {t("contact.text")}
        </p>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-foreground"
                >
                  {t("contact.fields.name.title")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t("contact.fields.name.placeholder")}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                {errors.name && (
                  <p className="text-destructive text-sm mt-1">{errors.name}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-foreground"
                >
                  {t("contact.fields.email.title")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t("contact.fields.email.placeholder")}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                {errors.email && (
                  <p className="text-destructive text-sm mt-1">
                    {errors.email}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-foreground"
                >
                  {t("contact.fields.phone.title")}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t("contact.fields.phone.placeholder")}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                {errors.phone && (
                  <p className="text-destructive text-sm mt-1">
                    {errors.phone}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-foreground"
                >
                  {t("contact.fields.message.title")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder={t("contact.fields.message.placeholder")}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
                {errors.message && (
                  <p className="text-destructive text-sm mt-1">
                    {errors.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="w-full btn bg-orange text-white hover:bg-orange/90 transition-all duration-300 flex items-center justify-center space-x-2 px-6 py-3 text-lg font-semibold rounded-md"
              >
                <span>{t("contact.info.submit")}</span>
                <Mail className="h-5 w-5 ml-2" />
              </button>
            </form>
          </div>
          <div className="bg-muted p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6">
              {t("contact.info.title")}
            </h3>
            <div className="space-y-4">
              <p className="flex items-center">
                <Phone className="h-6 w-6 mr-2 text-orange" />
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="hover:text-orange transition-colors"
                >
                  {companyInfo.phone}
                </a>
              </p>
              <p className="flex items-center">
                <Mail className="h-6 w-6 mr-2 text-orange" />
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="hover:text-orange transition-colors"
                >
                  {companyInfo.email}
                </a>
              </p>
              <p className="flex items-center">
                <MapPin className="h-6 w-6 mr-2 text-orange" />
                <span>{companyInfo.address}</span>
              </p>
            </div>
            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-2">
                {t("contact.info.businessHours")}
              </h4>
              <p>{companyInfo.businessHours.weekdays}</p>
              <p>{companyInfo.businessHours.saturday}</p>
              <p>{companyInfo.businessHours.sunday}</p>
              <p className="mt-2 font-semibold">
                {t("contact.info.emergency")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
