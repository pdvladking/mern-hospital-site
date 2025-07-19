import React from 'react';
import { Link } from 'react-router-dom';
import {
  PhoneIcon,
  ClockIcon,
  MapPinIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';

const Header = () => {
  return (
    <header>
      {/* Logo + Contact Info */}
      <div className="flex items-center justify-between px-8 py-4 border-b max-w-screen-xl mx-auto">
        {/* Logo */}
        <div className="text-4xl font-bold text-[#1F2B6C] font-logo pt-2 ml-36">
          <span>MED</span>
          <span className="text-[#159EEC]">DICAL</span>
        </div>

        {/* Contact Info */}
        <div className="flex gap-4 text-sm font-medium text-gray-700">
          {/* EMERGENCY */}
          <div className="flex items-start gap-3 min-w-[220px]">
            <PhoneIcon className="h-10 w-10 text-[#159EEC] mt-1" />
            <div className="flex flex-col">
              <span className="text-base font-semibold text-[#1F2B6C]">
                EMERGENCY
              </span>
              <span className="text-sm font-semibold text-[#159EEC] mt-1">
                (327) 681-812-255
              </span>
            </div>
          </div>

          {/* Work Hour */}
          <div className="flex items-start gap-3 min-w-[220px]">
            <ClockIcon className="h-10 w-10 text-[#159EEC] mt-1" />
            <div className="flex flex-col">
              <span className="text-base font-semibold text-[#1F2B6C]">
                WORK HOUR
              </span>
              <span className="text-sm font-semibold text-[#159EEC] mt-1">
                09:00 - 20:00 Everyday
              </span>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start gap-3 min-w-[220px]">
            <MapPinIcon className="h-10 w-10 text-[#159EEC] mt-1" />
            <div className="flex flex-col">
              <span className="text-base font-semibold text-[#1F2B6C]">
                LOCATION
              </span>
              <span className="text-sm font-semibold text-[#159EEC] mt-1">
                0123 Some Place
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="flex items-center justify-start gap-10 bg-blue-900 p-6 ">
        {/* Navigation Links */}
        <ul className="flex items-center space-x-6 pl-36">
          <li>
            <Link to="/" className="text-white text-xl hover:text-blue-200">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-white text-xl hover:text-blue-200"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="text-white text-xl hover:text-blue-200"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/doctors"
              className="text-white text-xl hover:text-blue-200"
            >
              Doctors
            </Link>
          </li>
          <li>
            <Link to="/news" className="text-white text-xl hover:text-blue-200">
              News
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-white text-xl hover:text-blue-200"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Search icon + CTA */}
        <div className="flex items-center gap-4 ml-auto mr-24">
          <MagnifyingGlassIcon className="h-6 w-6 text-white cursor-pointer" />
          <button className="bg-blue-200 px-6 py-2 text-blue-900 rounded-full hover:bg-blue-500 font-semibold">
            Appointment
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
