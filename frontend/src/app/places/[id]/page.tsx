import React from "react";
import { Place } from "@/types/places";
import Image from "next/image";

interface PlaceProp {
  params: Place
}

const PlaceDetail: React.FC<PlaceProp> = async ({ params }) => {
  const headers = {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
  };

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/places/${params.id}?populate=regions&populate=gallery`,
    { headers, next: { revalidate: 3600 } }
  );
  const data = await res.json();
  const place: Place= data.data;

  const {
    attributes: { title, gallery, regions, description },
  } = place;

  return (
    <main className="container mx-auto p-4">
    <h1 className="text-3xl font-bold text-center my-6">{title}</h1>
  
    <div className="space-y-4">
      {description.map((paragraph, index) => (
        <p key={index} className="text-base text-gray-700">{paragraph.children[0].text}</p>
      ))}
    </div>
  
    <div className="my-6">
      <h2 className="text-2xl font-semibold mb-4">Галерея</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {gallery.data.map((image) => (
          <div key={image.id} className="max-w-sm">
            <Image src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${image.attributes.url}`} alt={image.attributes.name}
            width={600}
            height={400}
            />
          </div>
        ))}
      </div>
    </div>
  
    <div className="my-6">
      <h2 className="text-2xl font-semibold mb-4">Регионы</h2>
      <ul className="list-disc pl-5 space-y-2">
        {regions.data.map((region) => (
          <li key={region.id} className="text-base text-gray-700">{region.attributes.title}</li>
        ))}
      </ul>
    </div>
  </main>
  
  )
}

export default PlaceDetail;