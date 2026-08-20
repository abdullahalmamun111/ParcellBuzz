import React from 'react';

const Navbar = () => {
  
  const navLinks = [
    { name: 'Services', href: '#' },
    { name: 'Coverage', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Be a Rider', href: '#' },
  ];

  return (
    <header className="w-full bg-[#f3f4f6] py-4 px-4 sm:px-8">
      {/* Floating Card Container */}
      <div className="navbar max-w-7xl mx-auto bg-white rounded-2xl sm:rounded-3xl shadow-sm border border-gray-100 px-4 sm:px-6 py-3">
        
        {/* Navbar Start (Mobile Menu + Logo) */}
        <div className="navbar-start gap-2">
        
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle btn-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-md dropdown-content bg-white rounded-2xl z-50 mt-3 w-64 p-4 shadow-xl border border-gray-100 gap-1 text-gray-700 font-medium"
            >
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="hover:text-black hover:bg-gray-100 rounded-xl py-2">
                    {link.name}
                  </a>
                </li>
              ))}
              <div className="divider my-1"></div>
              <li>
                <a className="font-semibold text-center justify-center py-2">Sign In</a>
              </li>
            </ul>
          </div>

          {/* Logo with Green Geometric Icon */}
          <a href="#" className="flex items-center gap-2 cursor-pointer select-none">
            {/* Custom SVG Icon matching ZapShift */}
            <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center">
              <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path d="M18 3L4 10V26L18 33L32 26V10L18 3Z" fill="#cbf34a" />
                <path d="M18 3L32 10L18 17L4 10L18 3Z" fill="#d9f968" />
                <path d="M18 17V33L4 26V10L18 17Z" fill="#b0e322" />
              </svg>
            </div>
            <span className="text-xl sm:text-2xl font-black tracking-tight text-gray-900">
              Parcel<span className="text-[#caea47]">Buzz</span>
            </span>
          </a>
        </div>

        {/* Navbar Center (Desktop Links) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-8 text-gray-600 font-medium text-[15px]">
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <a href={link.href} className="hover:text-black transition-colors duration-200">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Navbar End (Action Buttons) */}
        <div className="navbar-end gap-3">
          {/* Sign In Button */}
          <button className="btn btn-ghost hidden sm:inline-flex border border-gray-300 hover:border-gray-400 hover:bg-gray-50 text-gray-800 font-semibold rounded-2xl px-6 h-11 min-h-[44px] text-sm">
            Sign In
          </button>

          {/* "Be a rider" Lime Button with Arrow Circle */}
          <button className="flex items-center gap-2.5 bg-[#caea47] hover:bg-[#bde334] text-gray-950 font-bold rounded-2xl pl-4 sm:pl-5 pr-1.5 py-1.5 transition-all shadow-sm group">
            <span className="text-xs sm:text-sm tracking-tight font-semibold">Be a rider</span>
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#1a1c1e] text-[#caea47] flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </div>
          </button>
        </div>

      </div>
    </header>
  );
};

export default Navbar;