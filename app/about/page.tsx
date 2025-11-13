import Image from 'next/image';

export const metadata = {
  title: 'About Us - Makoukji Auto Glass | The Oldest & Best in Lebanon',
  description: 'Ets. Georges Makoukji - Founded in 1964, we are the oldest, the best, and the reference in Lebanon for autoglass services.',
};

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-[#FFD700] rounded-lg">
            <span className="text-sm font-bold text-black">ABOUT US</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-black">
            About <span className="text-[#2596be]">Makoukji</span> Auto Glass
          </h1>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <div className="px-6 py-3 bg-[#2596be] text-white rounded-lg font-bold text-lg shadow-lg">
              🇱🇧 The Oldest
            </div>
            <div className="px-6 py-3 bg-[#FFD700] text-black rounded-lg font-bold text-lg shadow-lg">
              ⭐ The Best
            </div>
            <div className="px-6 py-3 bg-[#2596be] text-white rounded-lg font-bold text-lg shadow-lg">
              🏆 The Reference
            </div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-semibold">
            Serving Lebanon since 1964 - Your trusted autoglass experts
          </p>
        </div>

        {/* Image Section */}
        <div className="relative h-64 md:h-96 rounded-lg overflow-hidden mb-16 futuristic-border">
          <div className="absolute inset-0 bg-gradient-to-br from-[#2596be] to-[#FFD700] opacity-40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <svg className="w-24 h-24 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <p className="text-sm text-gray-200">Established 1964</p>
            </div>
          </div>
        </div>

        {/* Main Story Section */}
        <div className="mb-16">
          <div className="bg-white p-8 md:p-12 rounded-lg border-2 border-[#2596be] futuristic-border shadow-xl">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-[#FFD700] rounded-lg flex items-center justify-center mr-4 shadow-lg">
                <span className="text-3xl font-bold text-black">1964</span>
              </div>
              <h2 className="text-4xl font-bold text-black">Our Legacy</h2>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                <strong className="text-[#2596be]">Ets. Georges Makoukji for autoglass</strong> was first founded in <strong className="text-[#FFD700]">1964</strong> by Mr. Georges Makoukji on Dora highway towards the city of Beirut. We surpassed all the obstacles and the problems in Lebanon, during the past thirty years. In the beginning of the 21st century, the present Owner and General Manager Mr. Joseph Makoukji expanded the business into a newer and bigger one by adding a new branch and a <strong className="text-[#2596be]">1500 square meters warehouse</strong>.
              </p>
              
              <div className="bg-gradient-to-r from-[#2596be]/10 to-[#FFD700]/10 p-6 rounded-lg mb-6 border-l-4 border-[#2596be]">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Nowadays, our aim is to maintain a <strong className="text-[#2596be]">high quality service</strong> in order to best serve our clients and to prove our presence in the lebanese and international market. Ets. Georges Makoukji specializes in the area of autoglass and rubbers for all vehicles, generators and machinery. In addition to a wide product array, we offer the <strong className="text-[#FFD700]">most comprehensive range of services</strong>, the <strong className="text-[#FFD700]">most competitive prices</strong> and the <strong className="text-[#FFD700]">best quality</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why We're The Best Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-black p-8 rounded-lg border-2 border-[#FFD700] futuristic-border relative overflow-hidden group hover:scale-105 transition-transform">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-br from-[#2596be] to-[#FFD700]"></div>
            </div>
            <div className="relative text-center">
              <div className="w-20 h-20 bg-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-4xl">🏆</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">The Oldest</h3>
              <p className="text-gray-300">
                Founded in 1964, we have over <strong className="text-[#FFD700]">60 years</strong> of experience serving Lebanon
              </p>
            </div>
          </div>
          
          <div className="bg-[#FFD700] p-8 rounded-lg border-2 border-[#2596be] futuristic-border relative overflow-hidden group hover:scale-105 transition-transform">
            <div className="relative text-center">
              <div className="w-20 h-20 bg-[#2596be] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-4xl">⭐</span>
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">The Best</h3>
              <p className="text-gray-800">
                Premium quality products, competitive prices, and <strong className="text-[#2596be]">comprehensive services</strong>
              </p>
            </div>
          </div>
          
          <div className="bg-black p-8 rounded-lg border-2 border-[#FFD700] futuristic-border relative overflow-hidden group hover:scale-105 transition-transform">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-br from-[#2596be] to-[#FFD700]"></div>
            </div>
            <div className="relative text-center">
              <div className="w-20 h-20 bg-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-4xl">🇱🇧</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">The Reference</h3>
              <p className="text-gray-300">
                The trusted name in Lebanon for autoglass services - <strong className="text-[#FFD700]">your reference</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Expertise Section */}
        <div className="bg-black rounded-lg p-12 text-center text-white shadow-2xl futuristic-border relative overflow-hidden mb-16">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-r from-[#2596be] to-[#FFD700]"></div>
          </div>
          <div className="relative">
            <h2 className="text-4xl font-bold mb-6">Our Expertise</h2>
            <p className="text-xl max-w-3xl mx-auto text-gray-300 mb-8">
              Ets. Georges Makoukji for autoglass is specialized in the area of autoglass (windshields, backlights, side windows and quarters) for all vehicle brands from the smallest car to the biggest truck or bus, in addition to yachts. We have a trained team that uses the most important products in the market today to help you solve all the problems that you encounter with your autoglass.
            </p>
            <p className="text-lg max-w-3xl mx-auto text-gray-300">
              Ets. Georges Makoukji for autoglass offers a wide variety of window and windshield rubber for all vehicles, in addition to mirrors and plexiglas.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-lg p-12 text-center text-black shadow-2xl futuristic-border relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-black"></div>
          </div>
          <div className="relative">
            <h2 className="text-4xl font-bold mb-6">Our Commitment</h2>
            <p className="text-xl max-w-3xl mx-auto text-gray-900 font-semibold">
              Maintaining high quality service to best serve our clients and prove our presence in the Lebanese and international market. We are committed to excellence, reliability, and customer satisfaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
