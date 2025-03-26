// app/[lang]/page.tsx

import Header from "../../components/sections/Header";
import Hero from "../../components/sections/Hero";
import Services from "../../components/sections/Services";
import About from "../../components/sections/About";
import Pricing from "../../components/sections/Pricing";
import WorkProcess from "../../components/sections/WorkProcess";
import Testimonials from "../../components/sections/Testimonials";
import Contact from "../../components/sections/Contact";
import Footer from "../../components/sections/Footer";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  let translations;

  try {
    translations = (await import(`../../locales/${lang}.json`)).default;
  } catch (error) {
    console.warn(`Language file for '${lang}' not found, falling back to 'en'`);
    translations = (await import(`../../locales/en.json`)).default;
  }

  return (
    <main className="flex min-h-screen flex-col">
      <Header translations={translations} />
      <Hero translations={translations} />
      <Services translations={translations} />
      <About translations={translations} />
      <Pricing translations={translations} />
      <WorkProcess translations={translations} />
      <Testimonials translations={translations} />
      <Contact translations={translations} />
      <Footer translations={translations} />
    </main>
  );
}
