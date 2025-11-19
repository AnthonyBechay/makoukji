'use client';

import Link from 'next/link';

const WHATSAPP_NUMBER = '9613897157'; // +961 3 897157
const WHATSAPP_MESSAGE = encodeURIComponent(
  'Hello, I would like a quote for my car glass.'
);

export default function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end space-y-3">
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp us for a quote"
        className="flex items-center gap-3 rounded-full bg-[#25D366] text-white px-4 py-3 shadow-lg hover:bg-[#1ebe5a] transition-colors text-sm sm:text-base font-semibold"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
          <svg
            className="h-5 w-5"
            viewBox="0 0 32 32"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M16 3C9.373 3 4 8.373 4 15c0 2.147.57 4.098 1.56 5.85L4 29l8.39-2.21A11.9 11.9 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 2c5.065 0 9 3.935 9 9 0 1.77-.5 3.496-1.45 4.99l-.23.36.68 4.01-4.11-1.08-.35.21A8.93 8.93 0 0 1 16 23c-4.963 0-9-4.037-9-9 0-4.963 4.037-9 9-9zm4.09 13.04c-.22-.11-1.3-.64-1.5-.71-.2-.07-.35-.11-.5.11-.15.22-.57.71-.7.86-.13.15-.26.17-.48.06-.24-.12-.99-.37-1.88-1.14-.7-.6-1.18-1.34-1.32-1.57-.14-.23-.02-.36.1-.47.1-.1.22-.26.33-.39.11-.13.15-.22.23-.37.08-.15.04-.28-.02-.39-.06-.11-.5-1.21-.69-1.66-.18-.45-.37-.39-.5-.4h-.43c-.14 0-.36.05-.55.25-.19.2-.72.71-.72 1.73s.74 2.01.84 2.15c.1.13 1.45 2.22 3.5 3.02.49.21.87.33 1.17.42.49.16.94.14 1.29.08.39-.06 1.3-.53 1.49-1.04.18-.5.18-.93.13-1.02-.06-.09-.2-.14-.42-.24z" />
          </svg>
        </span>
        <span className="hidden sm:inline">WhatsApp Us</span>
        <span className="inline sm:hidden">WhatsApp</span>
      </Link>
    </div>
  );
}


