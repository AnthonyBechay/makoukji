'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b-2 border-[#2596be] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <Image 
                src="/logo.svg" 
                alt="Makoukji Auto Glass Logo" 
                width={180} 
                height={54}
                className="h-12 w-auto"
                priority
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-black hover:text-[#2596be] px-3 py-2 text-sm font-bold transition-colors border-b-2 border-transparent hover:border-[#FFD700]">
                Home
              </Link>
              <Link href="/about" className="text-black hover:text-[#2596be] px-3 py-2 text-sm font-bold transition-colors border-b-2 border-transparent hover:border-[#FFD700]">
                About
              </Link>
              <Link href="/services" className="text-black hover:text-[#2596be] px-3 py-2 text-sm font-bold transition-colors border-b-2 border-transparent hover:border-[#FFD700]">
                Services
              </Link>
              <Link href="/collection" className="text-black hover:text-[#2596be] px-3 py-2 text-sm font-bold transition-colors border-b-2 border-transparent hover:border-[#FFD700]">
                Collection
              </Link>
              <Link href="/contact" className="text-black hover:text-[#2596be] px-3 py-2 text-sm font-bold transition-colors border-b-2 border-transparent hover:border-[#FFD700]">
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-[#2596be] focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t-2 border-[#2596be]">
            <div className="px-3 py-2 border-b border-gray-200 mb-2">
              <Image 
                src="/logo.svg" 
                alt="Makoukji Auto Glass Logo" 
                width={150} 
                height={45}
                className="h-10 w-auto"
              />
            </div>
            <Link
              href="/"
              className="block px-3 py-2 text-base font-bold text-black hover:text-[#2596be] hover:bg-[#FFD700]/10"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-base font-bold text-black hover:text-[#2596be] hover:bg-[#FFD700]/10"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className="block px-3 py-2 text-base font-bold text-black hover:text-[#2596be] hover:bg-[#FFD700]/10"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/collection"
              className="block px-3 py-2 text-base font-bold text-black hover:text-[#2596be] hover:bg-[#FFD700]/10"
              onClick={() => setIsOpen(false)}
            >
              Collection
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-base font-bold text-black hover:text-[#2596be] hover:bg-[#FFD700]/10"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
