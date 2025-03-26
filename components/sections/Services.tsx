import {
  LightbulbIcon as LightBulb,
  Home,
  Building2,
  Zap,
  Wrench,
  ShieldCheck,
  Sun,
  Cpu,
} from "lucide-react";

// Define types for the category and card objects based on the JSON structure
interface Card {
  title: string;
  text: string;
}

interface Category {
  title: string;
  cards: Card[];
}

interface ServicesProps {
  translations: {
    services: {
      categories: Category[];
      servicesTitle10: string;
      servicesText10: string;
    };
  };
}

export default function Services({ translations }: ServicesProps) {
  // Get the categories from translations
  const categories = translations.services.categories;

  // Map icons to use for each service
  const residentialIcons = [Home, LightBulb, Cpu, Sun];
  const industrialIcons = [Building2, Wrench, Zap, ShieldCheck];

  return (
    <section id="services" className="section-padding bg-background border-b">
      <div className="container">
        <h2 className="text-4xl font-bold mb-6 text-center">
          <span className="text-orange">
            {translations.services.servicesTitle10}
          </span>
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto text-center">
          {translations.services.servicesText10}
        </p>

        <div className="grid gap-16">
          {Array.isArray(categories) &&
            categories.map((category: Category, categoryIndex: number) => (
              <div key={category.title}>
                <h3 className="text-2xl font-semibold mb-6 text-center">
                  <span className="text-orange">{category.title}</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {Array.isArray(category.cards) &&
                    category.cards.map((card: Card, cardIndex: number) => {
                      // Select icon based on category
                      const icons =
                        categoryIndex === 0
                          ? residentialIcons
                          : industrialIcons;
                      const Icon = icons[cardIndex % icons.length];

                      return (
                        <div
                          key={card.title}
                          className="bg-muted dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
                        >
                          <div className="flex items-center mb-4">
                            <div className="bg-orange/10 p-3 rounded-full mr-4 flex-shrink-0">
                              <Icon className="h-8 w-8 text-orange" />
                            </div>
                            <h4 className="text-xl font-semibold text-gray-800 dark:text-white leading-tight">
                              {card.title}
                            </h4>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300">
                            {card.text}
                          </p>
                        </div>
                      );
                    })}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
