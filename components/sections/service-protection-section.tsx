import { CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";

const items = [
  {
    title: "Get ® Symbol on Logos",
    description:
      "File a case against anyone infringing upon your rights through trademark registration",
  },
  {
    title: "Protect & Verify Domain Name",
    description:
      "We help you verify that your domain name isn't similar to someone's copyrighted trademark",
  },
  {
    title: "Differentiate Your Business",
    description:
      "Trademark registration provides you with the evidence of business ownership, creating trust",
  },
];

export function ServiceProtectionSection() {
  return (
    <section className="w-full bg-[#f4f8fd]">
      <div className="mx-auto grid min-h-[80vh] max-w-[1440px] items-center gap-14 px-10 py-16 sm:px-14 lg:grid-cols-[0.82fr_0.98fr] lg:px-[80px]">
        <div className="mx-auto max-w-[650px]">
          <h2 className="font-heading text-[36px] font-bold leading-[40px] tracking-[-0.04em] text-[rgb(30,41,59)]">
            Protect Your Business From <br />
            Infringement
          </h2>

          <div className="mt-10 grid gap-6">
            {items.map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <CheckCircle2 className="mt-1 h-7 w-7 shrink-0 fill-[#43b82f] text-white" />
                <div>
                  <h3 className="font-heading text-[18px] font-bold leading-[28px] text-[rgb(30,41,59)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-[420px] font-heading text-[14px] font-normal leading-[20px] text-[rgb(100,116,139)]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Button className="mt-12 h-[66px] min-w-[230px] rounded-[14px] text-[14px] font-semibold">
            Start Now
          </Button>
        </div>

        <div className="flex justify-center">
          <img
            src="/service-hero-img.webp"
            alt="Business protection meeting"
            className="h-[500px] w-full max-w-[500px] rounded-[24px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
