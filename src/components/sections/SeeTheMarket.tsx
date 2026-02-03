export default function SeeTheMarket() {
  return (
    <section className="section bg-aurma-deep relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-aurma-gradient opacity-30" />

      <div className="container-aurma relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-aurma-text mb-6">
            See the Market{' '}
            <span className="text-gradient-gold">Before Price Reacts</span>
          </h2>

          {/* Lead Statement */}
          <p className="text-xl text-aurma-gold font-medium mb-8">
            Crypto markets move fast — but structure moves first.
          </p>

          {/* Description */}
          <div className="space-y-6 text-lg text-aurma-text-muted leading-relaxed">
            <p>
              aurma is an institutional-grade crypto intelligence and trading platform designed
              to help professionals understand market dynamics, identify opportunity early,
              and execute systematically.
            </p>

            <p>
              By unifying market data, derivatives, on-chain activity, ETF flows, and narrative
              intelligence into a single decision engine, aurma replaces fragmented tools with
              a coherent system for analysis, execution, and risk management.
            </p>
          </div>

          {/* Distinction Statement */}
          <div className="mt-12 pt-8 border-t border-aurma-border/30">
            <div className="inline-block">
              <p className="text-aurma-text-dim text-sm mb-2">This is not a retail trading app.</p>
              <p className="text-aurma-text font-semibold text-lg">
                This is a <span className="text-aurma-gold">professional capital deployment platform</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
