import { SiteFooter } from "@/components/sections/site-footer";
import { SiteHeader } from "@/components/sections/site-header";
import { ServiceHeroSection } from "@/components/sections/service-hero-section";

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
      <SiteFooter />
    </main>
  );
}
