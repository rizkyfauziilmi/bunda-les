"use client"

import { Star } from "lucide-react";

export const StarReview = () => {
  return (
    <div>
      <div className="flex items-center">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} fill="gold" className="text-transparent w-4 h-4" />
        ))}
        <p className="font-semibold text-sm ml-2">5.0</p>
      </div>
      <p className="text-muted-foreground text-xs">dari 100+ siswa</p>
    </div>
  );
};
