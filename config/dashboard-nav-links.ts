type DashboardNavLinkType = {
  id: number;
  href: string;
  label: string;
};

export const dashboardNavLinks: DashboardNavLinkType[] = [
  {
    id: 1,
    href: "/dashboard/post",
    label: "Статьи",
  },
  {
    id: 2,
    href: "/dashboard/place",
    label: "Места",
  },
  {
    id: 3,
    href: "/dashboard/tour",
    label: "Туры",
  },
  {
    id: 4,
    href: "/dashboard/event",
    label: "Мероприятия",
  },
  {
    id: 5,
    href: "/dashboard/excursion",
    label: "Экскурсии",
  },
  {
    id: 6,
    href: "/dashboard/hotel",
    label: "Отели",
  },
];
