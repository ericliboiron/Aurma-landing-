import Navigation from './components/Navigation'
import Hero from './components/sections/Hero'
import SeeTheMarket from './components/sections/SeeTheMarket'
import WhatIsAurma from './components/sections/WhatIsAurma'
import Features from './components/sections/Features'
import PlatformIntelligence from './components/sections/PlatformIntelligence'
import MarketRegimes from './components/sections/MarketRegimes'
import AdvancedAnalytics from './components/sections/AdvancedAnalytics'
import PlatformArchitecture from './components/sections/PlatformArchitecture'
import EnterpriseInfrastructure from './components/sections/EnterpriseInfrastructure'
import Pricing from './components/sections/Pricing'
import WhyAurma from './components/sections/WhyAurma'
import FinalCTA from './components/sections/FinalCTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-aurma-deep">
      <Navigation />
      <main>
        <Hero />
        <SeeTheMarket />
        <WhatIsAurma />
        <Features />
        <PlatformIntelligence />
        <MarketRegimes />
        <AdvancedAnalytics />
        <PlatformArchitecture />
        <EnterpriseInfrastructure />
        <Pricing />
        <WhyAurma />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
