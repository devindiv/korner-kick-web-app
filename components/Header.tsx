import { routes } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Container from "./ui/container";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";
import DesktopNav from "./desktop-nav";
import { getCategories, getClubs } from "@/lib/actions";
import { categoryList, clubList } from "@/lib/interface";
import MobileNav from "./mobile-nav";

const Header = async () => {
  const categories: categoryList[] = await getCategories();
  const clubs: categoryList[] = await getClubs();
  return (
    <header className="sticky top-0 z-10 bg-gray-50 sm:flex sm:justify-between py-3 border-b">
      <Container>
        <div className="relative px-4 flex h-16 items-center justify-between w-full">
          <div className="flex items-center">
            <Link href="/" className="">
              <Image
                src="/kornerkick-alternate.svg"
                alt="navbar logo"
                width={400}
                height={400}
                className="w-48 md:w-56"
              />
            </Link>
          </div>
          <DesktopNav clubs={clubs} categories={categories} />

          <MobileNav clubs={clubs} categories={categories} />

          {/*<nav className="mx-6 items-center space-x-4 lg:space-x-6 hidden md:block">
            {routes.map((route, index) => (
              <Button key={index} asChild variant="ghost">
                <Link
                  href={route.href}
                  className="text-md font-medium transition-colors"
                >
                  {route.label}
                </Link>
              </Button>
            ))}
          </nav>
          <Sheet>
            <SheetTrigger>
              <Menu className="h-6 md:hidden w-6" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4">
                {routes.map((route, idx) => (
                  <Link key={idx} href={route.href} className="block px-2 py-1">
                    {route.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>*/}
        </div>
      </Container>
    </header>
  );
};

export default Header;
