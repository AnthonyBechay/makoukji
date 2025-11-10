import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-yellow-100 to-amber-100 border-t border-yellow-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent mb-4">
              Makoukji Auto Glass
            </h3>
            <p className="text-amber-800 mb-4">
              Professional auto glass repair and replacement services in Dora, Lebanon. Fast, reliable, and professional service you can trust.
            </p>
            <p className="text-sm text-amber-700">
              © {new Date().getFullYear()} Ets. Georges Makoukji. All rights reserved.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-amber-900 uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-amber-800 hover:text-yellow-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-amber-800 hover:text-yellow-600 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-amber-800 hover:text-yellow-600 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-amber-800 hover:text-yellow-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-amber-900 uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="tel:+9611256297" className="text-amber-800 hover:text-yellow-600 transition-colors">
                  +961 1 256 297
                </a>
              </li>
              <li>
                <a href="mailto:info@makoukji.com" className="text-amber-800 hover:text-yellow-600 transition-colors">
                  info@makoukji.com
                </a>
              </li>
              <li className="text-amber-800 text-sm">
                Murr Bldg - Dora Highway<br />
                Bouchrieh - El Metn<br />
                Dora, Lebanon
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
