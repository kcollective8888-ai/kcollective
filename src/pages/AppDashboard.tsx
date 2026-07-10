import { useRef, useState, useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import {
  TrendingUp, DollarSign, Users, Award, BarChart3,
  ChevronLeft, ChevronRight, Sparkles,
  Store, Wallet, PieChart, LineChart, Trophy, Zap,
  TicketPercent
} from 'lucide-react';

// ===== 今日流水卡片 =====
function TodayRevenueCard() {
  return (
    <div className="w-[320px] md:w-[360px] shrink-0 bg-white rounded-3xl border-[3px] border-black shadow-card overflow-hidden">
      <div className="p-5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-kc-yellow/20 flex items-center justify-center">
              <Store className="w-5 h-5 text-kc-navy" />
            </div>
            <span className="font-bold text-gray-900">今日流水</span>
          </div>
          <span className="text-xs text-gray-400">2026.07.09</span>
        </div>
        <div className="text-center py-4">
          <p className="text-4xl font-black text-kc-navy">$4,286</p>
          <p className="text-sm text-gray-500 mt-1">本日店铺总营业额</p>
        </div>
        <div className="grid grid-cols-3 gap-2 mt-4">
          {[
            { val: '$1,820', label: '堂食' },
            { val: '$1,546', label: '外卖' },
            { val: '$920', label: '自提' },
          ].map((item) => (
            <div key={item.label} className="bg-gray-50 rounded-xl p-3 text-center">
              <p className="text-lg font-bold text-gray-900">{item.val}</p>
              <p className="text-[10px] text-gray-500">{item.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-2 bg-green-50 rounded-xl p-3">
          <TrendingUp className="w-4 h-4 text-green-600" />
          <span className="text-xs text-green-700 font-medium">比昨日增长 +12.5%</span>
        </div>
      </div>
    </div>
  );
}

// ===== 个人到账变现卡片 =====
function MyEarningsCard() {
  return (
    <div className="w-[320px] md:w-[360px] shrink-0 bg-white rounded-3xl border-[3px] border-black shadow-card overflow-hidden">
      <div className="p-5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-green-100 flex items-center justify-center">
              <Wallet className="w-5 h-5 text-green-700" />
            </div>
            <span className="font-bold text-gray-900">我的变现</span>
          </div>
          <span className="text-xs px-2 py-1 bg-kc-yellow/20 text-kc-navy rounded-full font-medium">本周</span>
        </div>
        <div className="text-center py-3">
          <p className="text-4xl font-black text-green-600">$328.50</p>
          <p className="text-sm text-gray-500 mt-1">已到账收入</p>
        </div>
        <div className="space-y-3 mt-4">
          {[
            { icon: DollarSign, label: '基本工资', val: '$160.00', color: 'text-kc-yellow' },
            { icon: Sparkles, label: '技能奖金', val: '$85.00', color: 'text-kc-yellow' },
            { icon: Zap, label: '高峰补贴', val: '$45.50', color: 'text-orange-500' },
            { icon: Users, label: '帮带新人', val: '$38.00', color: 'text-blue-500' },
          ].map((item) => (
            <div key={item.label} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-2">
                <item.icon className={`w-4 h-4 ${item.color}`} />
                <span className="text-sm text-gray-600">{item.label}</span>
              </div>
              <span className="font-bold text-gray-900">{item.val}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ===== 同事业绩排行卡片 =====
function CoworkerPerformanceCard() {
  const coworkers = [
    { name: 'Ken', avatar: '/assets/avatar_1.jpg', sales: '$4,286', orders: 156, rank: 1 },
    { name: '小明', avatar: '/assets/avatar_3.jpg', sales: '$3,892', orders: 142, rank: 2 },
    { name: 'Lisa', avatar: '/assets/avatar_4.jpg', sales: '$3,650', orders: 128, rank: 3 },
    { name: '阿杰', avatar: '/assets/avatar_5.jpg', sales: '$3,210', orders: 115, rank: 4 },
    { name: '小陈', avatar: '/assets/avatar_8.jpg', sales: '$2,980', orders: 98, rank: 5 },
  ];

  return (
    <div className="w-[320px] md:w-[360px] shrink-0 bg-white rounded-3xl border-[3px] border-black shadow-card overflow-hidden">
      <div className="p-5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-blue-100 flex items-center justify-center">
              <Trophy className="w-5 h-5 text-blue-700" />
            </div>
            <span className="font-bold text-gray-900">同事业绩</span>
          </div>
          <span className="text-xs text-gray-400">今日</span>
        </div>
        <div className="space-y-3">
          {coworkers.map((person, idx) => (
            <div key={person.name} className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-50 transition-colors">
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                idx === 0 ? 'bg-kc-yellow text-black' : idx === 1 ? 'bg-gray-200 text-gray-700' : idx === 2 ? 'bg-orange-100 text-orange-700' : 'bg-gray-100 text-gray-500'
              }`}>{person.rank}</span>
              <img src={person.avatar} alt={person.name} className="w-9 h-9 rounded-full object-cover border border-gray-100" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-gray-900 truncate">{person.name}</p>
                <p className="text-[10px] text-gray-400">{person.orders} 单</p>
              </div>
              <span className="text-sm font-bold text-kc-navy">{person.sales}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ===== 同事等级卡片 =====
function CoworkerLevelsCard() {
  const levels = [
    { name: 'Ken', avatar: '/assets/avatar_1.jpg', role: 'Sushi Roll', level: 3, exp: '1,240 / 2,000', progress: 62 },
    { name: 'Lisa', avatar: '/assets/avatar_4.jpg', role: '前台接待', level: 4, exp: '2,800 / 3,000', progress: 93 },
    { name: '阿杰', avatar: '/assets/avatar_5.jpg', role: '烧烤师傅', level: 2, exp: '860 / 1,500', progress: 57 },
    { name: '小明', avatar: '/assets/avatar_3.jpg', role: '洗碗/ Prep', level: 2, exp: '920 / 1,500', progress: 61 },
  ];

  return (
    <div className="w-[320px] md:w-[360px] shrink-0 bg-white rounded-3xl border-[3px] border-black shadow-card overflow-hidden">
      <div className="p-5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-purple-100 flex items-center justify-center">
              <Award className="w-5 h-5 text-purple-700" />
            </div>
            <span className="font-bold text-gray-900">同事等级</span>
          </div>
          <span className="text-xs text-gray-400">实时</span>
        </div>
        <div className="space-y-4">
          {levels.map((person) => (
            <div key={person.name} className="p-3 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <img src={person.avatar} alt={person.name} className="w-10 h-10 rounded-full object-cover border border-gray-100" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-bold text-gray-900">{person.name}</p>
                    <span className="px-2 py-0.5 bg-kc-yellow/20 text-kc-navy text-[10px] rounded-full font-bold">Lv.{person.level}</span>
                  </div>
                  <p className="text-[11px] text-gray-500">{person.role}</p>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-kc-yellow h-2 rounded-full transition-all duration-500" style={{ width: `${person.progress}%` }} />
              </div>
              <p className="text-[10px] text-gray-400 mt-1 text-right">经验 {person.exp}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ===== 各组流水对比卡片 =====
function TeamComparisonCard() {
  const teams = [
    { name: '寿司组', revenue: 4286, target: 4000, color: 'bg-kc-navy' },
    { name: '烧烤组', revenue: 3650, target: 3800, color: 'bg-orange-500' },
    { name: '面食组', revenue: 3120, target: 3500, color: 'bg-blue-500' },
    { name: '饮品组', revenue: 2180, target: 2500, color: 'bg-green-500' },
  ];
  const maxRevenue = Math.max(...teams.map(t => t.revenue));

  return (
    <div className="w-[320px] md:w-[360px] shrink-0 bg-white rounded-3xl border-[3px] border-black shadow-card overflow-hidden">
      <div className="p-5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-orange-100 flex items-center justify-center">
              <PieChart className="w-5 h-5 text-orange-700" />
            </div>
            <span className="font-bold text-gray-900">各组流水</span>
          </div>
          <span className="text-xs text-gray-400">今日</span>
        </div>
        <div className="space-y-4">
          {teams.map((team) => (
            <div key={team.name}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-bold text-gray-900">{team.name}</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-kc-navy">${team.revenue.toLocaleString()}</span>
                  {team.revenue >= team.target ? (
                    <span className="text-[10px] text-green-600 bg-green-50 px-1.5 py-0.5 rounded-full">达标</span>
                  ) : (
                    <span className="text-[10px] text-orange-600 bg-orange-50 px-1.5 py-0.5 rounded-full">{Math.round((team.revenue / team.target) * 100)}%</span>
                  )}
                </div>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-3">
                <div className={`${team.color} h-3 rounded-full transition-all duration-700`} style={{ width: `${(team.revenue / maxRevenue) * 100}%` }} />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5 p-3 bg-kc-navy rounded-xl text-center">
          <p className="text-xs text-white/60">店铺总流水</p>
          <p className="text-2xl font-black text-kc-yellow">$13,236</p>
          <p className="text-[10px] text-white/40 mt-1">4个工作组 | 32名员工</p>
        </div>
      </div>
    </div>
  );
}

// ===== 贡献曲线卡片 =====
function ContributionCurveCard() {
  const days = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
  const contributions = [45, 62, 58, 78, 85, 120, 95];
  const maxVal = Math.max(...contributions);

  return (
    <div className="w-[320px] md:w-[360px] shrink-0 bg-white rounded-3xl border-[3px] border-black shadow-card overflow-hidden">
      <div className="p-5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-indigo-100 flex items-center justify-center">
              <LineChart className="w-5 h-5 text-indigo-700" />
            </div>
            <span className="font-bold text-gray-900">贡献曲线</span>
          </div>
          <span className="text-xs px-2 py-1 bg-kc-yellow/20 text-kc-navy rounded-full font-medium">本周</span>
        </div>
        <div className="text-center py-2">
          <p className="text-3xl font-black text-kc-navy">643 <span className="text-sm font-normal text-gray-500">贡献点</span></p>
          <p className="text-xs text-gray-400 mt-1">比上周 +18%</p>
        </div>
        <div className="flex items-end justify-between gap-2 mt-4 h-32 px-1">
          {contributions.map((val, idx) => (
            <div key={idx} className="flex flex-col items-center flex-1">
              <span className="text-[10px] font-bold text-gray-600 mb-1">{val}</span>
              <div className={`w-full rounded-t-lg transition-all duration-700 ${idx === 5 ? 'bg-kc-yellow' : 'bg-kc-navy/20'}`} style={{ height: `${(val / maxVal) * 80}px` }} />
              <span className="text-[10px] text-gray-400 mt-1">{days[idx]}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <div className="p-3 bg-gray-50 rounded-xl text-center">
            <p className="text-lg font-bold text-kc-navy">12</p>
            <p className="text-[10px] text-gray-500">完成的任务</p>
          </div>
          <div className="p-3 bg-gray-50 rounded-xl text-center">
            <p className="text-lg font-bold text-kc-navy">8</p>
            <p className="text-[10px] text-gray-500">主动补位</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ===== Coupon 收入卡片（新增） =====
function CouponIncomeCard() {
  return (
    <div className="w-[320px] md:w-[360px] shrink-0 bg-white rounded-3xl border-[3px] border-black shadow-card overflow-hidden">
      <div className="p-5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-pink-100 flex items-center justify-center">
              <TicketPercent className="w-5 h-5 text-pink-700" />
            </div>
            <span className="font-bold text-gray-900">Coupon 收入</span>
          </div>
          <span className="text-xs px-2 py-1 bg-pink-100 text-pink-700 rounded-full font-bold">5%</span>
        </div>

        <p className="text-xs text-gray-500 mb-4">顾客使用你的 Coupon 消费，你自动获得 5% 分成</p>

        <div className="text-center py-2">
          <p className="text-4xl font-black text-pink-600">$86.50</p>
          <p className="text-sm text-gray-500 mt-1">本周 Coupon 分成</p>
        </div>

        <div className="space-y-3 mt-4">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
            <div className="flex items-center gap-2">
              <TicketPercent className="w-4 h-4 text-pink-500" />
              <span className="text-sm text-gray-600">Coupon 被使用</span>
            </div>
            <span className="font-bold text-gray-900">47 次</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-blue-500" />
              <span className="text-sm text-gray-600">带来顾客</span>
            </div>
            <span className="font-bold text-gray-900">32 人</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
            <div className="flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-green-500" />
              <span className="text-sm text-gray-600">累计消费金额</span>
            </div>
            <span className="font-bold text-gray-900">$1,730</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-kc-yellow" />
              <span className="text-sm text-gray-600">你的分成比例</span>
            </div>
            <span className="font-bold text-pink-600">5%</span>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-2 bg-pink-50 rounded-xl p-3">
          <Sparkles className="w-4 h-4 text-pink-600" />
          <span className="text-xs text-pink-700 font-medium">顾客用你的Coupon消费，自动分给你5%</span>
        </div>
      </div>
    </div>
  );
}

// ===== 可滑动容器组件 =====
function DraggableCarousel({ children }: { children: React.ReactNode[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateScrollState, { passive: true });
    updateScrollState();
    return () => el.removeEventListener('scroll', updateScrollState);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 1.5;
    if (scrollRef.current) scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => setIsDragging(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const x = e.touches[0].pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 1.5;
    if (scrollRef.current) scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: direction === 'left' ? -380 : 380, behavior: 'smooth' });
  };

  return (
    <div className="relative group">
      {canScrollLeft && (
        <button onClick={() => scroll('left')} className="absolute left-0 top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-white rounded-full shadow-lg border-2 border-black flex items-center justify-center hover:bg-kc-yellow transition-colors duration-200">
          <ChevronLeft className="w-5 h-5" />
        </button>
      )}
      {canScrollRight && (
        <button onClick={() => scroll('right')} className="absolute right-0 top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-white rounded-full shadow-lg border-2 border-black flex items-center justify-center hover:bg-kc-yellow transition-colors duration-200">
          <ChevronRight className="w-5 h-5" />
        </button>
      )}
      <div
        ref={scrollRef}
        className={`flex gap-5 overflow-x-auto pb-6 pt-2 px-2 scrollbar-hide ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        {children}
      </div>
      {canScrollLeft && <div className="absolute left-0 top-0 bottom-6 w-16 bg-gradient-to-r from-kc-navy/20 to-transparent pointer-events-none z-20 rounded-l-3xl" />}
      {canScrollRight && <div className="absolute right-0 top-0 bottom-6 w-16 bg-gradient-to-l from-kc-navy/20 to-transparent pointer-events-none z-20 rounded-r-3xl" />}
    </div>
  );
}

// ===== 主页面 =====
export default function AppDashboard() {
  useScrollReveal();
  const { t } = useLanguage();

  const slides = [
    <TodayRevenueCard />,
    <MyEarningsCard />,
    <CouponIncomeCard />,
    <CoworkerPerformanceCard />,
    <CoworkerLevelsCard />,
    <TeamComparisonCard />,
    <ContributionCurveCard />,
  ];

  const features = [
    { icon: TrendingUp, label: t.dash_feature_1, desc: t.dash_feature_1_desc },
    { icon: DollarSign, label: t.dash_feature_2, desc: t.dash_feature_2_desc },
    { icon: Users, label: t.dash_feature_3, desc: t.dash_feature_3_desc },
    { icon: BarChart3, label: t.dash_feature_4, desc: t.dash_feature_4_desc },
  ];

  return (
    <div className="min-h-screen w-full bg-kc-navy overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-12 pb-8 px-4 md:px-8 lg:px-12">
        <div className="max-w-[1440px] mx-auto text-center reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20 mb-6">
            <Sparkles className="w-4 h-4 text-kc-yellow" />
            <span className="text-sm text-white/80">{t.dash_preview}</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
            {t.dash_title_1}<span className="text-kc-yellow">{t.dash_title_highlight}</span>{t.dash_title_2}
          </h1>
          <p className="mt-4 text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
            {t.dash_subtitle}
          </p>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-8 px-4 md:px-8 lg:px-12">
        <div className="max-w-[1440px] mx-auto">
          <DraggableCarousel>
            {slides}
          </DraggableCarousel>
          <div className="flex justify-center gap-2 mt-6">
            {slides.map((_, idx) => (
              <div key={idx} className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === 0 ? 'bg-kc-yellow w-6' : 'bg-white/30'}`} />
            ))}
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-16 px-4 md:px-8 lg:px-12">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {features.map((item, idx) => (
              <div
                key={item.label}
                className={`reveal reveal-delay-${idx + 1} text-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors`}
              >
                <div className="w-12 h-12 rounded-xl bg-kc-yellow/20 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-kc-yellow" />
                </div>
                <h3 className="text-white font-bold text-sm mb-1">{item.label}</h3>
                <p className="text-white/50 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-12 px-4 md:px-8 lg:px-12">
        <div className="max-w-[1440px] mx-auto">
          <div className="reveal bg-kc-yellow rounded-3xl border-[3px] border-black p-8 md:p-12 text-center shadow-card">
            <h2 className="text-2xl md:text-3xl font-black text-black mb-3">{t.dash_cta_title}</h2>
            <p className="text-black/70 mb-6 max-w-lg mx-auto">{t.dash_cta_desc}</p>
            <Link
              to="/"
              className="inline-flex items-center px-8 py-3.5 bg-black text-white font-bold rounded-full hover:bg-gray-900 hover:scale-105 transition-all duration-200"
            >
              {t.dash_cta_btn}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
