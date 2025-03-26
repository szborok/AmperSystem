// URL: app/[lang]/page.tsx

import Header from "../../components/sections/Header";
import Hero from "../../components/sections/Hero";
import Services from "../../components/sections/Services";
import About from "../../components/sections/About";
import Pricing from "../../components/sections/Pricing";
import WorkProcess from "../../components/sections/WorkProcess";
import Testimonials from "../../components/sections/Testimonials";
import Contact from "../../components/sections/Contact";
import Footer from "../../components/sections/Footer";

export default async function Home({ params }: { params: { lang: string } }) {
  let translations;

  try {
    // Try to dynamically import the correct language file
    translations = await import(`../../locales/${params.lang}.json`);
  } catch (error) {
    console.warn(
      `Language file for '${params.lang}' not found, falling back to 'en'`
    );
    // Fallback to English if the language file isn't found
    translations = await import(`../../locales/en.json`);
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
