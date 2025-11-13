import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Image */}
      <section className="relative pt-24 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-[#2596be] via-transparent to-[#FFD700]"></div>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="mb-6">
                <Image 
                  src="/logo.svg" 
                  alt="Makoukji Auto Glass Logo" 
                  width={250} 
                  height={75}
                  className="h-16 w-auto mb-4"
                  priority
                />
              </div>
              <div className="inline-block mb-4 px-4 py-2 bg-[#2596be] rounded-lg futuristic-border">
                <span className="text-sm font-bold">PROFESSIONAL AUTO GLASS</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="text-[#FFD700]">Makoukji</span>
                <br />
                <span className="text-white">Auto Glass</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-4 font-semibold">
                Expert Auto Glass Repair & Replacement
              </p>
              <p className="text-lg text-gray-400 mb-8">
                Serving Dora, Lebanon with fast, reliable, and professional windshield repair services
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-[#FFD700] text-black rounded-lg font-bold hover:bg-[#FFA500] transform hover:scale-105 transition-all duration-200 shadow-lg glow-effect"
                >
                  Get Free Quote
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-4 border-2 border-[#2596be] text-white rounded-lg font-bold hover:bg-[#2596be] transition-all duration-200 futuristic-border"
                >
                  Our Services
                </Link>
              </div>
            </div>
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden futuristic-border">
              <div className="absolute inset-0 bg-gradient-to-br from-[#2596be] to-[#FFD700] opacity-30"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <svg className="w-32 h-32 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-sm text-gray-300">Auto Glass Service Image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-[#FFD700] rounded-lg">
              <span className="text-sm font-bold text-black">WHY CHOOSE US</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
              Why Choose Makoukji?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional auto glass services you can trust
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-lg bg-white border-2 border-[#2596be] hover:shadow-2xl transition-all duration-300 futuristic-border group">
              <div className="w-16 h-16 bg-[#FFD700] rounded-lg flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-black">Fast Service</h3>
              <p className="text-gray-600">
                Quick turnaround times - most repairs completed the same day. We understand you need your vehicle back on the road fast.
              </p>
            </div>
            
            <div className="p-8 rounded-lg bg-white border-2 border-[#2596be] hover:shadow-2xl transition-all duration-300 futuristic-border group">
              <div className="w-16 h-16 bg-[#2596be] rounded-lg flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-black">Quality Guaranteed</h3>
              <p className="text-gray-600">
                Premium OEM and aftermarket glass with professional installation. All work backed by our quality guarantee.
              </p>
            </div>
            
            <div className="p-8 rounded-lg bg-white border-2 border-[#2596be] hover:shadow-2xl transition-all duration-300 futuristic-border group">
              <div className="w-16 h-16 bg-[#FFD700] rounded-lg flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-black">Local Experts</h3>
              <p className="text-gray-600">
                Serving Dora and surrounding areas for years. We know the local community and provide personalized service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview with Image */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-[#2596be] to-[#FFD700]"></div>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-2 bg-[#FFD700] rounded-lg">
              <span className="text-sm font-bold text-black">OUR SERVICES</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Our Services
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-[#2596be] futuristic-border">
              <div className="w-12 h-12 bg-[#FFD700] rounded-lg flex items-center justify-center mb-4 shadow-md">
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-black">Windshield Repair</h3>
              <p className="text-gray-600 text-sm">Quick chip and crack repairs</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-[#2596be] futuristic-border">
              <div className="w-12 h-12 bg-[#2596be] rounded-lg flex items-center justify-center mb-4 shadow-md">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-black">Glass Replacement</h3>
              <p className="text-gray-600 text-sm">Full windshield replacement</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-[#2596be] futuristic-border">
              <div className="w-12 h-12 bg-[#FFD700] rounded-lg flex items-center justify-center mb-4 shadow-md">
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-black">Side Windows</h3>
              <p className="text-gray-600 text-sm">Door and side window repair</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-[#2596be] futuristic-border">
              <div className="w-12 h-12 bg-[#2596be] rounded-lg flex items-center justify-center mb-4 shadow-md">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-black">Emergency Service</h3>
              <p className="text-gray-600 text-sm">24/7 emergency repairs</p>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden futuristic-border mt-12">
            <div className="absolute inset-0 bg-gradient-to-br from-[#2596be] to-[#FFD700] opacity-40"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <svg className="w-24 h-24 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-sm text-gray-200">Professional Auto Glass Service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#FFD700] to-[#FFA500] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-black"></div>
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Need Auto Glass Repair?
          </h2>
          <p className="text-xl text-gray-900 mb-8 font-semibold">
            Get your vehicle back on the road safely and quickly. Contact us today for a free quote!
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-black text-[#FFD700] rounded-lg font-bold hover:bg-[#2596be] hover:text-white transform hover:scale-105 transition-all duration-200 shadow-lg futuristic-border"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}

