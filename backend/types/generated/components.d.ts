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
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'hotel.rooms': HotelRooms;
    }
  }
}
