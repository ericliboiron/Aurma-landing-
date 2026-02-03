import { ChartIcon, StrategyIcon, ExecutionIcon, RegimeIcon } from '../icons/Icons';

const capabilities = [
  {
    icon: ChartIcon,
    title: 'Analyze Market Structure',
    description: 'Across spot, futures, options, ETFs, and on-chain data',
  },
  {
    icon: StrategyIcon,
    title: 'Design & Test Strategies',
    description: 'Create, backtest, and evaluate systematic trading strategies',
  },
  {
    icon: ExecutionIcon,
    title: 'Deploy Live',
    description: 'Automated execution with professional risk controls',
  },
  {
    icon: RegimeIcon,
    title: 'Monitor Everything',
    description: 'Positions, performance, and exposure in real time',
  },
];

export default function WhatIsAurma() {
  return (
    <section id="platform" className="section bg-aurma-primary relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-aurma-deep to-aurma-primary" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-15" />

      <div className="container-aurma relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            {/* Section Label */}
            <span className="inline-block px-4 py-1.5 text-xs font-medium text-aurma-gold uppercase tracking-wider bg-aurma-gold/10 border border-aurma-gold/20 rounded-full mb-6">
              The Platform
            </span>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-aurma-text mb-6">
              What is aurma?
            </h2>

            {/* Description */}
            <div className="space-y-4 text-aurma-text-muted leading-relaxed mb-8">
              <p className="text-lg">
                aurma is a unified crypto trading and intelligence platform built for traders,
                funds, and investors who operate with real capital.
              </p>

              <p>
                aurma is built to support disciplined decision-making at scale — whether you
                are trading actively, allocating capital programmatically, or seeking managed exposure.
              </p>
            </div>

            {/* Capabilities List */}
            <div className="space-y-4">
              <p className="text-sm font-medium text-aurma-text uppercase tracking-wider">
                It enables users to:
              </p>
              {capabilities.map((cap, index) => (
                <CapabilityItem
                  key={index}
                  icon={cap.icon}
                  title={cap.title}
                  description={cap.description}
                />
              ))}
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-aurma-gradient scale-110 blur-3xl opacity-50" />

            {/* Platform Visual Card */}
            <div className="relative bg-aurma-secondary/60 border border-aurma-border/40 rounded-2xl p-8">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-aurma-gold/10 border border-aurma-gold/30 rounded-2xl">
                  <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none">
                    <path
                      d="M8 24L16 8L24 24H8Z"
                      stroke="#D4AF37"
                      strokeWidth="1.5"
                      fill="none"
                    />
                    <path
                      d="M12 24L16 16L20 24"
                      stroke="#D4AF37"
                      strokeWidth="1.5"
                      fill="none"
                      opacity="0.6"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-aurma-text mb-2">
                  Crypto Financial Operating System
                </h3>
                <p className="text-sm text-aurma-text-muted">
                  aurma is not just software — it is a complete infrastructure for professional crypto trading.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <StatBox label="Market Coverage" value="20+" suffix="Exchanges" />
                <StatBox label="Data Sources" value="50+" suffix="Feeds" />
                <StatBox label="Strategy Metrics" value="30+" suffix="KPIs" />
                <StatBox label="Asset Classes" value="4" suffix="Types" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface CapabilityItemProps {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  description: string;
}

function CapabilityItem({ icon: Icon, title, description }: CapabilityItemProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 p-2 bg-aurma-secondary/50 border border-aurma-border/30 rounded-lg">
        <Icon size={18} className="text-aurma-gold" />
      </div>
      <div>
        <span className="font-semibold text-aurma-text">{title}</span>
        <span className="text-aurma-text-muted"> — {description}</span>
      </div>
    </div>
  );
}

interface StatBoxProps {
  label: string;
  value: string;
  suffix: string;
}

function StatBox({ label, value, suffix }: StatBoxProps) {
  return (
    <div className="bg-aurma-primary/50 border border-aurma-border/30 rounded-xl p-4 text-center">
      <div className="text-xs text-aurma-text-dim uppercase tracking-wider mb-1">{label}</div>
      <div className="text-2xl font-bold text-aurma-gold">{value}</div>
      <div className="text-xs text-aurma-text-muted">{suffix}</div>
    </div>
  );
}
