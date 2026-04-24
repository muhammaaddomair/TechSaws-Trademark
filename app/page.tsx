import { AttorneysSection } from "@/components/sections/attorneys-section";
import { BrandNameSearchSection } from "@/components/sections/brand-name-search-section";
import { HeroSection } from "@/components/sections/hero-section";
import { PricingPromoSection } from "@/components/sections/pricing-promo-section";
import { RegisterStepsSection } from "@/components/sections/register-steps-section";
import { SimilarMarksSection } from "@/components/sections/similar-marks-section";
import { SiteFooter } from "@/components/sections/site-footer";
import { SiteHeader } from "@/components/sections/site-header";
import { TrademarkPackagesSection } from "@/components/sections/trademark-packages-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
      <SiteHeader />
      <HeroSection />
      <SimilarMarksSection />
      <AttorneysSection />
      <RegisterStepsSection />
      <PricingPromoSection />
      <BrandNameSearchSection />
      <TrademarkPackagesSection />
      <SiteFooter />
    </main>
  );
}
