import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";

const navItems = ["Home", "Our Services", "Contact Us", "About Us", "FAQ"];

export function SiteHeader() {
  return (
    <header className="relative z-50 bg-white shadow-sm">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between gap-4 px-3 sm:px-4 lg:px-[18px]">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[hsl(var(--primary))]/10">
            <span className="font-heading text-base font-extrabold text-[hsl(var(--primary))]">
              TS
            </span>
          </div>
          <div>
            <p className="font-heading text-[14px] font-semibold leading-5 text-[rgb(37,99,235)]">
              TechSaws
            </p>
            <p className="font-heading text-[14px] font-semibold leading-5 text-[rgb(37,99,235)]">
              Trademark
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item, index) => (
            <Link
              key={item}
              href={index === 0 ? "/" : `#${item.toLowerCase().replaceAll(" ", "-")}`}
              className={`relative pb-2 font-heading text-[14px] font-bold leading-5 transition-colors hover:text-[hsl(var(--primary))] ${
                index === 0 ? "text-[hsl(var(--primary))]" : "text-slate-700"
              }`}
            >
              {item}
              {index === 0 ? (
                <span className="absolute bottom-0 left-1/2 h-[2px] w-16 -translate-x-1/2 rounded-full bg-[hsl(var(--primary))]" />
              ) : null}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button size="sm" className="hidden rounded-lg px-5 animate-trademark-pop lg:inline-flex">
            Trademark Now
          </Button>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 text-slate-700 lg:hidden"
            aria-label="Open navigation"
          >
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
