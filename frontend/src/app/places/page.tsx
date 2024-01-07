import React from "react";
import PlaceCard from "@/components/PlaceCard";
import { Place } from "@/types/places";

const Places: React.FC = async () => {
  const headers = {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
  };

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/places?populate[0]=regions&populate=feature_image`,
    { headers, next: { revalidate: 3600 } }
  );
  const data = await res.json();
  const places: Place[] = data.data;

  return (
    <main className="container flex-grow m-auto">
      <h1 className="my-4 text-2xl">Достопримечательности</h1>
      <div className="grid grid-cols-4 gap-4">
        {places.map((place) => (
          <PlaceCard key={place.id} place={place} id={place.id}/>
        ))}
      </div>
    </main>
  );
};

export default Places;
