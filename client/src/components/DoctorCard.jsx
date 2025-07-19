import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const DoctorSection = () => {
  return (
    <section className="px-6 py-16 bg-white dark:bg-neutral-900">
      {/* Headings */}
      <div className="text-center mb-10">
        <h4 className="text-xl font-bold text-blue-500 dark:text-white">
          TRUSTED CARE
        </h4>
        <h2 className="text-4xl font-logo font-bold text-blue-900 dark:text-white">
          Our Doctors
        </h2>
      </div>

      {/* Doctor Cards Container */}
      <div className="flex flex-wrap justify-center gap-8">
        {[1, 2, 3].map((index) => (
          <div
            key={index}
            className="w-full sm:w-[260px] lg:w-[300px] h-[400px] rounded-xl shadow-lg overflow-hidden bg-white dark:bg-neutral-800 text-gray-800 dark:text-white flex flex-col"
          >
            {/* Image */}
            <img
              src="/stethoscope.webp"
              alt={`Doctor ${index}`}
              className="w-full h-[60%] object-cover"
            />

            {/* Card Body */}
            <div className="h-[40%] px-4 py-3 flex flex-col items-center justify-between">
              {/* Info */}
              <div className="text-center">
                <h3 className="text-base font-semibold">Doctor's Name</h3>
                <p className="text-sm font-medium text-blue-500">NEUROLOGY</p>
              </div>

              {/* Social Icons */}
              <div className="flex gap-4 mt-2">
                <FaLinkedinIn className="text-xl text-gray-700 dark:text-white hover:text-blue-600" />
                <FaFacebookF className="text-xl text-gray-700 dark:text-white hover:text-blue-600" />
                <FaInstagram className="text-xl text-gray-700 dark:text-white hover:text-pink-500" />
              </div>

              {/* Button */}
              <button className="w-full mt-3 px-4 py-2 text-sm bg-blue-900 text-white rounded hover:bg-blue-700 transition">
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DoctorSection;
