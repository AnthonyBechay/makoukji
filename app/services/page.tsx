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
      icon: '🚗',
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-500/20 to-cyan-500/20',
    },
    {
      title: 'WINDSHIELD',
      description: 'Expert windshield repair and replacement using premium OEM and aftermarket glass. Professional installation with quality guarantee.',
      icon: '🪟',
      gradient: 'from-[#2596be] to-[#1e7a9a]',
      bgGradient: 'from-[#2596be]/20 to-[#1e7a9a]/20',
    },
    {
      title: 'SIDE WINDOW',
      description: 'Professional side window repair and replacement for all vehicle makes and models. Fast service to get you back on the road.',
      icon: '🚪',
      gradient: 'from-[#FFD700] to-[#FFA500]',
      bgGradient: 'from-[#FFD700]/20 to-[#FFA500]/20',
    },
    {
      title: 'RUBBER',
      description: 'Wide variety of window and windshield rubber for all vehicles. Quality seals and gaskets to ensure perfect fit and protection.',
      icon: '🔧',
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-500/20 to-pink-500/20',
    },
    {
      title: 'SUPER CARS',
      description: 'Specialized autoglass services for luxury and super cars. Premium quality glass and expert installation for high-end vehicles.',
      icon: '🏎️',
      gradient: 'from-red-500 to-orange-500',
      bgGradient: 'from-red-500/20 to-orange-500/20',
    },
    {
      title: 'TRUCK',
      description: 'Heavy-duty autoglass solutions for trucks of all sizes. Durable glass and professional installation for commercial vehicles.',
      icon: '🚛',
      gradient: 'from-gray-600 to-gray-800',
      bgGradient: 'from-gray-600/20 to-gray-800/20',
    },
    {
      title: 'HEAVY MACHINERY',
      description: 'Specialized glass solutions for heavy machinery, generators, and industrial equipment. Built to withstand tough conditions.',
      icon: '⚙️',
      gradient: 'from-yellow-600 to-orange-600',
      bgGradient: 'from-yellow-600/20 to-orange-600/20',
    },
    {
      title: 'BUS',
      description: 'Large-scale autoglass services for buses and commercial passenger vehicles. Expert handling of oversized glass installations.',
      icon: '🚌',
      gradient: 'from-green-500 to-teal-500',
      bgGradient: 'from-green-500/20 to-teal-500/20',
    },
    {
      title: 'BOAT & YACHT GLASSES',
      description: 'Marine-grade glass solutions for boats and yachts. Specialized installation for marine environments with saltwater resistance.',
      icon: '⛵',
      gradient: 'from-cyan-500 to-blue-600',
      bgGradient: 'from-cyan-500/20 to-blue-600/20',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 mb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2596be]/10 via-transparent to-[#FFD700]/10"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-block mb-6 px-6 py-3 bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-full">
            <span className="text-sm font-bold text-black tracking-wider">OUR SERVICES</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-extrabold mb-8">
            <span className="gradient-text">Our Services</span>
          </h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-semibold">
            Comprehensive autoglass solutions for all vehicle types
          </p>
        </div>
      </section>

      {/* Services Description */}
      <section className="max-w-7xl mx-auto mb-20">
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-12 md:p-16 border-2 border-[#2596be] futuristic-border premium-shadow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-gradient-to-br from-[#2596be]/10 to-transparent rounded-2xl border border-[#2596be]/20">
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong className="text-[#2596be] text-xl">Ets. Georges Makoukji for autoglass</strong> is specialized in the area of autoglass (windshields, backlights, side windows and quarters) for all vehicle brands from the smallest car to the biggest truck or bus, in addition to yachts.
              </p>
            </div>
            <div className="p-8 bg-gradient-to-br from-[#FFD700]/10 to-transparent rounded-2xl border border-[#FFD700]/20">
              <p className="text-lg text-gray-700 leading-relaxed">
                We have a trained team that uses the most important products in the market today to help you solve all the problems that you encounter with your autoglass.
              </p>
            </div>
          </div>
          <div className="mt-8 p-8 bg-gradient-to-r from-[#2596be]/5 to-[#FFD700]/5 rounded-2xl border-2 border-[#2596be]/30">
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              <strong className="text-[#FFD700]">Ets. Georges Makoukji for autoglass</strong> offers a wide variety of window and windshield rubber for all vehicles, in addition to mirrors and plexiglas.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid - Modern Cards */}
      <section className="max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 border-2 border-gray-200 futuristic-border card-hover premium-shadow overflow-hidden"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 text-4xl`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-extrabold mb-4 text-black group-hover:text-[#2596be] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {service.description}
                </p>
              </div>

              {/* Decorative Elements */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-full blur-3xl transform group-hover:scale-150 transition-all duration-500`}></div>
            </div>
          ))}
        </div>
      </section>

      {/* Coverage Section - Enhanced */}
      <section className="max-w-7xl mx-auto mb-20">
        <div className="bg-gradient-to-br from-black via-gray-900 to-black rounded-3xl p-12 md:p-16 border-2 border-[#FFD700] futuristic-border premium-shadow-dark relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#2596be] rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FFD700] rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="relative">
            <div className="text-center mb-12">
              <div className="inline-block px-6 py-3 bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-full mb-6">
                <span className="text-sm font-bold text-black tracking-wider">OUR COVERAGE</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                Comprehensive Vehicle Coverage
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From the smallest car to the biggest truck or bus, in addition to yachts - we provide comprehensive autoglass solutions for all vehicle types.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: '🚗', label: 'Cars', color: 'from-blue-500 to-cyan-500' },
                { icon: '🚛', label: 'Trucks', color: 'from-gray-500 to-gray-700' },
                { icon: '🚌', label: 'Buses', color: 'from-green-500 to-teal-500' },
                { icon: '⛵', label: 'Yachts', color: 'from-cyan-500 to-blue-600' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 glass-effect-dark text-center group hover:bg-white/20 transition-all duration-300"
                >
                  <div className="text-5xl mb-4 transform group-hover:scale-125 transition-transform float-animation">
                    {item.icon}
                  </div>
                  <div className={`font-bold text-transparent bg-clip-text bg-gradient-to-r ${item.color} text-xl`}>
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFD700] rounded-3xl p-12 md:p-16 relative overflow-hidden premium-shadow">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-900 mb-8 font-semibold">
              Contact us today for a free quote on your autoglass repair or replacement needs
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-5 bg-black text-[#FFD700] rounded-xl font-bold text-lg hover:bg-[#2596be] hover:text-white transform hover:scale-105 transition-all duration-300 premium-shadow futuristic-border"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
