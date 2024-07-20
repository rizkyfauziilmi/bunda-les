"use client";

import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { scrollToElement } from "@/lib/scroll";
import Link from "next/link";

const components: { title: string; description: string; elementId: string }[] =
  [
    {
      title: "Tentang Kami",
      description:
        "sejarah, visi, dan misi kami dalam membantu siswa meraih kesuksesan akademis dan masa depan yang cerah.",
      elementId: "about-us",
    },
    {
      title: "Program dan Layanan",
      description:
        "program bimbingan belajar, mulai dari persiapan ujian hingga kursus mata pelajaran tertentu, yang dirancang untuk memenuhi kebutuhan setiap siswa.",
      elementId: "programs",
    },
    {
      title: "Testimoni dan Review",
      description:
        "Dengarkan cerita sukses dari siswa dan orang tua yang telah merasakan manfaat dari bimbel kami.",
      elementId: "testimonials",
    },
    {
      title: "Galeri",
      description:
        "Lihat foto dan video kegiatan belajar mengajar di bimbel kami yang penuh semangat dan interaktif.",
      elementId: "gallery",
    },
    {
      title: "Pengajar",
      description:
        "Kenali para pengajar kami yang berdedikasi dan berpengalaman dalam membantu siswa mencapai prestasi terbaik mereka.",
      elementId: "teacher",
    },
    {
      title: "FAQ (Frequently Asked Questions)",
      description:
        "Temukan jawaban untuk pertanyaan-pertanyaan yang sering diajukan mengenai bimbel kami dan layanan yang kami tawarkan.",
      elementId: "faq",
    },
  ];

export const NavbarNavigation = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Informasi</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                  <div className="mb-2 mt-4 text-lg font-medium">BUNDA LES</div>
                  <p className="text-sm leading-tight text-muted-foreground">
                    Langkah Kecil Menuju Masa Depan Besar
                  </p>
                </div>
              </li>
              <ListItem title="Pengajar Berpengalaman">
                berpengalaman dan berdedikasi siswa mencapai masa depan yang
                cerah.
              </ListItem>
              <ListItem title="Pembentukan Karakter dan Akhlak">
                membimbing siswa dalam pembentukan akhlak yang baik.
              </ListItem>
              <ListItem title="Prestasi Siswa yang Terbukti">
                siswa kami berprestasi dan diterima di sekolah serta universitas
                impian mereka.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Lihat lebih lanjut</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  className="cursor-pointer"
                  onClick={() => scrollToElement(component.elementId)}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="/registration"
              className={cn(navigationMenuTriggerStyle(), "cursor-pointer")}
            >
              Daftar Sekarang
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <div
        ref={ref}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </div>
    </li>
  );
});
ListItem.displayName = "ListItem";
