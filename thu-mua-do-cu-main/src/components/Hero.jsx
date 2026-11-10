// Hero.jsx – Banner chính với bố cục nội dung và ảnh tách biệt
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

// Ảnh WebP nguyên vẹn được chuyển đổi từ ảnh khách hàng cung cấp.
const HERO_IMG = '/images/thuc-te/hero-trang-chu-moi.webp';

const BADGES = [
  'Khảo sát tận nơi',
  'Hỗ trợ tháo dỡ',
  'Thanh toán nhanh tại chỗ',
];

const STATS = [
  { num: '500+', label: 'Đơn thu mua' },
  { num: '10+', label: 'Năm kinh nghiệm' },
  { num: '100%', label: 'Khách hàng hài lòng' },
  { num: '24h', label: 'Phản hồi & định giá' },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 36 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.7,
    delay,
    ease: [0.4, 0, 0.2, 1],
  },
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="home-hero relative overflow-hidden grain-overlay"
    >
      <div
        className="pointer-events-none absolute -right-24 top-20 h-80 w-80 rounded-full blur-3xl md:h-[30rem] md:w-[30rem]"
        style={{ background: 'rgba(201,123,42,0.12)' }}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-[1400px] gap-6 px-4 pb-10 pt-[88px] md:gap-8 md:px-10 md:pb-16 md:pt-28 lg:min-h-screen lg:grid-cols-[minmax(0,1.18fr)_minmax(380px,0.82fr)] lg:items-center lg:gap-12 lg:px-12 lg:py-28 xl:gap-16 2xl:px-16">
        <div className="min-w-0">
          <motion.h1
            {...fadeUp(0.1)}
            className="hero-title mb-4 font-display font-700 text-cream md:mb-6"
          >
            Thu Mua{' '}
            <span className="text-gradient md:italic">
              Cửa Gỗ Cũ, Cửa Nhôm Kính Cũ
            </span>
            <br className="hidden md:block" />
            <span className="md:hidden">{' '}</span>
            & Cửa Nhôm Xingfa Cũ{' '}
            <span className="text-gradient md:italic">
              Tại TP.HCM
            </span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.24)}
            className="mb-5 max-w-xl font-body text-sm leading-6 text-cream/80 sm:text-base md:mb-8 md:text-lg md:leading-relaxed"
          >
            Nhận thu mua cửa gỗ cũ, cửa nhôm kính cũ và cửa nhôm Xingfa cũ
            tại TP.HCM. Khảo sát tận nơi, hỗ trợ tháo dỡ và thanh toán nhanh
            tại chỗ.
          </motion.p>

          <motion.div
            {...fadeUp(0.36)}
            data-hero-benefits
            className="flex flex-wrap gap-2 md:mb-10 md:gap-3"
          >
            {BADGES.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 font-body text-[11px] font-600 tracking-wide md:px-4 md:py-2 md:text-xs"
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(232,168,62,0.4)',
                  color: '#F6EDD9',
                }}
              >
                <CheckCircle2 size={13} className="text-gold" />
                {badge}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.62,
              ease: [0.4, 0, 0.2, 1],
            }}
            className="hidden grid-cols-4 gap-px overflow-hidden rounded-2xl md:grid"
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(232,168,62,0.2)',
            }}
          >
            {STATS.map(({ num, label }) => (
              <div
                key={label}
                className="px-3 py-5 text-center backdrop-blur-sm xl:px-5"
                style={{ background: 'rgba(44,26,14,0.38)' }}
              >
                <div className="stat-number">{num}</div>
                <p className="mt-1 font-body text-[10px] tracking-wide text-cream/60 xl:text-xs">
                  {label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.figure
          {...fadeUp(0.46)}
          data-mobile-hero-collage
          className="mx-auto w-full max-w-[520px] overflow-hidden rounded-[22px] border border-amber/35 bg-[#35120e] shadow-[0_24px_65px_rgba(10,4,3,0.38)] md:rounded-[26px] lg:justify-self-end lg:rounded-[28px]"
        >
          <img
            src={HERO_IMG}
            alt="Cửa gỗ cũ, cửa nhôm kính cũ và cửa nhôm Xingfa cũ thực tế"
            width="1065"
            height="1476"
            className="block h-auto w-full"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </motion.figure>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 xl:flex"
      >
        <span className="font-body text-xs uppercase tracking-widest text-cream/40">
          Cuộn xuống
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          className="h-8 w-px rounded-full"
          style={{
            background: 'linear-gradient(to bottom, rgba(232,168,62,0.6), transparent)',
          }}
        />
      </motion.div>
    </section>
  );
}
