import { Award, TrendingUp, Users, FileText, Eye, UserCheck } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Features() {
  const { t } = useLanguage();

  const features = [
    { icon: Award, title: t.feat_badge, desc: t.feat_badge_desc },
    { icon: TrendingUp, title: t.feat_growth, desc: t.feat_growth_desc },
    { icon: Users, title: t.feat_contrib, desc: t.feat_contrib_desc },
    { icon: FileText, title: t.feat_official, desc: t.feat_official_desc },
    { icon: Eye, title: t.feat_fair, desc: t.feat_fair_desc },
    { icon: UserCheck, title: t.feat_yours, desc: t.feat_yours_desc },
  ];

  return (
    <section className="w-full bg-white py-16 md:py-24" id="features">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-12 md:mb-16 reveal">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-2 h-2 rounded-full bg-kc-yellow" />
            <span className="w-2 h-2 rounded-full bg-kc-navy" />
            <span className="w-2 h-2 rounded-full bg-kc-yellow" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t.features_title}</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {features.map((feature, idx) => (
            <div
              key={feature.title}
              className={`reveal reveal-delay-${idx + 1} group relative bg-white border-[3px] border-black rounded-2xl p-6 md:p-8 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300`}
            >
              <div className="w-14 h-14 rounded-xl bg-gray-50 border-2 border-gray-100 flex items-center justify-center mb-5 group-hover:bg-kc-yellow/10 group-hover:border-kc-yellow/30 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-gray-700 group-hover:text-kc-navy transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed whitespace-pre-line">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
