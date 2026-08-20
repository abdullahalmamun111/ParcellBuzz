import React from 'react';

// ==========================================
// ১. ডানপাশের ৩ডি লাইন-আর্ট বক্স ইলাস্ট্রেশন (SVG)
// (আপনার নিজের ইমেজ থাকলে নিচে <RightBoxIllustration /> এর জায়গায় <img src={yourImg} /> দিতে পারবেন)
// ==========================================
const RightBoxIllustration = () => (
  <svg
    className="w-full max-w-[380px] lg:max-w-[440px] h-auto text-[#2dd4bf]"
    viewBox="0 0 400 280"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Map Pin */}
    <path d="M280 40C265 40 252 52 252 68C252 88 280 115 280 115C280 115 308 88 308 68C308 52 295 40 280 40Z" />
    <circle cx="280" cy="68" r="7" />

    {/* Top Box */}
    <path d="M190 100L280 90L370 120L275 130L190 100Z" />
    <path d="M190 100V155L275 185V130" />
    <path d="M370 120V175L275 185" />
    <rect x="300" y="140" width="45" height="25" rx="2" strokeDasharray="3 3" />

    {/* Bottom Box */}
    <path d="M170 160L250 150L335 178L250 190L170 160Z" />
    <path d="M170 160V220L250 250V190" />
    <path d="M335 178V238L250 250" />

    {/* Scribble Flow Line */}
    <path d="M120 220C150 230 160 200 190 220" />
    <path d="M360 180C380 170 385 200 395 190C405 180 405 210 395 215" />
  </svg>
);

const Merchant = () => {
  return (
    <section className="w-full bg-[#f3f4f6] pb-16 px-4 sm:px-8">
      {/* Main Rounded Dark Container */}
      <div className="max-w-7xl mx-auto bg-[#053230] rounded-3xl sm:rounded-[36px] p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-xl">
        
        {/* ========================================================
            🌟 [১] Top Light Wave Background (সহজেই রিপ্লেস করার অংশ)
            আপনি চাইলে নিচের div-টি বাদ দিয়ে <img src={waveImg} /> বসাতে পারেন
        ======================================================== */}
        <div className="absolute top-0 left-0 right-0 h-40 pointer-events-none opacity-40 overflow-hidden">
          <svg viewBox="0 0 1200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover">
            <path d="M0,80 C300,180 600,-20 900,80 C1050,130 1150,50 1200,60" stroke="url(#waveGradient)" strokeWidth="2.5" />
            <path d="M0,100 C320,200 620,0 920,100 C1070,150 1170,70 1200,80" stroke="url(#waveGradient)" strokeWidth="1.5" />
            <path d="M0,60 C280,160 580,-40 880,60 C1030,110 1130,30 1200,40" stroke="url(#waveGradient)" strokeWidth="1.2" opacity="0.6" />
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#053230" />
                <stop offset="40%" stopColor="#38bdf8" />
                <stop offset="70%" stopColor="#caea47" />
                <stop offset="100%" stopColor="#053230" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 relative z-10">
          
          {/* Left Text Content (Col 7) */}
          <div className="lg:col-span-7 flex flex-col text-left">
            
            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white leading-tight tracking-tight mb-4">
              Merchant and Customer Satisfaction <br className="hidden sm:inline" />
              is Our First Priority
            </h2>

            {/* Description */}
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed max-w-xl mb-8">
              We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              {/* Button 1: Lime Green Solid */}
              <button className="px-7 py-3.5 bg-[#caea47] hover:bg-[#bde334] text-[#053230] font-bold rounded-full text-sm sm:text-base transition-all shadow-md">
                Become a Merchant
              </button>

              {/* Button 2: Bordered Transparent */}
              <button className="px-7 py-3.5 border border-[#caea47] text-[#caea47] hover:bg-[#caea47]/10 font-bold rounded-full text-sm sm:text-base transition-all">
                Earn with ZapShift Courier
              </button>
            </div>

          </div>

          {/* ========================================================
              🌟 [২] Right Side Illustration (সহজেই রিপ্লেস করার অংশ)
          ======================================================== */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-center">
            {/* আপনার লোকাল ইমেজ বসাতে চাইলে <RightBoxIllustration /> এর বদলে <img src={yourImage} /> দিবেন */}
            <RightBoxIllustration />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Merchant;