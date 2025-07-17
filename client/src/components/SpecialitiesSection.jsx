import React from 'react';
import {
  HeartIcon,
  EyeIcon,
  CogIcon,
  UserIcon,
  HandRaisedIcon,
  ChatBubbleBottomCenterTextIcon,
  BeakerIcon,
  ShieldCheckIcon,
  BoltIcon,
  BugAntIcon,
  CircleStackIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/solid';

const specialties = [
  { name: 'Cardiology', icon: <HeartIcon className="h-6 w-6 text-blue-600" /> },
  {
    name: 'Ophthalmology',
    icon: <EyeIcon className="h-6 w-6 text-blue-600" />,
  },
  { name: 'Neurology', icon: <CogIcon className="h-6 w-6 text-blue-600" /> },
  { name: 'Gynaecology', icon: <UserIcon className="h-6 w-6 text-blue-600" /> },
  {
    name: 'Orthopedics',
    icon: <HandRaisedIcon className="h-6 w-6 text-blue-600" />,
  },
  {
    name: 'Psychiatry',
    icon: <ChatBubbleBottomCenterTextIcon className="h-6 w-6 text-blue-600" />,
  },
  { name: 'Pathology', icon: <BeakerIcon className="h-6 w-6 text-blue-600" /> },
  {
    name: 'Immunology',
    icon: <ShieldCheckIcon className="h-6 w-6 text-blue-600" />,
  },
  {
    name: 'Endocrinology',
    icon: <BoltIcon className="h-6 w-6 text-blue-600" />,
  },
  {
    name: 'Parasitology',
    icon: <BugAntIcon className="h-6 w-6 text-blue-600" />,
  },
  {
    name: 'Nephrology',
    icon: <CircleStackIcon className="h-6 w-6 text-blue-600" />,
  },
  {
    name: 'General Medicine',
    icon: <Squares2X2Icon className="h-6 w-6 text-blue-600" />,
  },
];

const SpecialitiesSection = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-4">
        <h4 className="text-sm font-semibold text-blue-600 tracking-wide uppercase">
          Always Caring
        </h4>
      </div>
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">
        Our Specialities
      </h2>

      <div className="grid grid-cols-4 gap-6">
        {specialties.map((item) => (
          <div
            key={item.name}
            className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow hover:shadow-lg hover:scale-105 transition duration-200 cursor-pointer"
          >
            <div className="w-12 h-12 mb-3 bg-blue-100 rounded-full flex items-center justify-center">
              {item.icon}
            </div>
            <p className="text-sm font-medium text-center text-gray-800">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialitiesSection;
