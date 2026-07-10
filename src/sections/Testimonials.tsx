import { Quote } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Testimonials() {
  const { t } = useLanguage();

  const testimonials = [
    {
      avatar: '/assets/avatar_1.jpg', name: t.t_name_1, role: t.t_role_1,
      location: t.t_loc_1, date: t.t_date_1, content: t.t_content_1,
    },
    {
      avatar: '/assets/avatar_2.jpg', name: t.t_name_2, role: t.t_role_2,
      location: '', date: t.t_date_2, content: t.t_content_2,
    },
    {
      avatar: '/assets/avatar_3.jpg', name: t.t_name_3, role: t.t_role_3,
      location: '', date: t.t_date_3, content: t.t_content_3,
    },
    {
      avatar: '/assets/avatar_4.jpg', name: t.t_name_4, role: t.t_role_4,
      location: '', date: t.t_date_4, content: t.t_content_4,
    },
    {
      avatar: '/assets/avatar_5.jpg', name: t.t_name_5, role: t.t_role_5,
      location: '', date: t.t_date_5, content: t.t_content_5,
    },
    {
      avatar: '/assets/avatar_6.jpg', name: t.t_name_6, role: t.t_role_6,
      location: '', date: t.t_date_6, content: t.t_content_6,
    },
    {
      avatar: '/assets/avatar_7.jpg', name: t.t_name_7, role: t.t_role_7,
      location: '', date: t.t_date_7, content: t.t_content_7,
    },
    {
      avatar: '/assets/avatar_8.jpg', name: t.t_name_8, role: t.t_role_8,
      location: '', date: t.t_date_8, content: t.t_content_8,
    },
  ];

  return (
    <section className="w-full bg-kc-gray-bg py-16 md:py-24" id="testimonials">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-12 md:mb-16 reveal">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-2 h-2 rounded-full bg-kc-yellow" />
            <span className="w-2 h-2 rounded-full bg-kc-navy" />
            <span className="w-2 h-2 rounded-full bg-kc-yellow" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t.reviews_title}</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {testimonials.map((item, idx) => (
            <div
              key={item.name}
              className={`reveal reveal-delay-${(idx % 4) + 1} bg-white rounded-2xl border border-gray-100 p-5 hover:-translate-y-1 hover:shadow-lg transition-all duration-200`}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover border border-gray-100"
                  loading="lazy"
                />
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-bold text-gray-900 truncate">{item.name}</p>
                  <p className="text-xs text-kc-yellow font-medium truncate">
                    {item.role}
                    {item.location && <span className="text-gray-400 font-normal"> | {item.location}</span>}
                  </p>
                </div>
              </div>

              {/* Date */}
              <p className="text-[10px] text-gray-400 mb-2">{item.date}</p>

              {/* Quote */}
              <Quote className="w-5 h-5 text-gray-300 mb-2" />
              <p className="text-sm text-gray-700 leading-relaxed">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
