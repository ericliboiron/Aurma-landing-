const techStack = [
  ['React 18', 'TypeScript', 'Vite'],
  ['TanStack Query', 'TanStack Router'],
  ['Recharts', 'Tailwind CSS', 'FastAPI'],
  ['PostgreSQL', 'Kubernetes', 'AWS EKS'],
  ['CloudFront', 'S3', 'RDS', 'Logto'],
  ['Stripe'],
];

export default function EnterpriseInfrastructure() {
  return (
    <section id="security" className="section bg-aurma-primary relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-aurma-deep to-aurma-primary" />

      <div className="container-aurma relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-aurma-text mb-4">
            Powered By Enterprise Infrastructure
          </h2>
          <p className="text-lg text-aurma-text-muted max-w-2xl mx-auto">
            Built on battle-tested technologies for reliability, scalability, and performance
          </p>
        </div>

        {/* Tech Stack */}
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col items-center space-y-4">
            {techStack.map((row, rowIndex) => (
              <div key={rowIndex} className="flex flex-wrap justify-center gap-3">
                {row.map((tech, techIndex) => (
                  <TechBadge key={techIndex} name={tech} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface TechBadgeProps {
  name: string;
}

function TechBadge({ name }: TechBadgeProps) {
  return (
    <span className="tech-badge">
      {name}
    </span>
  );
}
