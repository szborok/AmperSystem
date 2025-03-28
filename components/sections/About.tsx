import { ShieldCheck, GraduationCap, MapPin, Truck, Check } from "lucide-react";
import { companyInfo } from "@/data/companyInfo";
import Image from "next/image";

export default function About({ translations }: { translations: any }) {
  return (
    <section id="about" className="section-padding bg-muted border-b">
      <div className="container pb-8">
        <h2 className="text-4xl font-bold mb-6 text-center">
          <span className="text-orange">{translations.about.title10}</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto text-center">
          {translations.about.text10}
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <p className="text-lg mb-6 text-muted-foreground text-center mx-auto max-w-xl">
              {translations.about.text11}
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                {
                  icon: ShieldCheck,
                  title: translations.about.cards[0].title,
                  description: translations.about.cards[0].text,
                },
                {
                  icon: GraduationCap,
                  title: translations.about.cards[1].title,
                  description: translations.about.cards[1].text,
                },
                {
                  icon: Check,
                  title: translations.about.cards[2].title,
                  description: translations.about.cards[2].text,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center w-full sm:w-[calc(33.333%-1rem)] max-w-[200px]"
                >
                  <item.icon className="h-12 w-12 text-orange mb-2" />
                  <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mt-8 md:mt-0">
            <div className="w-full max-w-md mx-auto h-[300px] md:h-[400px] relative">
              <Image
                src={companyInfo.images.team || "/placeholder.svg"}
                alt={`${companyInfo.fullName} Team`}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-orange text-white p-3 md:p-4 rounded-lg shadow-lg">
              <p className="text-xl md:text-2xl font-bold">20+</p>
              <p className="text-sm md:text-base">
                {translations.about.text40}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-4 text-center">
            <span className="text-orange">{translations.about.title30}</span>
          </h3>
          <p className="text-lg text-muted-foreground mb-6 text-center mx-auto max-w-3xl">
            {translations.about.text30}
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            {[
              {
                icon: MapPin,
                title: translations.about.cards[4].title,
                description: translations.about.cards[4].text,
              },
              {
                icon: Truck,
                title: translations.about.cards[5].title,
                description: translations.about.cards[5].text,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center w-full sm:w-[calc(50%-1rem)] max-w-[250px]"
              >
                <item.icon className="h-12 w-12 text-orange mb-2" />
                <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
