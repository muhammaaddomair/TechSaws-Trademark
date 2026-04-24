import Image from "next/image";

import attorneyOne from "@/assests/attorney-img1.png";
import attorneyTwo from "@/assests/attorney-img2.png";
import attorneyThree from "@/assests/attorney-img3.png";
import lawIcon from "@/assests/law.png";
import scaleIcon from "@/assests/pngwing.com.png";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const attorneys = [
  {
    name: "Ksean Williams",
    image: attorneyOne,
    description:
      "Ksean is a seasoned intellectual property attorney who has represented a diverse range of clients, from small businesses to international corporations. His strategic approach ensures your trademark is secure and fully compliant.",
  },
  {
    name: "James Clarke",
    image: attorneyTwo,
    description:
      "James has extensive experience in trademark law and is committed to helping businesses protect their intellectual property, with over 7 years of legal experience.",
  },
  {
    name: "Sophia Green",
    image: attorneyThree,
    description:
      "With over 10 years of legal experience, Sophia specializes in helping startups secure their trademarks and grow their brand with confidence. She's known for her attention to detail and client-focused approach.",
  },
];

function Stars() {
  return (
    <div className="flex items-center gap-1 text-[#ffcf2b]">
      {Array.from({ length: 5 }).map((_, index) => (
        <span key={index} className="text-[18px] leading-none">
          ★
        </span>
      ))}
    </div>
  );
}

export function AttorneysSection() {
  return (
    <section className="w-full bg-[linear-gradient(180deg,#eef6fd_0%,#eef6fd_58%,#ffffff_58%,#ffffff_100%)]">
      <div className="mx-auto flex min-h-[90vh] max-w-[1440px] flex-col px-6 py-14 sm:px-8 lg:px-[60px]">
        <div className="mx-auto max-w-[1120px] text-center">
          <div className="flex items-center justify-center gap-10">
            <Image
              src={lawIcon}
              alt="Legal services icon"
              className="hidden h-[54px] w-[54px] object-contain opacity-45 lg:block"
            />
            <div className="max-w-[900px]">
              <h2 className="font-heading text-[36px] font-normal leading-[1.25] tracking-[-0.03em] text-[#32486c]">
                <span className="font-bold text-[#1680df]">Attorneys with</span> You Every
                Step Of the Way
              </h2>
              <p className="mx-auto mt-5 max-w-[880px] text-[18px] leading-[1.6] text-[#49607f]">
                At Legal Trademark Office, our experienced attorneys have represented a
                wide range of businesses, from Amazon sellers and clothing designers to
                professional service providers. We understand the unique needs of every
                business and are dedicated to ensuring your brand is protected with
                expert legal guidance.
              </p>
            </div>
            <Image
              src={scaleIcon}
              alt="Law gavel icon"
              className="hidden h-[52px] w-[52px] object-contain opacity-45 lg:block"
            />
          </div>
        </div>

        <div className="mx-auto mt-12 grid max-w-[1040px] flex-1 items-stretch gap-5 lg:grid-cols-3">
          {attorneys.map((attorney) => (
            <Card
              key={attorney.name}
              className="mx-auto h-full w-full max-w-[308px] rounded-[20px] border border-[#dce6f2] bg-white shadow-[0_16px_40px_rgba(36,59,97,0.10)]"
            >
              <CardContent className="flex h-full flex-col p-3.5">
                <div className="overflow-hidden rounded-[16px]">
                  <Image
                    src={attorney.image}
                    alt={attorney.name}
                    className="h-[258px] w-full object-cover"
                  />
                </div>

                <div className="mt-4 flex items-center justify-between gap-3">
                  <h3 className="font-heading text-[16px] font-bold leading-6 text-[#12294c]">
                    {attorney.name}
                  </h3>
                  <Stars />
                </div>

                <p className="mt-2 flex-1 text-[13px] leading-6 text-[#5c6f89]">
                  {attorney.description}
                </p>

                <Button className="mt-4 h-[42px] w-full rounded-[14px] bg-[#293f54] text-[14px] font-semibold text-white hover:bg-[#24384b]">
                  Learn More &gt;
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
