import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const DoctorSection = () => {
  return (
    <section className="px-6 py-16 bg-white dark:bg-neutral-900">
      <h4 className="text-xl font-bold mb-10 text-center dark:text-white text-blue-500">
        TRUSTED CARE
        <h2 className="text-4xl font-logo text-blue-900">Our Doctors</h2>
      </h4>

      <div className="flex flex-wrap justify-center gap-8">
        {/* Doctor 1 */}
        <div className="w-full sm:w-[260px] lg:w-[300px] h-[400px] rounded-xl shadow-lg overflow-hidden bg-white dark:bg-neutral-800 text-gray-800 dark:text-white flex flex-col">
          <img
            src="/stethoscope.webp"
            alt="Doctor 1"
            className="w-full h-[60%] object-cover"
          />
          <div className="h-[40%] px-4 py-3 flex flex-col items-center justify-between">
            <div className="text-center">
              <h3 className="text-base font-semibold">Doctor's Name</h3>
              <p className="text-sm font-medium text-blue-500">NEUROLOGY</p>
            </div>
            <div className="flex gap-4 mt-2">
              <FaLinkedinIn className="text-xl text-gray-700 dark:text-white hover:text-blue-600" />
              <FaFacebookF className="text-xl text-gray-700 dark:text-white hover:text-blue-600" />
              <FaInstagram className="text-xl text-gray-700 dark:text-white hover:text-pink-500" />
            </div>
            <button className="w-full h-full mt-3 px-4 py-2 text-sm bg-blue-900 text-white rounded hover:bg-blue-700 transition">
              View Profile
            </button>
          </div>
        </div>

        {/* Doctor 2 */}
        <div className="w-full sm:w-[260px] lg:w-[300px] h-[400px] rounded-xl shadow-lg overflow-hidden bg-white dark:bg-neutral-800 text-gray-800 dark:text-white flex flex-col">
          <img
            src="/stethoscope.webp"
            alt="Doctor 2"
            className="w-full h-[60%] object-cover"
          />
          <div className="h-[40%] px-4 py-3 flex flex-col items-center justify-between">
            <div className="text-center">
              <h3 className="text-base font-semibold">Doctor's Name</h3>
              <p className="text-sm font-medium text-blue-500">NEUROLOGY</p>
            </div>
            <div className="flex gap-4 mt-2">
              <FaLinkedinIn className="text-xl text-gray-700 dark:text-white hover:text-blue-600" />
              <FaFacebookF className="text-xl text-gray-700 dark:text-white hover:text-blue-600" />
              <FaInstagram className="text-xl text-gray-700 dark:text-white hover:text-pink-500" />
            </div>
            <button className="w-full h-full mt-3 px-4 py-2 text-sm bg-blue-900 text-white rounded hover:bg-blue-700 transition">
              View Profile
            </button>
          </div>
        </div>

        {/* Doctor 3 */}
        <div className="w-full sm:w-[260px] lg:w-[300px] h-[400px] rounded-xl shadow-lg overflow-hidden bg-white dark:bg-neutral-800 text-gray-800 dark:text-white flex flex-col">
          <img
            src="/stethoscope.webp"
            alt="Doctor 3"
            className="w-full h-[60%] object-cover"
          />
          <div className="h-[40%] px-4 py-3 flex flex-col items-center justify-between">
            <div className="text-center">
              <h3 className="text-base font-semibold">Doctor's Name</h3>
              <p className="text-sm font-medium text-blue-500">NEUROLOGY</p>
            </div>
            <div className="flex gap-4 mt-2">
              <FaLinkedinIn className="text-xl text-gray-700 dark:text-white hover:text-blue-600" />
              <FaFacebookF className="text-xl text-gray-700 dark:text-white hover:text-blue-600" />
              <FaInstagram className="text-xl text-gray-700 dark:text-white hover:text-pink-500" />
            </div>
            <button className="w-full h-full mt-3 px-4 py-2 text-sm bg-blue-900 text-white rounded hover:bg-blue-700 transition">
              View Profile
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorSection;
