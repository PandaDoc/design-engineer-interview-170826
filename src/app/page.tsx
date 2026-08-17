"use client";

import { Hero } from "@/sections/Hero";
import { ChatShowcase } from "@/sections/ChatShowcase";
import { ToolStrip } from "@/sections/ToolStrip";
import { ConnectorsBand } from "@/sections/ConnectorsBand";
import { SkillsBand } from "@/sections/SkillsBand";
import { FaqSection } from "@/sections/FaqSection";
import { SiteFooter } from "@/sections/SiteFooter";

// The landing page, top to bottom. Each section is self-contained —
// start reading in src/sections/, styling tokens live in src/theme.ts.
export default function Home() {
  return (
    <>
      <Hero /> {/* includes the nav header */}
      <ChatShowcase />
      <ToolStrip />
      <ConnectorsBand />
      <SkillsBand />
      <FaqSection /> {/* includes the signup promo card */}
      <SiteFooter />
    </>
  );
}
