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

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "нет имени",
    email: "нет почты",
    avatar: "/images/profile.png",
  },

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
          title: "Все турбазы и отели",
          url: "#",
        },
        {
          title: "Добавить",
          url: "#",
        },
        {
          title: "Категории",
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
      ],
    },
    {
      title: "События",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Все события",
          url: "#",
        },
        {
          title: "Добавить событие",
          url: "#",
        },
        {
          title: "Категории",
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

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const copyright = new Date().getFullYear();
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
        <p>СИБГИД 2014 - {copyright}</p>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
