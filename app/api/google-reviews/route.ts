import { NextRequest, NextResponse } from 'next/server';

const GOOGLE_PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY;
const GOOGLE_PLACE_ID = process.env.GOOGLE_PLACE_ID; // Your Makoukji Auto Glass place ID

export async function GET(_req: NextRequest) {
  if (!GOOGLE_PLACES_API_KEY || !GOOGLE_PLACE_ID) {
    return NextResponse.json(
      { error: 'Google API not configured' },
      { status: 500 },
    );
  }

  try {
    const params = new URLSearchParams({
      place_id: GOOGLE_PLACE_ID,
      key: GOOGLE_PLACES_API_KEY,
      fields: 'reviews',
    });

    const res = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?${params.toString()}`,
      { next: { revalidate: 60 * 10 } }, // cache for 10 minutes
    );

    if (!res.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch reviews from Google' },
        { status: 500 },
      );
    }

    const data = await res.json();
    const reviews = (data.result?.reviews || []).map((r: any) => ({
      name: r.author_name,
      text: r.text,
      rating: r.rating,
      time: r.relative_time_description,
    }));

    return NextResponse.json({ reviews });
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    return NextResponse.json(
      { error: 'Unexpected error fetching reviews' },
      { status: 500 },
    );
  }
}


