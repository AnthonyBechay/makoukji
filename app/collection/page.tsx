'use client';

import Link from 'next/link';

export default function Collection() {
  return (
    <article className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="py-16 mb-16 border-b border-gray-200">
          <div className="text-center">
            <div className="inline-block mb-6 px-6 py-3 bg-[#fae633] text-white rounded-md text-base md:text-lg font-semibold">
              SPECIAL COLLECTION
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Special & Very Rare Glasses
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Exclusive collection of glass for classic and collection cars
            </p>
          </div>
        </section>

        {/* Coming Soon Card */}
        <section className="max-w-5xl mx-auto mb-20">
          <div className="bg-white rounded-lg p-12 md:p-20 border-2 border-gray-300 shadow-lg">
            <div className="text-center space-y-8">
              {/* Icon */}
              <div className="flex justify-center mb-8">
                <div className="w-32 h-32 bg-[#fae633] rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
              </div>

              {/* Main Message */}
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Coming Soon
              </h2>
              
              <div className="bg-gray-50 rounded-lg p-8 md:p-12 border border-gray-200">
                <p className="text-xl md:text-2xl text-gray-700 mb-4 leading-relaxed">
                  We are currently <strong className="text-[#fae633]">developing</strong> this exclusive section to showcase our collection of special and very rare glasses for collection cars.
                </p>
                <p className="text-lg text-gray-600">
                  Stay tuned for an amazing collection of hard-to-find autoglass pieces!
                </p>
              </div>

              {/* Features Preview */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                {[
                  { title: 'Classic Cars', desc: 'Rare glass for vintage vehicles' },
                  { title: 'Premium Quality', desc: 'Authentic and original parts' },
                  { title: 'Expert Sourcing', desc: 'Hard-to-find pieces' },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-lg p-8 border border-gray-200"
                  >
                    <h3 className="text-xl font-bold text-[#fae633] mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <Link
                  href="/contact"
                  className="px-8 py-3 bg-[#fae633] text-white rounded-md font-semibold text-lg hover:bg-[#d4c82a] transition-colors duration-200 shadow-md btn-lift"
                >
                  Contact Us for Inquiries
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-3 border-2 border-[#fae633] text-[#fae633] rounded-md font-semibold text-lg hover:bg-[#fae633] hover:text-white transition-colors duration-200 btn-lift"
                >
                  View Our Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Info Section */}
        <section className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-lg p-12 md:p-16 border border-gray-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">About Our Collection</h3>
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              At Ets. Georges Makoukji, we understand the unique needs of collection car owners. Our special collection section will feature rare and hard-to-find autoglass pieces for classic and vintage vehicles. We're working hard to bring you the best selection of authentic parts for your prized collection.
            </p>
          </div>
        </section>
      </div>
    </article>
  );
}
