import Image from "next/image";
import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function BrandNameSearchSection() {
  return (
    <section className="w-full bg-[#f4f8fd]">
      <div className="mx-auto grid min-h-[34vh] max-w-[1160px] items-center gap-5 px-6 py-14 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:px-0">
        <div className="max-w-[780px]">
          <h2 className="whitespace-nowrap font-heading text-[36px] font-normal leading-[1.25] tracking-[-0.03em] text-[#2f4467]">
            Search Your <span className="font-bold text-[#1680df]">Brand Name</span>{" "}
            Availability
          </h2>

          <p className="mt-6 max-w-[690px] text-[18px] leading-[1.6] text-[#334b71]">
            Search to see if your business name, slogan, or logo is available for
            trademark registration. Ensure your brand is unique and protected.
          </p>

          <div className="mt-8 flex max-w-[740px] items-center gap-4">
            <div className="relative flex-1 rounded-[12px] bg-white px-6 py-4 shadow-[0_12px_30px_rgba(31,54,94,0.07)]">
              <Input
                type="text"
                placeholder="Search Trademark Here..."
                className="h-auto rounded-none border-0 bg-transparent px-0 py-0 pr-10 text-[14px] text-slate-900 shadow-none placeholder:text-[14px] placeholder:text-[#9ca8ba] focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <Search className="pointer-events-none absolute right-6 top-1/2 h-6 w-6 -translate-y-1/2 text-[#9fb0cb]" />
            </div>
            <Button className="h-[52px] min-w-[168px] rounded-[12px] text-[14px] font-semibold">
              Search
            </Button>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <Image
            src="/assets/brand-name-img.png"
            alt="Brand name availability search illustration"
            width={420}
            height={320}
            className="h-auto w-full max-w-[420px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
