export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "СИБГИД",
  description: "Путеводитель по западной и восточной Сибири.",
  navItems: [
    {
      label: "Достопримечательности",
      href: "/places",
    },
    {
      label: "Турбазы",
      href: "/hotels",
    },
    {
      label: "Экскурсии",
      href: "/events",
    },
    {
      label: "Туры",
      href: "/tours",
    },
  ],
  navMenuItems: [
    {
      label: "Достопримечательности",
      href: "/places",
    },
    {
      label: "Турбазы",
      href: "/hotels",
    },
    {
      label: "Экскурсии",
      href: "/events",
    },
    {
      label: "Туры",
      href: "/tours",
    },
    {
      label: "Поддержка",
      href: "/support",
    },
    {
      label: "Цены",
      href: "/pricing",
    },
    {
      label: "Регионы",
      href: "/regions",
    },
  ],
  links: {
    addListing: "/",
  },
};
