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
          <div className="mt-8 flex justify-center">
            <a
              href="#find-us"
              className="px-6 py-3 bg-black text-white rounded-md font-semibold text-sm md:text-base hover:bg-gray-900 transition-colors"
            >
              View Location
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* WhatsApp-first contact card */}
          <div className="bg-white rounded-lg p-10 md:p-12 shadow-lg border border-gray-200">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">
                WhatsApp Us for a Fast Quote
              </h2>
              <p className="text-gray-600 text-lg">
                The fastest way to reach us is on WhatsApp. Send us your car details and we&apos;ll reply with a quote as soon as possible.
              </p>
            </div>
            <div className="space-y-4">
              <a
                href="https://wa.me/9613897157?text=Hello%2C%20I%20would%20like%20a%20quote%20for%20my%20car%20glass."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full px-8 py-4 bg-[#25D366] text-white rounded-md font-semibold text-lg hover:bg-[#1ebe5a] transition-colors duration-200 shadow-md"
              >
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M16 3C9.373 3 4 8.373 4 15c0 2.147.57 4.098 1.61 5.85L4 29l8.39-2.21A11.9 11.9 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 2c5.065 0 9 3.935 9 9 0 1.77-.5 3.496-1.45 4.99l-.23.36.68 4.01-4.11-1.08-.35.21A8.93 8.93 0 0 1 16 23c-4.963 0-9-4.037-9-9 0-4.963 4.037-9 9-9zm4.09 13.04c-.22-.11-1.3-.64-1.5-.71-.2-.07-.35-.11-.5.11-.15.22-.57.71-.7.86-.13.15-.26.17-.48.06-.24-.12-.99-.37-1.88-1.14-.7-.6-1.44-1.72-1.61-2.01-.17-.29-.02-.36.1-.47.1-.1.22-.26.33-.39.11-.13.15-.22.23-.37.08-.15.04-.28-.02-.39-.06-.11-.5-1.21-.69-1.66-.18-.45-.37-.39-.5-.4h-.43c-.14 0-.36.05-.55.25-.19.2-.72.71-.72 1.73s.74 2.01.84 2.15c.1.13 1.45 2.22 3.5 3.02.49.21.87.33 1.17.42.49.16.94.14 1.29.08.39-.06 1.3-.53 1.49-1.04.18-.5.18-.93.13-1.02-.06-.09-.2-.14-.42-.24z" />
                </svg>
                <span>WhatsApp Us Now</span>
              </a>
              <p className="text-gray-500 text-sm">
                Prefer to call? You can also reach us directly at{' '}
                <a
                  href="tel:+9613897157"
                  className="font-semibold text-gray-900 underline"
                >
                  +961 3 897157
                </a>
                .
              </p>
            </div>
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
                      {
                        name: 'Facebook',
                        href: 'https://www.facebook.com/makoukjiautoglass/',
                        icon:
                          'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
                      },
                      {
                        name: 'Instagram',
                        href: 'https://www.instagram.com/makoukjiautoglass/',
                        icon:
                          'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
                      },
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

      {/* Find Us - Map */}
      <section className="mt-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-50 rounded-lg p-8 md:p-12 border border-gray-200 shadow-sm">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Find Us</h2>
            <p className="text-gray-600 mb-6">
              We are located on Dora Highway at Dora Trade Center. Use the map below to find us or get directions.
            </p>
            <div className="aspect-[16/9] w-full rounded-lg overflow-hidden border border-gray-200">
              <iframe
                src="https://www.google.com/maps?q=33.89542024416916,35.546435767802386&hl=en&z=17&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="mt-6">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=33.89542024416916,35.546435767802386"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-[#fae633] text-gray-900 font-semibold rounded-md hover:bg-[#d4c82a] transition-colors"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
