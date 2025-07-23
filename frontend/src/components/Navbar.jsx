import React from "react";
import 'remixicon/fonts/remixicon.css';

const PhoneNavbar = () => {
  return (
    <header className="bg-white fixed w-full z-30 top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src="/sahaayaklogo.png" alt="Logo" className="h-14 w-auto" />
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8 text-l font-bold text-[#20314e]">
          <a href="#how-it-works" className="hover:text-blue-900">Home</a>
          <a href="#why" className="hover:text-blue-900">Apply For Schemes</a>
          <a href="#demo" className="hover:text-blue-900">Demonsration</a>
          <a href="#contact" className="hover:text-blue-900">Contact Us</a>
        </nav>
      </div>
    </header>
  );
};

export default PhoneNavbar;
