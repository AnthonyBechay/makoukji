export const metadata = {
  title: 'Our Services - Makoukji Auto Glass',
  description: 'Professional auto glass repair and replacement services in Dora, Lebanon. Windshield repair, glass replacement, and emergency services.',
};

export default function Services() {
  const services = [
    {
      title: 'Windshield Repair',
      description: 'Quick and professional windshield chip and crack repairs. We can fix most damage before it spreads, saving you time and money.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      color: 'from-yellow-500 to-amber-500',
    },
    {
      title: 'Windshield Replacement',
      description: 'Full windshield replacement using premium OEM and aftermarket glass. Professional installation with quality guarantee.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      color: 'from-amber-500 to-yellow-500',
    },
    {
      title: 'Side Window Repair',
      description: 'Expert repair and replacement of side windows and door glass. Fast service to get you back on the road safely.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'from-yellow-500 to-amber-500',
    },
    {
      title: 'Rear Window Replacement',
      description: 'Professional rear window replacement for all vehicle makes and models. Quality glass and expert installation.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      color: 'from-amber-500 to-yellow-500',
    },
    {
      title: 'Emergency Service',
      description: '24/7 emergency auto glass repair service. We understand that glass damage can happen anytime - we\'re here to help.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'from-yellow-500 to-amber-500',
    },
    {
      title: 'Mobile Service',
      description: 'We come to you! Mobile auto glass repair service available in Dora and surrounding areas. Convenient and professional.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      color: 'from-amber-500 to-yellow-500',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-yellow-50">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl text-amber-800 max-w-3xl mx-auto">
            Professional auto glass repair and replacement services in Dora, Lebanon
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-yellow-200"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center text-white mb-6 shadow-md`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-amber-900">
                {service.title}
              </h3>
              <p className="text-amber-800">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-yellow-500 to-amber-500 rounded-xl p-12 text-center text-white shadow-lg">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free quote on your auto glass repair or replacement needs
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-amber-600 rounded-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200 shadow-md"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
