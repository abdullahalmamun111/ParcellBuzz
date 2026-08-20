import React from 'react';

const footerLinks = [
  { name: 'Services', href: '#' },
  { name: 'Coverage', href: '#' },
  { name: 'About Us', href: '#' },
  { name: 'Pricing', href: '#' },
  { name: 'Blog', href: '#' },
  { name: 'Contact', href: '#' },
];

export const Footer = () => {
  return (
    <footer className="w-full bg-[#f3f4f6] pb-12 px-4 sm:px-8">
      {/* Main Rounded Dark Container */}
      <div className="max-w-7xl mx-auto bg-[#0a0d0d] rounded-3xl sm:rounded-[36px] py-14 sm:py-16 px-6 sm:px-12 text-center text-white shadow-2xl">
        
        {/* ========================================================
            ১. লোগো (Navbar-এর আইকন + "ParcelBuzz" নাম)
        ======================================================== */}
        <div className="flex items-center justify-center gap-2.5 mb-4">
          {/* Navbar-এর সেইম জিওমেট্রিক আইকন */}
          <div className="w-8 h-8 flex items-center justify-center">
            <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path d="M18 3L4 10V26L18 33L32 26V10L18 3Z" fill="#cbf34a" />
              <path d="M18 3L32 10L18 17L4 10L18 3Z" fill="#d9f968" />
              <path d="M18 17V33L4 26V10L18 17Z" fill="#b0e322" />
            </svg>
          </div>
          
          {/* লোগো টেক্সট */}
          <span className="text-2xl sm:text-3xl font-black tracking-tight text-white">
            Parcel<span className="text-[#caea47]">Buzz</span>
          </span>
        </div>

        {/* সাবটাইটেল / ডেসক্রিপশন */}
        <p className="text-gray-400 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed mb-8">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
        </p>

        {/* উপরের ড্যাশড ডিভাইডার */}
        <div className="border-b border-dashed border-[#1f2937] max-w-5xl mx-auto"></div>

        {/* ২. নেভিগেশন লিংকস */}
        <div className="py-7 sm:py-8">
          <ul className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-gray-300 font-medium text-sm sm:text-[15px]">
            {footerLinks.map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  className="hover:text-[#caea47] transition-colors duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* নিচের ড্যাশড ডিভাইডার */}
        <div className="border-b border-dashed border-[#1f2937] max-w-5xl mx-auto mb-8"></div>

        {/* ৩. সোশ্যাল মিডিয়া আইকনস (LinkedIn, X/Twitter, Facebook, YouTube) */}
        <div className="flex items-center justify-center gap-4">
          
          {/* LinkedIn (Blue) */}
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-[#0077b5] flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-transform"
            aria-label="LinkedIn"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.65 1.65 0 1 0 .01 3.3 1.65 1.65 0 0 0-.01-3.3Z" />
            </svg>
          </a>

          {/* X (White circle with black X) */}
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black hover:scale-110 active:scale-95 transition-transform"
            aria-label="Twitter X"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>

          {/* Facebook (Blue) */}
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-[#1877f2] flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-transform"
            aria-label="Facebook"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.704 0-1.42.164-1.745.541-.324.378-.358 1.054-.358 2.074v1.365h4.15l-.564 3.667h-3.586v7.98c5.441-.75 9.61-5.412 9.61-11.056C23.691 6.377 18.005.691 10.991.691 3.977.691-1.709 6.377-1.709 13.391c0 5.644 4.169 10.306 9.61 11.056l1.2-.756z" />
            </svg>
          </a>

          {/* YouTube (Red) */}
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-[#ff0000] flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-transform"
            aria-label="YouTube"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>

        </div>

      </div>
    </footer>
  );
};

export default Footer;