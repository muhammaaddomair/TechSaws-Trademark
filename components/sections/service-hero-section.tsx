"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

type ServiceHeroSectionProps = {
  title: string;
  description: string;
};

export function ServiceHeroSection({
  title,
  description,
}: ServiceHeroSectionProps) {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setOffsetY(window.scrollY * 0.12);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative isolate overflow-hidden">
      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform: `translateY(${offsetY}px) scale(1.06)` }}
      >
        <Image
          src="/service-hero-img.webp"
          alt="Trademark services hero"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,17,31,0.62)_0%,rgba(10,24,42,0.54)_45%,rgba(13,30,49,0.46)_100%)]" />
      </div>

      <div className="relative mx-auto flex h-[90vh] max-w-[1440px] items-center justify-center px-6 py-14 text-center sm:px-8 lg:px-[60px]">
        <div className="max-w-[1040px]">
          <h1 className="whitespace-nowrap font-heading text-[36px] font-extrabold leading-[1.2] tracking-[-0.04em] text-white">
            {title}
          </h1>

          <p className="mx-auto mt-8 max-w-[900px] text-[18px] leading-[1.7] text-white">
            {description}
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <Button
              asChild
              className="h-[66px] min-w-[252px] rounded-[14px] text-[14px] font-semibold"
            >
              <Link href="/#contact-us">Start Now</Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              className="h-[66px] min-w-[252px] rounded-[14px] text-[14px] font-semibold text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/#contact-us">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
