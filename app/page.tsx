"use client"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { LocalCategoriesSection } from "@/components/local-categories-section"
import { CommunityShowcaseSection } from "@/components/community-showcase-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { FeaturedArtisansSection } from "@/components/featured-artisans-section"
import { MarketplacePreview } from "@/components/marketplace-preview"
import { LocalImpactSection } from "@/components/local-impact-section"
import { NeighborhoodSpotlightSection } from "@/components/neighborhood-spotlight-sectio"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CallToActionSection } from "@/components/call-to-action-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <LocalCategoriesSection />
        <CommunityShowcaseSection />
        <HowItWorksSection />
        <FeaturedArtisansSection />
        <MarketplacePreview />
        <LocalImpactSection />
        <NeighborhoodSpotlightSection />
        <TestimonialsSection />
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  )
}
