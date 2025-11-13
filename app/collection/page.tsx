'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Collection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#2596be] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-glow"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FFD700] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-[#2596be] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Grid Pattern */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Hero Section */}
        <section className="text-center py-20 mb-20">
          <div className="inline-block mb-6 px-6 py-3 bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-full">
            <span className="text-sm font-bold text-black tracking-wider">SPECIAL COLLECTION</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-extrabold mb-8 text-white">
            Special & <span className="gradient-text-gold">Very Rare</span> Glasses
          </h1>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
            Exclusive collection of glass for classic and collection cars
          </p>
        </section>

        {/* Coming Soon Card - Premium Design */}
        <section className="max-w-5xl mx-auto mb-20">
          <div 
            className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-3xl p-12 md:p-20 border-2 border-[#FFD700] futuristic-border premium-shadow-dark overflow-hidden group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-30">
              <div className={`absolute inset-0 bg-gradient-to-r from-[#2596be] via-[#FFD700] to-[#2596be] transition-opacity duration-500 ${isHovered ? 'opacity-40' : 'opacity-20'}`}></div>
            </div>

            {/* Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            {/* Shimmer Effect */}
            <div className="absolute inset-0 shimmer pointer-events-none"></div>

            {/* Content */}
            <div className="relative text-center space-y-8">
              {/* Icon */}
              <div className="flex justify-center mb-8">
                <div className={`relative w-40 h-40 bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 ${isHovered ? 'scale-110 rotate-12' : 'scale-100'}`}>
                  <svg className="w-20 h-20 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-full blur-xl opacity-50 animate-pulse-glow"></div>
                </div>
              </div>

              {/* Main Message */}
              <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
                Coming Soon
              </h2>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 md:p-12 border-2 border-[#FFD700]/50 glass-effect-dark">
                <p className="text-2xl md:text-3xl text-gray-100 mb-6 leading-relaxed">
                  We are currently <strong className="text-[#FFD700]">developing</strong> this exclusive section to showcase our collection of special and very rare glasses for collection cars.
                </p>
                <p className="text-xl text-gray-300">
                  Stay tuned for an amazing collection of hard-to-find autoglass pieces!
                </p>
              </div>

              {/* Features Preview */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                {[
                  { icon: '🏎️', title: 'Classic Cars', desc: 'Rare glass for vintage vehicles' },
                  { icon: '💎', title: 'Premium Quality', desc: 'Authentic and original parts' },
                  { icon: '🔍', title: 'Expert Sourcing', desc: 'Hard-to-find pieces' },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 glass-effect-dark group hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="text-5xl mb-4 transform group-hover:scale-125 transition-transform float-animation">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-[#FFD700] mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-300">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                <Link
                  href="/contact"
                  className="group relative px-10 py-5 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black rounded-xl font-bold text-lg overflow-hidden btn-modern premium-shadow glow-effect-gold"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Contact Us for Inquiries
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Link>
                <Link
                  href="/services"
                  className="group px-10 py-5 border-2 border-[#2596be] text-white rounded-xl font-bold text-lg hover:bg-[#2596be] transition-all duration-300 futuristic-border backdrop-blur-sm bg-black/20"
                >
                  <span className="flex items-center justify-center gap-2">
                    View Our Services
                    <svg className="w-5 h-5 transform group-hover:rotate-90 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Info Section */}
        <section className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-12 md:p-16 border-2 border-[#2596be]/50 glass-effect-dark">
            <h3 className="text-3xl font-bold text-white mb-6 text-center">About Our Collection</h3>
            <p className="text-lg text-gray-300 leading-relaxed text-center">
              At Ets. Georges Makoukji, we understand the unique needs of collection car owners. Our special collection section will feature rare and hard-to-find autoglass pieces for classic and vintage vehicles. We're working hard to bring you the best selection of authentic parts for your prized collection.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
