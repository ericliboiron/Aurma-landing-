import { TrendingUpIcon, ChartIcon } from '../icons/Icons';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-aurma-deep" />
      <div className="absolute inset-0 bg-aurma-gradient" />
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Mountain Ridge Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-32 mountain-ridge" />

      <div className="container-aurma relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Copy */}
          <div className="space-y-8">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-aurma-secondary/50 border border-aurma-border/40 rounded-full">
              <span className="w-2 h-2 rounded-full bg-aurma-gold animate-pulse" />
              <span className="text-sm text-aurma-text-muted font-medium">
                Institutional Crypto Intelligence & Trading
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-aurma-text leading-tight">
              See market structure.{' '}
              <span className="text-gradient-gold">Execute systematically.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-aurma-text-muted max-w-xl leading-relaxed">
              aurma unifies real-time market data, on-chain signals, strategy analytics,
              and automated execution into one professional platform—built for serious capital.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#access" className="btn-primary text-center">
                Request Access
              </a>
              <a href="#platform" className="btn-secondary text-center">
                View Platform
              </a>
            </div>

            {/* Trust Row */}
            <div className="pt-4 border-t border-aurma-border/30">
              <p className="text-sm text-aurma-text-dim">
                Built for traders, funds, family offices, and institutions.
              </p>
            </div>
          </div>

          {/* Right Column - Dashboard Mock */}
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-aurma-gradient scale-110 blur-3xl" />

            {/* Dashboard Container */}
            <div className="relative bg-aurma-primary/90 border border-aurma-border/50 rounded-2xl p-4 shadow-aurma backdrop-blur-sm">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-aurma-border/30">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <span className="text-xs text-aurma-text-dim">aurma.ai/dashboard</span>
              </div>

              {/* Market Overview Strip */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                <MarketTile symbol="BTC" price="$67,432" change="+2.4%" positive />
                <MarketTile symbol="ETH" price="$3,521" change="+1.8%" positive />
                <MarketTile symbol="SOL" price="$142.30" change="-0.6%" />
              </div>

              {/* Main Chart Area */}
              <div className="bg-aurma-secondary/50 rounded-xl p-4 mb-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-aurma-text">BTC/USDT</span>
                  <span className="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded">
                    Regime: Bull Trending
                  </span>
                </div>
                {/* Simplified Chart SVG */}
                <div className="h-40 relative">
                  <ChartVisualization />
                </div>
              </div>

              {/* Bottom Panels */}
              <div className="grid grid-cols-2 gap-3">
                {/* Strategy Panel */}
                <div className="bg-aurma-secondary/50 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUpIcon size={14} className="text-aurma-gold" />
                    <span className="text-xs font-medium text-aurma-text-muted">Active Strategy</span>
                  </div>
                  <div className="text-sm font-semibold text-aurma-text">Momentum Alpha</div>
                  <div className="text-xs text-green-400 mt-1">+12.4% MTD</div>
                </div>

                {/* Alerts Panel */}
                <div className="bg-aurma-secondary/50 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <ChartIcon size={14} className="text-aurma-gold" />
                    <span className="text-xs font-medium text-aurma-text-muted">Recent Alert</span>
                  </div>
                  <div className="text-sm font-semibold text-aurma-text">Whale Movement</div>
                  <div className="text-xs text-aurma-gold mt-1">1,200 BTC moved</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Market Tile Component
function MarketTile({ symbol, price, change, positive = false }: {
  symbol: string;
  price: string;
  change: string;
  positive?: boolean;
}) {
  return (
    <div className="bg-aurma-secondary/50 rounded-lg p-3">
      <div className="text-xs text-aurma-text-dim mb-1">{symbol}</div>
      <div className="text-sm font-semibold text-aurma-text">{price}</div>
      <div className={`text-xs mt-1 ${positive ? 'text-green-400' : 'text-red-400'}`}>
        {change}
      </div>
    </div>
  );
}

// Chart Visualization Component
function ChartVisualization() {
  return (
    <svg viewBox="0 0 400 160" className="w-full h-full" preserveAspectRatio="none">
      {/* Grid Lines */}
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1E3A5F" strokeWidth="0.5" opacity="0.3" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />

      {/* Regime Band (green zone) */}
      <rect x="0" y="60" width="400" height="40" fill="#22C55E" opacity="0.1" />

      {/* Candlestick-style chart line */}
      <path
        d="M 0 120 L 30 100 L 60 110 L 90 80 L 120 90 L 150 60 L 180 70 L 210 50 L 240 65 L 270 45 L 300 55 L 330 40 L 360 50 L 400 35"
        fill="none"
        stroke="#D4AF37"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Area fill under the line */}
      <path
        d="M 0 120 L 30 100 L 60 110 L 90 80 L 120 90 L 150 60 L 180 70 L 210 50 L 240 65 L 270 45 L 300 55 L 330 40 L 360 50 L 400 35 L 400 160 L 0 160 Z"
        fill="url(#chartGradient)"
        opacity="0.3"
      />

      <defs>
        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Current price indicator */}
      <circle cx="400" cy="35" r="4" fill="#D4AF37" />
      <line x1="380" y1="35" x2="400" y2="35" stroke="#D4AF37" strokeWidth="1" strokeDasharray="2,2" />
    </svg>
  );
}
