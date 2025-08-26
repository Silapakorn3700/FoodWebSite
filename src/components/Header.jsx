import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="sticky top-0 z-50 bg-white p-4 sm:p-6 rounded-b-3xl shadow-lg shadow-gray-200 mb-8">
    <nav className="flex flex-col sm:flex-row justify-center sm:justify-between items-center space-y-4 sm:space-y-0">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-700 text-center sm:text-left">Taste of the World</h1>
      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
        <Link
          to="/" 
          className="px-4 py-2 rounded-full font-semibold transition-all duration-300
                     bg-orange-500 text-white hover:bg-orange-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 w-full sm:w-auto text-center"
        >
          หน้าหลัก
        </Link>
        <Link
          to="/content" 
          className="px-4 py-2 rounded-full font-semibold transition-all duration-300
                     bg-orange-500 text-white hover:bg-orange-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 w-full sm:w-auto text-center"
        >
          เมนูอาหาร
        </Link>
        <Link
          to="/contact" 
          className="px-4 py-2 rounded-full font-semibold transition-all duration-300
                     bg-orange-500 text-white hover:bg-orange-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 w-full sm:w-auto text-center"
        >
          ติดต่อเรา
        </Link>
      </div>
    </nav>
  </header>
);
export default Header;
