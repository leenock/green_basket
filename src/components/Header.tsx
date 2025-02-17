// components/Header.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-blue-600 p-4 shadow-md">
      <div className="flex justify-between items-center container mx-auto">
        <div className="flex items-center space-x-4">
          <Image
            src="/next.svg"
            alt="Next.js Logo"
            width={40}
            height={40}
            className="text-white"
          />
          <h1 className="text-white text-2xl font-semibold">FarmHub.</h1>
        </div>

        {/* Menu button for mobile */}
        <button
          className="text-white sm:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? "Close Menu" : "Open Menu"}
        </button>

        {/* Menu links */}
        <nav className={`flex space-x-4 sm:flex-row ${isMenuOpen ? "block" : "hidden"} sm:block`}>
          <Link href="/" className="text-white hover:text-gray-200">
            Home
          </Link>
          <Link href="/products" className="text-white hover:text-gray-200">
            Products
          </Link>
          <Link href="/about" className="text-white hover:text-gray-200">
            About
          </Link>
          <Link href="/contact" className="text-white hover:text-gray-200">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
