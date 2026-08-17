// Hero.jsx – Banner chính với parallax background và animated text
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Phone } from 'lucide-react';
import {
  handleContactConversion,
  PHONE_NUMBER,
  PHONE_URL,
} from '../utils/googleAdsConversion';

// Ảnh nền chính
const HERO_IMG =
  'https://res.cloudinary.com/dhshucomg/image/upload/v1779519628/z7856807100962_3bcd34d39f175efe58f006b7b4658229_s2897y.jpg';

// Các điểm nổi bật
const BADGES = [
  'Khảo sát tận nơi',
  'Hỗ trợ tháo dỡ',
  'Thanh toán nhanh tại chỗ',
];

// Hiệu ứng xuất hiện từ dưới lên
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
  const bgRef = useRef(null);

  // Hiệu ứng ảnh nền khi cuộn trang
  useEffect(() => {
    const onScroll = () => {
      if (!bgRef.current) return;

      const offset = window.scrollY * 0.38;
      bgRef.current.style.transform = `translateY(${offset}px)`;
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden grain-overlay"
    >
      {/* Ảnh nền */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          ref={bgRef}
          src={HERO_IMG}
          alt="Thu mua cửa gỗ cũ, cửa nhôm kính cũ và cửa nhôm Xingfa tại TP.HCM"
          className="hero-bg absolute inset-0 w-full h-[120%] object-cover -top-[10%]"
          loading="eager"
          fetchPriority="high"
        />

        {/* Lớp phủ tối */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(115deg, rgba(44,26,14,0.94) 0%, rgba(44,26,14,0.78) 50%, rgba(44,26,14,0.55) 100%)',
          }}
        />
      </div>

      {/* Hiệu ứng trang trí bên phải */}
      <div
        className="absolute right-0 top-0 bottom-0 w-[38vw] hidden lg:block pointer-events-none"
        style={{
          background:
            'linear-gradient(to left, rgba(201,123,42,0.08) 0%, transparent 100%)',
          clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0% 100%)',
        }}
      />

      {/* Nội dung chính */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 lg:px-16 py-32 w-full">
        <div className="max-w-2xl">

          {/* Dòng nhỏ phía trên */}
          <motion.p
            {...fadeUp(0.1)}
            className="section-tag text-amber mb-5"
          >
            Thu mua cửa cũ tận nơi · TP.HCM
          </motion.p>

          {/* Tiêu đề chính */}
          <motion.h1
            {...fadeUp(0.22)}
            className="font-display text-cream font-700 leading-[1.1] mb-6"
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 3.5rem)',
            }}
          >
            Thu Mua{' '}
            <span className="text-gradient italic">
              Cửa Gỗ Cũ, Cửa Nhôm Kính Cũ
            </span>
            <br />
            & Cửa Nhôm Xingfa Cũ{' '}
            <span className="text-gradient italic">
              Tại TP.HCM
            </span>
          </motion.h1>

          {/* Mô tả */}
          <motion.p
            {...fadeUp(0.36)}
            className="font-body text-cream/75 text-base md:text-lg leading-relaxed mb-8 max-w-xl"
          >
            Nhận thu mua cửa gỗ cũ, cửa nhôm kính cũ và cửa nhôm Xingfa cũ
            tại TP.HCM. Khảo sát tận nơi, hỗ trợ tháo dỡ và thanh toán nhanh
            tại chỗ.
          </motion.p>

          {/* Điểm nổi bật */}
          <motion.div
            {...fadeUp(0.46)}
            className="flex flex-wrap gap-3 mb-10"
          >
            {BADGES.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-body font-600 tracking-wide"
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

          {/* Nút hành động */}
          <motion.div
            {...fadeUp(0.56)}
            className="flex flex-wrap gap-4"
          >
            {/* Nút kéo xuống phần liên hệ */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();

                document
                  .querySelector('#contact')
                  ?.scrollIntoView({
                    behavior: 'smooth',
                  });
              }}
              className="btn-primary text-base"
            >
              Báo Giá Ngay
              <ArrowRight size={17} />
            </a>

            <a
              href={PHONE_URL}
              onClick={(event) => handleContactConversion(event, PHONE_URL)}
              className="btn-ghost text-base inline-flex items-center gap-2"
            >
              <Phone size={17} />
              Gọi Ngay {PHONE_NUMBER}
            </a>
          </motion.div>
        </div>

        {/* Thông tin nổi bật */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.7,
            ease: [0.4, 0, 0.2, 1],
          }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden"
          style={{
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(232,168,62,0.15)',
          }}
        >
          {[
            {
              num: '500+',
              label: 'Đơn thu mua',
            },
            {
              num: '10+',
              label: 'Năm kinh nghiệm',
            },
            {
              num: '100%',
              label: 'Khách hàng hài lòng',
            },
            {
              num: '24h',
              label: 'Phản hồi & định giá',
            },
          ].map(({ num, label }) => (
            <div
              key={label}
              className="px-6 py-5 text-center backdrop-blur-sm"
              style={{
                background: 'rgba(44,26,14,0.45)',
              }}
            >
              <div className="stat-number">
                {num}
              </div>

              <p className="text-cream/60 text-xs font-body mt-1 tracking-wide">
                {label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Chỉ dẫn cuộn xuống */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.2,
          duration: 0.6,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-cream/40 text-xs font-body tracking-widest uppercase">
          Cuộn xuống
        </span>

        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.6,
            ease: 'easeInOut',
          }}
          className="w-px h-8 rounded-full"
          style={{
            background:
              'linear-gradient(to bottom, rgba(232,168,62,0.6), transparent)',
          }}
        />
      </motion.div>
    </section>
  );
}
