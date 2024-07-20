"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MapPin } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import IconWhatsapp from "../_svgs/whatsapp";
import { RegistrationForm } from "./registration-form";
import fotoRumah from "@/public/rumah.jpg";
import Image from "next/image";

export const RegistrationComponent = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="flex md:flex-row flex-col-reverse min-h-screen p-4 md:gap-4">
      <div className="md:w-4/6 w-full flex items-start">
        <RegistrationForm />
      </div>
      <p className="text-sm text-muted-foreground text-center my-4 md:hidden">Atau</p>
      <div className="md:w-5/6 w-full flex flex-col gap-4 items-center">
        <Image
          src={fotoRumah}
          alt="foto-rumah"
          placeholder="blur"
          priority
          className="rounded-xl aspect-video object-cover"
        />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.8431654679944!2d107.55798377408881!3d-6.909349067619036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e5c29e64dcb9%3A0x8723452b7dd9ed76!2sJl.%20Microwave%20No.17%2C%20Cibeureum%2C%20Kec.%20Cimahi%20Sel.%2C%20Kota%20Cimahi%2C%20Jawa%20Barat%2040535!5e0!3m2!1sid!2sid!4v1721438302521!5m2!1sid!2sid"
          className={cn(
            isDark && "invert",
            "border-0 w-full md:h-96 rounded-lg shadow-lg"
          )}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="md:space-x-1 md:space-y-0 space-y-2">
          <Button asChild className="md:w-fit w-full">
            <Link
              href="https://maps.app.goo.gl/MeAXtnHkjjy5jspL8"
              target="_blank"
            >
              <MapPin className="w-4 h-4 mr-2" /> Daftar Langsung ke Tempat
            </Link>
          </Button>
          <Button asChild className="md:w-fit w-full">
            <Link
              target="_blank"
              href="https://wa.me/6281320380467?text=Nama%20saya%20%5Bnama%20wali%5D%20wali%20dari%20%5Bnama%20anak%5D,%0Asaya%20ingin%20mendafatar%20les%20untuk%20%5Bsd/smp/sma%5D"
            >
              <IconWhatsapp className="w-4 h-4 mr-2" /> Daftar Melalui Whatsapp
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
