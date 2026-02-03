import {
  StrategyIcon,
  TradesIcon,
  PerformanceIcon,
  TrendingUpIcon,
  RegimeIcon,
  ChartIcon,
} from '../icons/Icons';

const stats = [
  {
    icon: StrategyIcon,
    value: '1000+',
    label: 'STRATEGIES BACKTESTED',
  },
  {
    icon: TradesIcon,
    value: '1000000+',
    label: 'TOTAL TRADES EXECUTED',
  },
  {
    icon: PerformanceIcon,
    value: '>1.00',
    label: 'AVG SHARPE RATIO',
  },
  {
    icon: TrendingUpIcon,
    value: '365+',
    label: 'DAYS TRADING',
  },
  {
    icon: RegimeIcon,
    value: '12',
    label: 'MARKET REGIMES',
  },
  {
    icon: ChartIcon,
    value: '1000+',
    label: 'AVG TRADES PER STRATEGY',
  },
];

export default function PlatformIntelligence() {
  return (
    <section id="platform" className="section bg-aurma-primary relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-aurma-deep via-aurma-primary to-aurma-primary" />

      <div className="container-aurma relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-aurma-text mb-4">
            Platform Intelligence
          </h2>
          <p className="text-lg text-aurma-text-muted max-w-2xl mx-auto">
            Real-time metrics from our quantitative trading engine
          </p>
        </div>

        {/* Stats Grid */}
        <div className="max-w-lg mx-auto space-y-4">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface StatCardProps {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  value: string;
  label: string;
}

function StatCard({ icon: Icon, value, label }: StatCardProps) {
  return (
    <div className="stat-card group hover:border-aurma-gold/30 transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-aurma-secondary/50 rounded-lg border border-aurma-border/30 group-hover:border-aurma-gold/30 transition-colors">
          <Icon size={20} className="text-aurma-gold" />
        </div>
        <div>
          <div className="text-2xl sm:text-3xl font-bold text-aurma-gold mb-1 font-heading tracking-tight">
            {value}
          </div>
          <div className="text-xs sm:text-sm text-aurma-text-muted uppercase tracking-wider">
            {label}
          </div>
        </div>
      </div>
    </div>
  );
}
