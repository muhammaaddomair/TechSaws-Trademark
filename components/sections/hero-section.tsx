import Image from "next/image";
import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/assets/hero-img.jpg"
          alt="Trademark protection hero"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(1,12,24,0.74)_0%,rgba(3,16,31,0.62)_34%,rgba(4,18,34,0.34)_70%,rgba(5,18,32,0.22)_100%)]" />
      </div>

      <div className="relative mx-auto flex h-[74vh] w-full max-w-none items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="flex w-full max-w-4xl flex-col items-center justify-center text-center">
          <div className="w-full max-w-3xl">
            <h1 className="mx-auto max-w-3xl font-heading text-[36px] font-bold leading-[54px] text-white">
              Secure Your Brand&apos;s Identity Name, Logo, Slogan & More! Starting at
              Just $49 + Federal Office Filing Fee
            </h1>
          </div>

          <div className="mt-8 w-full max-w-3xl rounded-[24px] p-5">
            <div className="flex items-center justify-between gap-3">
              <div className="relative w-full rounded-xl bg-white px-5 py-3 shadow-[0_14px_40px_rgba(15,23,42,0.18)]">
                <Input
                  type="text"
                  placeholder="Search Trademark Here..."
                  className="h-auto rounded-none border-0 bg-transparent px-0 py-0 pr-12 text-left text-[14px] text-slate-900 shadow-none placeholder:text-[14px] placeholder:text-slate-400 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
                <Search className="pointer-events-none absolute right-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              </div>
              <Button size="lg" className="h-[48px] rounded-lg px-10">
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
