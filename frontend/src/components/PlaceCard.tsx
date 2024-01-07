import React from "react";
import { Place } from "@/types/places";
import Image from "next/image";

interface PlaceCardProps {
  place: Place;
}

const PlaceCard: React.FC<PlaceCardProps> = ({ place }) => {
  const {
    attributes: { title, feature_image },
  } = place;

  return (
    <div>
        {feature_image && (
          <Image
            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${feature_image.data.attributes.formats.thumbnail?.url}`}
            width="300"
            height="300"
            alt={title}
          />
        )}
        <h2>{title}</h2>
    </div>
  );
};

export default PlaceCard;
