"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import canadaFlag from "@/assests/canada_round_icon_256.png";
import euFlag from "@/assests/european_union_round_icon_256.png";
import googleReviewIcon from "@/assests/google-customerreviewicon.png";
import shopifyIcon from "@/assests/shoppify-icon.png";
import ukFlag from "@/assests/united_kingdom_round_icon_256.png";
import usaFlag from "@/assests/united_states_of_america_round_icon_256.png";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { value: 200000, suffix: "+", label: "Trademarks since 2009" },
  { value: 120000, suffix: "+", label: "Happy Customers" },
  { value: 15, suffix: "+", label: "Years in Service" },
];

const regions = [
  {
    name: "United States",
    count: "4 Million+ Trademarks",
    flag: usaFlag,
  },
  {
    name: "Canada",
    count: "2 Million+ Trademarks",
    flag: canadaFlag,
  },
  {
    name: "European Union",
    count: "2 Million+ Trademarks",
    flag: euFlag,
  },
  {
    name: "United Kingdom",
    count: "3 Million+ Trademarks",
    flag: ukFlag,
  },
];

function formatStat(value: number) {
  return value.toLocaleString("en-US");
}

function AnimatedStat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const duration = 1300;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(value * eased));

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  }, [value]);

  return (
    <div>
      <p className="font-heading text-[38px] font-medium leading-none tracking-[-0.04em] text-black">
        {formatStat(displayValue)} {suffix}
      </p>
      <p className="mt-3 text-[15px] font-normal leading-7 text-[#223d66]">{label}</p>
    </div>
  );
}

export function SimilarMarksSection() {
  return (
    <section className="bg-[#f4f8fd]">
      <div className="mx-auto flex min-h-[80vh] max-w-[1440px] flex-col px-6 py-14 sm:px-8 lg:px-[90px]">
        <div className="flex flex-col gap-10 border-b border-slate-300 px-0 pb-10 lg:flex-row lg:items-start lg:justify-between lg:px-[100px]">
          <div className="grid flex-1 gap-8 sm:grid-cols-3">
            {stats.map((stat) => (
              <AnimatedStat
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>

          <div className="flex items-start gap-5 border-slate-400 lg:border-l lg:pl-5">
            <div>
              <p className="text-[16px] font-normal leading-7 text-slate-900">
                Rated <span className="font-bold text-[#17376b]">4.8/5</span> by 1000+ users
              </p>
              <div className="mt-4 flex items-center gap-4">
                <Image
                  src={shopifyIcon}
                  alt="Shopper Approved"
                  className="h-auto w-[150px] object-contain"
                />
                <Image
                  src={googleReviewIcon}
                  alt="Google Customer Reviews"
                  className="h-auto w-[92px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid flex-1 items-center gap-[50px] py-14 lg:grid-cols-[minmax(0,500px)_minmax(0,560px)] lg:justify-center">
          <div className="max-w-[500px] pl-2">
            <h2 className="font-heading text-[36px] font-normal leading-[1.35] tracking-[-0.03em] text-[#1f3d6d]">
              Search for <span className="font-bold text-[#1680df]">similar marks</span>
            </h2>
            <p className="mt-8 max-w-[500px] text-[18px] font-normal leading-[1.7] text-[#234069]">
              Ensure your trademark is unique and available by performing a thorough
              search before starting the registration process.
            </p>
            <Button className="mt-10 h-[54px] rounded-xl px-10 text-[14px] font-semibold">
              Start Searching Trademarks
            </Button>
          </div>

          <div className="grid max-w-[560px] gap-5 sm:grid-cols-2">
            {regions.map((region) => (
              <Card
                key={region.name}
                className="rounded-[14px] border border-slate-200 bg-white shadow-[0_10px_30px_rgba(28,50,94,0.08)]"
              >
                <CardContent className="flex min-h-[188px] flex-col items-center justify-center px-5 py-6 text-center">
                  <div className="flex h-[88px] w-[88px] items-center justify-center rounded-full bg-white">
                    <Image
                      src={region.flag}
                      alt={`${region.name} flag`}
                      className="h-[76px] w-[76px] rounded-full object-cover"
                    />
                  </div>
                  <h3 className="mt-5 font-heading text-[18px] font-bold leading-7 text-[#213d69]">
                    {region.name}
                  </h3>
                  <p className="mt-2 text-[18px] leading-7 text-[#233f68]">{region.count}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
