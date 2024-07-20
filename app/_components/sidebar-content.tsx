"use client";

import { scrollToElement } from "@/lib/scroll";
import { Button } from "@/components/ui/button";
import {
  BookText,
  Star,
  Image,
  Speech,
  ShieldQuestion,
  MessageCircleQuestion,
  UserRoundPen,
} from "lucide-react";
import Link from "next/link";

interface SidebarContentProps {
  closeSidebar: () => void;
}

const components: {
  title: string;
  icon: JSX.Element;
  elementId?: string;
  href?: string;
}[] = [
  {
    title: "Tentang Kami",
    icon: <ShieldQuestion className="w-4 h-4 mr-2" />,
    elementId: "about-us",
  },
  {
    title: "Program dan Layanan",
    icon: <BookText className="w-4 h-4 mr-2" />,
    elementId: "programs",
  },
  {
    title: "Testimoni dan Review",
    icon: <Star className="w-4 h-4 mr-2" />,
    elementId: "testimonials",
  },
  {
    title: "Galeri",
    icon: <Image className="w-4 h-4 mr-2" />,
    elementId: "gallery",
  },
  {
    title: "Pengajar",
    icon: <Speech className="w-4 h-4 mr-2" />,
    elementId: "teacher",
  },
  {
    title: "FAQ",
    icon: <MessageCircleQuestion className="w-4 h-4 mr-2" />,
    elementId: "faq",
  },
  {
    title: "Daftar Sekarang",
    icon: <UserRoundPen className="w-4 h-4 mr-2" />,
    href: "/registration",
  },
];

export const SidebarContent = ({ closeSidebar }: SidebarContentProps) => {
  return (
    <div className="flex flex-col mt-4 gap-4">
      {components.map((component) => {
        if (component.href) {
          return (
            <Button
              key={component.title}
              onClick={closeSidebar}
              variant="ghost"
              className="justify-start"
              asChild
            >
              <Link href={component.href}>
                {component.icon}
                {component.title}
              </Link>
            </Button>
          );
        }

        if (component.elementId) {
          return (
            <Button
              key={component.title}
              onClick={() => {
                if (component.elementId) {
                  scrollToElement(component.elementId);
                }
                closeSidebar();
              }}
              variant="ghost"
              className="justify-start"
            >
              {component.icon}
              {component.title}
            </Button>
          );
        }
      })}
    </div>
  );
};
