import { Shield, Smartphone } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function CTA() {
  const { t } = useLanguage();
  const [phone, setPhone] = useState('');

  const promises = [
    { icon: Shield, label: t.promise_security },
    { icon: Smartphone, label: t.promise_anywhere },
  ];

  return (
    <section className="relative w-full bg-kc-navy overflow-hidden" id="cta">
      <div className="absolute inset-0 bg-kc-navy/80 z-10" />

      <div className="relative z-20 max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 py-16 md:py-24">
        <div className="max-w-xl mx-auto text-center reveal">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
            {t.cta_title}
          </h2>
          <p className="text-gray-300 text-base md:text-lg mb-8">
            {t.cta_subtitle}
          </p>

          {/* Input + Button */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder={t.input_placeholder}
              className="flex-1 px-6 py-3.5 rounded-full bg-white text-gray-900 placeholder-gray-400 text-sm font-medium outline-none focus:ring-2 focus:ring-kc-yellow border-0"
            />
            <button className="px-8 py-3.5 bg-kc-yellow text-black font-bold text-sm rounded-full border-2 border-black hover:bg-kc-yellow-dark hover:scale-105 transition-all duration-200 whitespace-nowrap cursor-pointer">
              {t.btn_start}
            </button>
          </div>

          {/* App Store Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <a href="#" className="inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white rounded-xl border border-gray-700 hover:bg-gray-900 transition-colors">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 16.86 2.94 12.17 4.7 8.94C5.57 7.31 7.13 6.24 8.82 6.22C10.1 6.2 11.32 7.1 12.11 7.1C12.89 7.1 14.37 6.03 15.92 6.19C16.57 6.22 18.39 6.46 19.56 8.12C19.47 8.18 17.39 9.44 17.41 12.04C17.44 15.17 20.06 16.28 20.09 16.29C20.06 16.36 19.67 17.78 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
              </svg>
              <div className="text-left">
                <p className="text-[10px] leading-none text-gray-400">Download on the</p>
                <p className="text-sm font-bold leading-tight">App Store</p>
              </div>
            </a>
            <a href="#" className="inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white rounded-xl border border-gray-700 hover:bg-gray-900 transition-colors">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5ZM16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12ZM20.16 10.81C20.5 11.08 20.75 11.5 20.75 12C20.75 12.5 20.53 12.9 20.18 13.18L17.89 14.5L15.39 12L17.89 9.5L20.16 10.81ZM6.05 2.66L16.81 8.88L14.54 11.15L6.05 2.66Z" />
              </svg>
              <div className="text-left">
                <p className="text-[10px] leading-none text-gray-400">GET IT ON</p>
                <p className="text-sm font-bold leading-tight">Google Play</p>
              </div>
            </a>
          </div>

          {/* Promise Tags - 2 items only */}
          <div className="flex flex-wrap gap-6 justify-center">
            {promises.map((p) => (
              <div key={p.label} className="flex items-center gap-2 text-gray-300 text-sm">
                <p.icon className="w-4 h-4 text-kc-yellow" />
                <span>{p.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
