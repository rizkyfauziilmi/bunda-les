import { BrandTitle } from "@/app/_components/brand-title";
import { ModeToggle } from "@/components/mode-toggle";
import { ChevronLeft, LibraryBig } from "lucide-react";

export const RegistrationNavbar = () => {
  return (
    <div className="p-4 flex justify-between items-center">
      <BrandTitle
        title="Bunda Les"
        href="/"
        icon={
          <div className="flex gap-2 transition-all group-hover:-translate-x-1">
            <ChevronLeft />
            <LibraryBig />
          </div>
        }
      />
      <ModeToggle />
    </div>
  );
};
