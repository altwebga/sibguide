"use client";
import React from "react";
import {
  Navbar,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "./theme-switch";
import { Kbd } from "@nextui-org/kbd";
import { Button } from "@nextui-org/button";
import { MagnifyingGlassIcon, PlusIcon } from "@heroicons/react/24/outline";

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      startContent={<MagnifyingGlassIcon className="w-6 h-6" />}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      type="search"
    />
  );

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="full"
    >
      <NavbarContent className="" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
        Меню
      </NavbarContent>

      <NavbarContent className="pr-3 w-1/4" justify="center">
        {searchInput}
      </NavbarContent>

      <NavbarContent justify="end">
        <ThemeSwitch />
        <Button
          as={Link}
          className="text-sm font-normal text-default-600 bg-default-100"
          href={siteConfig.links.addListing}
          startContent={<PlusIcon className="w-6 h-6" />}
          variant="flat"
        >
          Добавить объявление
        </Button>
      </NavbarContent>

      <NavbarMenu className="w-full md:w-1/4">
        {siteConfig.navMenuItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === siteConfig.navMenuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href={item.href}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
