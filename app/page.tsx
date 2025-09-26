import { Header } from '@/components/sections/Header'
import { HeroSection } from '@/components/sections/HeroSection'
import { PositioningSection } from '@/components/sections/PositioningSection'
import { IdentitySection } from '@/components/sections/IdentitySection'
import { ValuePropositionSection } from '@/components/sections/ValuePropositionSection'
import { FinancialProjectionSection } from '@/components/sections/FinancialProjectionSection'
import { ProcessSection } from '@/components/sections/ProcessSection'
import { LeadFormSection } from '@/components/sections/LeadFormSection'
import { Footer } from '@/components/sections/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <PositioningSection />
      <IdentitySection />
      <ValuePropositionSection />
      <FinancialProjectionSection />
      <ProcessSection />
      <LeadFormSection />
      <Footer />
    </main>
  )
}