"use client";

import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Contact Us", href: "/#contact-us" },
  { label: "About Us", href: "/#about-us" },
  { label: "FAQ", href: "/#faq" },
];

const serviceItems = [
  { label: "Trademark Registration", href: "/trademark-registration" },
  { label: "Trademark Renewal", href: "/trademark-renewal" },
  { label: "Trademark Revival", href: "/trademark-revival" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isServices =
    pathname === "/trademark-registration" ||
    pathname === "/trademark-renewal" ||
    pathname === "/trademark-revival";

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
          <Link
            href="/"
            className={`relative pb-2 font-heading text-[14px] font-bold leading-5 transition-colors hover:text-[hsl(var(--primary))] ${
              isHome ? "text-[hsl(var(--primary))]" : "text-slate-700"
            }`}
          >
            Home
            {isHome ? (
              <span className="absolute bottom-0 left-1/2 h-[2px] w-16 -translate-x-1/2 rounded-full bg-[hsl(var(--primary))]" />
            ) : null}
          </Link>

          <div className="group relative">
            <Link
              href="/trademark-registration"
              className={`relative flex items-center gap-1 pb-2 font-heading text-[14px] font-bold leading-5 transition-colors hover:text-[hsl(var(--primary))] ${
                isServices ? "text-[hsl(var(--primary))]" : "text-slate-700"
              }`}
            >
              Our Services
              <ChevronDown className="h-4 w-4" />
              {isServices ? (
                <span className="absolute bottom-0 left-1/2 h-[2px] w-16 -translate-x-1/2 rounded-full bg-[hsl(var(--primary))]" />
              ) : null}
            </Link>

            <div className="invisible absolute left-1/2 top-full z-50 mt-2 w-[260px] -translate-x-1/2 rounded-[16px] border border-slate-200 bg-white p-2 opacity-0 shadow-[0_18px_40px_rgba(15,23,42,0.12)] transition-all duration-200 group-hover:visible group-hover:opacity-100">
              {serviceItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block rounded-[12px] px-4 py-3 text-[14px] font-semibold text-slate-700 transition-colors hover:bg-slate-50 hover:text-[hsl(var(--primary))]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="relative pb-2 font-heading text-[14px] font-bold leading-5 text-slate-700 transition-colors hover:text-[hsl(var(--primary))]"
            >
              {item.label}
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
