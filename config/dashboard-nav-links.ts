type DashboardNavLinkType = {
  id: number;
  href: string;
  label: string;
};

export const dashboardNavLinks: DashboardNavLinkType[] = [
  {
    id: 1,
    href: "/dashboard",
    label: "Объявления",
  },
  {
    id: 2,
    href: "/dashboard/payment",
    label: "Платежи",
  },
  {
    id: 3,
    href: "/dashboard/account",
    label: "Аккаунт",
  },
  {
    id: 4,
    href: "/dashboard/settings",
    label: "Настройки",
  },
];
