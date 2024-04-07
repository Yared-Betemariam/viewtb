import React from "react";
import Logo from "../Logo";
import { NavigationMenuMain } from "./NavLinks";
import { Button } from "../ui/button";
import Link from "next/link";
import Search from "./Search";

const Nav = () => {
  return (
    <header className="bgd z-40 h-32 shadow-md shadow-sky-950/30">
      <section className="wrapper h-full flex justify-between items-center ">
        <Logo />
        <div className="flex flex-col gap-3">
          <NavigationMenuMain />
          <div className="space-x-4 flex">
            <Search />
            <Link href={"/tuberculosis"}>
              <Button
                variant={"secondary"}
                className="text-sky-900 px-8 text-base"
              >
                More About TB
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </header>
  );
};
export default Nav;