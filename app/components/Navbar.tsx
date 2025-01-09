"use client";

import { useState } from "react";
import Link from "next/link";
import { SiApacheairflow } from "react-icons/si";
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="px-4 md:px-16 py-4 relative z-10 shadow-md">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-sky-500 hover:text-green-400 cursor-pointer">
          <Link href="/">
            <SiApacheairflow size={24} />
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}>
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>

        {/* Links */}
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8 mt-4 md:mt-0`}>
          <Link href="/About" className="hover:text-sky-500">
            About
          </Link>
          <Link href="/Projects" className="hover:text-sky-500">
            Projects
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
