import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { BreadcrumbItem, BreadcrumbJsonLd } from "./JsonLd";

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const fullItems: BreadcrumbItem[] = [
    { name: "Home", item: "/" },
    ...items,
  ];

  return (
    <>
      <BreadcrumbJsonLd items={fullItems} />
      <nav aria-label="Breadcrumb" className="py-3 px-4 sm:px-6 max-w-7xl mx-auto">
        <ol className="flex items-center flex-wrap gap-1.5 text-xs sm:text-sm font-medium text-[#7A1B0C]/80">
          <li className="inline-flex items-center">
            <Link
              href="/"
              className="inline-flex items-center gap-1 text-[#7A1B0C] hover:text-[#B8860B] transition-colors"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
          </li>

          {items.map((crumb, idx) => {
            const isLast = idx === items.length - 1;
            return (
              <li key={crumb.item} className="inline-flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-[#8B6914]/60 shrink-0" />
                {isLast ? (
                  <span
                    aria-current="page"
                    className="font-semibold text-[#7A1B0C] truncate max-w-[200px] sm:max-w-none"
                  >
                    {crumb.name}
                  </span>
                ) : (
                  <Link
                    href={crumb.item}
                    className="text-[#7A1B0C] hover:text-[#B8860B] transition-colors truncate max-w-[180px] sm:max-w-none"
                  >
                    {crumb.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
