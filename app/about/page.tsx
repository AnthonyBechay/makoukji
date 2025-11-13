import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'About Us - Makoukji Auto Glass | The Oldest & Best in Lebanon',
  description: 'Ets. Georges Makoukji - Founded in 1964, we are the oldest, the best, and the reference in Lebanon for autoglass services.',
};

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 mb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2596be]/10 via-transparent to-[#FFD700]/10"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-block mb-6 px-6 py-3 bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-full">
            <span className="text-sm font-bold text-black tracking-wider">ABOUT US</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-extrabold mb-8">
            <span className="gradient-text">About Makoukji</span>
          </h1>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="px-8 py-4 bg-gradient-to-r from-[#2596be] to-[#1e7a9a] text-white rounded-2xl font-bold text-xl shadow-2xl transform hover:scale-105 transition-transform premium-shadow">
              🇱🇧 The Oldest
            </div>
            <div className="px-8 py-4 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black rounded-2xl font-bold text-xl shadow-2xl transform hover:scale-105 transition-transform premium-shadow glow-effect-gold">
              ⭐ The Best
            </div>
            <div className="px-8 py-4 bg-gradient-to-r from-[#2596be] to-[#1e7a9a] text-white rounded-2xl font-bold text-xl shadow-2xl transform hover:scale-105 transition-transform premium-shadow">
              🏆 The Reference
            </div>
          </div>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-semibold">
            Serving Lebanon since 1964 - Your trusted autoglass experts
          </p>
        </div>
      </section>

      {/* Main Story Section - Enhanced */}
      <section className="max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image/Visual */}
          <div className="relative h-[500px] rounded-3xl overflow-hidden futuristic-border premium-shadow group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#2596be] via-[#1e7a9a] to-[#FFD700] opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white space-y-6">
                <div className="w-32 h-32 bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-full flex items-center justify-center shadow-2xl float-animation mx-auto">
                  <span className="text-6xl font-bold text-black">1964</span>
                </div>
                <p className="text-2xl font-bold">Established</p>
                <p className="text-gray-300">Over 60 Years of Excellence</p>
              </div>
            </div>
            <div className="absolute inset-0 shimmer pointer-events-none"></div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-[#2596be] to-[#1e7a9a] rounded-full">
              <span className="text-sm font-bold text-white tracking-wider">OUR LEGACY</span>
            </div>
            <h2 className="text-5xl font-extrabold text-black mb-6">
              A Legacy of <span className="gradient-text">Excellence</span>
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                <strong className="text-[#2596be] text-2xl">Ets. Georges Makoukji for autoglass</strong> was first founded in <strong className="text-[#FFD700] text-2xl">1964</strong> by Mr. Georges Makoukji on Dora highway towards the city of Beirut. We surpassed all the obstacles and the problems in Lebanon, during the past thirty years.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                In the beginning of the 21st century, the present Owner and General Manager Mr. Joseph Makoukji expanded the business into a newer and bigger one by adding a new branch and a <strong className="text-[#2596be]">1500 square meters warehouse</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Card */}
        <div className="bg-gradient-to-br from-black via-gray-900 to-black rounded-3xl p-12 md:p-16 border-2 border-[#FFD700] futuristic-border premium-shadow-dark relative overflow-hidden mb-16">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#2596be] rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FFD700] rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="relative">
            <div className="text-center mb-8">
              <div className="inline-block px-6 py-3 bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-full mb-6">
                <span className="text-sm font-bold text-black tracking-wider">OUR COMMITMENT</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                Quality & Excellence
              </h2>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 glass-effect-dark">
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed text-center">
                Nowadays, our aim is to maintain a <strong className="text-[#FFD700]">high quality service</strong> in order to best serve our clients and to prove our presence in the lebanese and international market. Ets. Georges Makoukji specializes in the area of autoglass and rubbers for all vehicles, generators and machinery.
              </p>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <div className="text-3xl font-bold text-[#FFD700] mb-2">Wide</div>
                  <div className="text-gray-300">Product Array</div>
                </div>
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <div className="text-3xl font-bold text-[#FFD700] mb-2">Best</div>
                  <div className="text-gray-300">Quality</div>
                </div>
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <div className="text-3xl font-bold text-[#FFD700] mb-2">Competitive</div>
                  <div className="text-gray-300">Prices</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why We're The Best Section - Enhanced */}
      <section className="max-w-7xl mx-auto mb-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
            <span className="gradient-text">Why We're The Best</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'The Oldest',
              description: 'Founded in 1964, we have over 60 years of experience serving Lebanon',
              icon: '🏆',
              gradient: 'from-[#2596be] to-[#1e7a9a]',
            },
            {
              title: 'The Best',
              description: 'Premium quality products, competitive prices, and comprehensive services',
              icon: '⭐',
              gradient: 'from-[#FFD700] to-[#FFA500]',
            },
            {
              title: 'The Reference',
              description: 'The trusted name in Lebanon for autoglass services - your reference',
              icon: '🇱🇧',
              gradient: 'from-[#2596be] to-[#1e7a9a]',
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br ${item.gradient} p-10 rounded-3xl border-2 border-white/20 futuristic-border card-hover premium-shadow overflow-hidden`}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
              <div className="relative text-center">
                <div className="text-7xl mb-6 transform group-hover:scale-125 transition-transform duration-300 float-animation">
                  {item.icon}
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-100 text-lg leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Expertise Section - Enhanced */}
      <section className="max-w-7xl mx-auto mb-20">
        <div className="bg-white rounded-3xl p-12 md:p-16 border-2 border-[#2596be] futuristic-border premium-shadow">
          <div className="text-center mb-12">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-[#2596be] to-[#1e7a9a] rounded-full mb-6">
              <span className="text-sm font-bold text-white tracking-wider">OUR EXPERTISE</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              <span className="gradient-text">Specialized Services</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-gradient-to-br from-[#2596be]/10 to-transparent rounded-2xl border border-[#2596be]/20">
              <p className="text-lg text-gray-700 leading-relaxed">
                Ets. Georges Makoukji for autoglass is specialized in the area of autoglass (windshields, backlights, side windows and quarters) for all vehicle brands from the smallest car to the biggest truck or bus, in addition to yachts.
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
              Ets. Georges Makoukji for autoglass offers a wide variety of window and windshield rubber for all vehicles, in addition to mirrors and plexiglas.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFD700] rounded-3xl p-12 md:p-16 relative overflow-hidden premium-shadow">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6">
              Experience Excellence
            </h2>
            <p className="text-xl text-gray-900 mb-8 font-semibold">
              Join thousands of satisfied customers who trust Makoukji for their autoglass needs
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-5 bg-black text-[#FFD700] rounded-xl font-bold text-lg hover:bg-[#2596be] hover:text-white transform hover:scale-105 transition-all duration-300 premium-shadow futuristic-border"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
