import React, { use } from 'react'
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import ReviewCard from './ReviewCard'

const Reviews = ({ reviewsPromise }) => {
  const reviews = use(reviewsPromise)
  console.log(reviews)
  return (
    <div className="w-full bg-[#f3f4f6] pb-16 px-4 sm:px-8">
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
        {/* Delivery Cart SVG Illustration */}
        <div className="mb-6">
          <svg
            className="w-44 h-28 text-[#0d474c]"
            viewBox="0 0 200 120"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Hand Truck / Trolley */}
            <path d="M 52 10 L 60 75 L 72 75" />
            <path d="M 58 10 L 66 75" />
            <path d="M 50 26 L 62 26" />
            <path d="M 54 45 L 66 45" />
            <path d="M 48 12 C 51 6, 61 6, 64 12" />

            {/* Wheels */}
            <circle cx="56" cy="85" r="6" strokeWidth="2.5" />
            <circle cx="56" cy="85" r="2" fill="currentColor" />

            {/* Boxes on Cart */}
            <path d="M 64 46 L 86 42 L 90 60 L 67 64 Z" />
            <path d="M 67 64 L 92 60 L 94 80 L 68 82 Z" />

            {/* Big Front Box */}
            <path d="M 102 54 L 146 47 L 146 88 L 102 94 Z" />
            <path d="M 102 54 L 117 43 L 161 36 L 146 47" />
            <path d="M 161 36 L 161 77 L 146 88" />

            {/* Top Box */}
            <path d="M 130 30 L 170 24 L 170 46 L 130 51 Z" />
            <path d="M 130 30 L 143 20 L 183 14 L 170 24" />
            <path d="M 183 14 L 183 36 L 170 46" />

            {/* Side Box */}
            <path d="M 152 52 L 180 48 L 180 80 L 152 84 Z" />

            {/* Ground Line */}
            <path d="M 35 96 L 185 96" />
            <path d="M 178 28 Q 186 8, 196 42" />
          </svg>
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0d474c] tracking-tight mb-4">
          What our customers are sayings
        </h2>

        {/* Subtitle */}
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
          Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!
        </p>
      </div>
      <Swiper
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {reviews.map(review => (
          <SwiperSlide key={review.id}>
            <ReviewCard review={review}></ReviewCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Reviews