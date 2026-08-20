import React, { useState } from 'react';
// Swiper React Components & Modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';

// Swiper CSS
import 'swiper/css';
import 'swiper/css/effect-fade';

// আপনার ইমেজ ইম্পোর্ট
import bannerImg from "../assets/big-deliveryman.png";

// স্লাইডের ডাটা
const slides = [
  {
    id: 1,
    miniTag: (
      <div className="flex items-center gap-2 mb-3">
        <svg className="w-16 h-8 text-[#0c3937]" viewBox="0 0 100 40" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M0 35 H60 M65 20 L75 35 M70 10 A4 4 0 1 1 70 18 A4 4 0 1 1 70 10 M65 18 L70 30 M70 20 L80 18 L88 28 H75" />
          <rect x="75" y="10" width="15" height="12" fill="#fff" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>
    ),
    title: (
      <>
        We Make Sure Your <br />
        <span className="text-[#98cc28]">Parcel Arrives</span> On Time <br />
        – No Fuss.
      </>
    ),
    desc: 'Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.',
    image: bannerImg,
  },
  {
    id: 2,
    miniTag: null,
    title: (
      <>
        Fastest <br />
        <span className="text-[#98cc28]">Delivery & Easy</span> <br />
        Pickup
      </>
    ),
    desc: 'Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.',
    image: bannerImg,
  },
  {
    id: 3,
    miniTag: null,
    title: (
      <>
        Delivery in <span className="text-[#98cc28]">30</span> <br />
        <span className="text-[#98cc28]">Minutes</span> at your <br />
        doorstep
      </>
    ),
    desc: 'Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.',
    image: bannerImg,
  },
];

const Banner = () => {
  // স্লাইডার কন্ট্রোল এবং এক্টিভ স্লাইড ট্র্যাক করার জন্য স্টেট
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full bg-[#f3f4f6] pb-10 px-4 sm:px-8">
      {/* Floating Card Wrapper */}
      <div className="max-w-7xl mx-auto bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden relative">
        
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect={'fade'}
          fadeEffect={{ crossFade: true }}
          loop={true}
          speed={800}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          onSwiper={setSwiperInstance}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="w-full"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              {/* pb-24 দিয়ে নিচে যথেষ্ট খালি জায়গা রাখা হয়েছে */}
              <div className="grid grid-cols-1 lg:grid-cols-12 items-center min-h-[480px] lg:min-h-[520px] p-6 sm:p-10 lg:p-14 pb-24 sm:pb-28 lg:pb-32 gap-8">
                
                {/* Left Content Side */}
                <div className="lg:col-span-7 flex flex-col justify-center text-left z-10">
                  {slide.miniTag && slide.miniTag}

                  <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#0c3937] leading-[1.15] tracking-tight">
                    {slide.title}
                  </h1>

                  <p className="text-gray-500 text-xs sm:text-sm max-w-md mt-4 leading-relaxed">
                    {slide.desc}
                  </p>

                  {/* Buttons */}
                  <div className="flex flex-wrap items-center gap-4 mt-7">
                    {/* Track Your Parcel Button */}
                    <button className="flex items-center gap-2.5 bg-[#caea47] hover:bg-[#bce038] text-gray-950 font-bold rounded-2xl pl-5 pr-1.5 py-1.5 transition-all shadow-sm group">
                      <span className="text-xs sm:text-sm font-semibold tracking-tight">Track Your Parcel</span>
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#1a1c1e] text-[#caea47] flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                      </div>
                    </button>

                    {/* Be A Rider Button */}
                    <button className="px-6 py-2.5 sm:py-3 rounded-2xl border border-gray-300 text-gray-800 font-semibold hover:bg-gray-50 transition-all text-xs sm:text-sm">
                      Be A Rider
                    </button>
                  </div>
                </div>

                {/* Right Image Side */}
                <div className="lg:col-span-5 flex items-center justify-center relative w-full h-[260px] sm:h-[340px] lg:h-full">
                  <img
                    src={slide.image}
                    alt="Banner Illustration"
                    className="max-h-[350px] max-w-full object-contain drop-shadow-sm transition-transform duration-500 hover:scale-105"
                  />
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* 🚀 কাস্টম ড্যাশ লাইন (১০০% স্পষ্ট দেখা যাবে এবং সুন্দর প্যাডিং সহ থাকবে) */}
        <div className="absolute bottom-8 sm:bottom-10 lg:bottom-12 left-6 sm:left-10 lg:left-14 z-30 flex items-center gap-2.5">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => swiperInstance?.slideToLoop(index)}
              className={`h-[4px] rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === index
                  ? 'w-10 bg-[#0c3937]' // একটিভ হলে বড় ও কালারফুল ড্যাশ
                  : 'w-5 bg-gray-300 hover:bg-gray-400' // বাকিগুলো নরমাল ড্যাশ
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Banner;