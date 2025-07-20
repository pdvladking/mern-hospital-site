const TestimonialSection = () => {
  return (
    <section
      className="relative px-6 py-20 bg-cover bg-center bg-no-repeat bg-white dark:bg-neutral-900"
      style={{
        backgroundImage: "url('/stethoscope.webp')",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-white/70 dark:bg-neutral-900/70"></div>

      {/* Content */}
      <div className="relative max-w-3xl mx-auto text-center z-10">
        {/* Quote Mark */}
        <div className="text-7xl mb-4 text-blue-500 font-serif">“</div>

        {/* Testimonial Text */}
        <p className="text-gray-800 dark:text-gray-200 text-lg leading-relaxed font-medium px-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          placerat scelerisque tortor ornare ornare. Quisque placerat
          scelerisque felis vitae tortor augue. Velit nascetur consequat
          faucibus porttitor enim et.
        </p>

        {/* Line Separator */}
        <div className="my-6 h-px w-40 mx-auto bg-blue-500 opacity-75"></div>

        {/* Name */}
        <h4 className="text-blue-900 dark:text-white text-xl font-bold">
          John Doe
        </h4>

        {/* Carousel Dots */}
        <div className="mt-4 flex justify-center gap-2">
          <span className="w-3 h-3 rounded-full bg-blue-600"></span>
          <span className="w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-700"></span>
          <span className="w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-700"></span>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
