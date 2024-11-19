import {
  AudioWaveform,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  MapPin,
  Hotel,
  TentTree,
  Route,
} from "lucide-react";

export const dashboardConfig = {
  teams: [
    {
      name: "Спонсор",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Спецразмещение",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Бесплатно",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Места",
      url: "#",
      icon: MapPin,
      isActive: true,
      items: [
        {
          title: "Все места",
          url: "#",
        },
        {
          title: "Добавить место",
          url: "#",
        },
        {
          title: "Категории",
          url: "#",
        },
      ],
    },
    {
      title: "Отели",
      url: "#",
      icon: Hotel,
      items: [
        {
          title: "Все отели",
          url: "#",
        },
        {
          title: "Добавить отель",
          url: "#",
        },
        {
          title: "Категории",
          url: "#",
        },
        {
          title: "Метки",
          url: "#",
        },
      ],
    },
    {
      title: "Туры",
      url: "#",
      icon: TentTree,
      items: [
        {
          title: "Все туры",
          url: "#",
        },
        {
          title: "Добавить тур",
          url: "#",
        },
        {
          title: "Категории",
          url: "#",
        },
        {
          title: "Метки",
          url: "#",
        },
      ],
    },
    {
      title: "Экскурсии",
      url: "#",
      icon: Route,
      items: [
        {
          title: "Все экскурсии",
          url: "#",
        },
        {
          title: "Добавить экскурсию",
          url: "#",
        },
        {
          title: "Категории",
          url: "#",
        },
        {
          title: "Метки",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Блог",
      url: "#",
      icon: Frame,
    },
    {
      name: "Цены",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Поддержка",
      url: "#",
      icon: Map,
    },
  ],
};
