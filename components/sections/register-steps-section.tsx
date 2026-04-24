import { ArrowRight, FileText, Search, Users } from "lucide-react";

import { Button } from "@/components/ui/button";

const steps = [
  {
    title: "Conduct a Trademark Search",
    description:
      "Before you apply, our team will perform a comprehensive search to ensure your desired trademark isn't already in use. This step helps avoid potential conflicts and strengthens your application",
    icon: Search,
  },
  {
    title: "Prepare and File Your Application",
    description:
      "Our expert attorneys will guide you through preparing the necessary documentation and filing your trademark application with the U.S. Patent and Trademark Office (Federal Office). We'll ensure your application meets all legal requirements.",
    icon: FileText,
  },
  {
    title: "Monitor and Respond to Office Actions",
    description:
      "After filing, we'll keep track of your application's progress and respond to any office actions or requests for additional information from the Federal Office. Our goal is to help secure your trademark efficiently and effectively.",
    icon: Users,
  },
];

function ConnectorArrow() {
  return (
    <div className="hidden items-center justify-center lg:flex">
      <span className="text-[72px] leading-none text-black/90">↷</span>
    </div>
  );
}

export function RegisterStepsSection() {
  return (
    <section className="w-full bg-[#f4f8fd]">
      <div className="mx-auto flex min-h-[60vh] max-w-[1440px] flex-col px-6 py-14 sm:px-8 lg:px-[60px]">
        <div className="mx-auto max-w-[980px] text-center">
          <h2 className="font-heading text-[36px] font-normal leading-[1.25] tracking-[-0.03em] text-[#32486c]">
            Register your U.S. <span className="font-bold text-[#1680df]">Trademark in 3 easy steps</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[880px] text-[16px] leading-[1.6] text-[#60738d]">
            Legal Trademark Office attorneys have provided representation for a diverse
            range of businesses, including Amazon sellers, clothing designers,
            professional service providers, and more.
          </p>
        </div>

        <div className="mt-14 grid items-start gap-3 lg:grid-cols-[320px_auto_320px_auto_320px] lg:justify-center">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={step.title} className="contents">
                <div className="mx-auto flex w-[320px] flex-col items-center text-center">
                  <div className="flex h-14 w-14 items-center justify-center text-[#2a96ea]">
                    <Icon className="h-11 w-11 stroke-[1.7]" />
                  </div>
                  <h3 className="mt-6 w-[320px] whitespace-nowrap font-heading text-[16px] font-bold leading-7 text-[#12294c]">
                    {step.title}
                  </h3>
                  <p
                    className={`mt-2 text-[14px] leading-[1.65] text-[#21395f] ${
                      index === 0 ? "w-[260px]" : "w-[280px]"
                    }`}
                  >
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 ? <ConnectorArrow /> : null}
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex items-center justify-center gap-6">
          <Button className="h-[66px] min-w-[252px] rounded-[14px] text-[14px] font-semibold">
            Start Now
          </Button>
          <Button
            variant="outline"
            className="h-[66px] min-w-[230px] rounded-[14px] border-[#1680df] bg-transparent text-[14px] font-semibold text-[#1680df] hover:bg-[#1680df]/5"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
