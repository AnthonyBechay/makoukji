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

  const glassServices = services.filter((service) =>
    ['WINDSHIELD', 'BACKLIGHT', 'DOOR & SIDE GLASS', 'ROOF GLASS'].includes(service.title)
  );

  const vehicleServices = services.filter((service) =>
    ['SUPER CARS', 'TRUCK', 'HEAVY MACHINERY', 'BUS', 'BOAT & YACHT GLASS'].includes(service.title)
  );

  return (
    <article className="min-h-screen pt-24 pb-24 px-4 sm:px-6 lg:px-8 bg-white">
      {/* Hero Section */}
      <section className="py-20 mb-20 border-b border-gray-200 safe-x-pad">
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

      {/* Our Glass Solutions - The Parts */}
      <section className="max-w-7xl mx-auto mb-24 safe-x-pad">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Our Glass Solutions
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Replacement glass for the key parts of your vehicle: windshield, backlight, door and side glass, and roof glass.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
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

      {/* Vehicles We Cover - The Coverage */}
      <section className="max-w-7xl mx-auto mb-24 safe-x-pad">
        <div className="bg-gray-50 rounded-2xl p-10 md:p-14 border border-gray-200 shadow-sm">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Vehicles We Cover
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              From super cars to heavy machinery and buses, we provide professional glass replacement for every vehicle category.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicleServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-200 flex flex-col h-full"
              >
                <div className="w-12 h-12 bg-[#fae633]/90 rounded-lg flex items-center justify-center mb-5 text-white">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed flex-1">
                  {service.description}
                </p>
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
