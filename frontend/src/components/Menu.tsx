import React from "react";
import Link from "next/link";

const menuItems = [
  { href: "/hotels", label: "Турбазы" },
  { href: "/places", label: "Интересные места" },
  { href: "/tours", label: "Туры" },
  { href: "/events", label: "События" }
];

export default function Menu() {
  return (
    <nav>
      <ul className="flex flex-row gap-5">
        {menuItems.map(item => (
          <li key={item.href}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
