import Header from "../components/sections/Header";
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import About from "../components/sections/About";
import Pricing from "../components/sections/Pricing";
import WorkProcess from "../components/sections/WorkProcess";
import Testimonials from "../components/sections/Testimonials";
import Contact from "../components/sections/Contact";
import Footer from "../components/sections/Footer";

export default function Home() {
  const language = "en";

  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Hero />
      <Services />
      <About />
      <Pricing />
      <WorkProcess />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
