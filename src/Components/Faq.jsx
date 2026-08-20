import React, { useState } from 'react';

// সবগুলো FAQ ডাটা
const allFaqs = [
  {
    id: 1,
    question: 'How does this posture corrector work?',
    answer:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here's how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.",
  },
  {
    id: 2,
    question: 'Is it suitable for all ages and body types?',
    answer:
      'Yes, it features fully adjustable ergonomic straps that can easily fit different body shapes, chest sizes, and heights for both teenagers and adults.',
  },
  {
    id: 3,
    question: 'Does it really help with back pain and posture improvement?',
    answer:
      'Consistent use for 20–30 minutes daily helps build muscle memory, significantly reduces slouching, and relieves tension from your neck and spine.',
  },
  {
    id: 4,
    question: 'Does it have smart features like vibration alerts?',
    answer:
      'Our Pro model includes an intelligent angle sensor that gently vibrates whenever you slouch more than 25 degrees to remind you to sit straight.',
  },
  {
    id: 5,
    question: 'How will I be notified when the product is back in stock?',
    answer:
      'You can subscribe with your email on the checkout page to receive real-time notifications and exclusive discount alerts when fresh stock arrives.',
  },
  // 'See More' এ ক্লিক করলে এই নিচের প্রশ্নগুলো বের হবে
  {
    id: 6,
    question: 'How long should I wear it each day?',
    answer:
      'We recommend starting with 15–20 minutes for the first few days and gradually increasing up to 1–2 hours daily as your body gets used to the posture.',
  },
  {
    id: 7,
    question: 'Is the material breathable and washable?',
    answer:
      'Yes, it is crafted from lightweight, sweat-resistant fabric. You can easily hand-wash it in cool water after removing any electronic modules.',
  },
  {
    id: 8,
    question: 'What is your refund and return policy?',
    answer:
      'We offer a 30-day hassle-free return and exchange policy if the product does not meet your size or comfort expectations.',
  },
];

const Faq = () => {
  // কোন কার্ডটি ওপেন আছে (ডিফল্টভাবে প্রথম কার্ডটি ওপেন থাকবে)
  const [openIndex, setOpenIndex] = useState(0);

  // 'See More' ক্লিক করা হয়েছে কি না তা ট্র্যাক করার স্টেট
  const [showAll, setShowAll] = useState(false);

  // ক্লিক করলে ওপেন/ক্লোজ টগল হবে
  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // showAll ট্রু হলে সব দেখাবে, না হলে প্রথম ৫টি দেখাবে
  const displayedFaqs = showAll ? allFaqs : allFaqs.slice(0, 5);

  return (
    <section className="w-full bg-[#f3f4f6] py-16 sm:py-20 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Section Header */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0c3937] tracking-tight mb-3">
          Frequently Asked Question (FAQ)
        </h2>

        <p className="text-gray-500 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed mb-10 sm:mb-12">
          Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!
        </p>

        {/* Accordion FAQ List */}
        <div className="flex flex-col gap-4 text-left">
          {displayedFaqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.id}
                onClick={() => toggleFaq(index)}
                className={`rounded-2xl transition-all duration-300 cursor-pointer overflow-hidden border ${
                  isOpen
                    ? 'bg-[#edf8f6] border-[#14b8a6]/40 shadow-sm' // ছবির মতো অ্যাক্টিভ স্টাইল
                    : 'bg-white border-gray-100 hover:border-gray-200 shadow-sm' // নরমাল সাদা কার্ড
                }`}
              >
                {/* Question Header */}
                <div className="p-5 sm:p-6 flex items-center justify-between gap-4">
                  <h3
                    className={`text-sm sm:text-base font-bold transition-colors ${
                      isOpen ? 'text-[#0c3937]' : 'text-gray-800'
                    }`}
                  >
                    {faq.question}
                  </h3>

                  {/* Chevron Icon (Up/Down) */}
                  <div
                    className={`w-6 h-6 flex items-center justify-center text-[#0c3937] transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#0d9488]' : ''
                    }`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 stroke-[2.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </div>
                </div>

                {/* Answer Body (Open থাকলে দেখাবে) */}
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-0">
                    <div className="border-t border-gray-200/60 mb-4"></div>
                    <p className="text-gray-600 text-xs sm:text-[13.5px] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ========================================================
            "See More FAQ's" Button (ক্লিক করলে আরও প্রশ্ন লোড হবে)
        ======================================================== */}
        <div className="flex justify-center mt-10 sm:mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-3 bg-[#caea47] hover:bg-[#bde334] text-gray-950 font-bold rounded-2xl pl-6 pr-2 py-2 transition-all shadow-sm group active:scale-95"
          >
            <span className="text-xs sm:text-sm font-semibold tracking-tight">
              {showAll ? "Show Less FAQ's" : "See More FAQ's"}
            </span>

            {/* Black Arrow Circle */}
            <div
              className={`w-8 h-8 rounded-full bg-[#1a1c1e] text-[#caea47] flex items-center justify-center transition-transform duration-300 ${
                showAll ? 'rotate-[-45deg]' : 'group-hover:rotate-45'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 stroke-[2.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </div>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Faq;