import React from "react";
import Logo from "../Logo";
import { NavigationMenuMain } from "./NavLinks";
import { Button } from "../ui/button";
import Link from "next/link";
import Search from "./Search";
import MobNav from "../MobNav";

const Nav = () => {
  return (
    <header className="bgd z-40 h-24 sm:h-24 md:h-32 border-b border-gray-900/20">
      <section className="wrapper h-full flex justify-between items-center ">
        <Logo />
        <div className="flex flex-col gap-3">
          <NavigationMenuMain />
          <div className="space-x-4 flex ml-auto">
            <Search />
            <Link href={"/amharic"}>
              <Button
                variant={"secondary"}
                className="text-sky-900 px-6 text-base rounded-lg drop-shadow-md"
              >
                {/* More About TB */}
                ስለ ቲቢ ተጨማሪ
              </Button>
            </Link>
            <MobNav />
          </div>
        </div>
      </section>
    </header>
  );
};
export default Nav;
