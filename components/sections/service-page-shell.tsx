import { SiteFooter } from "@/components/sections/site-footer";
import { SiteHeader } from "@/components/sections/site-header";
import { ServiceHeroSection } from "@/components/sections/service-hero-section";
import { ServiceProtectionSection } from "@/components/sections/service-protection-section";
import { ServiceStatsSection } from "@/components/sections/service-stats-section";
import { TrademarkPackagesSection } from "@/components/sections/trademark-packages-section";

type ServicePageShellProps = {
  title: string;
  description: string;
};

export function ServicePageShell({
  title,
  description,
}: ServicePageShellProps) {
  return (
    <main className="min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
      <SiteHeader />
      <ServiceHeroSection title={title} description={description} />
      <ServiceStatsSection />
      <ServiceProtectionSection />
      <TrademarkPackagesSection />
      <SiteFooter />
    </main>
  );
}
