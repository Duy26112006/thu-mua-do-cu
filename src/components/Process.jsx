// Process.jsx – Quy trình 4 bước với animation cuộn
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MessageCircle, ClipboardList, Truck, BadgeCheck } from 'lucide-react';

const STEPS = [
  {
    num:  '01',
    icon: <MessageCircle size={28} />,
    title: 'Liên hệ & Mô tả',
    desc:  'Gọi điện hoặc nhắn tin Zalo, gửi ảnh đồ cũ cần thanh lý. Hoàn toàn miễn phí, không ràng buộc.',
  },
  {
    num:  '02',
    icon: <ClipboardList size={28} />,
    title: 'Định giá nhanh',
    desc:  'Chúng tôi định giá trong vòng 30 phút – trực tiếp tại nhà hoặc qua hình ảnh bạn gửi.',
  },
  {
    num:  '03',
    icon: <Truck size={28} />,
    title: 'Đến tận nơi vận chuyển',
    desc:  'Đội ngũ chuyên nghiệp đến tháo dỡ, bốc xếp hoàn toàn miễn phí. Không phát sinh phí ẩn.',
  },
  {
    num:  '04',
    icon: <BadgeCheck size={28} />,
    title: 'Thanh toán ngay',
    desc:  'Tiền mặt hoặc chuyển khoản ngay tại chỗ sau khi bàn giao xong. Nhanh, gọn, uy tín.',
  },
];

// Unsplash ảnh minh họa bên trái
const PROCESS_IMG = 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=700&q=80&auto=format&fit=crop';

function StepItem({ step, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.13, ease: [0.4, 0, 0.2, 1] }}
      className="flex items-start gap-5 group"
    >
      {/* Number + icon stack */}
      <div className="flex-shrink-0 flex flex-col items-center">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-2 transition-all duration-400 group-hover:scale-105"
          style={{ background: 'linear-gradient(135deg, var(--amber), var(--gold))', boxShadow: '0 6px 20px rgba(201,123,42,0.3)' }}
        >
          {step.icon}
        </div>
        {/* Connector line */}
        {index < STEPS.length - 1 && (
          <div className="w-px flex-1 min-h-[2.5rem]" style={{ background: 'linear-gradient(to bottom, var(--amber), transparent)' }} />
        )}
      </div>

      {/* Content */}
      <div className="pb-8">
        <div className="flex items-center gap-2 mb-1">
          <span
            className="font-display font-700 text-3xl leading-none"
            style={{ color: 'rgba(201,123,42,0.18)' }}
          >
            {step.num}
          </span>
          <h3 className="font-display text-walnut font-700 text-xl">{step.title}</h3>
        </div>
        <p className="font-body text-muted text-sm leading-relaxed">{step.desc}</p>
      </div>
    </motion.div>
  );
}

export default function Process() {
  const { ref: headRef, inView: headInView } = useInView({ triggerOnce: true });
  const { ref: imgRef,  inView: imgInView  } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      id="process"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: 'var(--sand)' }}
    >
      {/* Decorative blob */}
      <div
        className="absolute -left-32 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'rgba(201,123,42,0.07)' }}
      />

      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ── Left: Image ── */}
          <motion.div
            ref={imgRef}
            initial={{ opacity: 0, x: -50 }}
            animate={imgInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-warm">
              <img
                src={PROCESS_IMG}
                alt="Quy trình thu mua đồ cũ"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Overlay gradient */}
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(44,26,14,0.5) 0%, transparent 60%)' }}
              />
            </div>

            {/* Floating trust badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={imgInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-6 -right-4 md:-right-8 rounded-2xl p-5 shadow-hover"
              style={{
                background: 'var(--walnut)',
                border: '1px solid rgba(232,168,62,0.25)',
              }}
            >
              <p className="font-display text-gold font-700 text-4xl leading-none">10+</p>
              <p className="font-body text-cream/70 text-xs mt-1 leading-tight">
                Năm kinh nghiệm<br />thu mua đồ cũ
              </p>
            </motion.div>

            {/* Decorative corner frame */}
            <div
              className="absolute -top-4 -left-4 w-20 h-20 rounded-tl-3xl pointer-events-none"
              style={{ border: '3px solid var(--amber)', borderRight: 'none', borderBottom: 'none', opacity: 0.6 }}
            />
          </motion.div>

          {/* ── Right: Steps ── */}
          <div>
            <motion.div
              ref={headRef}
              initial={{ opacity: 0, y: 25 }}
              animate={headInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <p className="section-tag mb-4">Quy Trình Thu Mua</p>
              <h2
                className="font-display font-700 text-walnut mb-4"
                style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}
              >
                Chỉ <span className="text-gradient italic">4 Bước</span> Đơn Giản
              </h2>
              <p className="font-body text-muted text-sm leading-relaxed">
                Quy trình minh bạch, rõ ràng — bạn nhận tiền ngay trong ngày mà không cần lo lắng bất cứ điều gì.
              </p>
            </motion.div>

            {/* Steps list */}
            <div>
              {STEPS.map((step, i) => (
                <StepItem key={step.num} step={step} index={i} />
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-4"
            >
              <a
                href="#contact"
                onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="btn-primary"
              >
                Bắt Đầu Ngay
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
