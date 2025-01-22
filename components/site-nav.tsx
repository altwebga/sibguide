"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const siteNavItems = {
  explore: [
    {
      title: "Проживание",
      href: "/hotels",
    },
    {
      title: "Достопримечательности",
      href: "/places",
    },
    {
      title: "Туры",
      href: "/tours",
    },
    {
      title: "Экскурсии",
      href: "/excursions",
    },
    {
      title: "Мероприятия",
      href: "/events",
    },
  ],

  project: [
    {
      title: "О проекте",
      href: "/about",
    },
    {
      title: "Для турбизнеса",
      href: "/",
    },
    {
      title: "Для туристов",
      href: "/",
    },
  ],

  legal: [
    {
      title: "Условия использования",
      href: "/terms-and-conditions",
    },
    {
      title: "Политика конфиденциальности",
      href: "/privacy-policy",
    },
    {
      title: "Договор оферты",
      href: "/offer-agreement",
    },
    {
      title: "Отказ от ответственности",
      href: "/privacy",
    },
  ],
};

export function SiteNav() {
  const pathname = usePathname();
  return (
    <nav>
      <ul className="flex flex-row justify-between gap-4 list-none">
        {siteNavItems.explore.map((item) => (
          <li
            key={item.href}
            className={cn(
              "text-primary text-lg font-semibold",
              pathname === item.href ? " text-sky-600" : "text-primary"
            )}
          >
            <Link href={item.href}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
