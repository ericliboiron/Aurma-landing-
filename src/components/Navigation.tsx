import { useState, useEffect } from 'react';
import { AurmaLogo, MenuIcon, CloseIcon } from './icons/Icons';

const navLinks = [
  { name: 'Platform', href: '#platform' },
  { name: 'Features', href: '#features' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'MGNS', href: '#mgns' },
  { name: 'Security', href: '#security' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-aurma-deep/95 backdrop-blur-lg border-b border-aurma-border/30'
          : 'bg-transparent'
      }`}
    >
      <div className="container-aurma">
        <div className="flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <AurmaLogo className="h-8 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-aurma-text-muted hover:text-aurma-text transition-colors duration-200 text-sm font-medium relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-aurma-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="#platform"
              className="btn-secondary text-sm"
            >
              View Platform
            </a>
            <a
              href="#access"
              className="btn-primary text-sm"
            >
              Request Access
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-aurma-text-muted hover:text-aurma-text transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <CloseIcon size={24} />
            ) : (
              <MenuIcon size={24} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-aurma-deep/98 backdrop-blur-lg border-t border-aurma-border/30">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-aurma-text-muted hover:text-aurma-text transition-colors duration-200 text-base font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 space-y-3 border-t border-aurma-border/30">
                <a
                  href="#platform"
                  className="block btn-secondary text-center text-sm"
                >
                  View Platform
                </a>
                <a
                  href="#access"
                  className="block btn-primary text-center text-sm"
                >
                  Request Access
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
