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
import { routes } from "@/constants";

export default function DesktopNav({
  categories,
  clubs,
}: {
  categories: categoryList[];
  clubs: categoryList[];
}) {
  return (
    <nav className="mx-6 items-center space-x-4 lg:space-x-6 hidden md:flex">
      {categories.map((category, id) => (
        <Button key={id} asChild variant="ghost">
          <Link
            href={`/${category.slug}`}
            className="text-md font-medium transition-colors uppercase"
          >
            {category.title}
          </Link>
        </Button>
      ))}

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="uppercase">
              Clubs
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 w-96 lg:grid-cols-[.75fr_1fr] capitalize text-sm">
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
    </nav>
  );
}
