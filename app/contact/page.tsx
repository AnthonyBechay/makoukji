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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: data.message || 'Thank you for your message! We will get back to you soon.' });
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setSubmitStatus({ type: 'error', message: data.error || 'Failed to send message. Please try again.' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({ type: 'error', message: 'Failed to send message. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
      {/* Hero Section */}
      <section className="py-20 mb-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block mb-6 px-5 py-2.5 bg-[#fae633] text-white rounded-md text-base font-semibold">
            CONTACT US
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900">
            Get In Touch
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            We'd love to hear from you. Send us a message or call us for a free quote on your autoglass repair needs.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg p-10 md:p-12 shadow-lg border border-gray-200">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">
                Send us a Message
              </h2>
              <p className="text-gray-600">Fill out the form below and we'll get back to you as soon as possible.</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#fae633] focus:border-[#fae633] bg-white text-gray-900 transition-colors"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#fae633] focus:border-[#fae633] bg-white text-gray-900 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#fae633] focus:border-[#fae633] bg-white text-gray-900 transition-colors"
                  placeholder="00961-1-256297"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#fae633] focus:border-[#fae633] bg-white text-gray-900 transition-colors"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#fae633] focus:border-[#fae633] bg-white text-gray-900 transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>
              
              {submitStatus.type && (
                <div
                  className={`p-4 rounded-md ${
                    submitStatus.type === 'success'
                      ? 'bg-green-50 text-green-800 border border-green-200'
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}
                >
                  <p className="font-medium">{submitStatus.message}</p>
                </div>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-3 bg-[#fae633] text-white rounded-md font-semibold text-lg hover:bg-[#d4c82a] transition-colors duration-200 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Main Contact Card */}
            <div className="bg-gray-900 rounded-lg p-10 md:p-12 text-white shadow-xl">
              <h2 className="text-3xl font-bold mb-8 text-white">
                Contact Information
              </h2>
              <div className="space-y-8">
                {/* Phone Numbers */}
                <div>
                  <h3 className="font-semibold text-white mb-4 flex items-center text-lg">
                    <div className="w-12 h-12 bg-[#fae633] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    Phone Number
                  </h3>
                  <div className="ml-16 space-y-2">
                    {['00961-1-256297', '00961-1-247143', '00961-3-897157'].map((phone, index) => (
                      <a
                        key={index}
                        href={`tel:+${phone.replace(/-/g, '')}`}
                        className="block text-gray-300 hover:text-white font-medium transition-colors"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
                
                {/* Address */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#fae633] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2 text-lg">Address</h3>
                    <p className="text-gray-300 font-medium leading-relaxed">
                      Dora Trade Center<br />
                      Dora Highway<br />
                      Beirut, Lebanon
                    </p>
                  </div>
                </div>
                
                {/* Email */}
                <div>
                  <h3 className="font-semibold text-white mb-4 flex items-center text-lg">
                    <div className="w-12 h-12 bg-[#fae633] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    Email Us
                  </h3>
                  <div className="ml-16 space-y-2">
                    {['info@makoukji.com', 'georges@makoukji.com'].map((email, index) => (
                      <a
                        key={index}
                        href={`mailto:${email}`}
                        className="block text-gray-300 hover:text-white font-medium transition-colors"
                      >
                        {email}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Social Media */}
                <div>
                  <h3 className="font-semibold text-white mb-4 flex items-center text-lg">
                    <div className="w-12 h-12 bg-[#fae633] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                    </div>
                    Stay Connected
                  </h3>
                  <div className="ml-16 flex space-x-4">
                    {[
                      { name: 'Facebook', href: 'https://www.facebook.com/makoukjiautoglass/' },
                      { name: 'Instagram', href: 'https://www.instagram.com/makoukjiautoglass/' },
                    ].map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-[#fae633] rounded-lg flex items-center justify-center hover:bg-[#d4c82a] transition-colors"
                        aria-label={social.name}
                      >
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d={social.icon} />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="bg-white rounded-lg p-10 md:p-12 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                Business Hours
              </h3>
              <div className="space-y-4 text-gray-700">
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-md">
                  <span className="font-semibold">Monday - Friday</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-md">
                  <span className="font-semibold">Saturday</span>
                  <span>8:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-md">
                  <span className="font-semibold">Sunday</span>
                  <span>Closed</span>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                  <p className="text-[#fae633] font-semibold">
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
