import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <div className="mb-6">
              <Image 
                src="/logo.svg" 
                alt="Makoukji Auto Glass Logo" 
                width={220} 
                height={66}
                className="h-14 w-auto mb-6"
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed text-lg">
              Ets. Georges Makoukji for autoglass - Founded in <strong className="text-white">1964</strong>. Lebanon's most renowned autoglass company with over 60 years of excellence.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#FFA500] rounded-lg flex items-center justify-center hover:bg-[#FF8C00] transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#FFA500] rounded-lg flex items-center justify-center hover:bg-[#FF8C00] transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
            <p className="text-sm text-gray-400 mt-6">
              © {new Date().getFullYear()} Ets. Georges Makoukji. All rights reserved.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About' },
                { href: '/services', label: 'Services' },
                { href: '/collection', label: 'Collection' },
                { href: '/contact', label: 'Contact' },
              ].map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href} 
                    className="text-gray-300 hover:text-white transition-colors font-medium"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
              Contact Us
            </h4>
            
            {/* Phone Numbers */}
            <div className="mb-6">
              <h5 className="text-xs font-semibold text-[#FFA500] uppercase tracking-wider mb-4">Phone Number</h5>
              <ul className="space-y-2">
                {['00961-1-256297', '00961-1-256298', '00961-1-247143', '00961-3-897157'].map((phone, index) => (
                  <li key={index}>
                    <a 
                      href={`tel:+${phone.replace(/-/g, '')}`} 
                      className="text-gray-300 hover:text-white transition-colors font-medium"
                    >
                      {phone}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Address */}
            <div className="mb-6">
              <h5 className="text-xs font-semibold text-[#FFA500] uppercase tracking-wider mb-4">Address</h5>
              <div className="text-gray-300 font-medium leading-relaxed">
                <p>Dora Trade Center</p>
                <p>Dora Highway</p>
                <p>Beirut, Lebanon</p>
              </div>
            </div>

            {/* Email */}
            <div>
              <h5 className="text-xs font-semibold text-[#FFA500] uppercase tracking-wider mb-4">Email Us</h5>
              <ul className="space-y-2">
                {['info@makoukji.com', 'georges@makoukji.com'].map((email, index) => (
                  <li key={index}>
                    <a 
                      href={`mailto:${email}`} 
                      className="text-gray-300 hover:text-white transition-colors font-medium"
                    >
                      {email}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              Proudly serving Lebanon since 1964
            </p>
            <p className="text-gray-400 text-sm">
              Lebanon's most renowned autoglass company
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
