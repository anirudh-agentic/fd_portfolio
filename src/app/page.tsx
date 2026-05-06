import { HeroSection } from "@/sections/hero";
import { AboutSection } from "@/sections/about";
import { CollectionsSection } from "@/sections/collections";
import { AccessoriesSection } from "@/sections/accessories";
import { IllustrationsSection } from "@/sections/illustrations";
import { GraphicDesignSection } from "@/sections/graphic-design";
import { ContactSection } from "@/sections/contact";
import { Navbar } from "@/components/layout/navbar";
import { SmoothScrolling } from "@/components/layout/smooth-scrolling";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { LoadingScreen } from "@/components/ui/loading-screen";

export default function Home() {
  return (
    <SmoothScrolling>
      <LoadingScreen />
      <CustomCursor />
      <Navbar />
      
      <main className="flex min-h-screen flex-col items-center justify-between">
        <HeroSection />
        <AboutSection />
        <CollectionsSection />
        <AccessoriesSection />
        <IllustrationsSection />
        <GraphicDesignSection />
        <ContactSection />
      </main>
    </SmoothScrolling>
  );
}
