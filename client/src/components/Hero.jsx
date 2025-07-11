const Hero = () => {
  return (
    <section className="bg-blue-50 py-20 px-6 flex items-center justify-between flex-wrap-reverse md:flex-nowrap">
      {/* Text Content */}
      <div className="max-w-xl">
        <h1 className="text-5xl font-bold text-blue-900 leading-tight">
          Experience Exceptional Healthcare
        </h1>
        <p className="mt-6 text-lg text-blue-700">
          Streamline appointments, access medical insights, and connect with
          expert doctors—all in one platform.
        </p>
        <button className="mt-8 bg-blue-900 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>

      {/* Image */}
      <div>
        <img
          src="https://images.unsplash.com/photo-1601982526827-6b4b2822b5d4"
          alt="Healthcare"
          className="w-[500px] rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
