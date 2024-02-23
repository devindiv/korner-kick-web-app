"use client";
import { categoryList, clubList } from "@/lib/interface";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function DesktopNav({
  categories,
  clubs,
}: {
  categories: categoryList[];
  clubs: categoryList[];
}) {
  return (
    <nav className="items-center space-x-3 lg:space-x-4 hidden md:flex">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="uppercase text-sm font-semibold text-gray-800">
              Clubs
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="p-4 grid grid-cols-2 gap-2 w-[32rem]">
                {clubs.map((club, i) => (
                  <li key={i}>
                    <Link
                      href={`/${club.slug}`}
                      className="text-sm text-gray-600"
                    >
                      {club.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {categories.slice(0, 4).map((category, id) => (
        <Button key={id} asChild variant="ghost">
          <Link
            href={`/${category.slug}`}
            className="text-md font-semibold text-gray-800 transition-colors uppercase"
          >
            {category.title}
          </Link>
        </Button>
      ))}
    </nav>
  );
}
