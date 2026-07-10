import { Scale, History, MessageSquare, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Transparency() {
  const { t } = useLanguage();

  const features = [
    { icon: Scale, title: t.trans_standard, desc: t.trans_standard_desc },
    { icon: History, title: t.trans_traceable, desc: t.trans_traceable_desc },
    { icon: MessageSquare, title: t.trans_appeal, desc: t.trans_appeal_desc },
    { icon: Heart, title: t.trans_respect, desc: t.trans_respect_desc },
  ];

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-12 md:mb-16 reveal">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-2 h-2 rounded-full bg-kc-yellow" />
            <span className="w-2 h-2 rounded-full bg-kc-navy" />
            <span className="w-2 h-2 rounded-full bg-kc-yellow" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t.trans_title}</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, idx) => (
            <div key={feature.title} className={`reveal reveal-delay-${idx + 1} text-center`}>
              <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-5">
                <feature.icon className="w-8 h-8 text-gray-500" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
