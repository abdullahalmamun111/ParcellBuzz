import React from 'react';

// ৪টি কার্ডের ডাটা
const worksData = [
  {
    id: 1,
    title: 'Booking Pick & Drop',
    desc: 'From personal packages to business shipments — we deliver on time, every time.',
  },
  {
    id: 2,
    title: 'Cash On Delivery',
    desc: 'From personal packages to business shipments — we deliver on time, every time.',
  },
  {
    id: 3,
    title: 'Delivery Hub',
    desc: 'From personal packages to business shipments — we deliver on time, every time.',
  },
  {
    id: 4,
    title: 'Booking SME & Corporate',
    desc: 'From personal packages to business shipments — we deliver on time, every time.',
  },
];

// ছবির মতো হুবহু Delivery Truck + Location Pin SVG Icon
const TruckLocationIcon = () => (
  <svg
    className="w-10 h-10 text-[#0c3937]"
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Map Pin */}
    <path d="M14 5C11.2 5 9 7.2 9 10C9 13.5 14 19 14 19C14 19 19 13.5 19 10C19 7.2 16.8 5 14 5Z" />
    <circle cx="14" cy="10" r="1.5" />
    
    {/* Truck Cargo Body */}
    <path d="M6 19H22V33H6V19Z" />
    
    {/* Truck Cabin */}
    <path d="M22 24H30L34 28.5V33H22" />
    
    {/* Wheels & Bottom Line */}
    <circle cx="12" cy="35" r="3" />
    <circle cx="28" cy="35" r="3" />
    <path d="M15 35H25" />
    <path d="M6 33V35H9" />
    <path d="M31 35H36V33" />
  </svg>
);

const HowItWorks = () => {
  return (
    <section className="w-full bg-[#f3f4f6] py-12 sm:py-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0c3937] tracking-tight mb-8">
          How it Works
        </h2>

        {/* 4 Cards Grid (Mobile এ ১টি, Tablet এ ২টি, Desktop এ ৪টি) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {worksData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-7 sm:p-8 border border-gray-100 shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              {/* Top Icon */}
              <div>
                <div className="mb-6 inline-block">
                  <TruckLocationIcon />
                </div>

                {/* Card Title */}
                <h3 className="text-lg sm:text-xl font-bold text-[#0c3937] tracking-tight mb-3">
                  {item.title}
                </h3>
              </div>

              {/* Card Description */}
              <p className="text-gray-500 text-xs sm:text-[13px] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;