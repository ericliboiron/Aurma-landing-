export default function FinalCTA() {
  return (
    <section id="access" className="section bg-aurma-deep relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-aurma-gradient opacity-60" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Mountain Ridge Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-32 mountain-ridge" />

      <div className="container-aurma relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-aurma-text mb-6">
            Access the Market with{' '}
            <span className="text-gradient-gold">Discipline</span>
          </h2>

          {/* Description */}
          <p className="text-lg text-aurma-text-muted mb-10 leading-relaxed">
            aurma gives professionals the tools to see clearly, act systematically,
            and manage risk intelligently in digital asset markets.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#request"
              className="btn-primary text-center px-8 py-4 text-lg"
            >
              Request Access
            </a>
            <a
              href="#contact"
              className="btn-secondary text-center px-8 py-4 text-lg"
            >
              Contact Sales
            </a>
          </div>

          {/* Trust Statement */}
          <div className="pt-8 border-t border-aurma-border/30">
            <p className="text-sm text-aurma-text-dim mb-4">
              Join professional traders and institutions already using aurma
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Stat value="$100M+" label="Capital Deployed" />
              <Stat value="1000+" label="Strategies Tested" />
              <Stat value="24/7" label="Market Coverage" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-2xl font-bold text-aurma-gold">{value}</div>
      <div className="text-xs text-aurma-text-muted uppercase tracking-wider">{label}</div>
    </div>
  );
}
