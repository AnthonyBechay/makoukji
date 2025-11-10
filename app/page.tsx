import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-yellow-50">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 via-yellow-50 to-amber-50"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent animate-gradient">
              Makoukji Auto Glass
            </h1>
            <p className="text-xl md:text-2xl text-amber-900 mb-4 max-w-3xl mx-auto font-semibold">
              Expert Auto Glass Repair & Replacement
            </p>
            <p className="text-lg md:text-xl text-amber-800 mb-8 max-w-3xl mx-auto">
              Serving Dora, Lebanon with fast, reliable, and professional windshield repair services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-amber-500 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 shadow-md"
              >
                Get Free Quote
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 border-2 border-yellow-600 text-yellow-700 rounded-lg font-semibold hover:bg-yellow-100 transition-all duration-200 bg-white"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-amber-900">
              Why Choose Makoukji?
            </h2>
            <p className="text-xl text-amber-800 max-w-2xl mx-auto">
              Professional auto glass services you can trust
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl bg-gradient-to-br from-yellow-50 to-amber-50 hover:shadow-xl transition-shadow border border-yellow-200">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg flex items-center justify-center mb-4 shadow-md">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-amber-900">Fast Service</h3>
              <p className="text-amber-800">
                Quick turnaround times - most repairs completed the same day. We understand you need your vehicle back on the road fast.
              </p>
            </div>
            
            <div className="p-8 rounded-xl bg-gradient-to-br from-yellow-50 to-amber-50 hover:shadow-xl transition-shadow border border-yellow-200">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg flex items-center justify-center mb-4 shadow-md">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-amber-900">Quality Guaranteed</h3>
              <p className="text-amber-800">
                Premium OEM and aftermarket glass with professional installation. All work backed by our quality guarantee.
              </p>
            </div>
            
            <div className="p-8 rounded-xl bg-gradient-to-br from-yellow-50 to-amber-50 hover:shadow-xl transition-shadow border border-yellow-200">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg flex items-center justify-center mb-4 shadow-md">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-amber-900">Local Experts</h3>
              <p className="text-amber-800">
                Serving Dora and surrounding areas for years. We know the local community and provide personalized service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-yellow-100 to-amber-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-amber-900">
              Our Services
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-yellow-200">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-amber-900">Windshield Repair</h3>
              <p className="text-amber-800 text-sm">Quick chip and crack repairs</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-yellow-200">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-amber-900">Glass Replacement</h3>
              <p className="text-amber-800 text-sm">Full windshield replacement</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-yellow-200">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-amber-900">Side Windows</h3>
              <p className="text-amber-800 text-sm">Door and side window repair</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-yellow-200">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-amber-900">Emergency Service</h3>
              <p className="text-amber-800 text-sm">24/7 emergency repairs</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-yellow-500 to-amber-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Need Auto Glass Repair?
          </h2>
          <p className="text-xl text-yellow-100 mb-8">
            Get your vehicle back on the road safely and quickly. Contact us today for a free quote!
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-amber-600 rounded-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
