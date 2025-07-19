export default function FreeCheckupCard() {
  const cards = [
    {
      title: 'Free Checkup',
      image: '/stethoscope.webp',
      description:
        'Get personalized care and diagnostics from our expert physicians—no cost, full attention.',
    },
    {
      title: 'Advanced Lab',
      image: '/stethoscope.webp',
      description:
        'State-of-the-art lab testing with rapid results and full transparency in your reports.',
    },
    {
      title: 'Health Packages',
      image: '/stethoscope.webp',
      description:
        'Affordable health plans curated for families, professionals, and seniors. No stress, just care.',
    },
    {
      title: 'Emergency Support',
      image: '/stethoscope.webp',
      description:
        '24/7 emergency care with fast ambulance dispatch and trained trauma staff.',
    },
    {
      title: 'Telemedicine',
      image: '/stethoscope.webp',
      description:
        'Virtual appointments from the comfort of your home, across any device.',
    },
    {
      title: 'Pediatric Care',
      image: '/stethoscope.webp',
      description:
        'Compassionate care for your children, from newborns to teens.',
    },
  ];

  return (
    <section className="max-w-screen-xl mx-auto px-6 py-12">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            {/* Image block with patch icon */}
            <div className="relative">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-52 object-cover"
              />
              <div className="absolute -bottom-6 right-4 w-14 h-14 bg-[#1F2B6C] rounded-full flex items-center justify-center shadow-md border-2 border-white z-10">
                <img
                  src="/patch.png"
                  alt="Bandage Icon"
                  className="w-8 h-8 object-contain invert"
                />
              </div>
            </div>

            {/* Card content */}
            <div className="p-6 pt-6">
              <h2 className="text-xl font-bold text-[#1F2B6C] mb-2">
                {card.title}
              </h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                {card.description}
              </p>
              <button className="mt-4 text-[#159EEC] font-semibold hover:underline">
                Learn More ➔
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
