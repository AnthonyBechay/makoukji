'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 mb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2596be]/10 via-transparent to-[#FFD700]/10"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-block mb-6 px-6 py-3 bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-full">
            <span className="text-sm font-bold text-black tracking-wider">CONTACT US</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-extrabold mb-8">
            <span className="gradient-text">Get In Touch</span>
          </h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-semibold">
            We'd love to hear from you. Send us a message or call us for a free quote on your autoglass repair needs.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form - Enhanced */}
          <div className="bg-white rounded-3xl p-10 md:p-12 shadow-2xl border-2 border-[#2596be] futuristic-border premium-shadow">
            <div className="mb-8">
              <h2 className="text-4xl font-extrabold mb-4 text-black">
                Send us a <span className="gradient-text">Message</span>
              </h2>
              <p className="text-gray-600">Fill out the form below and we'll get back to you as soon as possible.</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-black mb-3">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FFD700] focus:border-[#2596be] bg-white text-black transition-all duration-300 hover:border-[#2596be]"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-black mb-3">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FFD700] focus:border-[#2596be] bg-white text-black transition-all duration-300 hover:border-[#2596be]"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-black mb-3">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FFD700] focus:border-[#2596be] bg-white text-black transition-all duration-300 hover:border-[#2596be]"
                  placeholder="00961-1-256297"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-bold text-black mb-3">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FFD700] focus:border-[#2596be] bg-white text-black transition-all duration-300 hover:border-[#2596be]"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-black mb-3">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FFD700] focus:border-[#2596be] bg-white text-black transition-all duration-300 hover:border-[#2596be] resize-none"
                  placeholder="Your message..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full px-10 py-5 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black rounded-xl font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 premium-shadow glow-effect-gold btn-modern"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information - Enhanced */}
          <div className="space-y-8">
            {/* Main Contact Card */}
            <div className="bg-gradient-to-br from-black via-gray-900 to-black rounded-3xl p-10 md:p-12 border-2 border-[#FFD700] futuristic-border premium-shadow-dark relative overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#2596be] rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FFD700] rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
              <div className="relative">
                <h2 className="text-4xl font-extrabold mb-8 text-white">
                  Contact <span className="gradient-text-gold">Information</span>
                </h2>
                <div className="space-y-8">
                  {/* Phone Numbers */}
                  <div>
                    <h3 className="font-bold text-white mb-4 flex items-center text-xl">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#2596be] to-[#1e7a9a] rounded-xl flex items-center justify-center mr-4 flex-shrink-0 shadow-xl">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      Phone Number
                    </h3>
                    <div className="ml-20 space-y-3">
                      {['00961-1-256297', '00961-1-256298', '00961-1-247143', '00961-3-897157'].map((phone, index) => (
                        <a
                          key={index}
                          href={`tel:+${phone.replace(/-/g, '')}`}
                          className="block text-[#FFD700] hover:text-[#FFA500] hover:underline font-semibold text-lg transition-colors"
                        >
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>
                  
                  {/* Address */}
                  <div className="flex items-start">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-xl flex items-center justify-center mr-4 flex-shrink-0 shadow-xl">
                      <svg className="w-7 h-7 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-2 text-xl">Address</h3>
                      <p className="text-gray-300 font-semibold leading-relaxed text-lg">
                        Dora Trade Center<br />
                        Dora Highway<br />
                        Beirut, Lebanon
                      </p>
                    </div>
                  </div>
                  
                  {/* Email */}
                  <div>
                    <h3 className="font-bold text-white mb-4 flex items-center text-xl">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#2596be] to-[#1e7a9a] rounded-xl flex items-center justify-center mr-4 flex-shrink-0 shadow-xl">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      Email Us
                    </h3>
                    <div className="ml-20 space-y-3">
                      {['info@makoukji.com', 'georges@makoukji.com'].map((email, index) => (
                        <a
                          key={index}
                          href={`mailto:${email}`}
                          className="block text-[#FFD700] hover:text-[#FFA500] hover:underline font-semibold text-lg transition-colors"
                        >
                          {email}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Social Media */}
                  <div>
                    <h3 className="font-bold text-white mb-4 flex items-center text-xl">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-xl flex items-center justify-center mr-4 flex-shrink-0 shadow-xl">
                        <svg className="w-7 h-7 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                        </svg>
                      </div>
                      Stay Connected
                    </h3>
                    <div className="ml-20 flex space-x-4">
                      {[
                        { name: 'Facebook', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
                        { name: 'Instagram', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
                      ].map((social, index) => (
                        <a
                          key={index}
                          href={social.name === 'Facebook' ? 'https://facebook.com' : 'https://instagram.com'}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-14 h-14 bg-gradient-to-br from-[#2596be] to-[#1e7a9a] rounded-xl flex items-center justify-center hover:from-[#FFD700] hover:to-[#FFA500] transition-all duration-300 shadow-xl group"
                          aria-label={social.name}
                        >
                          <svg className="w-7 h-7 text-white group-hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24">
                            <path d={social.icon} />
                          </svg>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="bg-white rounded-3xl p-10 md:p-12 shadow-2xl border-2 border-[#2596be] futuristic-border premium-shadow">
              <h3 className="text-3xl font-extrabold mb-6 text-black">
                Business <span className="gradient-text">Hours</span>
              </h3>
              <div className="space-y-4 text-gray-700">
                <div className="flex justify-between items-center p-4 bg-gradient-to-r from-[#2596be]/5 to-transparent rounded-xl">
                  <span className="font-bold text-lg">Monday - Friday</span>
                  <span className="text-lg">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gradient-to-r from-[#FFD700]/5 to-transparent rounded-xl">
                  <span className="font-bold text-lg">Saturday</span>
                  <span className="text-lg">9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gradient-to-r from-[#2596be]/5 to-transparent rounded-xl">
                  <span className="font-bold text-lg">Sunday</span>
                  <span className="text-lg">Closed</span>
                </div>
                <div className="mt-6 pt-6 border-t-2 border-[#2596be] text-center">
                  <p className="text-[#2596be] font-bold text-lg">
                    Emergency service available 24/7
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
