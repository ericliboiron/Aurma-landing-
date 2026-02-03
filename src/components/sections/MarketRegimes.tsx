import {
  TrendingUpIcon,
  TrendingDownIcon,
  SidewaysIcon,
  VolatileIcon,
  BreakoutIcon,
  CycleIcon,
} from '../icons/Icons';
import { ArrowRightIcon } from '../icons/Icons';

type RegimeColor = 'green' | 'red' | 'blue' | 'purple' | 'orange' | 'cyan';

interface Regime {
  id: number;
  name: string;
  color: RegimeColor;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

const regimes: Regime[] = [
  { id: 1, name: 'Bull Trending High Vol', color: 'green', icon: TrendingUpIcon },
  { id: 2, name: 'Bull Trending Low Vol', color: 'green', icon: TrendingUpIcon },
  { id: 3, name: 'Bear Trending High Vol', color: 'red', icon: TrendingDownIcon },
  { id: 4, name: 'Bear Trending Low Vol', color: 'red', icon: TrendingDownIcon },
  { id: 5, name: 'Sideways Consolidation', color: 'blue', icon: SidewaysIcon },
  { id: 6, name: 'Sideways Volatile', color: 'purple', icon: VolatileIcon },
  { id: 7, name: 'Sideways Breakout Setup', color: 'orange', icon: BreakoutIcon },
  { id: 8, name: 'Volatile Trending', color: 'orange', icon: VolatileIcon },
  { id: 9, name: 'Volatile Ranging', color: 'red', icon: VolatileIcon },
  { id: 10, name: 'Pump Dump Cycle', color: 'cyan', icon: CycleIcon },
  { id: 11, name: 'Accumulation Phase', color: 'cyan', icon: CycleIcon },
  { id: 12, name: 'Distribution Phase', color: 'purple', icon: CycleIcon },
];

const colorClasses: Record<RegimeColor, { bar: string; text: string }> = {
  green: { bar: 'bg-green-500', text: 'text-green-500' },
  red: { bar: 'bg-red-500', text: 'text-red-500' },
  blue: { bar: 'bg-blue-500', text: 'text-blue-500' },
  purple: { bar: 'bg-purple-500', text: 'text-purple-500' },
  orange: { bar: 'bg-orange-500', text: 'text-orange-500' },
  cyan: { bar: 'bg-cyan-500', text: 'text-cyan-500' },
};

export default function MarketRegimes() {
  return (
    <section id="regimes" className="section bg-aurma-deep relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-aurma-gradient opacity-50" />

      <div className="container-aurma relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-aurma-text mb-4">
            12 Market Regime Classifications
          </h2>
          <p className="text-lg text-aurma-text-muted max-w-2xl mx-auto">
            Machine learning-powered regime detection for adaptive strategy selection
          </p>
        </div>

        {/* Regime Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto mb-12">
          {regimes.map((regime) => (
            <RegimeCard key={regime.id} regime={regime} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#features"
            className="inline-flex items-center gap-2 btn-primary"
          >
            Explore Market Regimes
            <ArrowRightIcon size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

interface RegimeCardProps {
  regime: Regime;
}

function RegimeCard({ regime }: RegimeCardProps) {
  const { icon: Icon, name, color, id } = regime;
  const colors = colorClasses[color];

  return (
    <div className="stat-card group hover:border-aurma-gold/30 transition-all duration-300">
      {/* Color Bar */}
      <div className={`h-1 ${colors.bar} rounded-full mb-4`} />

      {/* Content */}
      <div className="flex items-start gap-3">
        <Icon size={18} className={`${colors.text} mt-0.5`} />
        <div>
          <div className="text-xs text-aurma-text-dim uppercase tracking-wider mb-1">
            Regime {id}
          </div>
          <div className="text-sm sm:text-base font-semibold text-aurma-text">
            {name}
          </div>
        </div>
      </div>
    </div>
  );
}
