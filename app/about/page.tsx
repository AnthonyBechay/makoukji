export const metadata = {
  title: 'About Us - Makoukji Auto Glass',
  description: 'Learn more about Ets. Georges Makoukji - your trusted auto glass repair experts in Dora, Lebanon.',
};

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-yellow-50">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">
            About Makoukji Auto Glass
          </h1>
          <p className="text-xl text-amber-800 max-w-3xl mx-auto">
            Your trusted auto glass repair experts in Dora, Lebanon
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-amber-900">Our Story</h2>
            <p className="text-lg text-amber-800 mb-4">
              Ets. Georges Makoukji has been serving the Dora community and surrounding areas with professional auto glass repair and replacement services for years. We understand that when your vehicle's glass is damaged, you need fast, reliable, and professional service.
            </p>
            <p className="text-lg text-amber-800 mb-4">
              Our team of experienced technicians brings years of expertise to every job. We use only the highest quality glass and materials, ensuring your vehicle is restored to its original condition. Whether it's a small chip that needs repair or a full windshield replacement, we handle every job with care and precision.
            </p>
            <p className="text-lg text-amber-800">
              Located in Dora, Lebanon, we're proud to be your local auto glass experts. We're committed to providing exceptional service, fair pricing, and getting you back on the road safely and quickly.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-yellow-100 to-amber-100 rounded-xl p-8 border border-yellow-200 shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-amber-900">Our Values</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-yellow-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h3 className="font-semibold text-amber-900 mb-1">Quality</h3>
                  <p className="text-amber-800">We use only premium materials and professional installation techniques</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-yellow-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h3 className="font-semibold text-amber-900 mb-1">Speed</h3>
                  <p className="text-amber-800">Fast turnaround times - most repairs completed the same day</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-yellow-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h3 className="font-semibold text-amber-900 mb-1">Reliability</h3>
                  <p className="text-amber-800">Trusted service you can count on, backed by our quality guarantee</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-yellow-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h3 className="font-semibold text-amber-900 mb-1">Customer Service</h3>
                  <p className="text-amber-800">We treat every customer with respect and provide personalized service</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-gradient-to-r from-yellow-500 to-amber-500 rounded-xl p-12 text-center text-white shadow-lg">
          <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl max-w-3xl mx-auto">
            To provide the highest quality auto glass repair and replacement services in Dora, Lebanon. We're committed to getting you back on the road safely and quickly, with professional service you can trust.
          </p>
        </div>
      </div>
    </div>
  );
}
