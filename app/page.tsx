import Link from 'next/link';
import DynamicHeroVisual from '@/components/DynamicHeroVisual';
import TestimonialsSlider from '@/components/TestimonialsSlider';

export default function Home() {
  return (
    <article className="min-h-screen bg-white">
      {/* Hero Section - Professional */}
      <section className="relative pt-40 pb-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white gpu-transform safe-x-pad">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-gray-900 space-y-12">
              <div className="inline-block px-6 py-3 bg-[#fae633] text-white rounded-md text-lg font-semibold tracking-wide shadow-md">
                ESTABLISHED 1964 • LEBANON'S MOST RENOWNED AUTO GLASS COMPANY
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-[4.75rem] xl:text-[5.25rem] font-extrabold leading-tight text-gray-900">
                Lebanon's Trusted Auto Glass Experts
                <span className="block text-[#fae633] mt-4 text-2xl md:text-3xl lg:text-4xl">Since 1964</span>
              </h1>
              
              <p className="text-xl md:text-2xl lg:text-[1.45rem] text-gray-600 leading-relaxed max-w-2xl">
                With over <strong className="text-[#fae633]">60 years of experience</strong>, we are Lebanon's most renowned autoglass company. We maintain the most comprehensive inventory of car glass in the region, ensuring we have what you need when you need it.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/contact"
                  className="px-9 py-3.5 bg-[#fae633] text-black rounded-md font-semibold text-xl hover:bg-[#d4c82a] transition-colors duration-200 shadow-lg btn-lift"
                >
                  Get Free Quote
                </Link>
                <Link
                  href="/services"
                  className="px-9 py-3.5 bg-black text-white rounded-md font-semibold text-xl hover:bg-[#fae633] hover:text-black transition-colors duration-200 shadow-md btn-lift"
                >
                  View Our Services
                </Link>
              </div>
            </div>

            {/* Right Visual */}
            <DynamicHeroVisual />
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-y border-gray-200 safe-x-pad">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '60+', label: 'Years of Excellence' },
              { number: '1500', label: 'Sq Meters Warehouse' },
              { number: '100%', label: 'Quality Guaranteed' },
              { number: 'All', label: 'Car Glass Types' },
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 safe-x-pad">
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

      {/* Testimonials - Trusted by Drivers in Lebanon */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white safe-x-pad">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Trusted by Drivers in Lebanon
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A sample of the kind of feedback we receive from customers across Beirut, Dora, and all over Lebanon.
            </p>
          </div>
          <TestimonialsSlider />
        </div>
      </section>

      {/* Services Overview - Professional */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white safe-x-pad">
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
            {[
              'ROOF GLASS',
              'WINDSHIELD',
              'SIDE WINDOW',
              'RUBBER',
              'SUPER CARS',
              'TRUCK',
              'HEAVY MACHINERY',
              'BUS',
            ].map((service, index) => (
              <div
                key={index}
                className="glass-effect bg-white/70 p-6 rounded-lg border border-white/40 text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl gpu-transform"
              >
                <h3 className="text-sm font-semibold text-gray-900">
                  {service}
                </h3>
              </div>
            ))}
          </div>

          <div className="bg-[#fae633] rounded-lg p-8 text-center text-white">
            <p className="text-lg mb-6">
              Plus specialized services for boats, yachts, and all types of vehicles
            </p>
            <Link
              href="/services"
              className="inline-block px-8 py-3 bg-white text-[#fae633] rounded-md font-semibold hover:bg-gray-100 transition-colors duration-200 btn-lift"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Find Us - Dora Trade Center */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 safe-x-pad">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Find Us in Dora
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Our main workshop is located in <strong>Dora Trade Center</strong> on Dora Highway, making it easy to reach from Beirut and all surrounding areas.
            </p>
            <p className="text-lg text-gray-600">
              Visit us directly or contact us first for availability and a quick quote. We handle windshields, backlights, door and side glass, roof glass, and more.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl border border-gray-200">
            <iframe
              title="Makoukji Auto Glass - Dora Trade Center"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3338.9850712139795!2d35.5464358!3d33.8954202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f3dd7c934d7ad%3A0x8c13b0a6f8a2f3a5!2sDora%20Trade%20Center!5e0!3m2!1sen!2slb!4v1700000000000"
              width="100%"
              height="360"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full border-0"
            />
          </div>
        </div>
      </section>

      {/* CTA Section - Professional */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white safe-x-pad">
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
              className="px-10 py-3 bg-[#fae633] text-white rounded-md font-semibold text-lg hover:bg-[#d4c82a] transition-colors duration-200 shadow-md btn-lift"
            >
              Contact Us Today
            </Link>
            <Link
              href="/about"
              className="px-10 py-3 border-2 border-white text-white rounded-md font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors duration-200 btn-lift"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
