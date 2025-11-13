'use client';

import { useState } from 'react';

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
    // Handle form submission here
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
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-[#FFD700] rounded-lg">
            <span className="text-sm font-bold text-black">CONTACT US</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-black">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We'd love to hear from you. Send us a message or call us for a free quote on your auto glass repair needs.
          </p>
        </div>

        {/* Image Section */}
        <div className="relative h-48 md:h-64 rounded-lg overflow-hidden mb-16 futuristic-border">
          <div className="absolute inset-0 bg-gradient-to-br from-[#2596be] to-[#FFD700] opacity-40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <svg className="w-20 h-20 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <p className="text-sm text-gray-200">Contact Us</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg p-8 shadow-lg border-2 border-[#2596be] futuristic-border">
            <h2 className="text-3xl font-bold mb-6 text-black">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-black mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-[#2596be] rounded-lg focus:ring-2 focus:ring-[#FFD700] focus:border-[#FFD700] bg-white text-black"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-black mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-[#2596be] rounded-lg focus:ring-2 focus:ring-[#FFD700] focus:border-[#FFD700] bg-white text-black"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-black mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-[#2596be] rounded-lg focus:ring-2 focus:ring-[#FFD700] focus:border-[#FFD700] bg-white text-black"
                  placeholder="+961 1 256 297"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-bold text-black mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-[#2596be] rounded-lg focus:ring-2 focus:ring-[#FFD700] focus:border-[#FFD700] bg-white text-black"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-black mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-[#2596be] rounded-lg focus:ring-2 focus:ring-[#FFD700] focus:border-[#FFD700] bg-white text-black"
                  placeholder="Your message..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#FFD700] text-black rounded-lg font-bold hover:bg-[#FFA500] transform hover:scale-105 transition-all duration-200 shadow-lg glow-effect"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-black rounded-lg p-8 border-2 border-[#FFD700] futuristic-border relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2596be] to-[#FFD700]"></div>
              </div>
              <div className="relative">
                <h2 className="text-3xl font-bold mb-6 text-white">Contact Information</h2>
                <div className="space-y-6">
                  {/* Phone Numbers */}
                  <div>
                    <h3 className="font-bold text-white mb-3 flex items-center">
                      <div className="w-12 h-12 bg-[#2596be] rounded-lg flex items-center justify-center mr-4 flex-shrink-0 shadow-md">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      Phone Number
                    </h3>
                    <div className="ml-16 space-y-2">
                      <a href="tel:+9611256297" className="block text-[#FFD700] hover:text-[#FFA500] hover:underline font-medium transition-colors">
                        00961-1-256297
                      </a>
                      <a href="tel:+9611256298" className="block text-[#FFD700] hover:text-[#FFA500] hover:underline font-medium transition-colors">
                        00961-1-256298
                      </a>
                      <a href="tel:+9611247143" className="block text-[#FFD700] hover:text-[#FFA500] hover:underline font-medium transition-colors">
                        00961-1-247143
                      </a>
                      <a href="tel:+9613897157" className="block text-[#FFD700] hover:text-[#FFA500] hover:underline font-medium transition-colors">
                        00961-3-897157
                      </a>
                    </div>
                  </div>
                  
                  {/* Address */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-[#FFD700] rounded-lg flex items-center justify-center mr-4 flex-shrink-0 shadow-md">
                      <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">Address</h3>
                      <p className="text-gray-300 font-medium leading-relaxed">
                        Dora Trade Center<br />
                        Dora Highway<br />
                        Beirut, Lebanon
                      </p>
                    </div>
                  </div>
                  
                  {/* Email */}
                  <div>
                    <h3 className="font-bold text-white mb-3 flex items-center">
                      <div className="w-12 h-12 bg-[#2596be] rounded-lg flex items-center justify-center mr-4 flex-shrink-0 shadow-md">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      Email Us
                    </h3>
                    <div className="ml-16 space-y-2">
                      <a href="mailto:info@makoukji.com" className="block text-[#FFD700] hover:text-[#FFA500] hover:underline font-medium transition-colors">
                        info@makoukji.com
                      </a>
                      <a href="mailto:georges@makoukji.com" className="block text-[#FFD700] hover:text-[#FFA500] hover:underline font-medium transition-colors">
                        georges@makoukji.com
                      </a>
                    </div>
                  </div>

                  {/* Social Media */}
                  <div>
                    <h3 className="font-bold text-white mb-3 flex items-center">
                      <div className="w-12 h-12 bg-[#FFD700] rounded-lg flex items-center justify-center mr-4 flex-shrink-0 shadow-md">
                        <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                        </svg>
                      </div>
                      Stay Connected
                    </h3>
                    <div className="ml-16 flex space-x-4">
                      <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-[#2596be] rounded-lg flex items-center justify-center hover:bg-[#FFD700] hover:text-black transition-all duration-200 shadow-lg group"
                        aria-label="Facebook"
                      >
                        <svg className="w-6 h-6 text-white group-hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </a>
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-[#2596be] rounded-lg flex items-center justify-center hover:bg-[#FFD700] hover:text-black transition-all duration-200 shadow-lg group"
                        aria-label="Instagram"
                      >
                        <svg className="w-6 h-6 text-white group-hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg border-2 border-[#2596be] futuristic-border">
              <h3 className="text-2xl font-bold mb-4 text-black">Business Hours</h3>
              <div className="space-y-2 text-gray-600">
                <p className="flex justify-between">
                  <span className="font-bold">Monday - Friday</span>
                  <span>8:00 AM - 6:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-bold">Saturday</span>
                  <span>9:00 AM - 4:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-bold">Sunday</span>
                  <span>Closed</span>
                </p>
                <p className="mt-4 pt-4 border-t-2 border-[#2596be] text-[#2596be] font-bold">
                  Emergency service available 24/7
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
