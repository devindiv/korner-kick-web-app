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
            <NavigationMenuTrigger className="uppercase">
              Clubs
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 w-96 lg:grid-cols-[.75fr_1fr] capitalize text-md font-semibold">
                {clubs.map((club, i) => (
                  <li key={i}>
                    <Link href={`${club.slug}`}>{club.title}</Link>
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
            className="text-md font-medium transition-colors uppercase"
          >
            {category.title}
          </Link>
        </Button>
      ))}
    </nav>
  );
}
