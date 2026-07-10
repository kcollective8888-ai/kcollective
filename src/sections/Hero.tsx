import { ClipboardCheck, ShieldCheck, Coins } from 'lucide-react';
import Navbar from './Navbar';
import { useLanguage } from '../contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  const badges = [
    { icon: ClipboardCheck, label: t.badge_record },
    { icon: ShieldCheck, label: t.badge_prove },
    { icon: Coins, label: t.badge_earn },
  ];

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full bg-kc-navy overflow-hidden" id="why">
      <Navbar />

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 pt-12 pb-16 md:pt-16 md:pb-24">
        <div className="text-center reveal">
          {/* Main Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
            {t.hero_title_1}
            <br />
            {t.hero_title_2}
            <br />
            <span className="text-kc-yellow">{t.hero_title_highlight}</span>
          </h1>

          <p className="mt-6 text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {t.hero_desc}
          </p>

          {/* Badges */}
          <div className="flex flex-wrap gap-4 mt-8 justify-center">
            {badges.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 border border-white/20"
              >
                <div className="w-8 h-8 rounded-full bg-kc-yellow/20 flex items-center justify-center">
                  <badge.icon className="w-4 h-4 text-kc-yellow" />
                </div>
                <span className="text-white font-bold text-sm">{badge.label}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 mt-8 justify-center">
            <button
              onClick={() => scrollToSection('#cta')}
              className="inline-flex items-center px-6 py-3 bg-kc-yellow text-black font-bold text-sm rounded-full border-2 border-black hover:bg-kc-yellow-dark hover:scale-105 transition-all duration-200 shadow-card cursor-pointer"
            >
              {t.btn_passport}
            </button>
            <button
              onClick={() => scrollToSection('#features')}
              className="inline-flex items-center px-6 py-3 bg-transparent text-white font-bold text-sm rounded-full border-2 border-white/40 hover:border-white hover:bg-white/5 transition-all duration-200 cursor-pointer"
            >
              {t.btn_skills}
            </button>
            <button
              onClick={() => scrollToSection('#passport')}
              className="inline-flex items-center px-6 py-3 bg-transparent text-white font-bold text-sm rounded-full border-2 border-white/40 hover:border-white hover:bg-white/5 transition-all duration-200 cursor-pointer"
            >
              {t.btn_report}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
