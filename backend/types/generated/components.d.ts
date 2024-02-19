import type { Schema, Attribute } from '@strapi/strapi';

export interface HotelRooms extends Schema.Component {
  collectionName: 'components_hotel_rooms';
  info: {
    displayName: 'Rooms';
    icon: 'picture';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Blocks;
    gallery: Attribute.Media;
    square: Attribute.Integer;
    max_person: Attribute.Integer;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'hotel.rooms': HotelRooms;
    }
  }
}
