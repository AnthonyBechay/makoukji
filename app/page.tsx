import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section - Completely Revamped */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#2596be] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-glow"></div>
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FFD700] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-[#2596be] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        <div className="relative max-w-7xl mx-auto w-full z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="text-white space-y-8 text-reveal">
              <div className="inline-block px-6 py-3 bg-gradient-to-r from-[#2596be] to-[#1e7a9a] rounded-full futuristic-border glow-effect">
                <span className="text-sm font-bold tracking-wider">ESTABLISHED 1964 • LEBANON'S PREMIER AUTO GLASS</span>
              </div>
              
              <div className="mb-6">
                <Image 
                  src="/logo.svg" 
                  alt="Makoukji Auto Glass Logo" 
                  width={300} 
                  height={90}
                  className="h-20 w-auto mb-6 float-animation"
                  priority
                />
              </div>

              <h1 className="text-6xl md:text-8xl font-extrabold leading-tight">
                <span className="block gradient-text-gold mb-2">The Oldest</span>
                <span className="block text-white mb-2">The Best</span>
                <span className="block gradient-text">The Reference</span>
              </h1>
              
              <p className="text-2xl md:text-3xl text-gray-300 font-semibold leading-relaxed">
                Expert Auto Glass Repair & Replacement
                <span className="block text-xl text-gray-400 mt-2 font-normal">
                  Serving Lebanon with excellence since 1964
                </span>
              </p>

              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <Link
                  href="/contact"
                  className="group relative px-10 py-5 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black rounded-xl font-bold text-lg overflow-hidden btn-modern premium-shadow glow-effect-gold"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Get Free Quote
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Link>
                <Link
                  href="/services"
                  className="group px-10 py-5 border-2 border-[#2596be] text-white rounded-xl font-bold text-lg hover:bg-[#2596be] transition-all duration-300 futuristic-border glow-effect backdrop-blur-sm bg-black/20"
                >
                  <span className="flex items-center justify-center gap-2">
                    Explore Services
                    <svg className="w-5 h-5 transform group-hover:rotate-90 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative h-[600px] lg:h-[700px] rounded-3xl overflow-hidden futuristic-border premium-shadow-dark group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#2596be] via-[#1e7a9a] to-[#FFD700] opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white space-y-6">
                  <div className="w-40 h-40 mx-auto bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-full flex items-center justify-center shadow-2xl float-animation">
                    <svg className="w-24 h-24 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <p className="text-2xl font-bold">60+ Years</p>
                    <p className="text-gray-300">of Excellence</p>
                  </div>
                </div>
              </div>
              {/* Shimmer overlay */}
              <div className="absolute inset-0 shimmer pointer-events-none"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '60+', label: 'Years Experience', icon: '🏆' },
              { number: '1500', label: 'Sq Meters Warehouse', icon: '🏭' },
              { number: '100%', label: 'Quality Guaranteed', icon: '✅' },
              { number: '24/7', label: 'Customer Support', icon: '📞' },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border-2 border-[#2596be] futuristic-border card-hover premium-shadow text-center group"
              >
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-extrabold gradient-text mb-2">{stat.number}</div>
                <div className="text-gray-600 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Enhanced */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2596be]/5 via-transparent to-[#FFD700]/5"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block mb-6 px-6 py-3 bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-full">
              <span className="text-sm font-bold text-black tracking-wider">WHY CHOOSE US</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
              <span className="gradient-text">Why Makoukji?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Lebanon's most trusted autoglass experts with unmatched quality and service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Fast Service',
                description: 'Quick turnaround times - most repairs completed the same day. We understand you need your vehicle back on the road fast.',
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                color: 'from-[#FFD700] to-[#FFA500]',
              },
              {
                title: 'Quality Guaranteed',
                description: 'Premium OEM and aftermarket glass with professional installation. All work backed by our quality guarantee.',
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                color: 'from-[#2596be] to-[#1e7a9a]',
              },
              {
                title: 'Expert Team',
                description: 'Trained professionals using the most important products in the market today to solve all your autoglass problems.',
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                color: 'from-[#FFD700] to-[#FFA500]',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white p-10 rounded-2xl border-2 border-[#2596be] futuristic-border card-hover premium-shadow overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.color} opacity-10 rounded-full blur-2xl transform group-hover:scale-150 transition-transform duration-500`}></div>
                <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300 text-white`}>
                  {feature.icon}
                </div>
                <h3 className="text-3xl font-bold mb-4 text-black">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview - Enhanced */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-6 px-6 py-3 bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-full">
              <span className="text-sm font-bold text-black tracking-wider">OUR SERVICES</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-white">
              Comprehensive <span className="gradient-text-gold">Autoglass Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From cars to yachts, we've got you covered
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {['ROOF GLASS', 'WINDSHIELD', 'SIDE WINDOW', 'RUBBER', 'SUPER CARS', 'TRUCK', 'HEAVY MACHINERY', 'BUS'].map((service, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 card-hover glass-effect-dark text-center"
              >
                <div className="text-3xl mb-3 transform group-hover:scale-125 transition-transform">{['🚗', '🪟', '🚪', '🔧', '🏎️', '🚛', '⚙️', '🚌'][index]}</div>
                <h3 className="text-sm font-bold text-white">{service}</h3>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/services"
              className="inline-block px-10 py-5 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black rounded-xl font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 premium-shadow glow-effect-gold"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFD700] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-extrabold text-black mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-2xl text-gray-900 mb-10 font-semibold">
            Get your vehicle back on the road safely and quickly. Contact us today for a free quote!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/contact"
              className="px-10 py-5 bg-black text-[#FFD700] rounded-xl font-bold text-lg hover:bg-[#2596be] hover:text-white transform hover:scale-105 transition-all duration-300 premium-shadow futuristic-border"
            >
              Contact Us Today
            </Link>
            <Link
              href="/about"
              className="px-10 py-5 bg-white/20 backdrop-blur-md text-black border-2 border-black rounded-xl font-bold text-lg hover:bg-white/30 transition-all duration-300"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
