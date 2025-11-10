import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { MuseumSection } from "@/components/museum-section"
import { CharacterSection } from "@/components/character-section"
import { StatisticsSection } from "@/components/statistics-section"
import { MapSection } from "@/components/map-section"
import { PartnersSection } from "@/components/partners-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <MuseumSection />
        <CharacterSection />
        <StatisticsSection />
        <MapSection />
        <PartnersSection />
      </main>
      <Footer />
    </div>
  )
}
