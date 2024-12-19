"use client";

import * as React from "react";
import {
  BookOpen,
  Bot,
  Frame,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/shared/nav-main";
import { NavProjects } from "@/components/shared/nav-projects";
import { NavUser } from "@/components/shared/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { ThemeToggle } from "./theme-toggle";

// This is sample data.
const data = {
  user: {
    name: "No Name",
    email: "m@example.com",
    avatar: "/images/profile.png",
  },

  navMain: [
    {
      title: "Объявления",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Все объявления",
          url: "/admin/listings",
        },
        {
          title: "Добавить объявление",
          url: "/admin/listings/add",
        },
        {
          title: "Категории",
          url: "/admin/listings/categories",
        },
        {
          title: "Регионы",
          url: "/admin/listings/regions",
        },
      ],
    },
    {
      title: "Пользователи",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Все пользователи",
          url: "/admin/users",
        },
        {
          title: "Добавить пользователя",
          url: "/admin/users/add",
        },
      ],
    },
    {
      title: "Медиа",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Список медиа",
          url: "/admin/media",
        },
        {
          title: "Загрузить медиа",
          url: "/admin/media/add",
        },
        {
          title: "Категории медиа",
          url: "/admin/media/categories",
        },
      ],
    },
    {
      title: "Настройки",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Настройки сайта",
          url: "#",
        },
        {
          title: "Настройки пользователя",
          url: "#",
        },
        {
          title: "Настройки платежей",
          url: "#",
        },
        {
          title: "Настройки объявления",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Задачи",
      url: "#",
      icon: Frame,
    },
    {
      name: "электронные письма",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Тикеты поддержки",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <NavUser user={data.user} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <ThemeToggle />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
