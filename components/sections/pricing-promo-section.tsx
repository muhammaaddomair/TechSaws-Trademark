import { Clock3, Search, ShieldCheck, UserRound } from "lucide-react";

import { Button } from "@/components/ui/button";

const features = [
  { label: "Comprehensive Search", icon: Search },
  { label: "7-Day Processing", icon: Clock3 },
  { label: "Filing Prepared by Specialists", icon: UserRound },
  { label: "100% Satisfaction Guarantee", icon: ShieldCheck },
];

export function PricingPromoSection() {
  return (
    <section className="w-full bg-[#f4f8fd]">
      <div className="mx-auto flex min-h-[42vh] max-w-[1440px] flex-col px-6 py-14 sm:px-8 lg:px-[60px]">
        <div className="mx-auto grid max-w-[1080px] flex-1 gap-6 lg:grid-cols-[0.98fr_0.76fr]">
          <div className="rounded-[16px] bg-[#eef5fb] p-8">
            <h2 className="font-heading text-[34px] font-bold leading-[1.2] tracking-[-0.03em] text-[#0e7fdb]">
              Trademark registration start from
            </h2>

            <div className="mt-5 flex items-end gap-3">
              <span className="font-heading text-[84px] font-extrabold leading-none tracking-[-0.06em] text-[#4f5357]">
                $49
              </span>
              <span className="mb-3 text-[16px] leading-7 text-[#0f172a]">+ Govt fee</span>
              <Button className="mb-2 ml-2 h-[46px] min-w-[180px] rounded-[12px] bg-[#0f4c78] text-[14px] font-semibold hover:bg-[#0d4369]">
                Register Now
              </Button>
            </div>

            <div className="mt-6 grid max-w-[320px] gap-3">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div key={feature.label} className="flex items-center gap-4 text-[#334763]">
                    <Icon className="h-5 w-5 shrink-0 stroke-[2.2]" />
                    <span className="text-[15px] leading-6">{feature.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid gap-5">
            <div className="rounded-[16px] bg-[#cfe8fb] px-7 py-5">
              <h3 className="font-heading text-[26px] font-bold leading-[1.2] tracking-[-0.03em] text-[#0c76d2]">
                Provisional Patent filing starts from
              </h3>
              <div className="mt-3 flex items-end gap-2">
                <span className="font-heading text-[46px] font-extrabold leading-none tracking-[-0.05em] text-[#4f5357]">
                  $500
                </span>
                <span className="mb-1 text-[22px] font-bold text-[#4f5357]">to</span>
                <span className="font-heading text-[46px] font-extrabold leading-none tracking-[-0.05em] text-[#4f5357]">
                  $800
                </span>
                <span className="mb-1 text-[14px] text-[#0f172a]">+ Govt fee</span>
              </div>
              <Button className="mt-4 h-[46px] min-w-[180px] rounded-[12px] text-[14px] font-semibold">
                Register Now
              </Button>
            </div>

            <div className="rounded-[16px] bg-[#cff5e8] px-7 py-5">
              <h3 className="font-heading text-[26px] font-bold leading-[1.2] tracking-[-0.03em] text-[#07a97a]">
                Copyright Filing Starts from
              </h3>
              <div className="mt-3 flex items-end gap-2">
                <span className="font-heading text-[46px] font-extrabold leading-none tracking-[-0.05em] text-[#4f5357]">
                  $189
                </span>
                <span className="mb-1 text-[14px] text-[#0f172a]">+ Govt fee</span>
              </div>
              <Button className="mt-4 h-[46px] min-w-[180px] rounded-[12px] bg-[#0db27d] text-[14px] font-semibold hover:bg-[#0a9d6e]">
                Register Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
