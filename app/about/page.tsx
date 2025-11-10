export const metadata = {
  title: 'About Us - Makoukji',
  description: 'Learn more about Makoukji and our mission to deliver exceptional business solutions.',
};

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Makoukji
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Your trusted partner for innovative business solutions
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Our Story</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              Makoukji was founded with a vision to transform businesses through innovative solutions and exceptional service. We believe in building long-term partnerships with our clients, understanding their unique needs, and delivering results that exceed expectations.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              Our team of experts brings years of experience and a passion for excellence to every project. We combine industry knowledge with cutting-edge technology to provide solutions that drive growth and success.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              At Makoukji, we're not just service providers—we're your partners in success. We're committed to helping you achieve your goals and reach new heights in your business journey.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Our Values</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Innovation</h3>
                  <p className="text-gray-600 dark:text-gray-300">We embrace new technologies and creative solutions</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Excellence</h3>
                  <p className="text-gray-600 dark:text-gray-300">We strive for perfection in everything we do</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Integrity</h3>
                  <p className="text-gray-600 dark:text-gray-300">We conduct business with honesty and transparency</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Partnership</h3>
                  <p className="text-gray-600 dark:text-gray-300">We build lasting relationships with our clients</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl max-w-3xl mx-auto">
            To empower businesses with innovative solutions, exceptional service, and unwavering commitment to their success. We aim to be the trusted partner that helps organizations achieve their goals and realize their full potential.
          </p>
        </div>
      </div>
    </div>
  );
}

