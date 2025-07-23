import React, { useState } from "react";
import 'remixicon/fonts/remixicon.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white fixed w-full z-30 top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src="/sahaayaklogo.png" alt="Logo" className="h-14 w-auto" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-l font-bold text-[#20314e]">
          <a href="#how-it-works" className="hover:text-blue-900">Home</a>
          <a href="#why" className="hover:text-blue-900">Apply For Schemes</a>
          <a href="#demo" className="hover:text-blue-900">Demonstration</a>
          <a href="#contact" className="hover:text-blue-900">Contact Us</a>
        </nav>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-[#20314e] focus:outline-none "
          >
            <i className={menuOpen ? "ri-close-line" : "ri-menu-line"}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu with smooth transition */}
      <div
        className={`md:hidden px-6 pb-4 space-y-3 text-[#20314e] font-semibold transition-all duration-300 transform origin-top ${menuOpen ? 'scale-y-100 opacity-100 pointer-events-auto' : 'scale-y-0 opacity-0 pointer-events-none'}`}
        style={{ willChange: 'transform, opacity' }}
      >
        <a href="#how-it-works" className="block hover:text-blue-900" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#why" className="block hover:text-blue-900" onClick={() => setMenuOpen(false)}>Apply For Schemes</a>
        <a href="#demo" className="block hover:text-blue-900" onClick={() => setMenuOpen(false)}>Demonstration</a>
        <a href="#contact" className="block hover:text-blue-900" onClick={() => setMenuOpen(false)}>Contact Us</a>
      </div>
    </header>
  );
};

export default Navbar;
