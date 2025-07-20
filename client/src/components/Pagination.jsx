import React from 'react';

const Pagination = () => {
  return (
    <div className="flex items-center justify-center space-x-2 text-sm font-medium text-[#159EEC]">
      {/* Previous */}
      <a
        href="#"
        className="px-3 py-2 rounded hover:bg-blue-50 dark:hover:bg-neutral-800 text-[#1F2B6C] transition"
      >
        ← Previous Page
      </a>

      {/* Page Numbers */}
      <div className="flex items-center space-x-2">
        <span className="bg-[#1F2B6C] text-white rounded-full px-3 py-1">
          1
        </span>
        <span>-</span>
        <span className="hover:text-[#117fc0] cursor-pointer">2</span>
        <span>-</span>
        <span className="hover:text-[#117fc0] cursor-pointer">3</span>
        <span>-</span>
        <span className="hover:text-[#117fc0] cursor-pointer">4</span>
        <span>-</span>
        <span className="hover:text-[#117fc0] cursor-pointer">5</span>
      </div>

      {/* Next */}
      <a
        href="#"
        className="px-3 py-2 rounded hover:bg-blue-50 dark:hover:bg-neutral-800 text-[#1F2B6C] transition"
      >
        Next Page →
      </a>
    </div>
  );
};

export default Pagination;
