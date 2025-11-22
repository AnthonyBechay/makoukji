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
        'Cracked or shattered front glass? We stock a wide range of OEM and high-quality aftermarket windshields for vehicles across Lebanon. Our technicians in Dora, Beirut follow factory-approved installation methods so your vehicle is safe, sealed, and ready for inspection.',
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
        'Cracked or shattered rear glass? We stock a wide range of OEM and high-quality aftermarket backlights for vehicles across Lebanon. Our technicians in Dora, Beirut follow factory-approved installation methods so your vehicle is safe, sealed, and ready for inspection.',
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
        'Broken door or side glass? We replace smashed or scratched windows with perfectly matched glass so your car is secure again. From everyday cars to commercial fleets, we handle precise alignment and sealing to keep out noise, dust, and water.',
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
        'We provide replacement glass for roof panels and specialty applications, including rare and hard-to-find pieces. Our team sources and installs the right glass for your vehicle, preserving both safety and the original design.',
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
      title: 'RUBBERS',
      description:
        'Wide variety of window and windshield rubbers for all vehicles. We supply and install high-quality rubber profiles to ensure a perfect seal against water, dust, and wind noise.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 9h16M4 12h16M4 15h16"
          />
        </svg>
      ),
    },
    {
      title: 'MIRRORS & PLEXIGLASS',
      description:
        'Side mirrors, rear-view mirrors and plexiglass panels for special applications. We help you match the right optical quality and shape so visibility and safety stay uncompromised.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h11a2 2 0 012 2v8a2 2 0 01-2 2H4V6z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 10l4 4"
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

  // Glass parts we replace (used in main services grid)
  const glassServices = services.filter((service) =>
    [
      'WINDSHIELD',
      'BACKLIGHT',
      'DOOR & SIDE GLASS',
      'ROOF GLASS',
      'RUBBERS',
      'MIRRORS & PLEXIGLASS',
    ].includes(service.title)
  );

  return (
    <article className="min-h-screen pt-24 pb-24 px-4 sm:px-6 lg:px-8 bg-white">
      {/* Hero Section */}
      <section className="py-20 mb-20 border-b border-gray-200 safe-x-pad">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block mb-6 px-6 py-3 bg-[#fae633] text-gray-900 rounded-md text-base md:text-lg font-semibold">
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

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto mb-24 safe-x-pad">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {glassServices.map((service, index) => (
            <div
              key={index}
              className="glass-effect bg-white/80 rounded-lg p-8 border border-white/40 shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col h-full gpu-transform"
            >
              <div className="w-16 h-16 bg-[#fae633] rounded-lg flex items-center justify-center mb-6 text-white">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed flex-1">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Coverage Section */}
      <section className="max-w-7xl mx-auto mb-20 safe-x-pad">
        <div className="bg-gray-900 rounded-lg p-12 md:p-16 text-white shadow-xl">
          <div className="text-center mb-12">
            <div className="inline-block px-6 py-3 bg-[#fae633] rounded-md mb-6 text-base md:text-lg font-semibold">
              OUR COVERAGE
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive Vehicle Coverage
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From super cars to heavy machinery, buses and boats, we provide comprehensive autoglass solutions for every vehicle category.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              {
                label: 'Super Cars',
                icon: '🏎️',
                desc: 'High-performance and luxury sports cars needing precision glass.',
              },
              {
                label: 'Trucks',
                icon: '🚛',
                desc: 'Light and heavy-duty trucks used for commercial transport.',
              },
              {
                label: 'Heavy Machinery',
                icon: '🏗️',
                desc: 'Excavators, cranes and industrial machines on tough job sites.',
              },
              {
                label: 'Buses',
                icon: '🚌',
                desc: 'Passenger buses and coaches carrying people safely every day.',
              },
              {
                label: 'Boats & Yachts',
                icon: '⛵',
                desc: 'Boats and yachts exposed to sun, saltwater and coastal weather.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 text-center transition-colors duration-200 hover:bg-white/15"
              >
                <div className="text-4xl mb-3 transition-opacity duration-200 group-hover:opacity-0">
                  {item.icon}
                </div>
                <div className="relative h-20">
                  <div className="absolute inset-3 flex items-center justify-center">
                    <div className="font-semibold text-base text-center transition-opacity duration-200 group-hover:opacity-0">
                      {item.label}
                    </div>
                  </div>
                  <div className="absolute inset-3 flex items-center justify-center">
                    <p className="text-xs md:text-sm leading-snug text-[#fae633] font-semibold text-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto text-center safe-x-pad">
        <div className="bg-[#fae633] rounded-lg p-12 md:p-16 text-white shadow-xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Contact us today for a free quote on your autoglass repair or replacement needs
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-3 bg-white text-[#fae633] rounded-md font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 shadow-md btn-lift"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </article>
  );
}
