import Link from 'next/link';

export const metadata = {
  title: 'Our Services - Makoukji Auto Glass | Comprehensive Autoglass Solutions',
  description: 'Professional autoglass services: Roof glass, windshield, side windows, rubber, super cars, trucks, heavy machinery, buses, and boat & yacht glasses.',
};

export default function Services() {
  const services = [
    {
      title: 'ROOF GLASS',
      description: 'Professional roof glass installation and replacement for all vehicle types. Expert service ensuring perfect fit and seal.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      title: 'WINDSHIELD',
      description: 'Expert windshield repair and replacement using premium OEM and aftermarket glass. Professional installation with quality guarantee.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'SIDE WINDOW',
      description: 'Professional side window repair and replacement for all vehicle makes and models. Fast service to get you back on the road.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      ),
    },
    {
      title: 'RUBBER',
      description: 'Wide variety of window and windshield rubber for all vehicles. Quality seals and gaskets to ensure perfect fit and protection.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'SUPER CARS',
      description: 'Specialized autoglass services for luxury and super cars. Premium quality glass and expert installation for high-end vehicles.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'TRUCK',
      description: 'Heavy-duty autoglass solutions for trucks of all sizes. Durable glass and professional installation for commercial vehicles.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'HEAVY MACHINERY',
      description: 'Specialized glass solutions for heavy machinery, generators, and industrial equipment. Built to withstand tough conditions.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: 'BUS',
      description: 'Large-scale autoglass services for buses and commercial passenger vehicles. Expert handling of oversized glass installations.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
    },
    {
      title: 'BOAT & YACHT GLASSES',
      description: 'Marine-grade glass solutions for boats and yachts. Specialized installation for marine environments with saltwater resistance.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <article className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
      {/* Hero Section */}
      <section className="py-16 mb-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-[#fae633] text-white rounded-md text-sm font-semibold">
            OUR SERVICES
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            Comprehensive Autoglass Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional autoglass services for all vehicle types
          </p>
        </div>
      </section>

      {/* Services Description */}
      <section className="max-w-7xl mx-auto mb-20">
        <div className="bg-gray-50 rounded-lg p-12 md:p-16 border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-white rounded-lg border border-gray-200">
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong className="text-[#fae633]">Ets. Georges Makoukji for autoglass</strong> is specialized in the area of autoglass (windshields, backlights, side windows and quarters) for all vehicle brands from the smallest car to the biggest truck or bus, in addition to yachts.
              </p>
            </div>
            <div className="p-8 bg-white rounded-lg border border-gray-200">
              <p className="text-lg text-gray-700 leading-relaxed">
                We have a trained team that uses the most important products in the market today to help you solve all the problems that you encounter with your autoglass.
              </p>
            </div>
          </div>
          <div className="mt-8 p-8 bg-[#fae633] rounded-lg text-white">
            <p className="text-lg leading-relaxed text-center">
              <strong>Ets. Georges Makoukji for autoglass</strong> offers a wide variety of window and windshield rubber for all vehicles, in addition to mirrors and plexiglas.
            </p>
          </div>
        </div>
      </section>

      {/* Key Services for Lebanon */}
      <section className="max-w-7xl mx-auto mb-20">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-[#fae633] text-white rounded-md text-sm font-semibold">
            AUTO GLASS SERVICES IN LEBANON
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4 text-gray-900">
            Windshield & Glass Services in Beirut
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fast, professional auto glass service for drivers across Dora, Beirut and all of Lebanon — including mobile glass service when you can&apos;t come to us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm hover:shadow-md hover:border-[#fae633] transition-all duration-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Windshield Replacement
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Cracked or shattered windshield? We stock a huge range of OEM and high-quality aftermarket windshields for vehicles across Lebanon.
              Our technicians in Dora, Beirut follow factory-approved installation methods so your car is safe, sealed, and ready for inspection.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm hover:shadow-md hover:border-[#fae633] transition-all duration-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Chip & Crack Repair
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Small stone chip or hairline crack? In many cases we can repair instead of replace, saving you money and keeping the original factory seal.
              Our team quickly stabilizes the damage before it spreads, using premium resins designed for Lebanon&apos;s hot sun and highway conditions.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm hover:shadow-md hover:border-[#fae633] transition-all duration-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Window Tinting & UV Protection
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Upgrade your comfort with professional car tinting in Beirut. We offer heat-rejecting, UV-blocking films that handle Lebanon&apos;s summer
              while keeping your interior protected and your car looking premium — always installed with clean, bubble-free results.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm hover:shadow-md hover:border-[#fae633] transition-all duration-200"
            >
              <div className="w-16 h-16 bg-[#fae633] rounded-lg flex items-center justify-center mb-6 text-white">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Coverage Section */}
      <section className="max-w-7xl mx-auto mb-20">
        <div className="bg-gray-900 rounded-lg p-12 md:p-16 text-white shadow-xl">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-[#fae633] rounded-md mb-6 text-sm font-semibold">
              OUR COVERAGE
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive Vehicle Coverage
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From the smallest car to the biggest truck or bus, in addition to yachts - we provide comprehensive autoglass solutions for all vehicle types.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Cars', icon: '🚗' },
              { label: 'Trucks', icon: '🚛' },
              { label: 'Buses', icon: '🚌' },
              { label: 'Yachts', icon: '⛵' },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 text-center"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <div className="font-semibold text-lg">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto text-center">
        <div className="bg-[#fae633] rounded-lg p-12 md:p-16 text-white shadow-xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Contact us today for a free quote on your autoglass repair or replacement needs
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-3 bg-white text-[#fae633] rounded-md font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 shadow-md"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </article>
  );
}
