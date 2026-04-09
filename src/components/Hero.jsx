// Hero.jsx – Banner chính với parallax background và animated text
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

// Ảnh Unsplash liên quan đến nội thất / interior
const HERO_IMG = 'https://res.cloudinary.com/dhshucomg/image/upload/v1775361901/z7692968044219_30360f258a497be6e29edce22b1f7e07_tds8xi.jpg';

const BADGES = [
  'Định giá miễn phí',
  'Thanh toán ngay',
  'Vận chuyển tận nơi',
];

// Fade-up animation config
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 36 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.4, 0, 0.2, 1] },
});

export default function Hero() {
  const bgRef = useRef(null);

  // Hiệu ứng parallax nhẹ khi scroll
  useEffect(() => {
    const onScroll = () => {
      if (!bgRef.current) return;
      const offset = window.scrollY * 0.38;
      bgRef.current.style.transform = `translateY(${offset}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden grain-overlay">

      {/* ── Background image với parallax ── */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          ref={bgRef}
          src={HERO_IMG}
          alt="Nội thất đồ cũ chất lượng"
          className="hero-bg absolute inset-0 w-full h-[120%] object-cover -top-[10%]"
          loading="eager"
          fetchpriority="high"
        />
        {/* Gradient overlay walnut */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(115deg, rgba(44,26,14,0.94) 0%, rgba(44,26,14,0.78) 50%, rgba(44,26,14,0.55) 100%)',
          }}
        />
      </div>

      {/* ── Decorative diagonal stripe ── */}
      <div
        className="absolute right-0 top-0 bottom-0 w-[38vw] hidden lg:block pointer-events-none"
        style={{
          background: 'linear-gradient(to left, rgba(201,123,42,0.08) 0%, transparent 100%)',
          clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0% 100%)',
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 lg:px-16 py-32 w-full">
        <div className="max-w-2xl">

          {/* Tag */}
          <motion.p {...fadeUp(0.1)} className="section-tag text-amber mb-5">
            Thu mua tận nơi · TP.HCM
          </motion.p>

          {/* Heading */}
          <motion.h1 {...fadeUp(0.22)} className="font-display text-cream font-700 leading-[1.1] mb-6"
           style={{ fontSize: 'clamp(1.8rem, 4vw, 3.5rem)' }}
          >
            Thu Mua{' '}
            <span className="text-gradient italic">Các loại cửa gỗ, cửa 4 cánh gỗ</span>
            <br />& Các loại nhôm{' '}
            <span className="text-gradient italic">Xingfa, cửa cuốn</span>
          </motion.h1>

          {/* Sub */}
          <motion.p {...fadeUp(0.36)} className="font-body text-cream/75 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
            Chúng tôi thu mua toàn bộ nội thất đã qua sử dụng, cửa gỗ, cửa phòng gỗ , cửa 4 cánh gỗ, cửa cuốn, cửa nhôm Xingfa —
            với mức giá <strong className="text-gold font-600">cao nhất thị trường</strong>, nhanh gọn và uy tín.
          </motion.p>

          {/* Badges */}
          <motion.div {...fadeUp(0.46)} className="flex flex-wrap gap-3 mb-10">
            {BADGES.map((b) => (
              <span
                key={b}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-body font-600 tracking-wide"
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(232,168,62,0.4)',
                  color: '#F6EDD9',
                }}
              >
                <CheckCircle2 size={13} className="text-gold" />
                {b}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div {...fadeUp(0.56)} className="flex flex-wrap gap-4">
            <a
              href="#contact"
              onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="btn-primary text-base"
            >
              Báo Giá Ngay <ArrowRight size={17} />
            </a>
            <a
              href="tel:0328296013"
              className="btn-ghost text-base"
            >
              Gọi Ngay
            </a>
          </motion.div>
        </div>

        {/* ── Stats row ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.4, 0, 0.2, 1] }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden"
          style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(232,168,62,0.15)' }}
        >
          {[
            { num: '500+',   label: 'Đơn thu mua' },
            { num: '10+',    label: 'Năm kinh nghiệm' },
            { num: '100%',   label: 'Khách hàng hài lòng' },
            { num: '24h',    label: 'Phản hồi & định giá' },
          ].map(({ num, label }) => (
            <div
              key={label}
              className="px-6 py-5 text-center backdrop-blur-sm"
              style={{ background: 'rgba(44,26,14,0.45)' }}
            >
              <div className="stat-number">{num}</div>
              <p className="text-cream/60 text-xs font-body mt-1 tracking-wide">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-cream/40 text-xs font-body tracking-widest uppercase">Cuộn xuống</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          className="w-px h-8 rounded-full"
          style={{ background: 'linear-gradient(to bottom, rgba(232,168,62,0.6), transparent)' }}
        />
      </motion.div>
    </section>
  );
}
