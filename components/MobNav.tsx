import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

import { LuMenu } from "react-icons/lu";
import Logo from "./Logo";
import Link from "next/link";

export default function MobNav() {
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
  ];
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size={"icon"} variant="outline" className="md:hidden ml-auto">
          <LuMenu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <Logo />
        </SheetHeader>
        <div className="flex flex-col my-5">
          <ul className="flex space-y-2 text-lg font-semibold flex-col">
            {navLinks.map((item, i) => [
              <li key={i}>
                <SheetClose asChild>
                  <Link href={item.path}>{item.name}</Link>
                </SheetClose>
              </li>,
            ])}
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
}
