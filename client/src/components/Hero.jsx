const Hero = () => {
  return (
    <section
      className="relative w-full h-screen bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url('/stethoscope.webp')",
      }}
    >
      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-white bg-opacity-40"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-24 max-w-screen-xl mx-auto text-blue-900">
        <h3 className="font-bold text-blue-500 mb-4">CARING FOR LIFE</h3>
        <h1 className="text-4xl md:text-6xl font-logo font-bold leading-tight mb-6">
          Leading the Way <br /> in Medical Excellence
        </h1>
        <button className="bg-blue-200 px-6 py-2 text-blue-900 rounded-full hover:bg-blue-500 font-semibold w-fit">
          Our Services
        </button>
      </div>
    </section>
  );
};

export default Hero;
