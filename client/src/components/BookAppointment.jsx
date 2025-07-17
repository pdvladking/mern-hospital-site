import React from 'react';

const AppointmentSection = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center"
      style={{ backgroundImage: "url('/stethoscope.webp')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 text-white">
        {/* Left Side */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-4 font-logo text-blue-600">
            Book an Appointment
          </h2>
          <p className="text-lg text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            placerat scelerisque tortor ornare ornare. Convallis felis vitae
            tortor augue. Velit nascetur proin massa in. Consequat faucibus
            porttitor enim et.
          </p>
        </div>

        {/* Right Side: Form */}
        <form className="bg-blue-900 text-white p-8 rounded-lg shadow-lg space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="p-3 rounded bg-white text-black"
            />
            <select className="p-3 rounded bg-white text-black">
              <option>Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
            <input
              type="email"
              placeholder="Email"
              className="p-3 rounded bg-white text-black"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="p-3 rounded bg-white text-black"
            />
            <input type="date" className="p-3 rounded bg-white text-black" />
            <select className="p-3 rounded bg-white text-black">
              <option>Time</option>
              <option>Morning</option>
              <option>Afternoon</option>
              <option>Evening</option>
            </select>
            <input
              type="text"
              placeholder="Doctor"
              className="p-3 rounded bg-white text-black"
            />
            <select className="p-3 rounded bg-white text-black">
              <option>Department</option>
              <option>Cardiology</option>
              <option>Neurology</option>
              <option>Pediatrics</option>
            </select>
          </div>
          <textarea
            placeholder="Message"
            rows={4}
            className="w-full p-3 rounded bg-white text-black"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-indigo-400 hover:bg-indigo-500 text-white font-semibold py-3 px-6 rounded transition"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </section>
  );
};

export default AppointmentSection;
