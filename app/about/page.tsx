import Link from 'next/link';

export const metadata = {
  title: 'About Us - Makoukji Auto Glass | Lebanon\'s Most Renowned Since 1964',
  description: 'Ets. Georges Makoukji - Founded in 1964, Lebanon\'s most renowned autoglass company with over 60 years of excellence.',
};

export default function About() {
  return (
    <article className="min-h-screen pt-24 pb-24 px-4 sm:px-6 lg:px-8 bg-white">
      {/* Hero Section */}
      <section className="py-12 md:py-20 mb-20 border-b border-gray-200 safe-x-pad">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block mb-6 px-6 py-3 bg-[#fae633] text-gray-900 rounded-md text-base md:text-lg font-semibold">
            ABOUT US
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            Lebanon's Most Renowned Auto Glass Company
          </h1>
          <div className="flex flex-col sm:flex-wrap sm:flex-row justify-center gap-3 sm:gap-4 mb-8">
            <div className="w-full sm:w-auto text-center px-6 py-3 bg-[#fae633] text-white rounded-md font-semibold text-sm sm:text-base shadow-md">
              Established 1964
            </div>
            <div className="w-full sm:w-auto text-center px-6 py-3 bg-gray-900 text-white rounded-md font-semibold text-sm sm:text-base shadow-md">
              60+ Years of Excellence
            </div>
            <div className="w-full sm:w-auto text-center px-6 py-3 bg-[#fae633] text-white rounded-md font-semibold text-sm sm:text-base shadow-md">
              Lebanon's Reference
            </div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Serving Lebanon with unmatched quality and comprehensive autoglass solutions
          </p>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="max-w-7xl mx-auto mb-24 safe-x-pad">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-block px-6 py-3 bg-[#fae633] text-gray-900 rounded-md text-base md:text-lg font-semibold">
              OUR LEGACY
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
              A Legacy of Excellence Since 1964
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                <strong className="text-[#fae633]">Ets. Georges Makoukji for autoglass</strong> was first founded in <strong className="text-gray-900">1964</strong> by Mr. Georges Makoukji on Dora highway towards the city of Beirut. We have successfully navigated all challenges and obstacles in Lebanon over the past six decades, establishing ourselves as the country's most trusted and renowned autoglass company, working closely with most major insurance companies in Lebanon.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                In the beginning of the 21st century, the present Owner and General Manager Mr. Joseph Makoukji expanded the business into a newer and bigger operation by adding a new branch and a <strong className="text-[#fae633]">1500 square meters warehouse</strong>, ensuring we maintain the most comprehensive inventory of autoglass in Lebanon.
              </p>
            </div>
          </div>

          {/* Visual Yellow Box (hidden on small screens to declutter) */}
          <div className="relative hidden md:block h-72 sm:h-80 md:h-96 rounded-3xl overflow-hidden shadow-[0_24px_70px_rgba(0,0,0,0.18)] bg-gradient-to-br from-[#fae633] via-[#fae633] to-[#d4c82a]">
            {/* soft light */}
            <div
              className="absolute inset-0 opacity-40"
              style={{
                background: `
                  radial-gradient(circle at 20% 20%, rgba(255,255,255,0.35) 0%, transparent 55%),
                  radial-gradient(circle at 80% 80%, rgba(255,255,255,0.25) 0%, transparent 55%)
                `,
              }}
            />
            <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-6 space-y-5">
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-black/60 backdrop-blur-sm text-xs font-semibold uppercase tracking-[0.15em]">
                <span className="w-2 h-2 rounded-full bg-[#fae633]" />
                <span>Since 1964</span>
              </div>
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center shadow-[0_18px_40px_rgba(0,0,0,0.25)]">
                <span className="text-3xl md:text-4xl font-extrabold">60+</span>
              </div>
              <div className="space-y-1">
                <p className="text-xl md:text-2xl font-bold tracking-wide">
                  Years of Excellence
                </p>
                <p className="text-sm md:text-base text-white/90">
                  Lebanon&apos;s most renowned auto glass company
                </p>
              </div>
              <div className="mt-2 flex w-full max-w-xs justify-center gap-2">
                <span className="h-1 flex-1 rounded-full bg-white/60" />
                <span className="h-1 flex-1 rounded-full bg-white/30" />
                <span className="h-1 flex-1 rounded-full bg-white/20" />
              </div>
            </div>
          </div>

        </div>

        {/* Mission Card */}
        <div className="bg-gray-900 rounded-lg p-8 md:p-16 text-white shadow-xl">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-6 md:mb-8">
              <div className="inline-block px-6 py-3 bg-[#fae633] rounded-md mb-6 text-base md:text-lg font-semibold">
                OUR COMMITMENT
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
                Quality & Excellence
              </h2>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-white/20">
              <p className="text-lg md:text-2xl text-gray-100 leading-relaxed text-center mb-6 md:mb-8">
                Our aim is to maintain a <strong className="text-white">high quality service</strong> in order to best serve our clients and to prove our presence in the Lebanese and international market. Ets. Georges Makoukji specializes in the area of autoglass and rubbers for all vehicles, generators and machinery.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-center">
                <div className="w-full mx-auto md:mx-0 px-5 py-4 md:px-6 md:p-6 bg-white/5 rounded-xl border border-white/10">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1">
                    Comprehensive
                  </div>
                  <div className="text-sm md:text-base text-gray-300 leading-snug">
                    Product Range
                  </div>
                </div>
                <div className="w-full mx-auto md:mx-0 px-5 py-4 md:px-6 md:p-6 bg-white/5 rounded-xl border border-white/10">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1">
                    Best
                  </div>
                  <div className="text-sm md:text-base text-gray-300 leading-snug">
                    Quality
                  </div>
                </div>
                <div className="w-full mx-auto md:mx-0 px-5 py-4 md:px-6 md:p-6 bg-white/5 rounded-xl border border-white/10">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1">
                    Competitive
                  </div>
                  <div className="text-sm md:text-base text-gray-300 leading-snug">
                    Prices
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why We're The Best Section */}
      <section className="max-w-7xl mx-auto mb-24 safe-x-pad">
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
      <section className="max-w-7xl mx-auto mb-28 safe-x-pad">
        <div className="bg-white rounded-3xl p-8 md:p-20 border border-gray-200 shadow-lg">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-block px-6 py-2.5 bg-[#fae633] text-gray-900 rounded-full mb-6 text-sm md:text-base font-semibold tracking-[0.18em] uppercase">
              Our Expertise
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-5 text-gray-900">
              Specialized Services
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              From everyday cars to the biggest trucks and buses, Makoukji handles every type of autoglass job with factory-level precision and care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-10">
            <div className="p-6 md:p-8 bg-gray-50 rounded-xl border border-gray-200 shadow-sm">
              <p className="text-lg text-gray-700 leading-relaxed">
                Ets. Georges Makoukji for autoglass is specialized in the area of autoglass for{' '}
                <strong>windshields, backlights, door glass, side windows and roof glass</strong>{' '}
                for all vehicle brands from the smallest car to the biggest truck or bus, in addition to yachts.
              </p>
            </div>
            <div className="p-6 md:p-8 bg-gray-50 rounded-xl border border-gray-200 shadow-sm">
              <p className="text-lg text-gray-700 leading-relaxed">
                We have a trained team that uses the most important products in the market today to help you solve all the problems that you encounter with your autoglass.
              </p>
            </div>
          </div>
          <div className="mt-4 p-8 md:p-10 bg-[#fae633] rounded-2xl text-gray-900 text-center shadow-lg">
            <p className="text-lg md:text-xl leading-relaxed font-medium">
              Ets. Georges Makoukji for autoglass offers a wide variety of rubber and accessories for windshields, backlights, door glass, side windows and roof glass for all vehicles, in addition to mirrors and plexiglass.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto text-center safe-x-pad">
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
