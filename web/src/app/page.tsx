import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { HazardMarquee } from "@/components/HazardMarquee";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { AuditTeaser } from "@/components/AuditTeaser";
import { Platforms } from "@/components/Platforms";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { CtaMarquee } from "@/components/CtaMarquee";
import { Footer } from "@/components/Footer";
import { SITE_CONFIG } from "@/lib/config";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero
        variant={SITE_CONFIG.heroVariant}
        shortMuted={SITE_CONFIG.shortMuted}
      />
      <HazardMarquee />
      <Services tone={SITE_CONFIG.tone} />
      <Process />
      {SITE_CONFIG.showAuditTeaser && <AuditTeaser />}
      <Platforms />
      <Pricing />
      <FAQ />
      <CtaMarquee />
      <Footer />
    </>
  );
}
