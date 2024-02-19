import type { Schema, Attribute } from '@strapi/strapi';

export interface HotelsHotelRooms extends Schema.Component {
  collectionName: 'components_hotels_hotel_rooms';
  info: {
    displayName: 'Hotel rooms';
    icon: 'house';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Blocks;
    gallery: Attribute.Media;
    price: Attribute.Decimal;
    max_person: Attribute.Integer;
    conveniences: Attribute.JSON &
      Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          '\u0421\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u0430\u044F \u0432\u0430\u043D\u043D\u0430\u044F \u043A\u043E\u043C\u043D\u0430\u0442\u0430',
          '\u041A\u0443\u0445\u043D\u044F',
          '\u041A\u043E\u043D\u0434\u0438\u0446\u0438\u043E\u043D\u0435\u0440',
          '\u0422\u0435\u043B\u0435\u0432\u0438\u0437\u043E\u0440',
          '\u0422\u0443\u0430\u043B\u0435\u0442\u043D\u044B\u0435 \u043F\u0440\u0438\u043D\u0430\u0434\u043B\u0435\u0436\u043D\u043E\u0441\u0442\u0438',
          '\u041C\u0435\u043D\u044E \u043F\u043E\u0434\u0443\u0448\u0435\u043A',
          '\u041C\u0438\u043A\u0440\u043E\u0432\u043E\u043B\u043D\u043E\u0432\u043A\u0430',
          '\u0424\u0435\u043D',
          '\u0425\u043E\u043B\u043E\u0434\u0438\u043B\u044C\u043D\u0438\u043A',
          '\u041F\u043E\u0441\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u0431\u0435\u043B\u044C\u0451',
          '\u0425\u0430\u043B\u0430\u0442',
          '\u0428\u043A\u0430\u0444',
          '\u0417\u0435\u0440\u043A\u0430\u043B\u043E',
          '\u0427\u0430\u0439\u043D\u0438\u043A \u0438\u043B\u0438 \u043A\u043E\u0444\u0435\u0432\u0430\u0440\u043A\u0430',
          '\u0427\u0430\u0439\u043D\u0438\u043A',
          '\u0422\u0435\u043B\u0435\u0444\u043E\u043D',
          '\u041A\u0443\u0445\u043E\u043D\u043D\u044B\u0435 \u043F\u0440\u0438\u043D\u0430\u0434\u043B\u0435\u0436\u043D\u043E\u0441\u0442\u0438',
          '\u0417\u0430\u0442\u0435\u043C\u043D\u0451\u043D\u043D\u044B\u0435 \u0448\u0442\u043E\u0440\u044B',
          '\u041E\u0442\u043E\u043F\u043B\u0435\u043D\u0438\u0435',
          '\u0422\u0430\u043F\u043E\u0447\u043A\u0438',
          '\u041E\u0431\u0435\u0434\u0435\u043D\u043D\u0430\u044F \u0437\u043E\u043D\u0430'
        ]
      >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'hotels.hotel-rooms': HotelsHotelRooms;
    }
  }
}
