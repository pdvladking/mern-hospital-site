import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

const BlogSidebar = () => {
  return (
    <aside className="space-y-10">
      {/* 🔍 Search Bar */}
      <div className="flex w-full">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 rounded-l-lg text-white bg-[#1F2B6C] placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <button
          type="submit"
          className="bg-[#1F2B6C] px-4 py-2 text-white rounded-r-lg hover:bg-[#117fc0] transition flex items-center justify-center"
        >
          <MagnifyingGlassIcon className="h-5 w-5" />
        </button>
      </div>

      {/* 🕘 Recent Posts */}
      <div className="bg-white dark:bg-neutral-900 border border-gray-300 dark:border-gray-700 rounded-xl shadow-sm p-6">
        <h3 className="text-3xl font-semibold text-blue-900 dark:text-white mb-6 font-logo">
          Recent Posts
        </h3>

        <ul className="space-y-6">
          <li className="flex gap-4 hover:bg-blue-50 dark:hover:bg-neutral-800 p-2 rounded-md transition">
            <img
              src="stethoscope.webp"
              alt="How to Prevent Heart Disease"
              className="w-20 h-20 object-cover rounded-md shadow"
            />
            <div className="flex flex-col justify-center">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Monday 05, September 2021
              </p>
              <a
                href="#"
                className="text-sm font-medium text-[#1F87C3] hover:underline leading-snug"
              >
                How to Prevent Heart Disease
              </a>
            </div>
          </li>

          <li className="flex gap-4 hover:bg-blue-50 dark:hover:bg-neutral-800 p-2 rounded-md transition">
            <img
              src="stethoscope.webp"
              alt="5 Tips for Better Sleep"
              className="w-20 h-20 object-cover rounded-md shadow"
            />
            <div className="flex flex-col justify-center">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Monday 05, September 2021
              </p>
              <a
                href="#"
                className="text-sm font-medium text-[#1F87C3] hover:underline leading-snug"
              >
                5 Tips for Better Sleep
              </a>
            </div>
          </li>

          <li className="flex gap-4 hover:bg-blue-50 dark:hover:bg-neutral-800 p-2 rounded-md transition">
            <img
              src="stethoscope.webp"
              alt="Understanding Stroke Warning Signs"
              className="w-20 h-20 object-cover rounded-md shadow"
            />
            <div className="flex flex-col justify-center">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Monday 05, September 2021
              </p>
              <a
                href="#"
                className="text-sm font-medium text-[#1F87C3] hover:underline leading-snug"
              >
                Understanding Stroke Warning Signs
              </a>
            </div>
          </li>
        </ul>
      </div>
      {/* 🧪 Categories */}
      <div className="bg-white dark:bg-neutral-900 border border-gray-300 dark:border-gray-700 rounded-xl shadow-sm p-6">
        <h3 className="text-3xl font-semibold text-blue-900 dark:text-white mb-4 font-logo">
          Categories
        </h3>

        <ul className="space-y-3">
          <li className="flex justify-between items-center">
            <span className="text-gray-900 font-medium">Surgery</span>
            <span className="bg-[#159EEC] text-white text-xs font-semibold rounded-full w-6 h-6 flex items-center justify-center">
              12
            </span>
          </li>
          <li className="flex justify-between items-center">
            <span className="text-gray-900 font-medium">Health Care</span>
            <span className="bg-[#159EEC] text-white text-xs font-semibold rounded-full w-6 h-6 flex items-center justify-center">
              8
            </span>
          </li>
          <li className="flex justify-between items-center">
            <span className="text-gray-900 font-medium">Medical</span>
            <span className="bg-[#159EEC] text-white text-xs font-semibold rounded-full w-6 h-6 flex items-center justify-center">
              5
            </span>
          </li>
          <li className="flex justify-between items-center">
            <span className="text-gray-900 font-medium">Professional</span>
            <span className="bg-[#159EEC] text-white text-xs font-semibold rounded-full w-6 h-6 flex items-center justify-center">
              10
            </span>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default BlogSidebar;
