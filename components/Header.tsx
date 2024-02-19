"use client";

import { routes } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Container from "./ui/container";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";

const Header = () => {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-10 bg-gray-50 sm:flex sm:justify-between py-3 px-4 border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
          <div className="flex items-center">
            <Link href="/" className="ml-4 lg:ml-0">
              <Image
                src="/kornerkick-alternate.svg"
                alt="navbar logo"
                width={180}
                height={80}
              />
            </Link>
          </div>
          <nav className="mx-6 items-center space-x-4 lg:space-x-6 hidden md:block">
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
          </Sheet>
        </div>
      </Container>
    </header>
  );
};

export default Header;
