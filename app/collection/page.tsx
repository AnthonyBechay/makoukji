'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Collection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-[#FFD700] rounded-lg">
            <span className="text-sm font-bold text-black">SPECIAL COLLECTION</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-black">
            Special & <span className="text-[#2596be]">Very Rare</span> Glasses
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Exclusive collection of glass for classic and collection cars
          </p>
        </div>

        {/* Coming Soon Section */}
        <div className="max-w-4xl mx-auto">
          <div 
            className="bg-gradient-to-br from-black via-[#1a1a1a] to-black rounded-lg p-12 md:p-16 shadow-2xl futuristic-border relative overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-20">
              <div className={`absolute inset-0 bg-gradient-to-r from-[#2596be] to-[#FFD700] transition-opacity duration-500 ${isHovered ? 'opacity-30' : 'opacity-20'}`}></div>
            </div>

            {/* Content */}
            <div className="relative text-center">
              {/* Icon */}
              <div className="mb-8 flex justify-center">
                <div className={`w-32 h-32 bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-full flex items-center justify-center shadow-2xl transition-transform duration-500 ${isHovered ? 'scale-110 rotate-12' : 'scale-100'}`}>
                  <svg className="w-16 h-16 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
              </div>

              {/* Main Message */}
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Coming Soon
              </h2>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 border-2 border-[#FFD700]/50">
                <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed">
                  We are currently <strong className="text-[#FFD700]">developing</strong> this exclusive section to showcase our collection of special and very rare glasses for collection cars.
                </p>
                <p className="text-lg text-gray-300">
                  Stay tuned for an amazing collection of hard-to-find autoglass pieces!
                </p>
              </div>

              {/* Features Preview */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-[#2596be]/30">
                  <div className="text-4xl mb-3">🏎️</div>
                  <h3 className="text-lg font-bold text-[#FFD700] mb-2">Classic Cars</h3>
                  <p className="text-sm text-gray-300">Rare glass for vintage vehicles</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-[#2596be]/30">
                  <div className="text-4xl mb-3">💎</div>
                  <h3 className="text-lg font-bold text-[#FFD700] mb-2">Premium Quality</h3>
                  <p className="text-sm text-gray-300">Authentic and original parts</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-[#2596be]/30">
                  <div className="text-4xl mb-3">🔍</div>
                  <h3 className="text-lg font-bold text-[#FFD700] mb-2">Expert Sourcing</h3>
                  <p className="text-sm text-gray-300">Hard-to-find pieces</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-[#FFD700] text-black rounded-lg font-bold hover:bg-[#FFA500] transform hover:scale-105 transition-all duration-200 shadow-lg glow-effect"
                >
                  Contact Us for Inquiries
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-4 border-2 border-[#2596be] text-white rounded-lg font-bold hover:bg-[#2596be] transition-all duration-200 futuristic-border"
                >
                  View Our Services
                </Link>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 bg-gradient-to-r from-[#2596be]/10 to-[#FFD700]/10 rounded-lg p-8 border-2 border-[#2596be] futuristic-border">
            <h3 className="text-2xl font-bold text-black mb-4 text-center">About Our Collection</h3>
            <p className="text-gray-700 text-center leading-relaxed">
              At Ets. Georges Makoukji, we understand the unique needs of collection car owners. Our special collection section will feature rare and hard-to-find autoglass pieces for classic and vintage vehicles. We're working hard to bring you the best selection of authentic parts for your prized collection.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

