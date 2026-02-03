import { useState } from 'react';
import {
  ChartIcon,
  StrategyIcon,
  ExecutionIcon,
  RegimeIcon,
  DataSourceIcon,
} from '../icons/Icons';

interface Feature {
  id: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  description: string;
  highlights: string[];
  dataSources?: string;
}

const features: Feature[] = [
  {
    id: 'market-data',
    icon: ChartIcon,
    title: 'Market Data & Intelligence',
    description:
      'Aggregate real-time data from 20+ exchanges, on-chain metrics, sentiment feeds, and macro calendars into one unified dashboard.',
    highlights: [
      'Multi-exchange orderbook aggregation',
      'On-chain whale tracking',
      'Social sentiment analysis',
      'Macro economic calendar',
    ],
    dataSources: 'Binance, Coinbase, Kraken, Glassnode, Santiment, TradingView',
  },
  {
    id: 'strategy',
    icon: StrategyIcon,
    title: 'Strategy Analytics',
    description:
      'Build, backtest, and optimize trading strategies with institutional-grade analytics. Compare performance across thousands of parameter combinations.',
    highlights: [
      '1000+ strategy backtests',
      'Walk-forward optimization',
      'Monte Carlo simulations',
      'Correlation analysis',
    ],
    dataSources: 'Historical data from 2017+, tick-level precision',
  },
  {
    id: 'execution',
    icon: ExecutionIcon,
    title: 'Automated Execution',
    description:
      'Deploy strategies to live markets with smart order routing, position sizing, and real-time risk controls. Execute systematically 24/7.',
    highlights: [
      'Smart order routing',
      'Dynamic position sizing',
      'Automated stop-loss',
      'Telegram alerts',
    ],
    dataSources: 'Connected exchanges: Binance, Bybit, OKX, Coinbase',
  },
  {
    id: 'regimes',
    icon: RegimeIcon,
    title: 'Market Regimes',
    description:
      'Machine learning-powered regime detection identifies market conditions in real-time, automatically adjusting strategy allocation.',
    highlights: [
      '12 regime classifications',
      'Real-time detection',
      'Adaptive allocation',
      'Historical regime analysis',
    ],
    dataSources: 'Proprietary ML models trained on 5+ years of data',
  },
  {
    id: 'wallet',
    icon: DataSourceIcon,
    title: 'Wallet & Ecosystem',
    description:
      'Track whale wallets, monitor DeFi positions, and analyze on-chain flows. Understand what smart money is doing before the market moves.',
    highlights: [
      'Whale wallet tracking',
      'DeFi position monitoring',
      'Exchange flow analysis',
      'Smart money alerts',
    ],
    dataSources: 'Ethereum, Bitcoin, Solana, Arbitrum, Base',
  },
];

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(features[0].id);

  const active = features.find((f) => f.id === activeFeature) || features[0];

  return (
    <section id="features" className="section bg-aurma-primary relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-aurma-deep via-aurma-primary to-aurma-primary" />

      <div className="container-aurma relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-xs font-medium text-aurma-gold uppercase tracking-wider bg-aurma-gold/10 border border-aurma-gold/20 rounded-full mb-4">
            Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-aurma-text mb-4">
            Professional Trading Infrastructure
          </h2>
          <p className="text-lg text-aurma-text-muted max-w-2xl mx-auto">
            Everything you need to research, analyze, and execute systematic trading strategies
          </p>
        </div>

        {/* Features Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left: Feature Tabs */}
          <div className="space-y-3">
            {features.map((feature) => (
              <FeatureTab
                key={feature.id}
                feature={feature}
                isActive={activeFeature === feature.id}
                onClick={() => setActiveFeature(feature.id)}
              />
            ))}
          </div>

          {/* Right: Feature Visual Panel */}
          <div className="lg:sticky lg:top-24">
            <FeaturePanel feature={active} />
          </div>
        </div>
      </div>
    </section>
  );
}

interface FeatureTabProps {
  feature: Feature;
  isActive: boolean;
  onClick: () => void;
}

