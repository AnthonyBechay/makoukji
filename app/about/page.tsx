import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'About Us - Makoukji Auto Glass | Lebanon\'s Most Renowned Since 1964',
  description: 'Ets. Georges Makoukji - Founded in 1964, Lebanon\'s most renowned autoglass company with over 60 years of excellence.',
};

export default function About() {
  return (
    <article className="min-h-screen pt-24 pb-24 px-4 sm:px-6 lg:px-8 bg-white">
      {/* Hero Section */}
      <section className="py-20 mb-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-[#fae633] text-white rounded-md text-sm font-semibold">
            ABOUT US
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            Lebanon's Most Renowned Auto Glass Company
          </h1>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="px-6 py-3 bg-[#fae633] text-white rounded-md font-semibold shadow-md">
              Established 1964
            </div>
            <div className="px-6 py-3 bg-gray-900 text-white rounded-md font-semibold shadow-md">
              60+ Years of Excellence
            </div>
            <div className="px-6 py-3 bg-[#fae633] text-white rounded-md font-semibold shadow-md">
              Lebanon's Reference
            </div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Serving Lebanon with unmatched quality and comprehensive autoglass solutions
          </p>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="max-w-7xl mx-auto mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-[#fae633] text-white rounded-md text-sm font-semibold">
              OUR LEGACY
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              A Legacy of Excellence Since 1964
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                <strong className="text-[#fae633]">Ets. Georges Makoukji for autoglass</strong> was first founded in <strong className="text-gray-900">1964</strong> by Mr. Georges Makoukji on Dora highway towards the city of Beirut. We have successfully navigated all challenges and obstacles in Lebanon over the past six decades, establishing ourselves as the country's most trusted and renowned autoglass company.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                In the beginning of the 21st century, the present Owner and General Manager Mr. Joseph Makoukji expanded the business into a newer and bigger operation by adding a new branch and a <strong className="text-[#fae633]">1500 square meters warehouse</strong>, ensuring we maintain the most comprehensive inventory of autoglass in Lebanon.
              </p>
            </div>
          </div>

          {/* Visual */}
          <div className="relative h-[400px] rounded-lg overflow-hidden bg-gradient-to-br from-[#fae633] to-[#d4c82a] shadow-xl">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white space-y-6 p-8">
                <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg mx-auto">
                  <span className="text-5xl font-bold">1964</span>
                </div>
                <p className="text-2xl font-bold">Over 60 Years</p>
                <p className="text-gray-200">of Excellence</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Card */}
        <div className="bg-gray-900 rounded-lg p-12 md:p-16 text-white shadow-xl">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-block px-4 py-2 bg-[#fae633] rounded-md mb-6 text-sm font-semibold">
                OUR COMMITMENT
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Quality & Excellence
              </h2>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <p className="text-xl md:text-2xl text-gray-100 leading-relaxed text-center mb-8">
                Our aim is to maintain a <strong className="text-white">high quality service</strong> in order to best serve our clients and to prove our presence in the Lebanese and international market. Ets. Georges Makoukji specializes in the area of autoglass and rubbers for all vehicles, generators and machinery.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="p-6 bg-white/5 rounded-lg border border-white/10">
                  <div className="text-3xl font-bold text-white mb-2">Comprehensive</div>
                  <div className="text-gray-300">Product Range</div>
                </div>
                <div className="p-6 bg-white/5 rounded-lg border border-white/10">
                  <div className="text-3xl font-bold text-white mb-2">Best</div>
                  <div className="text-gray-300">Quality</div>
                </div>
                <div className="p-6 bg-white/5 rounded-lg border border-white/10">
                  <div className="text-3xl font-bold text-white mb-2">Competitive</div>
                  <div className="text-gray-300">Prices</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why We're The Best Section */}
      <section className="max-w-7xl mx-auto mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Why We're Lebanon's Most Renowned
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'The Oldest',
              description: 'Founded in 1964, we have over 60 years of experience serving Lebanon. Our longevity speaks to our reliability and trustworthiness.',
              gradient: 'from-[#fae633] to-[#d4c82a]',
            },
            {
              title: 'The Best',
              description: 'Premium quality products, competitive prices, and comprehensive services. We maintain the most extensive inventory in Lebanon.',
              gradient: 'from-gray-800 to-gray-900',
            },
            {
              title: 'The Reference',
              description: 'As Lebanon\'s most renowned autoglass company, we are the trusted reference for all autoglass needs across the country.',
              gradient: 'from-[#fae633] to-[#d4c82a]',
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${item.gradient} p-10 rounded-lg text-white shadow-lg`}
            >
              <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-100 leading-relaxed text-lg">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Expertise Section */}
      <section className="max-w-7xl mx-auto mb-24">
        <div className="bg-white rounded-lg p-12 md:p-16 border border-gray-200 shadow-sm">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-[#fae633] text-white rounded-md mb-6 text-sm font-semibold">
              OUR EXPERTISE
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Specialized Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-lg text-gray-700 leading-relaxed">
                Ets. Georges Makoukji for autoglass is specialized in the area of autoglass (windshields, backlights, side windows and quarters) for all vehicle brands from the smallest car to the biggest truck or bus, in addition to yachts.
              </p>
            </div>
            <div className="p-8 bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-lg text-gray-700 leading-relaxed">
                We have a trained team that uses the most important products in the market today to help you solve all the problems that you encounter with your autoglass.
              </p>
            </div>
          </div>
          <div className="mt-8 p-8 bg-[#fae633] rounded-lg text-white">
            <p className="text-lg leading-relaxed text-center">
              Ets. Georges Makoukji for autoglass offers a wide variety of window and windshield rubber for all vehicles, in addition to mirrors and plexiglas.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto text-center">
        <div className="bg-gray-900 rounded-lg p-12 md:p-16 text-white shadow-xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experience Excellence
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of satisfied customers who trust Makoukji for their autoglass needs
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-3 bg-[#fae633] text-white rounded-md font-semibold text-lg hover:bg-[#d4c82a] transition-colors duration-200 shadow-md btn-lift"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </article>
  );
}
