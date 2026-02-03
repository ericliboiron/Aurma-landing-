import { ShieldIcon, ChartIcon, ExecutionIcon } from '../icons/Icons';

const valueProps = [
  {
    icon: ChartIcon,
    title: 'Unified Intelligence',
    description:
      'Real-time market data, on-chain signals, sentiment indicators, and macro events—all in one unified view. No more tab-switching between fragmented tools.',
  },
  {
    icon: ShieldIcon,
    title: 'Strategy-Driven Trading',
    description:
      'Backtest, optimize, and deploy systematic strategies with institutional-grade analytics. From signal to execution, every decision is data-backed.',
  },
  {
    icon: ExecutionIcon,
    title: 'Risk & Execution Control',
    description:
      'Automated position sizing, dynamic stop-losses, and real-time risk monitoring. Execute with precision while protecting your capital.',
  },
];

export default function WhatIsAurma() {
  return (
    <section className="section bg-aurma-deep relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-aurma-gradient opacity-40" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container-aurma relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-xs font-medium text-aurma-gold uppercase tracking-wider bg-aurma-gold/10 border border-aurma-gold/20 rounded-full mb-4">
            The Platform
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-aurma-text mb-4">
            What is aurma?
          </h2>
          <p className="text-lg text-aurma-text-muted max-w-2xl mx-auto">
            A unified platform that brings institutional-grade crypto intelligence and execution to serious traders
          </p>
        </div>

        {/* Value Props Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {valueProps.map((prop, index) => (
            <ValueCard
              key={index}
              icon={prop.icon}
              title={prop.title}
              description={prop.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ValueCardProps {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  description: string;
}

function ValueCard({ icon: Icon, title, description }: ValueCardProps) {
  return (
    <div className="group relative bg-aurma-primary/60 border border-aurma-border/45 rounded-2xl p-8 transition-all duration-300 hover:translate-y-[-4px] hover:border-aurma-gold/30 hover:shadow-aurma">
      {/* Gold glow on hover */}
      <div className="absolute inset-0 rounded-2xl bg-aurma-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-14 h-14 mb-6 bg-aurma-secondary/50 border border-aurma-border/30 rounded-xl group-hover:border-aurma-gold/40 transition-colors">
          <Icon size={28} className="text-aurma-gold" />
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-aurma-text mb-3">{title}</h3>
        <p className="text-aurma-text-muted leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
