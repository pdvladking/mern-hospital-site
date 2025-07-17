import React from 'react';

const ServicesSection = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      {/* Hero Text Block */}
      <div className="text-center mb-12">
        <h4 className="text-sm font-semibold text-blue-600 tracking-wide uppercase">
          Welcome to Meddical
        </h4>
        <h2 className="font-logo text-3xl font-bold text-blue-900 mt-2">
          A Great Place to Receive Care
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          placerat scelerisque tortor ornare ornare. Convallis felis vitae
          tortor augue. Velit nascetur proin massa in. Consequat faucibus
          porttitor enim et.
        </p>
        <a
          href="#"
          className="inline-flex items-center mt-6 text-blue-600 font-medium hover:underline"
        >
          Learn More
          <span className="ml-2">→</span>
        </a>
      </div>

      {/* Background Image Block */}
      <div
        className="w-full h-64 md:h-96 rounded-lg shadow-lg bg-cover bg-center"
        style={{
          backgroundImage: "url('/stethoscope.webp')", // Replace with your actual image path
        }}
      ></div>
    </section>
  );
};

export default ServicesSection;
