import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="w-full bg-kc-navy border-t border-white/10 py-8">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-kc-yellow rounded-md flex items-center justify-center border-2 border-black">
              <span className="text-black font-black text-xs">K</span>
            </div>
            <span className="text-white/80 font-bold text-sm">KCollective</span>
          </div>

          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} KCollective. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a href="#" className="text-white/40 hover:text-white/60 text-xs transition-colors">{t.footer_privacy}</a>
            <a href="#" className="text-white/40 hover:text-white/60 text-xs transition-colors">{t.footer_terms}</a>
            <a href="#" className="text-white/40 hover:text-white/60 text-xs transition-colors">{t.footer_contact}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
