"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from "./theme-toggle";

export const siteNavItems = {
  explore: [
    {
      title: "Проживание",
      href: "/hotels",
      description: "Турбазы, гостиницы, отели.",
    },
    {
      title: "Достопримечательности",
      href: "/places",
      description: "Популярные места и природные объекты.",
    },
    {
      title: "Туры",
      href: "/tours",
      description: "Активные туры по Сибири",
    },
    {
      title: "Экскурсии",
      href: "/excursions",
      description: "Одновременные экскурсии в Сибири.",
    },
    {
      title: "Мероприятия",
      href: "/events",
      description: "Поиск мероприятий.",
    },
  ],

  project: [
    {
      title: "Идея",
      href: "/about",
      description: "Об авторе и проекте.",
    },
    {
      title: "Для турбизнеса",
      href: "/",
      description: "Преимущества для турбизнеса.",
    },
    {
      title: "Для туристов",
      href: "/",
      description: "Преимущества для туристов.",
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

export function MobileNav() {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Меню</Button>
      </SheetTrigger>
      <SheetContent side="left" className="md:min-w-[800px]">
        <SheetHeader>
          <SheetTitle>Header text</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when youre done.
          </SheetDescription>
        </SheetHeader>
        <nav className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="mb-4">Найти</h3>
            <ul className="flex flex-col gap-8">
              {siteNavItems.explore.map((item, index) => (
                <li key={index}>
                  <SheetClose asChild>
                    <Link
                      href={item.href}
                      className={cn(
                        "hover:text-sky-600",
                        pathname === item.href ? "text-sky-600" : ""
                      )}
                    >
                      <p className="font-bold">{item.title}</p>
                      <span className="text-sm">{item.description}</span>
                    </Link>
                  </SheetClose>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4">О проекте</h3>
            <ul className="flex flex-col gap-8">
              {siteNavItems.project.map((item, index) => (
                <li key={index}>
                  <SheetClose asChild>
                    <Link
                      href={item.href}
                      className={cn(
                        "hover:text-sky-600",
                        pathname === item.href ? "text-sky-600" : ""
                      )}
                    >
                      <p className="font-bold">{item.title}</p>
                      <span className="text-sm">{item.description}</span>
                    </Link>
                  </SheetClose>
                </li>
              ))}
            </ul>
          </div>
        </nav>
        <SheetFooter>
          <ThemeToggle />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
