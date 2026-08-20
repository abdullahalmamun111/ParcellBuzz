import React from 'react';

// ১. লাইভ ট্র্যাকিং ও ভ্যান ইলাস্ট্রেশন (SVG)
const LiveTrackingIllustration = () => (
  <svg className="w-44 sm:w-52 h-auto text-[#0c3937]" viewBox="0 0 200 130" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    {/* Delivery Van */}
    <rect x="25" y="30" width="70" height="50" rx="4" />
    <path d="M95 45H125L138 60V80H95" />
    <circle cx="50" cy="85" r="10" />
    <circle cx="118" cy="85" r="10" />
    <path d="M60 85H108" />
    <path d="M25 80H40" />
    <path d="M128 80H142" />
    
    {/* Map Pins & Network */}
    <circle cx="155" cy="35" r="16" strokeDasharray="3 3" />
    <path d="M155 24C151 24 148 27 148 31C148 36 155 42 155 42C155 42 162 36 162 31C162 27 159 24 155 24Z" fill="#0c3937" fillOpacity="0.1" />
    <circle cx="155" cy="31" r="2.5" fill="#0c3937" />
    
    {/* Delivery Workers & Parcel Box */}
    <rect x="80" y="70" width="45" height="35" rx="2" fill="#fff" />
    <path d="M80 70L102 85L125 70" />
    <path d="M102 85V105" />
    {/* Worker 1 */}
    <circle cx="55" cy="55" r="5" />
    <path d="M55 60V80M50 70H60M52 80L48 95M58 80L62 95" />
    {/* Worker 2 */}
    <circle cx="150" cy="55" r="5" />
    <path d="M150 60V80M145 70H155M147 80L143 95M153 80L157 95" />
  </svg>
);

// ২ ও ৩. কলিং ডেলিভারি বয় ইলাস্ট্রেশন (SVG)
const DeliveryBoyIllustration = () => (
  <svg className="w-36 sm:w-44 h-auto text-[#0c3937]" viewBox="0 0 150 140" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    {/* Cap & Head */}
    <path d="M70 25C70 25 82 22 92 27L100 29" />
    <circle cx="82" cy="35" r="10" />
    
    {/* Phone on Ear */}
    <rect x="91" y="32" width="5" height="10" rx="1.5" fill="#0c3937" />
    
    {/* Body & Clothes */}
    <path d="M74 45C68 55 65 65 65 80L95 80C95 65 92 55 88 45" />
    <path d="M65 60L50 75M95 60L93 42" />
    
    {/* Holding Big Box */}
    <rect x="25" y="65" width="50" height="42" rx="3" fill="#fff" />
    <path d="M25 65L50 78L75 65" />
    <path d="M50 78V107" />
    
    {/* Hands holding box */}
    <path d="M22 75C26 78 28 82 25 88" />
    <path d="M72 82C75 80 77 75 75 70" />
    
    {/* Legs & Ground */}
    <path d="M72 80V120M88 80V120" />
    <path d="M15 120H135" strokeDasharray="4 4" />
  </svg>
);

// ৩টি কার্ডের ডাটা
const features = [
  {
    id: 1,
    title: 'Live Parcel Tracking',
    desc: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    illustration: <LiveTrackingIllustration />,
  },
  {
    id: 2,
    title: '100% Safe Delivery',
    desc: 'We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.',
    illustration: <DeliveryBoyIllustration />,
  },
  {
    id: 3,
    title: '24/7 Call Center Support',
    desc: 'Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.',
    illustration: <DeliveryBoyIllustration />,
  },
];

const TrustedValue = () => {
  return (
    <section className="w-full bg-[#f3f4f6] py-12 sm:py-16 px-4 sm:px-8">
      {/* উপরে এবং নিচে ড্যাশড বর্ডার দিয়ে মোড়ানো কন্টেইনার */}
      <div className="max-w-7xl mx-auto border-t border-b border-dashed border-gray-300 py-10 sm:py-14">
        
        {/* ৩টি কার্ডের লিস্ট */}
        <div className="flex flex-col gap-6 sm:gap-7">
          {features.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm border border-gray-100/80 flex flex-col md:flex-row items-center gap-6 lg:gap-10 transition-all duration-300 hover:shadow-md"
            >
              
              {/* বাম পাশের ইলাস্ট্রেশন সাইড */}
              <div className="w-full md:w-1/3 lg:w-[28%] flex items-center justify-center py-2">
                {item.illustration}
              </div>

              {/* মাঝের খাড়া ড্যাশড ডিভাইডার (শুধু বড় স্ক্রিনে দেখাবে) */}
              <div className="hidden md:block w-px h-28 border-r border-dashed border-gray-300"></div>

              {/* ডান পাশের টেক্সট সাইড */}
              <div className="w-full md:w-2/3 lg:w-[72%] text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-[#0c3937] tracking-tight mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-xs sm:text-[14px] leading-relaxed max-w-3xl">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TrustedValue;