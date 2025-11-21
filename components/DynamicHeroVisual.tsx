'use client';

import { useState, useEffect } from 'react';

export default function DynamicHeroVisual() {
  const [currentStat, setCurrentStat] = useState(0);

  const stats = [
    { number: '60+', label: 'Years', color: 'text-[#fae633]' },
    { number: '1500', label: 'Sq Meters', color: 'text-black' },
    { number: '100%', label: 'Quality', color: 'text-[#fae633]' },
    { number: 'All', label: 'Vehicles', color: 'text-black' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [stats.length]);

  return (
    <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl gpu-transform">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fae633] via-[#d4c82a] to-[#fae633] animate-gradient bg-[length:200%_200%]"></div>
      
      {/* Animated mesh gradient overlay */}
      <div 
        className="absolute inset-0 opacity-20 animate-pulse-slow"
        style={{
          background: `
            radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(255,255,255,0.2) 0%, transparent 50%),
            radial-gradient(circle at 40% 20%, rgba(255,255,255,0.15) 0%, transparent 50%)
          `
        }}
      ></div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl float-animation"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-white/15 rounded-full blur-lg float-animation-delay-2"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/20 rounded-full blur-md float-animation-delay-1"></div>
      </div>

      {/* Animated grid pattern */}
      <div 
        className="absolute inset-0 opacity-10 animate-slide"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      ></div>

      {/* Main content */}
      <div className="absolute inset-0 flex items-center justify-center p-8">
        <div className="relative z-10 w-full max-w-md">
          {/* Central dynamic stat card */}
          <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl transform transition-all duration-500 hover:scale-105">
            <div className="text-center">
              <div 
                key={currentStat}
                className="animate-fade-in-up"
              >
                <div className={`text-6xl font-bold ${stats[currentStat].color} mb-2`}>
                  {stats[currentStat].number}
                </div>
                <div className="text-lg font-semibold text-gray-700">
                  {stats[currentStat].label}
                </div>
              </div>
              
              {/* Progress indicator dots */}
              <div className="flex justify-center gap-2 mt-6">
                {stats.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentStat 
                        ? 'w-8 bg-[#fae633]' 
                        : 'w-2 bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Floating stat cards */}
          <div className="absolute -top-4 -right-4 bg-black/80 backdrop-blur-md rounded-2xl p-4 shadow-xl transform rotate-6 hover:rotate-0 transition-transform duration-300">
            <div className="text-white text-center">
              <div className="text-2xl font-bold text-[#fae633]">60+</div>
              <div className="text-xs font-semibold">Years</div>
            </div>
          </div>

          <div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl transform -rotate-6 hover:rotate-0 transition-transform duration-300">
            <div className="text-center">
              <div className="text-2xl font-bold text-[#fae633]">100%</div>
              <div className="text-xs font-semibold text-gray-700">Quality</div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => {
          const delay = Math.random() * 2;
          const duration = 3 + Math.random() * 4;
          const left = Math.random() * 100;
          const top = Math.random() * 100;
          return (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full float-animation"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

