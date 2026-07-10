import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BarChart3, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { lang, toggleLang, t } = useLanguage();
  const isDashboard = location.pathname === '/dashboard';

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <nav className="w-full py-4 px-4 md:px-8 lg:px-12">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <div className="w-8 h-8 bg-kc-yellow rounded-md flex items-center justify-center border-2 border-black">
            <span className="text-black font-black text-sm">K</span>
          </div>
          <span className="text-white font-bold text-lg tracking-tight">KCollective</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {isDashboard ? (
            <>
              <Link to="/" className="text-white/80 hover:text-white text-sm font-medium transition-colors duration-200">
                {t.nav_home}
              </Link>
              <Link to="/dashboard" className="text-kc-yellow text-sm font-bold transition-colors duration-200">
                {t.nav_dashboard}
              </Link>
            </>
          ) : (
            <>
              {[
                { label: t.nav_why, href: '#why' },
                { label: t.nav_features, href: '#features' },
                { label: t.nav_passport, href: '#passport' },
                { label: t.nav_reviews, href: '#testimonials' },
                { label: t.nav_faq, href: '#faq' },
              ].map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="text-white/80 hover:text-white text-sm font-medium transition-colors duration-200 bg-transparent border-0 cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
              <Link
                to="/dashboard"
                className="inline-flex items-center gap-1.5 text-kc-yellow text-sm font-bold hover:text-kc-yellow-dark transition-colors duration-200"
              >
                <BarChart3 className="w-4 h-4" />
                {t.nav_dashboard}
              </Link>
            </>
          )}
        </div>

        {/* Right: Lang + CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 rounded-full text-white/80 text-xs font-medium hover:bg-white/20 transition-colors border-0 cursor-pointer"
          >
            <Globe className="w-3.5 h-3.5" />
            {lang === 'zh' ? 'EN' : '中文'}
          </button>
          <Link
            to={isDashboard ? "/" : "/dashboard"}
            className="inline-flex items-center px-5 py-2.5 bg-kc-yellow text-black font-bold text-sm rounded-full border-2 border-black hover:bg-kc-yellow-dark hover:scale-105 transition-all duration-200"
          >
            {isDashboard ? t.nav_home : t.nav_cta}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden mt-4 pb-4 border-t border-white/10 pt-4">
          <div className="flex flex-col gap-4">
            {isDashboard ? (
              <>
                <Link to="/" className="text-white/80 hover:text-white text-sm font-medium" onClick={() => setMobileOpen(false)}>{t.nav_home}</Link>
                <Link to="/dashboard" className="text-kc-yellow text-sm font-bold" onClick={() => setMobileOpen(false)}>{t.nav_dashboard}</Link>
              </>
            ) : (
              <>
                {[
                  { label: t.nav_why, href: '#why' },
                  { label: t.nav_features, href: '#features' },
                  { label: t.nav_passport, href: '#passport' },
                  { label: t.nav_reviews, href: '#testimonials' },
                  { label: t.nav_faq, href: '#faq' },
                ].map((link) => (
                  <button
                    key={link.label}
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/80 hover:text-white text-sm font-medium text-left bg-transparent border-0 cursor-pointer"
                  >
                    {link.label}
                  </button>
                ))}
                <Link to="/dashboard" className="inline-flex items-center gap-1.5 text-kc-yellow text-sm font-bold" onClick={() => setMobileOpen(false)}>
                  <BarChart3 className="w-4 h-4" />
                  {t.nav_dashboard}
                </Link>
              </>
            )}
            <button
              onClick={toggleLang}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 rounded-full text-white/80 text-xs font-medium hover:bg-white/20 transition-colors border-0 cursor-pointer w-fit"
            >
              <Globe className="w-3.5 h-3.5" />
              {lang === 'zh' ? 'EN' : '中文'}
            </button>
            <Link
              to={isDashboard ? "/" : "/dashboard"}
              className="inline-flex items-center justify-center px-5 py-2.5 bg-kc-yellow text-black font-bold text-sm rounded-full border-2 border-black mt-2"
              onClick={() => setMobileOpen(false)}
            >
              {isDashboard ? t.nav_home : t.nav_cta}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
