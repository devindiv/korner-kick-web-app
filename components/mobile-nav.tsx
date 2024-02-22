"use client";
import { categoryList, clubList } from "@/lib/interface";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "./ui/sheet";
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
    <div className="block md:absolute md:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu className="h-6 w-6" />
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
          <nav className="flex flex-col gap-3 text-left items-center">
            {categories.map((category, id) => (
              <Button key={id} asChild variant="ghost">
                <Link
                  href={`/${category.slug}`}
                  className="font-semibold text-sm transition-colors uppercase"
                >
                  {category.title}
                </Link>
              </Button>
            ))}
            <Sheet>
              <SheetTrigger>
                <Button
                  variant={"ghost"}
                  className="uppercase block md:absolute md:hidden text-md"
                >
                  Clubs
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col gap-4">
                  {clubs.map((club, idx) => (
                    <a
                      key={idx}
                      href={`${club.slug}`}
                      className="block px-2 py-1"
                    >
                      {club.title}
                    </a>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
