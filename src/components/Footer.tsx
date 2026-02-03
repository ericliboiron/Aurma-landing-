import { AurmaLogo, LinkedInIcon, XIcon } from './icons/Icons';

const footerLinks = {
  Platform: [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Security', href: '#security' },
    { name: 'Architecture', href: '#architecture' },
  ],
  Access: [
    { name: 'Request Access', href: '#access' },
    { name: 'Contact Sales', href: '#contact' },
    { name: 'Schedule Demo', href: '#demo' },
  ],
  Legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
  ],
};

export default function Footer() {
  return (
    <footer id="access" className="bg-aurma-deep border-t border-aurma-border/30">
      <div className="container-aurma py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo Column */}
          <div className="col-span-2 md:col-span-1">
            <AurmaLogo className="h-8 w-auto mb-4" />
            <p className="text-sm text-aurma-text-muted mb-6 max-w-xs">
              Institutional-grade crypto intelligence and automated trading platform.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://twitter.com/aurma_ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-aurma-text-dim hover:text-aurma-gold transition-colors"
              >
                <XIcon size={20} />
              </a>
              <a
                href="https://linkedin.com/company/aurma"
                target="_blank"
                rel="noopener noreferrer"
                className="text-aurma-text-dim hover:text-aurma-gold transition-colors"
              >
                <LinkedInIcon size={20} />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-aurma-text mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-aurma-text-muted hover:text-aurma-text transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-aurma-border/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-aurma-text-dim">
              &copy; {new Date().getFullYear()} aurma. All rights reserved.
            </p>
            <p className="text-xs text-aurma-text-dim">
              Trading crypto assets involves significant risk. Not financial advice.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
