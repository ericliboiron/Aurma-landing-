import {
  ScatterIcon,
  RollingIcon,
  DistributionIcon,
  MonteCarloIcon,
  LockIcon,
} from '../icons/Icons';

const features = [
  {
    icon: ScatterIcon,
    title: 'Scatter Plot Correlation Analysis',
    description:
      'Multi-dimensional strategy comparison across any two performance metrics',
  },
  {
    icon: RollingIcon,
    title: 'Rolling Metrics Windows',
    description:
      '14/30/60-day rolling windows for Sharpe ratio, win rate, and volatility analysis',
  },
  {
    icon: DistributionIcon,
    title: 'Distribution Analysis',
    description:
      'Percentile distributions, VaR/CVaR calculations, and tail risk assessment',
  },
  {
    icon: MonteCarloIcon,
    title: 'Monte Carlo Path Simulations',
    description:
      'Forward-looking projections with 10,000+ scenario confidence bands',
  },
];

export default function AdvancedAnalytics() {
  return (
    <section id="features" className="section bg-aurma-primary relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-aurma-deep to-aurma-primary" />

      <div className="container-aurma relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-aurma-text mb-4">
            Advanced Analytics Suite
          </h2>
          <p className="text-lg text-aurma-text-muted max-w-2xl mx-auto mb-6">
            Institutional-grade quantitative analysis tools
          </p>

          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-aurma-secondary/50 border border-aurma-border/40 rounded-full">
            <span className="text-sm text-aurma-gold font-medium">Premium Feature</span>
          </div>
        </div>

        {/* Features List */}
        <div className="max-w-3xl mx-auto space-y-4 mb-12">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 btn-primary"
          >
            Unlock Advanced Analytics
            <LockIcon size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  description: string;
}

function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="card group">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 p-3 bg-aurma-secondary/50 rounded-xl border border-aurma-border/30 group-hover:border-aurma-gold/30 transition-colors">
          <Icon size={24} className="text-aurma-gold" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-aurma-gold mb-2">
            {title}
          </h3>
          <p className="text-aurma-text-muted text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
