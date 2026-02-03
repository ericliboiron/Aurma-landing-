import { CheckIcon } from '../icons/Icons';

interface PricingTier {
  name: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  cta: string;
  isPremium?: boolean;
}

const tiers: PricingTier[] = [
  {
    name: 'Professional Trader',
    description: 'For individual traders seeking institutional-grade tools',
    price: '$199',
    period: '/month',
    features: [
      'Full platform access',
      'Real-time market data',
      'Strategy backtesting',
      'Basic analytics suite',
      'Email support',
    ],
    cta: 'Get Started',
  },
  {
    name: 'AutoTrade Marketplace',
    description: 'Automated execution of curated strategies',
    price: '$499',
    period: '/month',
    features: [
      'Everything in Professional',
      'Automated trade execution',
      'Strategy marketplace access',
      'Advanced analytics suite',
      'Priority support',
    ],
    cta: 'Start Trading',
  },
  {
    name: 'Managed Exposure (MGNS)',
    description: 'White-glove portfolio management service',
    price: 'Custom',
    period: '',
    features: [
      'Everything in AutoTrade',
      'Dedicated portfolio manager',
      'Custom strategy development',
      'Institutional reporting',
      '24/7 dedicated support',
      'Direct API access',
    ],
    cta: 'Contact Sales',
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-aurma-text mb-4">
            Choose Your Plan
          </h2>
          <p className="text-lg text-aurma-text-muted max-w-2xl mx-auto">
            Select the tier that matches your trading ambitions
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <PricingCard key={index} tier={tier} />
          ))}
        </div>

        {/* Built for Professionals */}
        <div className="mt-20 text-center">
          <h3 className="text-xl font-semibold text-aurma-text mb-6">
            Built for Professionals
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Professional Traders',
              'Quant Strategists',
              'Funds & Family Offices',
              'High-Net-Worth',
              'Institutions',
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
      className={`relative rounded-2xl p-6 transition-all duration-300 ${
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

      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-aurma-text mb-2">{tier.name}</h3>
        <p className="text-sm text-aurma-text-muted">{tier.description}</p>
      </div>

      <div className="text-center mb-6">
        <span className="text-4xl font-bold text-aurma-text">{tier.price}</span>
        <span className="text-aurma-text-muted">{tier.period}</span>
      </div>

      <ul className="space-y-3 mb-8">
        {tier.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 text-sm text-aurma-text-muted">
            <CheckIcon size={18} className="text-aurma-gold flex-shrink-0 mt-0.5" />
            {feature}
          </li>
        ))}
      </ul>

      <a
        href="#access"
        className={`block text-center py-3 rounded-lg font-medium transition-all duration-300 ${
          tier.isPremium
            ? 'bg-aurma-gold text-aurma-deep hover:bg-aurma-gold-light'
            : 'btn-primary'
        }`}
      >
        {tier.cta}
      </a>
    </div>
  );
}
