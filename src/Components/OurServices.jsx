import React from 'react';

// ৬টি সার্ভিসের ডাটা (২ নম্বর কার্ডটি হাইলাইটেড/লাইম গ্রিন)
const servicesData = [
  {
    id: 1,
    title: 'Express & Standard Delivery',
    desc: 'We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.',
    isHighlighted: false,
  },
  {
    id: 2,
    title: 'Nationwide Delivery',
    desc: 'We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.',
    isHighlighted: true, // লাইম গ্রিন কার্ড
  },
  {
    id: 3,
    title: 'Fulfillment Solution',
    desc: 'We also offer customized service with inventory management support, online order processing, packaging, and after sales support.',
    isHighlighted: false,
  },
  {
    id: 4,
    title: 'Cash on Home Delivery',
    desc: '100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.',
    isHighlighted: false,
  },
  {
    id: 5,
    title: 'Corporate Service / Contract In Logistics',
    desc: 'Customized corporate services which includes warehouse and inventory management support.',
    isHighlighted: false,
  },
  {
    id: 6,
    title: 'Parcel Return',
    desc: 'Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.',
    isHighlighted: false,
  },
];

// ছবির আইকনটির মতো সফট গ্লো বক্স আইকন
const ServiceIcon = () => (
  <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#e0e7ff] via-[#fce7f3] to-[#fef08a] flex items-center justify-center shadow-inner mb-6">
    <svg className="w-7 h-7 text-[#f87171]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      <circle cx="12" cy="11" r="3" fill="#60a5fa" fillOpacity="0.4" stroke="#3b82f6" />
    </svg>
  </div>
);

const OurServices = () => {
  return (
    <section className="w-full bg-[#f3f4f6] pb-16 px-4 sm:px-8">
      {/* Dark Teal Rounded Main Container */}
      <div className="max-w-7xl mx-auto bg-[#053230] rounded-3xl sm:rounded-[36px] py-14 sm:py-20 px-6 sm:px-12 lg:px-16 shadow-lg">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Our Services
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm mt-3 leading-relaxed">
            Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
          </p>
        </div>

        {/* 6 Cards Grid (Mobile এ ১টি, Tablet এ ২টি, Desktop এ ৩টি) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className={`rounded-3xl p-8 sm:p-10 flex flex-col items-center text-center transition-all duration-300 hover:scale-[1.02] shadow-sm ${
                service.isHighlighted
                  ? 'bg-[#caea47] text-[#053230]' // ২ নম্বর স্পেশাল লাইম গ্রিন কার্ড
                  : 'bg-white text-[#053230]'    // বাকি সাধারণ সাদা কার্ডগুলো
              }`}
            >
              {/* Top Center Icon */}
              <ServiceIcon />

              {/* Service Title */}
              <h3 className="text-lg sm:text-xl font-bold tracking-tight mb-4 min-h-[50px] flex items-center justify-center">
                {service.title}
              </h3>

              {/* Service Description */}
              <p
                className={`text-xs sm:text-[13px] leading-relaxed ${
                  service.isHighlighted ? 'text-gray-800' : 'text-gray-500'
                }`}
              >
                {service.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurServices;