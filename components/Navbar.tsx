'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b-2 border-[#2596be]' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity group">
              <div className="relative">
                <Image 
                  src="/logo.svg" 
                  alt="Makoukji Auto Glass Logo" 
                  width={200} 
                  height={60}
                  className="h-14 w-auto transform group-hover:scale-105 transition-transform duration-300"
                  priority
                />
                {scrolled && (
                  <div className="absolute inset-0 bg-gradient-to-r from-[#2596be] to-[#FFD700] opacity-0 group-hover:opacity-20 rounded-lg blur-sm transition-opacity"></div>
                )}
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About' },
                { href: '/services', label: 'Services' },
                { href: '/collection', label: 'Collection' },
                { href: '/contact', label: 'Contact' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-bold transition-all duration-300 group ${
                    scrolled ? 'text-black' : 'text-white'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#2596be] to-[#FFD700] transition-all duration-300 group-hover:w-full ${
                    scrolled ? '' : 'group-hover:bg-white'
                  }`}></span>
                  <span className={`absolute inset-0 bg-gradient-to-r from-[#2596be]/10 to-[#FFD700]/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></span>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block ml-6">
            <Link
              href="/contact"
              className="px-6 py-3 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black rounded-xl font-bold text-sm hover:shadow-xl transform hover:scale-105 transition-all duration-300 premium-shadow glow-effect-gold"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-3 rounded-xl transition-all duration-300 ${
                scrolled ? 'text-black bg-white/20' : 'text-white bg-black/20'
              } backdrop-blur-md hover:bg-white/30`}
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

      {/* Mobile Navigation - Enhanced */}
      {isOpen && (
        <div className="md:hidden fixed inset-x-0 top-24 bg-white/98 backdrop-blur-xl shadow-2xl border-t-2 border-[#2596be] animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-4 pb-6 space-y-2">
            <div className="px-4 py-3 border-b border-gray-200 mb-4">
              <Image 
                src="/logo.svg" 
                alt="Makoukji Auto Glass Logo" 
                width={180} 
                height={54}
                className="h-12 w-auto"
              />
            </div>
            {[
              { href: '/', label: 'Home' },
              { href: '/about', label: 'About' },
              { href: '/services', label: 'Services' },
              { href: '/collection', label: 'Collection' },
              { href: '/contact', label: 'Contact' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-4 text-base font-bold text-black hover:text-[#2596be] hover:bg-gradient-to-r hover:from-[#2596be]/10 hover:to-[#FFD700]/10 rounded-xl transition-all duration-300 border-l-4 border-transparent hover:border-[#FFD700]"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4">
              <Link
                href="/contact"
                className="block w-full text-center px-6 py-4 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black rounded-xl font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
