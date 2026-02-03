import { CheckIcon } from '../icons/Icons';

const reasons = [
  {
    title: 'Institutional-Grade Intelligence',
    description: 'Across all major crypto markets — spot, futures, options, ETFs, and on-chain',
  },
  {
    title: 'Unified Platform',
    description: 'Analysis, execution, and capital management in one coherent system',
  },
  {
    title: 'Strategy-Driven Trading',
    description: 'Risk-aware, systematic approaches backed by rigorous backtesting',
  },
  {
    title: 'Built for Scale',
    description: 'Designed for scalability, compliance, and long-term institutional use',
  },
];

export default function WhyAurma() {
  return (
    <section className="section bg-aurma-primary relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-aurma-deep to-aurma-primary" />

      <div className="container-aurma relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <span className="inline-block px-4 py-1.5 text-xs font-medium text-aurma-gold uppercase tracking-wider bg-aurma-gold/10 border border-aurma-gold/20 rounded-full mb-6">
              The Difference
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-aurma-text mb-6">
              Why aurma?
            </h2>

            <p className="text-lg text-aurma-text-muted mb-8 leading-relaxed">
              In a market full of fragmented tools and retail-focused apps, aurma provides
              the unified infrastructure that professional capital requires.
            </p>

            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-aurma-gold/20 flex items-center justify-center mt-0.5">
                    <CheckIcon size={14} className="text-aurma-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-aurma-text mb-1">{reason.title}</h3>
                    <p className="text-aurma-text-muted text-sm">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Visual Statement */}
          <div className="relative">
            <div className="absolute inset-0 bg-aurma-gradient scale-110 blur-3xl opacity-40" />

            <div className="relative bg-aurma-secondary/60 border border-aurma-border/40 rounded-2xl p-8 lg:p-10">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-aurma-gold/10 border border-aurma-gold/30 rounded-2xl">
                  <svg viewBox="0 0 32 32" className="w-10 h-10" fill="none">
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

                <blockquote className="text-2xl lg:text-3xl font-bold text-aurma-text mb-6 leading-tight">
                  "See clearly. Act systematically. Manage risk intelligently."
                </blockquote>

                <p className="text-aurma-text-muted">
                  The aurma philosophy for professional digital asset trading
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
