import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  PhoneIcon,
  ClockIcon,
  MapPinIcon,
  MagnifyingGlassIcon,
  Bars3Icon,
} from '@heroicons/react/24/outline';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header>
      {/* Logo + Contact Info */}
      <div className="border-b py-4 bg-white dark:bg-neutral-950">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap md:flex-nowrap items-center justify-between gap-6">
          {/* Logo */}
          <div className="text-4xl font-bold text-[#1F2B6C] font-logo pt-2">
            <span>MED</span>
            <span className="text-[#159EEC]">DICAL</span>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap gap-6 text-sm font-medium text-gray-700 dark:text-gray-200">
            <div className="flex items-start gap-3 min-w-[220px] sm:flex-1">
              <PhoneIcon className="h-10 w-10 text-[#159EEC]" />
              <div className="flex flex-col">
                <span className="text-base font-semibold text-[#1F2B6C]">
                  EMERGENCY
                </span>
                <span className="text-sm font-semibold text-[#159EEC] mt-1">
                  (327) 681-812-255
                </span>
              </div>
            </div>
            <div className="flex items-start gap-3 min-w-[220px] sm:flex-1">
              <ClockIcon className="h-10 w-10 text-[#159EEC]" />
              <div className="flex flex-col">
                <span className="text-base font-semibold text-[#1F2B6C]">
                  WORK HOUR
                </span>
                <span className="text-sm font-semibold text-[#159EEC] mt-1">
                  09:00 - 20:00 Everyday
                </span>
              </div>
            </div>
            <div className="flex items-start gap-3 min-w-[220px] sm:flex-1">
              <MapPinIcon className="h-10 w-10 text-[#159EEC]" />
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
      </div>

      {/* Navigation Bar */}
      <nav className="bg-blue-900 py-4">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center space-x-6">
            <li>
              <Link to="/" className="text-white text-lg hover:text-blue-200">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-white text-lg hover:text-blue-200"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="text-white text-lg hover:text-blue-200"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/doctors"
                className="text-white text-lg hover:text-blue-200"
              >
                Doctors
              </Link>
            </li>
            <li>
              <Link
                to="/news"
                className="text-white text-lg hover:text-blue-200"
              >
                News
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-white text-lg hover:text-blue-200"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Right Side: Search + CTA + Burger */}
          <div className="flex items-center gap-4">
            <MagnifyingGlassIcon className="h-6 w-6 text-white cursor-pointer hidden md:block" />

            {/* 👉 Updated CTA */}
            <Link
              to="/book-appointment"
              className="hidden md:block bg-blue-200 px-6 py-2 text-blue-900 rounded-full hover:bg-blue-500 font-semibold"
            >
              Appointment
            </Link>

            {/* Burger Button */}
            <button
              onClick={() => setIsNavOpen(!isNavOpen)}
              className="md:hidden text-white"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isNavOpen && (
          <div className="md:hidden mt-4 px-6">
            <ul className="flex flex-col space-y-4">
              <li>
                <Link
                  to="/"
                  className="text-white text-base hover:text-blue-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-white text-base hover:text-blue-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-white text-base hover:text-blue-200"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/doctors"
                  className="text-white text-base hover:text-blue-200"
                >
                  Doctors
                </Link>
              </li>
              <li>
                <Link
                  to="/news"
                  className="text-white text-base hover:text-blue-200"
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white text-base hover:text-blue-200"
                >
                  Contact
                </Link>
              </li>
              <li>
                {/* 👉 Updated Mobile CTA */}
                <Link
                  to="/book-appointment"
                  className="bg-blue-200 px-4 py-2 text-blue-900 rounded-full hover:bg-blue-500 font-semibold w-full text-center block"
                >
                  Appointment
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
