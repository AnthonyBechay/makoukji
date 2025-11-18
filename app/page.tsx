import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Professional */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-gray-900 space-y-8">
              <div className="inline-block px-4 py-2 bg-[#fae633] text-white rounded-md text-sm font-semibold">
                ESTABLISHED 1964 • LEBANON'S MOST RENOWNED AUTO GLASS COMPANY
              </div>
              
              <div className="mb-6">
                <Image 
                  src="/logo-nobackground.png" 
                  alt="Makoukji Auto Glass Logo" 
                  width={280} 
                  height={84}
                  className="h-16 w-auto mb-6"
                  priority
                />
              </div>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900">
                Lebanon's Trusted Auto Glass Experts
                <span className="block text-[#fae633] mt-2">Since 1964</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                With over <strong className="text-[#fae633]">60 years of experience</strong>, we are Lebanon's most renowned autoglass company. We maintain the most comprehensive inventory of car glass in the region, ensuring we have what you need when you need it.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/contact"
                  className="px-8 py-3 bg-[#fae633] text-white rounded-md font-semibold text-lg hover:bg-[#d4c82a] transition-colors duration-200 shadow-md"
                >
                  Get Free Quote
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-3 border-2 border-[#fae633] text-[#fae633] rounded-md font-semibold text-lg hover:bg-[#fae633] hover:text-white transition-colors duration-200"
                >
                  View Our Services
                </Link>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[#fae633] via-[#d4c82a] to-[#fae633]">
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                  }}></div>
                </div>
                
                {/* Glass panels illustration */}
                <div className="absolute inset-0 flex items-center justify-center p-12">
                  <div className="relative w-full max-w-lg">
                    {/* Main glass panel */}
                    <div className="relative">
                      {/* Large windshield shape */}
                      <div className="relative mx-auto w-64 h-40 bg-white/20 backdrop-blur-md rounded-lg border-2 border-white/30 shadow-2xl transform rotate-[-2deg]">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-lg"></div>
                        <div className="absolute top-2 left-2 right-2 h-1 bg-white/20 rounded"></div>
                        <div className="absolute bottom-2 left-2 right-2 h-1 bg-white/20 rounded"></div>
                      </div>
                      
                      {/* Smaller side panels */}
                      <div className="absolute -top-8 -right-8 w-32 h-24 bg-white/15 backdrop-blur-sm rounded-lg border-2 border-white/25 shadow-xl transform rotate-12"></div>
                      <div className="absolute -bottom-8 -left-8 w-32 h-24 bg-white/15 backdrop-blur-sm rounded-lg border-2 border-white/25 shadow-xl transform -rotate-12"></div>
                    </div>
                    
                    {/* Floating stats */}
                    <div className="absolute top-0 right-0 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl transform -translate-y-4">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-[#fae633] mb-1">60+</div>
                        <div className="text-sm font-semibold text-gray-700">Years</div>
                      </div>
                    </div>
                    
                    {/* Quality indicator */}
                    <div className="absolute bottom-0 left-0 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-2xl transform translate-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-[#fae633] rounded-full flex items-center justify-center">
                          <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-gray-900">Premium</div>
                          <div className="text-xs text-gray-600">Quality</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute inset-0 shimmer transform -skew-x-12"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '60+', label: 'Years of Excellence', icon: '✓' },
              { number: '1500', label: 'Sq Meters Warehouse', icon: '✓' },
              { number: '100%', label: 'Quality Guaranteed', icon: '✓' },
              { number: 'All', label: 'Car Glass Types', icon: '✓' },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-[#fae633] mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Professional */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Why Choose Makoukji?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Lebanon's most trusted autoglass experts with unmatched quality and comprehensive inventory
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Comprehensive Inventory',
                description: 'We maintain the most extensive inventory of car glass in Lebanon. From the smallest car to the largest truck, we have what you need.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                ),
              },
              {
                title: '60 Years of Expertise',
                description: 'As Lebanon\'s most renowned autoglass company since 1964, we bring unmatched experience and knowledge to every job.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
              {
                title: 'Professional Service',
                description: 'Our trained team uses premium products and professional installation techniques to ensure your vehicle is restored to perfect condition.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="w-16 h-16 bg-[#fae633] rounded-lg flex items-center justify-center mb-6 text-white">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview - Professional */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Comprehensive Autoglass Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide autoglass services for all vehicle types
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {['ROOF GLASS', 'WINDSHIELD', 'SIDE WINDOW', 'RUBBER', 'SUPER CARS', 'TRUCK', 'HEAVY MACHINERY', 'BUS'].map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-center hover:border-[#fae633] hover:shadow-md transition-all duration-200"
              >
                <h3 className="text-sm font-semibold text-gray-900">{service}</h3>
              </div>
            ))}
          </div>

          <div className="bg-[#fae633] rounded-lg p-8 text-center text-white">
            <p className="text-lg mb-6">
              Plus specialized services for boats, yachts, and all types of vehicles
            </p>
            <Link
              href="/services"
              className="inline-block px-8 py-3 bg-white text-[#fae633] rounded-md font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section - Professional */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Get your vehicle back on the road safely and quickly. Contact Lebanon's most trusted autoglass experts today for a free quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-10 py-3 bg-[#fae633] text-white rounded-md font-semibold text-lg hover:bg-[#d4c82a] transition-colors duration-200 shadow-md"
            >
              Contact Us Today
            </Link>
            <Link
              href="/about"
              className="px-10 py-3 border-2 border-white text-white rounded-md font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors duration-200"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
