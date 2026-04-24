import Link from "next/link";
import { MapPinned, Phone, ScrollText } from "lucide-react";

const quickLinksLeft = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about-us" },
  { label: "Our Services", href: "/trademark-registration" },
  { label: "Trademark Renewal", href: "/trademark-renewal" },
];

const quickLinksRight = [
  { label: "Contact Us", href: "/#contact-us" },
  { label: "FAQ", href: "/#faq" },
  { label: "Trademark Registration", href: "/trademark-registration" },
  { label: "Trademark Revival", href: "/trademark-revival" },
];

export function SiteFooter() {
  return (
    <footer className="w-full">
      <div className="bg-[linear-gradient(90deg,#3098e6_0%,#0f4e86_100%)]">
        <div className="mx-auto flex min-h-[45vh] max-w-[1440px] px-20 pb-8 pt-20">
          <div className="grid w-full gap-8 lg:grid-cols-[1.05fr_1.02fr_0.93fr]">
            <div className="max-w-[420px]">
              <div className="inline-flex items-center gap-4">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white/12">
                  <span className="font-heading text-[30px] font-extrabold text-white">TS</span>
                </div>
                <div>
                  <p className="font-heading text-[28px] font-bold leading-none text-white">
                    TechSaws
                  </p>
                  <p className="mt-2 text-[15px] font-semibold uppercase tracking-[0.28em] text-white/80">
                    Trademark Office
                  </p>
                </div>
              </div>

              <p className="mt-10 text-[16px] leading-[1.55] text-white">
                Secure your brand&apos;s future with Legal Trademark Office tailored
                protection packages. Choose our DIY assisted service for a hands-on
                approach, or enlist our expert attorneys to handle your trademark filing
                with precision and care. Protect your uniqueness.
              </p>
            </div>

            <div className="lg:pl-4">
              <h3 className="font-heading text-[18px] font-bold text-white">Quick Links</h3>
              <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6">
                <div className="grid gap-6">
                  {quickLinksLeft.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="text-[16px] leading-7 text-white transition-opacity hover:opacity-80"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
                <div className="grid gap-6">
                  {quickLinksRight.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="text-[16px] leading-7 text-white transition-opacity hover:opacity-80"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:pl-3">
              <h3 className="font-heading text-[18px] font-normal text-white">
                Call Now for a Free Consultation:
              </h3>

              <div className="mt-10 grid gap-7 text-white">
                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6 shrink-0" />
                  <p className="text-[18px] font-bold leading-7">+1 (310) 424 4909</p>
                </div>

                <div className="flex items-start gap-4">
                  <MapPinned className="mt-1 h-6 w-6 shrink-0" />
                  <p className="text-[14px] font-bold leading-6">
                    2121 Crystal Dr, Arlington, VA 22202, USA
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <ScrollText className="h-6 w-6 shrink-0" />
                  <p className="text-[16px] font-bold leading-7">
                    Working Hours: 9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#202b3f]">
        <div className="mx-auto flex min-h-[15vh] max-w-[1440px] flex-col items-center justify-center px-6 py-8 text-center sm:px-8 lg:px-[60px]">
          <p className="max-w-[1180px] text-[16px] leading-[1.65] text-white/85">
            Disclaimer: We are an independent trademark filing support service. We are
            not a government agency and are not affiliated with the USPTO. We assist
            business owners by preparing and submitting trademark applications directly
            to the USPTO on their behalf.
          </p>
          <p className="mt-8 text-[16px] leading-7 text-white">
            &copy; 2025 <span className="text-[#59a8ff]">Legal Trademark Office.</span> All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
