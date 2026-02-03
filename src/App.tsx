import Navigation from './components/Navigation'
import Hero from './components/sections/Hero'
import PlatformIntelligence from './components/sections/PlatformIntelligence'
import MarketRegimes from './components/sections/MarketRegimes'
import AdvancedAnalytics from './components/sections/AdvancedAnalytics'
import PlatformArchitecture from './components/sections/PlatformArchitecture'
import EnterpriseInfrastructure from './components/sections/EnterpriseInfrastructure'
import Pricing from './components/sections/Pricing'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-aurma-deep">
      <Navigation />
      <main>
        <Hero />
        <PlatformIntelligence />
        <MarketRegimes />
        <AdvancedAnalytics />
        <PlatformArchitecture />
        <EnterpriseInfrastructure />
        <Pricing />
      </main>
      <Footer />
    </div>
  )
}

export default App
