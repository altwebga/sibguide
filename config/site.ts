import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
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
      icon: SquareTerminal,
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
      icon: Bot,
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
      icon: BookOpen,
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
      icon: Settings2,
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
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};
