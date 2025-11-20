'use client';

import { useEffect, useState } from 'react';

type Review = {
  name: string;
  text: string;
};

const reviews: Review[] = [
  {
    name: 'Lina Akl',
    text: 'Had to change my car glass urgently due to a small incident that cracked my front glass. Makoukji autoglass offered a fast service. The result is impeccable. Highly recommended!',
  },
  {
    name: 'Anthony Bechay',
    text: 'My car is a collection and only Makoukji auto glass team could replace my windshield in a very safe and professional way.',
  },
  {
    name: 'Fady Karim',
    text: 'Wonderful service. Excellent quality and price.',
  },
  {
    name: 'Joseph Ghaleb',
    text: 'Only place I found an original windshield after long shopping.',
  },
  {
    name: 'Ahmad Hafez',
    text: 'In 1 word. No 1',
  },
];

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 6000); // rotate every 6 seconds

    return () => clearInterval(interval);
  }, []);

  const visibleReviews = [0, 1, 2].map(
    (offset) => reviews[(currentIndex + offset) % reviews.length],
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {visibleReviews.map((review, index) => (
        <div
          key={`${currentIndex}-${review.name}-${index}`}
          className="glass-effect rounded-lg p-8 border border-white/40 shadow-lg bg-white/70 testimonial-slide"
        >
          <div className="flex items-center gap-1 text-yellow-400 mb-4" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>
          <p className="text-gray-800 mb-4 leading-relaxed">{review.text}</p>
          <p className="text-gray-600 text-sm">
            <span className="font-semibold text-gray-900">{review.name}</span>{' '}
            • 5-star Google review
          </p>
        </div>
      ))}
    </div>
  );
}


