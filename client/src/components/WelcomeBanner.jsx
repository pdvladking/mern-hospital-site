const WelcomeBanner = () => {
  return (
    <section className="bg-blue-50 px-6 md:px-16 py-20">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Image Block - Left */}
        <div className="md:w-1/2 w-full flex justify-center">
          <img
            src="stethoscope.webp"
            alt="Doctors welcoming"
            className="rounded-lg shadow-lg w-full max-w-[450px] md:max-w-none md:h-[100%] object-cover"
          />
        </div>

        {/* Text Block - Right */}
        <div className="md:w-1/2 w-full">
          <p className="text-sm uppercase font-bold text-blue-700 mb-2 tracking-wide">
            WELCOME TO HOSPITAL NAME
          </p>
          <h2 className="text-4xl font-bold font-logo text-[#1F2B6C] mb-4">
            Best Care for Your <br />
            Good Health
          </h2>

          {/* Two-Column Bullet Points with Custom Blue Dots */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-6 pl-2">
            {[
              'A Passion for Healing',
              'All Our Best',
              'Always Caring',
              '5-Star Care',
              'Believe in Us',
              'A Legacy of Excellence',
            ].map((point, index) => (
              <li key={index} className="relative pl-6 text-gray-700">
                <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-blue-700"></span>
                {point}
              </li>
            ))}
          </ul>

          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
            convallis risus. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Consectetur id quibusdam quod quasi repellendus, possimus
            provident laboriosam, vel tenetur dolorem aliquid et enim, molestias
            nostrum at ipsa eos. Iste, qui?
          </p>
        </div>
      </div>
    </section>
  );
};

export default WelcomeBanner;
