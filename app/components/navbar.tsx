"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    // Navbar
    <nav className="relative flex justify-between md:justify-center items-center p-6">
      {/* Logo */}
      <div className="text-2xl font-bold md:px-12">
        <Link href="/" className="hover:text-teal-900">
          JPoint
        </Link>
      </div>
      {/* Desktop Icons */}
      <div className="hidden md:flex gap-12">
        <Link href="/" className="hover:text-teal-300">
          Home
        </Link>
        <Link href="/about" className="hover:text-teal-300">
          About
        </Link>
        <Link href="/projects" className="hover:text-teal-300">
          Projects
        </Link>
        <Link href="/contact" className="hover:text-teal-300">
          Contact
        </Link>
      </div>
      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden">
        <button className="w-12 h-12" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full z-50 bg-teal-900">
          <Link href="/" className="block p-4 hover:bg-teal-100">
            Home
          </Link>
          <Link href="/about" className="block p-4 hover:bg-teal-100">
            About
          </Link>
          <Link href="/projects" className="block p-4 hover:bg-teal-100">
            Projects
          </Link>
          <Link href="/contact" className="block p-4 hover:bg-teal-100">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
