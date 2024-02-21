"use client";
import { categoryList, clubList } from "@/lib/interface";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";

export default function MobileNav({
  categories,
  clubs,
}: {
  categories: categoryList[];
  clubs: categoryList[];
}) {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="h-6 md:hidden w-6" />
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col gap-4">
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
          <Sheet>
            <SheetTrigger>
              <Button className="uppercase text-md">Clubs</Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-4">
                {clubs.map((club, idx) => (
                  <Link
                    key={idx}
                    href={`${club.slug}`}
                    className="block px-2 py-1"
                  >
                    {club.title}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
