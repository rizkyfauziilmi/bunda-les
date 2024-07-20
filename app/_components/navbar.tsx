"use client";

import { BrandTitle } from "./brand-title";
import { ModeToggle } from "@/components/mode-toggle";
import { LibraryBig, Menu } from "lucide-react";
import { NavbarNavigation } from "./navbar-navigation";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SidebarContent } from "./sidebar-content";
import { useBoolean } from "usehooks-ts";

export const Navbar = () => {
  const isSheetOpen = useBoolean();

  return (
    <div className="flex justify-between py-4 px-6 md:py-8 md:px-16 bg-background shadow-md sticky top-0 z-50">
      <div className="md:flex-1 flex justify-start">
        <BrandTitle title="Bunda Les" icon={<LibraryBig />} />
      </div>
      <div className="flex-1 md:flex justify-center hidden">
        <NavbarNavigation />
      </div>
      <div className="md:flex-1 md:flex md:justify-end hidden">
        <ModeToggle />
      </div>
      <Sheet open={isSheetOpen.value} onOpenChange={isSheetOpen.setValue}>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline" className="flex md:hidden">
            <Menu className="w-4 h-4" />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription>Apa yang ingin kamu lihat?</SheetDescription>
          </SheetHeader>
          <SidebarContent closeSidebar={isSheetOpen.setFalse} />
        </SheetContent>
      </Sheet>
    </div>
  );
};
