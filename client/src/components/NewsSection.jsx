import React from 'react';

const NewsSection = () => {
  const articles = [
    {
      id: 1,
      title: 'New Cardiology Wing Opens with Modern Equipment',
      date: '2025-07-15',
      author: 'Dr. Raj Aryal',
      views: 220,
      likes: 75,
      image: '/stethoscope.webp',
    },
    {
      id: 2,
      title: 'Health Awareness Seminar Scheduled for August',
      date: '2025-07-12',
      author: 'Hospital Committee',
      views: 190,
      likes: 63,
      image: '/stethoscope.webp',
    },
    {
      id: 3,
      title: 'Free Vaccination Drive Reaches 3,000 Citizens',
      date: '2025-07-10',
      author: 'Community Outreach',
      views: 310,
      likes: 88,
      image: '/stethoscope.webp',
    },
    {
      id: 4,
      title: 'Launch of Telemedicine Service for Remote Patients',
      date: '2025-07-09',
      author: 'Tech Department',
      views: 260,
      likes: 72,
      image: '/stethoscope.webp',
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      {/* Section Intro */}
      <div className="mb-6">
        <h3 className="text-center text-xl font-semibold text-blue-600 mb-2">
          BETTER INFORMATION,BETTER HEALTH
        </h3>
      </div>

      {/* Heading */}
      <h2 className="text-4xl font-logo font-bold text-center text-blue-900 mb-10">
        News
      </h2>

      {/* News Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {articles.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden transition hover:shadow-lg"
          >
            {/* Image Left */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full md:w-1/3 h-48 md:h-auto object-cover"
            />

            {/* Text Right */}
            <div className="p-4 flex-1">
              <h3 className="text-lg font-semibold text-gray-800 leading-tight mb-2 line-clamp-2">
                {item.title}
              </h3>

              <p className="text-sm text-gray-500 mb-1">
                {new Date(item.date).toLocaleDateString('en-US', {
                  weekday: 'long',
                  day: '2-digit',
                  month: 'long',
                  year: 'numeric',
                })}
              </p>

              <p className="text-sm text-gray-500 mb-3">By {item.author}</p>

              <div className="flex justify-between items-center text-sm text-gray-600">
                <span>👁️ {item.views} views</span>
                <span>❤️ {item.likes} likes</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Three Dots at Bottom */}
      <div className="flex justify-center items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-blue-500"></span>
        <span className="w-2 h-2 rounded-full bg-blue-900"></span>
        <span className="w-2 h-2 rounded-full bg-blue-500"></span>
      </div>
    </section>
  );
};

export default NewsSection;
