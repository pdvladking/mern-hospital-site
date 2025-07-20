const PageHeader = ({ title, breadcrumb, bgImage }) => {
  return (
    <section
      className="relative w-full h-[300px] bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(stethoscope.webp)` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text Block with Unified Left Margin */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6 text-white">
          <p className="text-sm uppercase mb-2 tracking-wider text-[#1F2B6C]">
            {breadcrumb}
          </p>
          <h1 className="text-4xl font-bold font-logo text-[#1F2B6C]">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
