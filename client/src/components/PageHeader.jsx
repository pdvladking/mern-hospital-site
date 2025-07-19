const PageHeader = ({ title, breadcrumb, bgImage }) => {
  return (
    <section
      className="relative w-full h-[300px] bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(stethoscope.webp)` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text Block */}
      <div className="relative z-10 px-6 md:px-16 text-white">
        <p className="text-sm uppercase mb-2 tracking-wider text-[#1F2B6C]">
          {breadcrumb}
        </p>
        <h1 className="text-4xl font-bold font-logo text-[#1F2B6C]">{title}</h1>
      </div>
    </section>
  );
};

export default PageHeader;
