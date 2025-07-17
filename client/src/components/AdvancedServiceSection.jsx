import React from 'react';
import {
  HeartIcon,
  BeakerIcon,
  BoltIcon,
  HandRaisedIcon,
} from '@heroicons/react/24/solid';

const services = [
  {
    name: 'Free Checkup',
    icon: <BeakerIcon className="h-6 w-6 text-blue-600" />,
  },
  { name: 'Cardiogram', icon: <HeartIcon className="h-6 w-6 text-blue-600" /> },
  { name: 'DNA Testing', icon: <BoltIcon className="h-6 w-6 text-blue-600" /> },
  {
    name: 'Blood Bank',
    icon: <HandRaisedIcon className="h-6 w-6 text-blue-600" />,
  },
];

const values = [
  'A Passion for Healing',
  'All our best',
  'A Legacy of Excellence',
  '5-Star Care',
  'Believe in Us',
  'Always Caring',
];

const AdvancedServiceSection = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      {/* Top-Level Heading and Subtext */}
      <div className="mb-10">
        <h3 className="text-center text-xl font-bold text-blue-500 mb-2">
          CARE YOU CAN BELIEVE IN
        </h3>
        <p className="font-logo font-bold text-4xl text-center text-blue-900 max-w-2xl mx-auto">
          Our Services
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-[auto_1fr_1fr] gap-4 items-start">
        {/* Left Column: Square Icon Cards */}
        <div className="flex flex-col items-start space-y-3">
          {services.map((item) => (
            <div
              key={item.name}
              className="w-28 h-28 bg-white rounded-lg shadow flex flex-col items-center justify-center hover:shadow-lg hover:scale-105 transition cursor-pointer"
            >
              <div className="w-9 h-9 mb-2 bg-blue-100 rounded-full flex items-center justify-center">
                {item.icon}
              </div>
              <span className="text-sm font-medium text-gray-800 text-center">
                {item.name}
              </span>
            </div>
          ))}
          <button className="text-blue-600 font-semibold hover:underline mt-1 text-sm">
            View All →
          </button>
        </div>

        {/* Middle Column: Headline + Bullet List + Paragraphs */}
        <div>
          <h2 className="text-xl font-semibold text-blue-900 mb-4">
            A passion for putting patients first.
          </h2>

          <div className="grid grid-cols-2 gap-x-6 gap-y-2 mb-6">
            {values.map((item) => (
              <div
                key={item}
                className="flex items-start gap-2 text-gray-700 text-sm font-bold"
              >
                <span className="w-2 h-2 mt-2 bg-blue-600 rounded-full"></span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            placerat scelerisque tortor ornare ornare. Quisque placerat
            scelerisque tortor ornare ornare Convallis felis vitae tortor augue.
            Velit nascetur proin massa in. Consequat faucibus porttitor enim et.
          </p>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            placerat scelerisque. Convallis felis vitae tortor augue. Velit
            nascetur proin massa in.
          </p>
        </div>

        {/* Right Column: Two Stacked Images */}
        <div className="flex flex-col space-y-4">
          <img
            src="/stethoscope.webp"
            alt="Healthcare professional"
            className="rounded-lg shadow"
          />
          <img
            src="/stethoscope.webp"
            alt="Medical team"
            className="rounded-lg shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default AdvancedServiceSection;
