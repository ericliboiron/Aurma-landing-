import {
  DataSourceIcon,
  ProcessingIcon,
  ExecutionIcon,
  ArrowDownIcon,
} from '../icons/Icons';

const dataSources = [
  'Market Data APIs',
  'On-Chain Metrics',
  'Sentiment Indicators',
  'Derivatives Data',
];

const processingEngine = [
  'Backtesting Engine',
  'ML Regime Detection',
  'Risk Analytics',
  'Signal Generation',
];

const execution = [
  'Live Trading API',
  'Risk Management',
  'Position Sizing',
  'Telegram Alerts',
];

const pipelineSteps = [
  ['Data Ingestion', 'Normalization'],
  ['Regime Classification', 'Backtesting'],
  ['Risk Analysis', 'Signal Generation'],
  ['Execution', 'Monitoring'],
];

export default function PlatformArchitecture() {
  return (
    <section id="architecture" className="section bg-aurma-deep relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-aurma-gradient opacity-30" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container-aurma relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-aurma-text mb-4">
            Platform Architecture
          </h2>
          <p className="text-lg text-aurma-text-muted max-w-2xl mx-auto">
            Scalable, fault-tolerant infrastructure designed for high-frequency trading
          </p>
        </div>

        {/* Architecture Diagram */}
        <div className="max-w-2xl mx-auto">
          <div className="card p-8">
            {/* Three Columns */}
            <div className="space-y-8">
              {/* Data Sources */}
              <ArchitectureBlock
                icon={DataSourceIcon}
                title="Data Sources"
                items={dataSources}
              />

              {/* Processing Engine */}
              <ArchitectureBlock
                icon={ProcessingIcon}
                title="Processing Engine"
                items={processingEngine}
              />

              {/* Execution */}
              <ArchitectureBlock
                icon={ExecutionIcon}
                title="Execution"
                items={execution}
              />
            </div>

            {/* Pipeline Flow */}
            <div className="mt-10 pt-8 border-t border-aurma-border/30">
              <div className="space-y-4">
                {pipelineSteps.map((row, rowIndex) => (
                  <div key={rowIndex}>
                    <div className="flex flex-wrap justify-center gap-3">
                      {row.map((step, stepIndex) => (
                        <span
                          key={stepIndex}
                          className="px-3 py-1.5 text-xs font-medium text-aurma-text-muted bg-aurma-secondary/50 border border-aurma-border/40 rounded"
                        >
                          {step}
                        </span>
                      ))}
                    </div>
                    {rowIndex < pipelineSteps.length - 1 && (
                      <div className="flex justify-center my-2">
                        <ArrowDownIcon size={16} className="text-aurma-text-dim" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface ArchitectureBlockProps {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  items: string[];
}

function ArchitectureBlock({ icon: Icon, title, items }: ArchitectureBlockProps) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-4">
        <Icon size={20} className="text-aurma-gold" />
        <h3 className="text-lg font-semibold text-aurma-gold">{title}</h3>
      </div>
      <ul className="space-y-2 ml-8">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2 text-sm text-aurma-text-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-aurma-gold" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
