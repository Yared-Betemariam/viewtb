"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import React from "react";

export function NavigationMenuMain() {
  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Contacts",
      path: "/contacts",
    },

    {
      name: "Screening Test",
      path: "/test",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "ስለ ቲቢ ተጨማሪ",
      path: "/amharic",
    },
  ];
  return (
    <nav className="text-white hidden md:flex ml-auto">
      <ul className="flex items-center justify-end space-x-4">
        {navLinks.map((item) => (
          <li key={item.name} className="text-base">
            <Link href={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
