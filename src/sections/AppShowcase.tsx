import { Check, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export default function AppShowcase() {
  const { t } = useLanguage();

  const benefits = [
    t.benefit_1, t.benefit_2, t.benefit_3, t.benefit_4, t.benefit_5,
  ];

  return (
    <section className="w-full bg-kc-navy py-16 md:py-24" id="passport">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-6">
          {/* Left: Benefits List */}
          <div className="w-full lg:w-[32%] reveal">
            <h2 className="text-2xl md:text-3xl font-bold text-white leading-snug mb-8">
              {t.showcase_title_1}
              <br />
              {t.showcase_title_2}
            </h2>

            <ul className="space-y-4">
              {benefits.map((item, idx) => (
                <li key={item} className={`reveal reveal-delay-${idx + 1} flex items-center gap-3`}>
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-kc-yellow flex items-center justify-center">
                    <Check className="w-4 h-4 text-black" strokeWidth={3} />
                  </span>
                  <span className="inline-flex items-center bg-white/10 rounded-full px-4 py-2 text-white text-sm font-medium border border-white/20">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Center: Dashboard Preview Image (replaces phone mockup) */}
          <div className="w-full lg:w-[36%] flex justify-center reveal reveal-delay-2">
            <Link
              to="/dashboard"
              className="relative group block w-full max-w-[340px]"
            >
              <div className="relative rounded-2xl overflow-hidden border-[3px] border-black shadow-card hover:shadow-card-hover transition-all duration-300">
                <img
                  src="/assets/stats-card-new.png"
                  alt={t.stats_card_alt}
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-kc-navy/0 group-hover:bg-kc-navy/15 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 px-4 py-2 bg-kc-navy/80 rounded-full">
                    <BarChart3 className="w-4 h-4 text-kc-yellow" />
                    <span className="text-white text-sm font-bold">{t.hover_hint}</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Right: Report Card */}
          <div className="w-full lg:w-[32%] reveal reveal-delay-3">
            <Link
              to="/dashboard"
              className="block bg-white rounded-2xl border-[3px] border-black shadow-card overflow-hidden hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group/card"
            >
              <div className="relative">
                <img
                  src="/assets/report-card-new.png"
                  alt={t.report_card_alt}
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-kc-navy/0 group-hover/card:bg-kc-navy/15 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-center gap-2 px-4 py-2 bg-kc-navy/80 rounded-full">
                    <BarChart3 className="w-4 h-4 text-kc-yellow" />
                    <span className="text-white text-sm font-bold">{t.hover_hint}</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
