import React from 'react';
import PlaceCard from '@/components/PlaceCard';
import { Place } from '@/types/places';

const Places: React.FC = async () => {
  const headers = {
    'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
  };

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/places?populate[0]=regions&populate=feature_image`, { headers });
  const data = await res.json();
  const places: Place[] = data.data;

  return (
    <main className='container flex-grow m-auto'>
      <h1>Достопримечательности</h1>
      <div className="grid grid-cols-3 gap-4">
      {places.map(place => (
        <PlaceCard key={place.id} place={place} />
      ))}
      </div>
    </main>
  );
};

export default Places;
