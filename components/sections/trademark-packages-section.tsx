import { Check, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const packages = [
  {
    name: "Individuals",
    price: "$49",
    accent: "border-[#1680df] text-[#1680df]",
    cardClass: "bg-white text-[#17233d]",
    mutedText: "text-[#6f7b8e]",
    feeClass: "text-[#4d5b73]",
    buttonClass:
      "bg-[#1680df] text-white hover:bg-[#1272c8]",
    features: [
      {
        title: "Comprehensive Search",
        description:
          "Basic search of the Federal database for existing trademarks to minimize risk of rejection.",
        included: true,
      },
      {
        title: "7-Day Processing",
        description:
          "Completion of trademark application within 7 business days after approval.",
        included: true,
      },
      {
        title: "Filing Prepared by Specialists",
        description:
          "Your application will be prepared and reviewed by our trademark specialists.",
        included: true,
      },
      {
        title: "100% Satisfaction Guarantee",
        description: "Ensuring your mark is processed efficiently.",
        included: true,
      },
      {
        title: "Office Action Support",
        description:
          "In case of any Federal office actions, receive a Cease and Desist letter template to address infringing parties.",
        included: false,
      },
      {
        title: "6 Months of Trademark Monitoring",
        description:
          "Monitoring service extended for six months to detect any infringing marks after registration.",
        included: false,
      },
      {
        title: "Additional Filings Management",
        description:
          "Covers additional filings required during the approval process (60% of applications typically require this).",
        included: false,
      },
    ],
  },
  {
    name: "Small Businesses",
    price: "$149",
    accent: "border-white text-white",
    cardClass: "bg-[#1680df] text-white",
    mutedText: "text-white/80",
    feeClass: "text-white/80",
    buttonClass:
      "bg-white text-[#0f63bc] hover:bg-white/95",
    recommended: true,
    features: [
      {
        title: "Comprehensive Trademark Search",
        description:
          "Includes federal and state trademark searches for similar names, logos, or slogans, ensuring thorough coverage.",
        included: true,
      },
      {
        title: "3-Day Processing",
        description:
          "Completion of trademark application within 3 business days after approval.",
        included: true,
      },
      {
        title: "Reviewed By Paralegal",
        description:
          "A licensed paralegal will review your trademark application to ensure legal compliance.",
        included: true,
      },
      {
        title: "100% Satisfaction Guarantee",
        description: "Ensuring your mark is processed efficiently.",
        included: true,
      },
      {
        title: "Office Action Support",
        description:
          "In case of any Federal office actions, receive a Cease and Desist letter template to address infringing parties.",
        included: true,
      },
      {
        title: "6 Months of Trademark Monitoring",
        description:
          "Monitoring service extended for six months to detect any infringing marks after registration.",
        included: false,
      },
      {
        title: "Additional Filings Management",
        description:
          "Covers additional filings required during the approval process (60% of applications typically require this).",
        included: false,
      },
    ],
  },
  {
    name: "Corporates",
    price: "$249",
    accent: "border-[#1680df] text-[#1680df]",
    cardClass: "bg-white text-[#17233d]",
    mutedText: "text-[#6f7b8e]",
    feeClass: "text-[#4d5b73]",
    buttonClass:
      "bg-[#1680df] text-white hover:bg-[#1272c8]",
    features: [
      {
        title: "Comprehensive Trademark Search",
        description:
          "Includes federal and state trademark searches for similar names, logos, or slogans, ensuring thorough coverage.",
        included: true,
      },
      {
        title: "24 - 48 Hours Processing",
        description:
          "Completion of trademark application within 24 to 48 Hours after approval.",
        included: true,
      },
      {
        title: "Full Paralegal Support",
        description:
          "A team of U.S. licensed paralegals will guide you through the application process, from preparation to response to any Federal inquiries.",
        included: true,
      },
      {
        title: "100% Satisfaction Guarantee",
        description: "Ensuring your mark is processed efficiently.",
        included: true,
      },
      {
        title: "Office Action Support",
        description:
          "In case of any Federal office actions, receive a Cease and Desist letter template to address infringing parties.",
        included: true,
      },
      {
        title: "6 Months of Trademark Monitoring",
        description:
          "Monitoring service extended for six months to detect any infringing marks after registration.",
        included: true,
      },
      {
        title: "Additional Filings Management",
        description:
          "Covers additional filings required during the approval process (60% of applications typically require this).",
        included: true,
      },
    ],
  },
];

export function TrademarkPackagesSection() {
  return (
    <section className="w-full bg-[#f4f8fd]">
      <div className="mx-auto flex max-w-[1440px] flex-col px-6 py-14 sm:px-8 lg:px-[60px]">
        <div className="mx-auto max-w-[980px] text-center">
          <h2 className="font-heading text-[36px] font-normal leading-[1.25] tracking-[-0.03em] text-[#32486c]">
            Trademark <span className="font-bold text-[#1680df]">Registration Packages</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[960px] text-[16px] leading-[1.6] text-[#60738d]">
            Simplify your budgeting with our transparent and straightforward business
            pricing plan, designed to support your growth.
          </p>
        </div>

        <div className="mx-auto mt-14 grid w-full max-w-[1400px] items-end gap-8 lg:grid-cols-3">
          {packages.map((pkg) => (
            <Card
              key={pkg.name}
              className={`self-end rounded-[20px] border border-[#dbe6f2] shadow-[0_16px_40px_rgba(36,59,97,0.08)] ${pkg.cardClass}`}
            >
              <CardContent
                className={`flex flex-col overflow-hidden px-8 pt-8 pb-5 ${
                  pkg.recommended ? "min-h-[1250px]" : "min-h-[1220px]"
                }`}
              >
                <div className={`mx-auto rounded-[14px] border px-6 py-2.5 text-[16px] font-bold leading-7 ${pkg.accent}`}>
                  {pkg.name}
                </div>

                {pkg.recommended ? (
                  <p className="mt-8 text-center text-[18px] font-semibold leading-7">
                    Recomended
                  </p>
                ) : (
                  <div className="mt-8 h-7" />
                )}

                <div className="mt-3 text-center">
                  <p className="font-heading text-[68px] font-extrabold leading-none tracking-[-0.05em]">
                    {pkg.price}
                  </p>
                  <p className={`mt-6 text-[19px] leading-7 ${pkg.feeClass}`}>
                    +Federal Fee <span className="font-bold">$350</span> Per Class
                  </p>
                </div>

                <div className="mt-10 flex flex-1 flex-col gap-5">
                  {pkg.features.map((feature) => (
                    <div key={feature.title} className="flex items-start gap-4">
                      <div
                        className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                          feature.included
                            ? "bg-[#35c33d] text-white"
                            : "bg-[#8a8f98] text-white"
                        }`}
                      >
                        {feature.included ? (
                          <Check className="h-4 w-4 stroke-[3]" />
                        ) : (
                          <X className="h-4 w-4 stroke-[3]" />
                        )}
                      </div>
                      <div>
                        <h3
                          className={`text-[18px] leading-7 ${
                            feature.included
                              ? pkg.name === "Small Businesses"
                                ? "text-white"
                                : "text-[#111b31]"
                              : pkg.name === "Small Businesses"
                                ? "text-black"
                                : "text-[#7e8590]"
                          }`}
                        >
                          {feature.title}
                        </h3>
                        <p
                          className={`mt-1.5 text-[13px] leading-6 ${
                            feature.included
                              ? pkg.name === "Small Businesses"
                                ? "text-white/85"
                                : "text-[#1b2740]"
                              : pkg.name === "Small Businesses"
                                ? "text-black"
                                : "text-[#7e8590]"
                          }`}
                        >
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <Button
                  className={`mt-6 h-[60px] w-full shrink-0 rounded-[12px] text-[16px] font-semibold ${pkg.buttonClass}`}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
