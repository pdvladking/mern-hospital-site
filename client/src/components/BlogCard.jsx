import React from 'react';
import {
  CalendarDaysIcon,
  UserIcon,
  EyeIcon,
  HeartIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';

const BlogCard = () => {
  return (
    <div className="bg-white dark:bg-neutral-900 border border-gray-300 dark:border-gray-700 rounded-xl shadow-md overflow-hidden">
      {/* Thumbnail Image */}
      <img
        src="stethoscope.webp"
        alt="A passion for putting patients first"
        className="w-full h-auto object-cover"
      />

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Meta Info */}
        <div className="flex flex-wrap items-center text-xs text-gray-500 dark:text-gray-400 gap-x-6 gap-y-2">
          <div className="flex items-center gap-1">
            <CalendarDaysIcon className="h-4 w-4 text-[#159EEC]" />
            <span>Monday 05, September 2021</span>
          </div>
          <div className="flex items-center gap-1">
            <UserIcon className="h-4 w-4 text-[#159EEC]" />
            <span>By Author</span>
          </div>
          <div className="flex items-center gap-1">
            <EyeIcon className="h-4 w-4 text-[#159EEC]" />
            <span>Views: 68</span>
          </div>
          <div className="flex items-center gap-1">
            <HeartIcon className="h-4 w-4 text-[#159EEC]" />
            <span>Likes: 86</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-blue-900 dark:text-white">
          A passion for putting patients first
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          placerat scelerisque tortor ornare ornare. Convallis felis vitae
          tortor augue. Velit nascetur proin massa in. Consequat faucibus
          porttitor enim et...
        </p>

        {/* Read More Button */}
        <button className="bg-[#159EEC] text-white px-6 py-2 rounded-full hover:bg-[#117fc0] transition font-medium flex items-center gap-2">
          Read More
          <ArrowRightIcon className="h-4 w-4 text-white" />
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
