import { CheckIcon, ArrowRightIcon } from '../icons/Icons';

interface PricingTier {
  name: string;
  tagline: string;
  description: string;
  features: string[];
  cta: string;
  ctaLink: string;
  isPremium?: boolean;
}

const tiers: PricingTier[] = [
  {
    name: 'Professional Trader Platform',
    tagline: 'For traders and institutions requiring full control',
    description: 'Complete access to all market data and analytics',
    features: [
      'Complete access to all market data and analytics',
      'Strategy creation, testing, and deployment',
      'Manual and automated execution',
      'Advanced risk and intelligence tools',
      'Real-time position monitoring',
    ],
    cta: 'Request Access',
    ctaLink: '#access',
  },
  {
    name: 'AutoTrade Marketplace',
    tagline: 'For investors who want systematic performance without complexity',
    description: 'Browse and deploy vetted trading strategies',
    features: [
      'Browse vetted trading strategies',
      'Subscribe and deploy with one click',
      'Fully automated execution via connected exchanges',
      'Performance tracking and reporting',
      'Strategy diversification tools',
    ],
    cta: 'Explore Strategies',
    ctaLink: '#strategies',
  },
  {
    name: 'Fully Managed Trading (MGNS)',
    tagline: 'For investors seeking compliant, managed exposure',
    description: 'Regulated security token under U.S. law',
    features: [
      'Regulated security token under U.S. law',
      'Exposure linked to aurma liquidity and managed strategies',
      'Diversified, programmatic risk management',
      'Full access to the aurma platform included',
      'Institutional-grade compliance and reporting',
    ],
    cta: 'Learn About MGNS',
    ctaLink: '#mgns',
    isPremium: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section bg-aurma-deep relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-aurma-gradient opacity-50" />

      <div className="container-aurma relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-xs font-medium text-aurma-gold uppercase tracking-wider bg-aurma-gold/10 border border-aurma-gold/20 rounded-full mb-4">
            Access Options
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-aurma-text mb-4">
            Three Ways to Access aurma
          </h2>
          <p className="text-lg text-aurma-text-muted max-w-2xl mx-auto">
            Choose the access level that matches your needs — from full platform control to fully managed exposure
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <PricingCard key={index} tier={tier} />
          ))}
        </div>

        {/* Built for Professionals */}
        <div className="mt-20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-aurma-text mb-4">
              Built for Professionals
            </h3>
            <p className="text-aurma-text-muted">
              aurma is designed for those who take digital asset markets seriously
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Professional Traders',
              'Quantitative & Systematic Strategists',
              'Crypto Funds & Family Offices',
              'High-Net-Worth Investors',
              'Institutions Seeking Digital Asset Exposure',
            ].map((persona, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-2 px-4 py-2 bg-aurma-secondary/50 border border-aurma-border/40 rounded-full text-sm text-aurma-text-muted"
              >
                <span className="w-2 h-2 rounded-full bg-aurma-gold" />
                {persona}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface PricingCardProps {
  tier: PricingTier;
}

function PricingCard({ tier }: PricingCardProps) {
  return (
    <div
      className={`relative rounded-2xl p-6 lg:p-8 transition-all duration-300 flex flex-col ${
        tier.isPremium
          ? 'bg-aurma-primary border-2 border-aurma-gold/50 shadow-aurma-gold'
          : 'bg-aurma-primary/80 border border-aurma-border/40 hover:border-aurma-gold/30'
      }`}
    >
      {/* Premium Badge */}
      {tier.isPremium && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="px-3 py-1 bg-aurma-gold text-aurma-deep text-xs font-semibold rounded-full">
            Premium
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-xl font-bold text-aurma-text mb-2">{tier.name}</h3>
        <p className="text-sm text-aurma-gold font-medium mb-2">{tier.tagline}</p>
        <p className="text-sm text-aurma-text-muted">{tier.description}</p>
      </div>

      <ul className="space-y-3 mb-8 flex-grow">
        {tier.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 text-sm text-aurma-text-muted">
            <CheckIcon size={18} className="text-aurma-gold flex-shrink-0 mt-0.5" />
            {feature}
          </li>
        ))}
      </ul>

      <a
        href={tier.ctaLink}
        className={`flex items-center justify-center gap-2 py-3 rounded-lg font-medium transition-all duration-300 ${
          tier.isPremium
            ? 'bg-aurma-gold text-aurma-deep hover:bg-aurma-gold-light'
            : 'btn-primary'
        }`}
      >
        {tier.cta}
        <ArrowRightIcon size={16} />
      </a>
    </div>
  );
}
