import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Swiper CSS
import 'swiper/css';

// রিভিউ ডাটা
const reviews = [
  {
    id: 1,
    quote:
      'A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.',
    name: 'Rasel Ahamed',
    role: 'CTO',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    quote:
      'A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.',
    name: 'Awlad Hossin',
    role: 'Senior Product Designer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    quote:
      'A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.',
    name: 'Nasir Uddin',
    role: 'CEO',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
  },
  {
    id: 4,
    quote:
      'Fast and reliable delivery service! Tracking was accurate and customer support helped me resolve my issues within minutes.',
    name: 'Mahfuzur Rahman',
    role: 'Operations Lead',
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&auto=format&fit=crop&q=80',
  },
];

// উপরের ট্রলি ও বক্স ইলাস্ট্রেশন (SVG)
const TrolleyIllustration = () => (
  <svg className="w-24 sm:w-28 h-auto text-[#0c3937] mx-auto mb-3" viewBox="0 0 120 70" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M25 15L35 50M35 50L45 53" />
    <rect x="30" y="25" width="12" height="10" rx="1" />
    <rect x="33" y="37" width="12" height="10" rx="1" />
    <circle cx="28" cy="55" r="4" />
    <circle cx="40" cy="57" r="4" />
    
    <rect x="55" y="30" width="18" height="18" rx="1" fill="#fff" />
    <rect x="75" y="24" width="16" height="24" rx="1" fill="#fff" />
    <rect x="65" y="15" width="22" height="14" rx="1" fill="#fff" />
    
    <path d="M15 57H105" strokeDasharray="3 3" />
    <path d="M92 18C98 12 102 24 108 16" />
  </svg>
);

const Review = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section className="w-full bg-[#f3f4f6] py-16 sm:py-20 px-4 overflow-hidden select-none">
      
      {/* সেন্টারের কার্ড হাইলাইট এবং সাইডের কার্ড হালকা করার CSS */}
      <style>{`
        .review-swiper .swiper-slide {
          transition: all 0.4s ease;
          opacity: 0.35;
          transform: scale(0.92);
        }
        .review-swiper .swiper-slide-active {
          opacity: 1 !important;
          transform: scale(1) !important;
        }
      `}</style>

      <div className="max-w-7xl mx-auto text-center">
        
        {/* Top Trolley Icon */}
        <TrolleyIllustration />

        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0c3937] tracking-tight mb-3">
          What our customers are sayings
        </h2>

        {/* Subtitle */}
        <p className="text-gray-500 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed mb-12 sm:mb-16">
          Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!
        </p>

        {/* Swiper Slider with Drag & Touch Support */}
        <div className="w-full cursor-grab active:cursor-grabbing mb-10">
          <Swiper
            modules={[Autoplay]}
            onSwiper={setSwiperInstance}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            initialSlide={1}
            centeredSlides={true}
            loop={true}
            speed={600}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1.15,
                spaceBetween: 15,
              },
              640: {
                slidesPerView: 1.8,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="review-swiper py-6"
          >
            {reviews.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="bg-white rounded-3xl p-7 sm:p-9 shadow-md border border-gray-100/80 text-left flex flex-col justify-between min-h-[300px] sm:min-h-[330px]">
                  
                  <div>
                    {/* Teal Quote Icon */}
                    <div className="text-3xl sm:text-4xl font-serif text-[#a7e8db] font-black leading-none mb-3">
                      “
                    </div>

                    {/* Review Text */}
                    <p className="text-gray-600 text-xs sm:text-[13px] leading-relaxed">
                      {item.quote}
                    </p>
                  </div>

                  {/* Divider & Author Info */}
                  <div className="mt-6">
                    <div className="border-b border-dashed border-gray-200 mb-5"></div>
                    
                    <div className="flex items-center gap-3.5">
                      {/* Avatar */}
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="w-11 h-11 rounded-full object-cover border border-gray-200"
                      />
                      <div>
                        <h4 className="text-sm sm:text-base font-bold text-[#0c3937]">
                          {item.name}
                        </h4>
                        <p className="text-gray-400 text-xs font-medium">
                          {item.role}
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* ========================================================
            Slider Controls (Left Arrow, Dots, Right Arrow)
        ======================================================== */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 mt-4">
          
          {/* Left Arrow Button */}
          <button
            onClick={() => swiperInstance?.slidePrev()}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-gray-200 text-gray-800 flex items-center justify-center shadow-sm hover:bg-gray-50 active:scale-95 transition-all"
            aria-label="Previous review"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 stroke-[2.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => swiperInstance?.slideToLoop(index)}
                className={`rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? 'w-2.5 h-2.5 bg-[#0c3937]'
                    : 'w-2 h-2 bg-teal-200/70 hover:bg-teal-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Right Arrow Button (Lime Green Highlighted) */}
          <button
            onClick={() => swiperInstance?.slideNext()}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#caea47] text-gray-950 flex items-center justify-center shadow-sm hover:bg-[#bde334] active:scale-95 transition-all"
            aria-label="Next review"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 stroke-[2.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>

        </div>

      </div>
    </section>
  );
};

export default Review;