function FeatureTab({ feature, isActive, onClick }: FeatureTabProps) {
  const Icon = feature.icon;

  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-5 rounded-xl border transition-all duration-300 ${
        isActive
          ? 'bg-aurma-secondary/80 border-aurma-gold/40 shadow-aurma-gold'
          : 'bg-aurma-primary/40 border-aurma-border/30 hover:border-aurma-border/60'
      }`}
    >
      <div className="flex items-start gap-4">
        <div
          className={`flex-shrink-0 p-2.5 rounded-lg border transition-colors ${
            isActive
              ? 'bg-aurma-gold/10 border-aurma-gold/30'
              : 'bg-aurma-secondary/50 border-aurma-border/30'
          }`}
        >
          <Icon
            size={22}
            className={isActive ? 'text-aurma-gold' : 'text-aurma-text-dim'}
          />
        </div>
        <div>
          <h3
            className={`font-semibold mb-1 ${
              isActive ? 'text-aurma-text' : 'text-aurma-text-muted'
            }`}
          >
            {feature.title}
          </h3>
          <p
            className={`text-sm leading-relaxed ${
              isActive ? 'text-aurma-text-muted' : 'text-aurma-text-dim'
            }`}
          >
            {feature.description}
          </p>
        </div>
      </div>
    </button>
  );
}

interface FeaturePanelProps {
  feature: Feature;
}

function FeaturePanel({ feature }: FeaturePanelProps) {
  const Icon = feature.icon;

  return (
    <div className="bg-aurma-secondary/60 border border-aurma-border/40 rounded-2xl p-6 lg:p-8">
      {/* Panel Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-aurma-border/30">
        <div className="p-2 bg-aurma-gold/10 border border-aurma-gold/30 rounded-lg">
          <Icon size={20} className="text-aurma-gold" />
        </div>
        <h3 className="text-lg font-semibold text-aurma-text">{feature.title}</h3>
      </div>

      {/* Visual Mock */}
      <div className="bg-aurma-primary/80 rounded-xl p-4 mb-6">
        <FeatureVisual featureId={feature.id} />
      </div>

      {/* Highlights */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-aurma-text-muted uppercase tracking-wider mb-3">
          Key Capabilities
        </h4>
        <ul className="grid grid-cols-2 gap-2">
          {feature.highlights.map((highlight, index) => (
            <li
              key={index}
              className="flex items-center gap-2 text-sm text-aurma-text"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-aurma-gold" />
              {highlight}
            </li>
          ))}
        </ul>
      </div>

      {/* Data Sources */}
      {feature.dataSources && (
        <div className="pt-4 border-t border-aurma-border/30">
          <p className="text-xs text-aurma-text-dim">
            <span className="text-aurma-text-muted">Data sources:</span>{' '}
            {feature.dataSources}
          </p>
        </div>
      )}
    </div>
  );
}

function FeatureVisual({ featureId }: { featureId: string }) {
  switch (featureId) {
    case 'market-data':
      return <MarketDataVisual />;
    case 'strategy':
      return <StrategyVisual />;
    case 'execution':
      return <ExecutionVisual />;
    case 'regimes':
      return <RegimesVisual />;
    case 'wallet':
      return <WalletVisual />;
    default:
      return <MarketDataVisual />;
  }
}

function MarketDataVisual() {
  return (
    <div className="space-y-3">
      <div className="flex gap-3">
        <div className="flex-1 bg-aurma-secondary/50 rounded-lg p-3">
          <div className="text-xs text-aurma-text-dim mb-1">BTC/USDT</div>
          <div className="text-lg font-bold text-aurma-text">$67,432</div>
          <div className="text-xs text-green-400">+2.4%</div>
        </div>
        <div className="flex-1 bg-aurma-secondary/50 rounded-lg p-3">
          <div className="text-xs text-aurma-text-dim mb-1">Fear & Greed</div>
          <div className="text-lg font-bold text-aurma-gold">72</div>
          <div className="text-xs text-aurma-text-muted">Greed</div>
        </div>
      </div>
      <div className="h-24 bg-aurma-secondary/30 rounded-lg flex items-end px-2 pb-2 gap-1">
        {[40, 55, 45, 60, 50, 70, 65, 80, 75, 90, 85, 95].map((h, i) => (
          <div
            key={i}
            className="flex-1 bg-aurma-gold/60 rounded-t"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </div>
  );
}

function StrategyVisual() {
  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-aurma-text">Strategy Performance</span>
        <span className="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded">
          +127.4% Annual
        </span>
      </div>
      <div className="h-24 relative">
        <svg viewBox="0 0 200 80" className="w-full h-full" preserveAspectRatio="none">
          <path
            d="M0 70 Q 20 60, 40 55 T 80 40 T 120 30 T 160 20 T 200 10"
            fill="none"
            stroke="#D4AF37"
            strokeWidth="2"
          />
          <path
            d="M0 70 Q 20 60, 40 55 T 80 40 T 120 30 T 160 20 T 200 10 L 200 80 L 0 80 Z"
            fill="url(#stratGrad)"
            opacity="0.3"
          />
          <defs>
            <linearGradient id="stratGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="grid grid-cols-3 gap-2 text-center">
        <div className="bg-aurma-secondary/30 rounded p-2">
          <div className="text-xs text-aurma-text-dim">Sharpe</div>
          <div className="text-sm font-bold text-aurma-text">1.84</div>
        </div>
        <div className="bg-aurma-secondary/30 rounded p-2">
          <div className="text-xs text-aurma-text-dim">Win Rate</div>
          <div className="text-sm font-bold text-aurma-text">68%</div>
        </div>
        <div className="bg-aurma-secondary/30 rounded p-2">
          <div className="text-xs text-aurma-text-dim">Max DD</div>
          <div className="text-sm font-bold text-aurma-text">-12%</div>
        </div>
      </div>
    </div>
  );
}

function ExecutionVisual() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-aurma-text">Live Orders</span>
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
      </div>
      <div className="space-y-2">
        {[
          { pair: 'BTC/USDT', side: 'LONG', size: '0.5 BTC', pnl: '+$1,234' },
          { pair: 'ETH/USDT', side: 'LONG', size: '5 ETH', pnl: '+$456' },
          { pair: 'SOL/USDT', side: 'SHORT', size: '100 SOL', pnl: '-$89' },
        ].map((order, i) => (
          <div key={i} className="flex items-center justify-between bg-aurma-secondary/30 rounded-lg px-3 py-2">
            <div className="flex items-center gap-3">
              <span className={`text-xs px-1.5 py-0.5 rounded ${order.side === 'LONG' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                {order.side}
              </span>
              <span className="text-sm text-aurma-text">{order.pair}</span>
            </div>
            <span className={`text-sm font-medium ${order.pnl.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
              {order.pnl}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function RegimesVisual() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-aurma-text">Current Regime</span>
        <span className="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded">
          Bull Trending
        </span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {[
          { name: 'Bull High Vol', color: 'bg-green-500', pct: 15 },
          { name: 'Bull Low Vol', color: 'bg-green-400', pct: 25 },
          { name: 'Sideways', color: 'bg-blue-400', pct: 35 },
          { name: 'Bear Trending', color: 'bg-red-500', pct: 25 },
        ].map((regime, i) => (
          <div key={i} className="bg-aurma-secondary/30 rounded-lg p-2">
            <div className="flex items-center gap-2 mb-1">
              <span className={`w-2 h-2 rounded-full ${regime.color}`} />
              <span className="text-xs text-aurma-text-muted">{regime.name}</span>
            </div>
            <div className="h-1.5 bg-aurma-border/30 rounded-full">
              <div className={`h-full ${regime.color} rounded-full`} style={{ width: `${regime.pct}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function WalletVisual() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-aurma-text">Whale Activity</span>
        <span className="text-xs text-aurma-gold">Last 24h</span>
      </div>
      <div className="space-y-2">
        {[
          { wallet: '0x8f3...2a4', action: 'Bought', amount: '1,200 BTC', time: '2h ago' },
          { wallet: '0x2b1...f8c', action: 'Sold', amount: '450 ETH', time: '4h ago' },
          { wallet: '0x9d4...1e7', action: 'Moved', amount: '10M USDT', time: '6h ago' },
        ].map((activity, i) => (
          <div key={i} className="flex items-center justify-between bg-aurma-secondary/30 rounded-lg px-3 py-2">
            <div>
              <span className="text-xs text-aurma-text-dim">{activity.wallet}</span>
              <div className="text-sm text-aurma-text">{activity.action} {activity.amount}</div>
            </div>
            <span className="text-xs text-aurma-text-dim">{activity.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
