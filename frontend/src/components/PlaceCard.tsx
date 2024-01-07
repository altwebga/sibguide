"use client"

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Place } from "@/types/places";

interface PlaceCardProps {
  id: number;
  place: Place;
}

const PlaceCard: React.FC<PlaceCardProps> = ({ place, id }) => {
  const {
    attributes: { title, feature_image, regions },
  } = place;

  const regionData = regions?.data?.[0]?.attributes;
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.push(`/places/${id}`)}
      className="max-w-sm rounded overflow-hidden shadow-lg relative"
    >
      {feature_image && (
        <div className="w-full h-60 relative">
          <Image
            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${feature_image.data.attributes.formats.medium?.url}`}
            layout="fill"
            objectFit="cover"
            alt={title}
          />
          {regionData && (
            <p className="font-bold absolute top-0 left-0 m-4 bg-white bg-opacity-75 p-1 rounded text-sm">
              {regionData.title}
            </p>
          )}
        </div>
      )}
      <div className="px-6 py-4">
        <h3 className="font-bold text-xl mb-2">{title}</h3>
      </div>
    </button>
  );
};

export default PlaceCard;
