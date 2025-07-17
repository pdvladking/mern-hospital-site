import {
  PhoneIcon,
  MapPinIcon,
  EnvelopeIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';

const FooterCard = () => {
  return (
    <section className="bg-white dark:bg-neutral-900 px-4 py-12">
      {/* Heading Block */}
      <div className="text-center mb-8">
        <h4 className="text-xl font-bold mb-10 text-center dark:text-white text-blue-500">
          GET IN TOUCH
          <h2 className="text-4xl font-logo text-blue-900">Contact</h2>
        </h4>
      </div>

      {/* Cards Container */}
      <div className="flex flex-wrap gap-3 justify-center">
        {/* Emergency */}
        <div className="w-full max-w-[180px] aspect-square flex flex-col justify-center items-start bg-blue-500 text-white p-4 rounded-lg shadow-md">
          <PhoneIcon className="h-6 w-6 mb-2 text-white" />
          <h3 className="text-base font-semibold mb-1">EMERGENCY</h3>
          <p className="text-sm">(237) 681-812-255</p>
          <p className="text-sm">(237) 666-331-894</p>
        </div>

        {/* Location */}
        <div className="w-full max-w-[180px] aspect-square flex flex-col justify-center items-start bg-blue-900 text-white p-4 rounded-lg shadow-md">
          <MapPinIcon className="h-6 w-6 mb-2 text-white" />
          <h3 className="text-base font-semibold mb-1">LOCATION</h3>
          <p className="text-sm">0123 Some place</p>
          <p className="text-sm">9876 Some country</p>
        </div>

        {/* Email */}
        <div className="w-full max-w-[180px] aspect-square flex flex-col justify-center items-start bg-blue-500 text-white p-4 rounded-lg shadow-md">
          <EnvelopeIcon className="h-6 w-6 mb-2 text-white" />
          <h3 className="text-base font-semibold mb-1">EMAIL</h3>
          <p className="text-sm">fildineeesoe@gmil.com</p>
          <p className="text-sm">myebstudios@gmail.com</p>
        </div>

        {/* Working Hours */}
        <div className="w-full max-w-[180px] aspect-square flex flex-col justify-center items-start bg-blue-500 text-white p-4 rounded-lg shadow-md">
          <ClockIcon className="h-6 w-6 mb-2 text-white" />
          <h3 className="text-base font-semibold mb-1">WORKING HOURS</h3>
          <p className="text-sm">Mon-Sat 09:00-20:00</p>
          <p className="text-sm">Sunday Emergency only</p>
        </div>
      </div>
    </section>
  );
};

export default FooterCard;
