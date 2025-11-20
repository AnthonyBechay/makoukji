import Link from 'next/link';

export const metadata = {
  title: 'Our Services - Makoukji Auto Glass | Comprehensive Autoglass Solutions',
  description: 'Professional autoglass services: Roof glass, windshield, side windows, rubber, super cars, trucks, heavy machinery, buses, and boat & yacht glasses.',
};

export default function Services() {
  const services = [
    {
      title: 'WINDSHIELD',
      description:
        'Front windshield replacement for all vehicle brands. We stock a wide range of high-quality glass and install it using factory-approved methods so your view and safety are restored.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 6h18l-1 9a2 2 0 01-2 2H6a2 2 0 01-2-2L3 6z"
          />
        </svg>
      ),
    },
    {
      title: 'BACKLIGHT',
      description:
        'Rear glass (backlight) replacement for hatchbacks, sedans, SUVs, and vans. We match the correct curvature and heating lines so your rear visibility and defrost function work perfectly.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 7h16l-1 10H5L4 7z"
          />
        </svg>
      ),
    },
    {
      title: 'DOOR & SIDE GLASS',
      description:
        'Door and side glass replacement when windows are smashed, scratched, or jammed. We fit the correct glass and ensure smooth window operation and proper sealing against dust and water.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 5h10l2 14H6V5z"
          />
        </svg>
      ),
    },
    {
      title: 'ROOF GLASS',
      description:
        'Replacement of fixed and sliding roof glass panels. We handle panoramic roofs and specialty roof glass, restoring both appearance and weather protection.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 7h16M6 5h12a2 2 0 012 2v9H4V7a2 2 0 012-2z"
          />
        </svg>
      ),
    },
    {
      title: 'SUPER CARS',
      description:
        'Special autoglass sourcing and installation for luxury and super cars. We respect factory specifications and finishes so your high-end vehicle keeps its original look and performance.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'TRUCK',
      description:
        'Heavy-duty windshield and glass replacement for small and large trucks. Strong, durable glass and professional fitting to handle Lebanon’s roads and commercial use.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'HEAVY MACHINERY',
      description:
        'Glass replacement for excavators, cranes, loaders, generators, and industrial equipment. We install thick, impact-resistant glass built for demanding job sites.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: 'BUS',
      description:
        'Windshield and side glass replacement for buses and coaches. Our team safely handles oversized glass and ensures clear visibility for passengers and drivers.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
    },
    {
      title: 'BOAT & YACHT GLASS',
      description:
        'Marine glass replacement for boats and yachts. We use marine-grade glass and installation techniques suited for saltwater and harsh coastal conditions.',
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
            Windshield & Glass Replacement in Beirut
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fast, professional auto glass replacement for drivers across Dora, Beirut and all of Lebanon — focused on windshields, backlights, door glass, side glass, and roof glass.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm hover:shadow-md hover:border-[#fae633] transition-all duration-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Windshield & Backlight Replacement
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Cracked or shattered front or rear glass? We stock a wide range of OEM and high-quality aftermarket windshields and backlights for vehicles across Lebanon.
              Our technicians in Dora, Beirut follow factory-approved installation methods so your vehicle is safe, sealed, and ready for inspection.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm hover:shadow-md hover:border-[#fae633] transition-all duration-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Door & Side Glass Replacement
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Broken door or side glass? We replace smashed or scratched windows with perfectly matched glass so your car is secure again.
              From everyday cars to commercial fleets, we handle precise alignment and sealing to keep out noise, dust, and water.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm hover:shadow-md hover:border-[#fae633] transition-all duration-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Roof Glass & Specialty Glass
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We provide replacement glass for roof panels and specialty applications, including rare and hard-to-find pieces.
              Our team sources and installs the right glass for your vehicle, preserving both safety and the original design.
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
