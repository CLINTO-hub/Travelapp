'use client';

interface ThemeCardProps {
  title: string;
  description: string;
  image: string;
}

const themeCards: ThemeCardProps[] = [
  {
    title: 'Backwaters',
    description: 'Cruise Through The Serene Waters Of Alleppey And Kumarakom.',
    image: '/Ala.png',
  },
  {
    title: 'Hill Station',
    description: 'Feel The Misty Charm Of Munnar, Wayanad, And Vagamon.',
    image: '/Mun.png',
  },
  {
    title: 'Beaches',
    description: 'Soak Up The Sun At Varkala, Kovalam, Varkala Clif And Bekal.',
    image: '/Var.png',
  },
  {
    title: 'Culture & Festivals',
    description: 'Witness Colorful Traditions, Temple Arts, And Vibrant Festivals.',
    image: '/Cul.png',
  },
  {
    title: 'Wildlife',
    description: 'Trek Through Periyar, Wayanad, And Silent Valleys Of Kerala.',
    image: '/Wil.png',
  },
  {
    title: 'Ayurveda & Wellness',
    description: 'Rejuvenate With Ancient Therapies And Natural Healing for every.',
    image: '/Ayurveda.png',
  },
];

export default function PackageList() {
  return (
    <section className="py-12 px-4 md:px-8 bg-white">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10 text-gray-800">
        Plan Your Kerala Journey By Theme
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-12 max-w-7xl mx-auto">
        {themeCards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={card.image}
              alt={card.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-4  hover:bg-orange-300">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{card.title}</h3>
              <p className="text-sm text-gray-600">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
