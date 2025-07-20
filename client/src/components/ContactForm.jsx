import React from 'react';

const ContactForm = () => {
  return (
    <div className="bg-[#1F2B6C] dark:bg-neutral-900 p-6 rounded-lg shadow-lg w-full">
      {/* Form */}
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column: Name + Subject + Message */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-1 text-white">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full rounded-md px-4 py-2 bg-[#1F2B6C] text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#1F87C3]"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1 text-white">
              Subject
            </label>
            <input
              type="text"
              placeholder="Write your subject"
              className="w-full rounded-md px-4 py-2 bg-[#1F2B6C] text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#1F87C3]"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1 text-white">
              Message
            </label>
            <textarea
              placeholder="Write your message"
              className="w-full rounded-md px-4 py-2 h-32 resize-none bg-[#1F2B6C] text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#1F87C3]"
            ></textarea>
          </div>
        </div>

        {/* Right Column: Email */}
        <div className="flex flex-col justify-start space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-1 text-white">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-md px-4 py-2 bg-[#1F2B6C] text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#1F87C3]"
            />
          </div>
        </div>
      </form>

      {/* Submit Button – Full Width */}
      <div className="mt-6">
        <button
          type="submit"
          className="w-full bg-[#1F87C3] text-white py-2 px-6 rounded-lg hover:bg-[#158fb2] transition-all duration-200"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
