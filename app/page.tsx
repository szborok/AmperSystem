import { Suspense } from "react";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Pricing from "@/components/sections/Pricing";
import WorkProcess from "@/components/sections/WorkProcess";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Loading from "./loading";

export default function HomePage() {
  return (
    <Suspense fallback={<Loading />}>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Pricing />
        <WorkProcess />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </Suspense>
  );
}
