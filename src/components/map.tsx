"use client";

import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

export function ComponentMap() {
  return (
    <YMaps>
      <Map
        defaultState={{ center: [55.751574, 37.573856], zoom: 9 }}
        width="100%"
        height="100%"
      >
        <Placemark geometry={[55.751574, 37.573856]} />
        <Placemark geometry={[55.751574, 37.57382]} />
      </Map>
    </YMaps>
  );
}
