"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { HiChevronDown } from "react-icons/hi";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "./mode-toggle";

const menuItem: { title: string; href: string }[] = [
  {
    title: "Достопримечательности",
    href: "/places",
  },
  {
    title: "Турбазы и отели",
    href: "/hotels",
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
    title: "О проекте",
    href: "/about-project",
  },
];

export function Menu() {
  return (
    <NavigationMenu className="justify-between">
      <NavigationMenuList className="hidden md:flex">
        {menuItem.map((item) => (
          <NavigationMenuItem key={item.href}>
            <Link href={item.href} className={cn(navigationMenuTriggerStyle())}>
              {item.title}
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
      <NavigationMenuItem className="md:hidden">
        <NavigationMenuTrigger>Меню</NavigationMenuTrigger>
        <NavigationMenuContent>
          {menuItem.map((item) => (
            <NavigationMenuItem key={item.href}>
              <Link
                href={item.href}
                className={cn(navigationMenuTriggerStyle())}
              >
                {item.title}
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
      <ModeToggle />
    </NavigationMenu>
  );
}
