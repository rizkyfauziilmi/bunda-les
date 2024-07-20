import { Button } from "@/components/ui/button";
import { ChevronLeft, SearchSlash } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col gap-4 justify-center items-center">
      <div className="flex items-center gap-2">
        <SearchSlash />
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          404
        </h4>
        <p className="text-sm text-muted-foreground hover:underline cursor-pointer">
          Halaman tidak ditemukan
        </p>
      </div>
      <Link href="/">
        <Button variant="outline" className="group">
          <ChevronLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-all" />{" "}
          <span className="group-hover:underline">
            Kembali ke halaman utama
          </span>
        </Button>
      </Link>
    </div>
  );
}
