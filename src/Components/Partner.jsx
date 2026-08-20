import React from 'react';

const Partner = () => {
  return (
    <section className="w-full bg-[#f3f4f6] py-10 sm:py-14 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Section Title */}
        <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#0c3937] tracking-tight mb-8 sm:mb-10">
          We've helped thousands of sales teams
        </h3>

        {/* Brand Logos Row (Responsive Flex & Grid) */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16">
          
          {/* 1. CASIO */}
          <div className="h-6 sm:h-7 flex items-center justify-center hover:opacity-80 transition-opacity">
            <span className="text-[#003b95] text-xl sm:text-2xl font-black tracking-wider uppercase font-sans">
              CASIO
            </span>
          </div>

          {/* 2. amazon */}
          <div className="h-6 sm:h-7 flex items-center justify-center hover:opacity-80 transition-opacity">
            <div className="flex flex-col items-center">
              <span className="text-black text-xl sm:text-2xl font-black tracking-tighter lowercase leading-none">
                amazon
              </span>
              {/* Amazon Orange Smile Curve */}
              <svg className="w-14 sm:w-16 h-2 text-[#ff9900] -mt-0.5" viewBox="0 0 100 20" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round">
                <path d="M5 5 Q50 22 95 6" />
                <path d="M85 0 L95 6 L88 12" fill="currentColor" strokeWidth="2" />
              </svg>
            </div>
          </div>

          {/* 3. MOONSTAR */}
          <div className="h-6 sm:h-7 flex items-center gap-1.5 justify-center hover:opacity-80 transition-opacity text-[#4b5563]">
            <svg className="w-5 h-5 text-[#4b5563]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L9.5 9.5L2 12L9.5 14.5L12 22L14.5 14.5L22 12L14.5 9.5L12 2Z" />
            </svg>
            <span className="text-lg sm:text-xl font-extrabold tracking-wider uppercase font-sans">
              MOONSTAR
            </span>
          </div>

          {/* 4. STAR+ */}
          <div className="h-6 sm:h-7 flex items-center justify-center hover:opacity-80 transition-opacity font-black text-xl sm:text-2xl tracking-tighter text-black">
            <span>ST</span>
            <span className="text-[#ff4500] text-2xl sm:text-3xl mx-0.5 leading-none">★</span>
            <span>R+</span>
          </div>

          {/* 5. startpeople */}
          <div className="h-6 sm:h-7 flex items-center gap-1.5 justify-center hover:opacity-80 transition-opacity">
            <div className="w-5 h-5 rounded-full bg-[#e65c00] flex items-center justify-center text-white text-[10px] font-bold">
              ✦
            </div>
            <span className="text-[#e65c00] text-lg sm:text-xl font-bold tracking-tight">
              start<span className="font-normal text-gray-700">people</span>
            </span>
          </div>

          {/* 6. randstad */}
          <div className="h-6 sm:h-7 flex items-center gap-2 justify-center hover:opacity-80 transition-opacity text-black">
            <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 14V10C4 8 6 6 8 6H10" />
              <path d="M14 14V10C14 8 16 6 18 6H20" />
              <path d="M4 18H20" />
            </svg>
            <span className="text-lg sm:text-xl font-bold tracking-normal font-sans">
              randstad
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Partner;