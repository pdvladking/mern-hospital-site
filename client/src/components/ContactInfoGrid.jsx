import {
  PhoneIcon,
  MapPinIcon,
  EnvelopeIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';

const ContactInfoGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {/* Emergency */}
      <div className="flex flex-col justify-start items-start bg-blue-500 text-white p-4 rounded-lg shadow-md">
        <PhoneIcon className="h-6 w-6 mb-2 text-white" />
        <h3 className="text-base font-semibold mb-1">EMERGENCY</h3>
        <p className="text-sm">(237) 681-812-255</p>
        <p className="text-sm">(237) 666-331-894</p>
      </div>

      {/* Location */}
      <div className="flex flex-col justify-start items-start bg-blue-900 text-white p-4 rounded-lg shadow-md">
        <MapPinIcon className="h-6 w-6 mb-2 text-white" />
        <h3 className="text-base font-semibold mb-1">LOCATION</h3>
        <p className="text-sm">0123 Some place</p>
        <p className="text-sm">9876 Some country</p>
      </div>

      {/* Email */}
      <div className="flex flex-col justify-start items-start bg-blue-500 text-white p-4 rounded-lg shadow-md">
        <EnvelopeIcon className="h-6 w-6 mb-2 text-white" />
        <h3 className="text-base font-semibold mb-1">EMAIL</h3>
        <p className="text-sm">fildineeesoe@gmil.com</p>
        <p className="text-sm">myebstudios@gmail.com</p>
      </div>

      {/* Working Hours */}
      <div className="flex flex-col justify-start items-start bg-blue-500 text-white p-4 rounded-lg shadow-md">
        <ClockIcon className="h-6 w-6 mb-2 text-white" />
        <h3 className="text-base font-semibold mb-1">WORKING HOURS</h3>
        <p className="text-sm">Mon–Sat 09:00–20:00</p>
        <p className="text-sm">Sunday Emergency only</p>
      </div>
    </div>
  );
};

export default ContactInfoGrid;
