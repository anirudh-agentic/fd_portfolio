import { HeroSection } from "@/sections/hero";
import { AboutSection } from "@/sections/about";
import { CollectionsSection } from "@/sections/collections";
import { IllustrationsSection } from "@/sections/illustrations";
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
        <IllustrationsSection />
      </main>
    </SmoothScrolling>
  );
}
