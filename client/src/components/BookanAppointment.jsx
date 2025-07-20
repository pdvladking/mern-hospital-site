import React from 'react';
import { Link } from 'react-router-dom';
import { Header, PageHeader, Footer, FooterCard } from '../components';

const BookAppointment = () => {
  return (
    <>
      {/* Top Navigation */}
      <Header />

      {/* Page Header with Breadcrumb */}
      <PageHeader
        title="Book an Appointment"
        breadcrumb={
          <>
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>Appointment</span>
          </>
        }
      />

      {/* Intro Heading + Description */}
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-[#1F2B6C]">
          Book an Appointment
        </h2>
        <p className="mt-4 text-[#5A5A5A] text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          placerat scelerisque tortor ornare ornare. Convallis felis vitae
          tortor augue. Velit nascetur proin massa in. Consequat faucibus
          porttitor enim et.
        </p>
      </div>

      {/* Main Two-Column Section */}
      <main className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left: Appointment Form */}
          <div className="bg-[#1F2B6C] p-8 rounded-lg shadow-lg w-full">
            <form className="grid grid-cols-1 md:grid-cols-4 gap-6 text-white">
              {/* Name + Email */}
              <div className="col-span-2 space-y-2">
                <label className="block text-sm font-semibold">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-md px-4 py-2 bg-transparent border border-white/30 placeholder-white/60 focus:ring-2 focus:ring-[#1F87C3]"
                />
              </div>
              <div className="col-span-2 space-y-2">
                <label className="block text-sm font-semibold">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-md px-4 py-2 bg-transparent border border-white/30 placeholder-white/60 focus:ring-2 focus:ring-[#1F87C3]"
                />
              </div>

              {/* Gender + Phone */}
              <div className="col-span-2 space-y-2">
                <label className="block text-sm font-semibold">Gender</label>
                <select className="w-full rounded-md px-4 py-2 bg-[#1F2B6C] border border-white/30 focus:ring-2 focus:ring-[#1F87C3]">
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="col-span-2 space-y-2">
                <label className="block text-sm font-semibold">Phone</label>
                <input
                  type="tel"
                  placeholder="Enter phone number"
                  className="w-full rounded-md px-4 py-2 bg-transparent border border-white/30 placeholder-white/60 focus:ring-2 focus:ring-[#1F87C3]"
                />
              </div>

              {/* Date + Time */}
              <div className="col-span-2 space-y-2">
                <label className="block text-sm font-semibold">
                  Appointment Date
                </label>
                <input
                  type="date"
                  className="w-full rounded-md px-4 py-2 bg-transparent text-white border border-white/30 focus:ring-2 focus:ring-[#1F87C3]"
                />
              </div>
              <div className="col-span-2 space-y-2">
                <label className="block text-sm font-semibold">
                  Preferred Time
                </label>
                <input
                  type="time"
                  className="w-full rounded-md px-4 py-2 bg-transparent text-white border border-white/30 focus:ring-2 focus:ring-[#1F87C3]"
                />
              </div>

              {/* Department + Doctor */}
              <div className="col-span-2 space-y-2">
                <label className="block text-sm font-semibold">
                  Department
                </label>
                <select className="w-full rounded-md px-4 py-2 bg-[#1F2B6C] border border-white/30 focus:ring-2 focus:ring-[#1F87C3]">
                  <option value="">Select department</option>
                  <option value="cardiology">Cardiology</option>
                  <option value="neurology">Neurology</option>
                  <option value="pediatrics">Pediatrics</option>
                  <option value="general">General Medicine</option>
                </select>
              </div>
              <div className="col-span-2 space-y-2">
                <label className="block text-sm font-semibold">Doctor</label>
                <select className="w-full rounded-md px-4 py-2 bg-[#1F2B6C] border border-white/30 focus:ring-2 focus:ring-[#1F87C3]">
                  <option value="">Select doctor</option>
                  <option value="dr-sharma">Dr. Sharma</option>
                  <option value="dr-basnet">Dr. Basnet</option>
                  <option value="dr-adhikari">Dr. Adhikari</option>
                </select>
              </div>

              {/* Message */}
              <div className="col-span-4 space-y-2">
                <label className="block text-sm font-semibold">Message</label>
                <textarea
                  rows="4"
                  placeholder="Write your message"
                  className="w-full rounded-md px-4 py-2 bg-transparent resize-none border border-white/30 placeholder-white/60 focus:ring-2 focus:ring-[#1F87C3]"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="col-span-4 mt-2">
                <button
                  type="submit"
                  className="w-full bg-[#1F87C3] text-white py-2 px-6 rounded-lg hover:bg-[#158fb2] transition-all duration-200"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          {/* Right: Schedule Hours Card */}
          <div className="bg-[#1F2B6C] text-white p-6 rounded-xl shadow-lg space-y-4">
            <h3 className="text-3xl font-logo font-bold text-center">
              Schedule Hours
            </h3>
            <ul className="space-y-2 text-base font-medium">
              {[
                { day: 'Monday', hours: '09:00 AM – 07:00 PM' },
                { day: 'Tuesday', hours: '09:00 AM – 07:00 PM' },
                { day: 'Wednesday', hours: '09:00 AM – 07:00 PM' },
                { day: 'Thursday', hours: '09:00 AM – 07:00 PM' },
                { day: 'Friday', hours: '09:00 AM – 07:00 PM' },
                { day: 'Saturday', hours: '09:00 AM – 07:00 PM' },
                { day: 'Sunday', hours: 'Closed' },
              ].map(({ day, hours }) => (
                <li key={day} className="flex justify-between">
                  <span>{day}</span>
                  <span>{hours}</span>
                </li>
              ))}
            </ul>
            <div className="pt-6 border-t border-white/30 mt-6 text-center text-sm space-y-2">
              <p>
                📞 Emergency: <br /> (237) 681-812-255
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Map Section */}
      <section className="mt-20">
        <div className="max-w-5xl mx-auto px-6">
          <iframe
            title="Appointment Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.1932601621486!2d85.3240!3d27.7106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190df2c8db8d%3A0x3ab1874cd8d0a66f!2sKathmandu%20Hospital!5e0!3m2!1sen!2snp!4v1692306949136!5m2!1sen!2snp"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0 w-full h-[400px] rounded-lg"
          ></iframe>
        </div>
      </section>

      {/* Bottom Section */}
      <FooterCard />
      <Footer />
    </>
  );
};

export default BookAppointment;
