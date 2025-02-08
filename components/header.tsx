import React from 'react';
import Link from 'next/link';
import { FaShoppingCart, FaBars } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header bg-yellow-400 text-purple-700 px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="logo text-2xl font-bold">RC Traxx Cars World</h1>
        <nav className="hidden md:flex gap-6 items-center">
          <Link href="/" passHref>
            <span className="text-black text-base px-3 py-1 hover:bg-orange-500 rounded-md transition-colors cursor-pointer">Home</span>
          </Link>
          <Link href="/about" passHref>
            <span className="text-black text-base px-3 py-1 hover:bg-orange-500 rounded-md transition-colors cursor-pointer">About</span>
          </Link>
          <Link href="/rc-cars" passHref>
            <span className="text-black text-base px-3 py-1 hover:bg-orange-500 rounded-md transition-colors cursor-pointer">RC Cars</span>
          </Link>
          <Link href="/contact" passHref>
            <span className="text-black text-base px-3 py-1 hover:bg-orange-500 rounded-md transition-colors cursor-pointer">Contact</span>
          </Link>
          <FaShoppingCart className="text-2xl text-black hover:text-orange-500 cursor-pointer transition-transform transform hover:scale-110" />
        </nav>
        <div className="md:hidden flex items-center">
          <button className="text-black text-2xl focus:outline-none">
            <FaBars />
          </button>
        </div>
      </div>
      <nav className="md:hidden hidden mt-4 mobile-menu">
        <Link href="/" passHref>
          <span className="block text-black text-base px-3 py-1 hover:bg-orange-500 rounded-md transition-colors cursor-pointer">Home</span>
        </Link>
        <Link href="/about" passHref>
          <span className="block text-black text-base px-3 py-1 hover:bg-orange-500 rounded-md transition-colors cursor-pointer">About</span>
        </Link>
        <Link href="/rc-cars" passHref>
          <span className="block text-black text-base px-3 py-1 hover:bg-orange-500 rounded-md transition-colors cursor-pointer">RC Cars</span>
        </Link>
        <Link href="/contact" passHref>
          <span className="block text-black text-base px-3 py-1 hover:bg-orange-500 rounded-md transition-colors cursor-pointer">Contact</span>
        </Link>
        <FaShoppingCart className="block text-2xl text-black hover:text-orange-500 cursor-pointer transition-transform transform hover:scale-110 mt-4" />
      </nav>
    </header>
  );
};

export default Header;
