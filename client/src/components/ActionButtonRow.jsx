import { MdDateRange, MdGroups, MdLocalPhone } from 'react-icons/md';

function ActionButtonRow() {
  return (
    <div className="flex flex-col md:flex-row gap-6 flex-wrap justify-center">
      {/*Appointment MdDateRange*/}
      <button className="flex items-center gap-10 bg-blue-900 text-white px-4 py-6 rounded-md hover:bg-blue-800 transition duration-200 w-fit ">
        <span className="text-sm font-medium">Book an Appointment</span>
        <MdDateRange className="w-8 h-8 text-white" />
      </button>

      {/*Appointment MdGroups*/}
      <button
        className="flex items-center gap-10 bg-[#c6cef6]
 text-white px-4 py-6 rounded-md hover:bg-blue-800 transition duration-200 w-fit "
      >
        <span className="text-sm font-medium">Book an Appointment</span>
        <MdGroups className="w-8 h-8 text-white" />
      </button>

      {/*Appointment MdLocalPhone*/}
      <button className="flex items-center gap-10 bg-blue-500 text-white px-4 py-6 rounded-md hover:bg-blue-800 transition duration-200 w-fit ">
        <span className="text-sm font-medium">Book an Appointment</span>
        <MdLocalPhone className="w-8 h-8 text-white" />
      </button>
    </div>
  );
}

export default ActionButtonRow;
