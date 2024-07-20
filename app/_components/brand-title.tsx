"use client";

import Link from "next/link";

interface BrandTitleProps {
  title: string;
  icon?: JSX.Element;
  href?: string;
}

export const BrandTitle = ({ title, icon, href }: BrandTitleProps) => {
  if (href) {
    return (
      <Link href={href} className="group">
        <div className="flex items-center gap-2">
          {icon}
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            {title}
          </h4>
        </div>
      </Link>
    );
  }

  return (
    <div className="flex items-center gap-2">
      {icon}
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
        {title}
      </h4>
    </div>
  );
};
