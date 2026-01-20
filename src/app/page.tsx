'use client';
import AboutMe from '@/components/blocks/about-me';
import Contact from '@/components/blocks/contact';
import Experience from '@/components/blocks/experience';
import Hero from '@/components/blocks/hero';
import Skills from '@/components/blocks/skills';
import Technologies from '@/components/blocks/technologies';
import Workflow from '@/components/blocks/workflow';
import ClickSpark from '@/components/ClickSpark';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <main className="relative h-svh overflow-hidden">
      <ClickSpark sparkColor="#a154ff" sparkSize={6} sparkRadius={15} sparkCount={8} duration={400}>
        <div className="relative flex h-full flex-col items-center overflow-x-hidden overflow-y-scroll">
          <Hero />
          <AboutMe />
          <Separator className="h-0.5!" />
          <Skills />
          <Separator className="h-0.5!" />
          <Technologies />
          <Separator className="h-0.5!" />
          <Experience />
          <Separator className="h-0.5!" />
          <Workflow />
          <Separator className="h-0.5!" />
          <Contact />
        </div>
      </ClickSpark>
    </main>
  );
}
