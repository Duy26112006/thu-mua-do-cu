// Services.jsx – Các dịch vụ thu mua với ảnh thực tế lazy-load
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { DoorClosed, LayoutGrid, Package, ArrowRight } from 'lucide-react';
import {
  handleContactConversion,
  PHONE_NUMBER,
  PHONE_URL,
} from '../utils/googleAdsConversion';

const SERVICES = [
  {
    id:    1,
    icon:  <DoorClosed size={26} />,
    title: 'Cửa Gỗ Cũ',
    desc:  'Thu mua cửa gỗ, cửa 4 cánh, cửa phòng gỗ — nguyên khối hay đã qua sử dụng, tình trạng bất kỳ đều nhận.',
    img:   '/images/thuc-te/cua-go-4-canh-hoa-van-thuc-te.webp',
    imgAlt: 'Bộ cửa gỗ bốn cánh có hoa văn chạm nổi',
    tags:  ['Cửa 4 cánh gỗ', 'Cửa phòng gỗ', 'Cửa gỗ nguyên khối'],
    href:  '/thu-mua-cua-go-cu/',
  },
  {
    id:    2,
    icon:  <DoorClosed size={26} />,
    title: 'Cửa Nhôm Xingfa',
    desc: 'Thu mua cửa nhôm kính cũ, cửa nhôm Xingfa tháo dỡ, vách ngăn nhôm kính — còn mới hay đã qua sử dụng đều nhận.',
    img:   '/images/thuc-te/cua-nhom-kinh-xam-mat-tien-thuc-te.webp',
    imgAlt: 'Bộ cửa nhôm kính màu xám nhiều cánh',
    tags:  ['Xingfa', 'Cửa nhôm', 'Vách ngăn'],
    href:  '/thu-mua-cua-nhom-xingfa-cu/',
  },
  {
    id:    3,
    icon:  <LayoutGrid size={26} />,
    title: 'Cửa Nhôm Cũ',
    desc:  'Thu mua cửa nhôm kính cũ, khung nhôm và vách ngăn nhôm kính từ nhà ở, cửa hàng hoặc văn phòng.',
    img:   '/images/thuc-te/cua-nhom-kinh-trang-thuc-te.webp',
    imgAlt: 'Các bộ cửa nhôm kính trắng được xếp cạnh nhau',
    tags: ['Cửa nhôm kính cũ', 'Khung nhôm', 'Vách ngăn'],
    href: '/thu-mua-cua-nhom-cu/',
  },
  {
    id:    4,
    icon:  <Package size={26} />,
    title: 'Đồ Gỗ Cũ Khác',
    desc: 'Thu mua bàn ghế gỗ, tủ gỗ, đồ nội thất gỗ đã qua sử dụng — tình trạng bất kỳ, giá tốt nhất.',
    img:   'https://res.cloudinary.com/dhshucomg/image/upload/v1775361213/z7685166964291_ac0fe9e9a44e126fb86861e7383686a5_jvf1sk.jpg',
    imgAlt: 'Đồ gỗ cũ trong không gian nội thất',
    tags: ['Bàn ghế gỗ', 'Tủ gỗ', 'Nội thất gỗ'],
    href: '/#contact',
  },
];

// Hook: lazy load ảnh khi vào viewport
function LazyImage({ src, alt, className }) {
  const imgRef = useRef(null);
  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          img.src = img.dataset.src;
          img.onload = () => img.classList.add('loaded');
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    observer.observe(img);
    return () => observer.disconnect();
  }, []);

  return (
    <img
      ref={imgRef}
      data-src={src}
      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
      alt={alt}
      width="800"
      height="600"
      loading="lazy"
      decoding="async"
      className={className}
    />
  );
}

// Card component
function ServiceCard({ service, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.12 });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.4, 0, 0.2, 1] }}
      className="card-hover rounded-2xl overflow-hidden group"
      style={{
        background: '#fff',
        boxShadow: '0 4px 24px rgba(44,26,14,0.08)',
      }}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <LazyImage
          src={service.img}
          alt={service.imgAlt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Icon badge */}
        <div
          className="absolute top-4 left-4 w-10 h-10 rounded-xl flex items-center justify-center text-white"
          style={{ background: 'linear-gradient(135deg, #C97B2A, #E8A83E)' }}
        >
          {service.icon}
        </div>
      </div>

      {/* Body */}
      <div className="p-6">
        <h3 className="font-display text-walnut font-700 text-[1.4rem] mb-2 leading-tight">
          {service.title}
        </h3>
        <p className="font-body text-muted text-sm leading-relaxed mb-4">
          {service.desc}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-body font-500 px-3 py-1 rounded-full"
              style={{ background: 'var(--sand)', color: 'var(--walnut)' }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA link */}
        <a
          href={service.href}
          className="inline-flex items-center gap-1.5 text-sm font-body font-600 text-amber hover:text-walnut transition-colors duration-300 group/link"
        >
          {service.id <= 3 ? 'Xem chi tiết dịch vụ' : 'Gửi yêu cầu'}
          <ArrowRight size={15} className="group-hover/link:translate-x-1 transition-transform duration-300" />
        </a>
      </div>
    </motion.article>
  );
}

export default function Services() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="services" className="py-24 md:py-32" style={{ background: 'var(--cream)' }}>
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16">

        {/* ── Header ── */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-tag justify-center mb-4">Dịch Vụ Của Chúng Tôi</p>
          <h2
            className="font-display font-700 text-walnut mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
          >
            Chúng Tôi Thu Mua <span className="text-gradient italic">Tất Cả</span>
          </h2>
          <p className="font-body text-muted max-w-xl mx-auto text-base leading-relaxed">
            Từ cửa gỗ  sang trọng đến cửa nhôm Xingfa — chúng tôi định giá miễn phí,
            đến tận nơi xem hàng và thanh toán ngay trong ngày.
          </p>
        </motion.div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        {/* ── Bottom CTA banner ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 rounded-3xl overflow-hidden relative flex flex-col md:flex-row items-center justify-between gap-6 p-8 md:p-12"
          style={{ background: 'linear-gradient(135deg, var(--walnut) 0%, #4A2C18 100%)' }}
        >
          {/* Decorative circle */}
          <div
            className="absolute right-0 top-0 w-64 h-64 rounded-full pointer-events-none opacity-10"
            style={{ background: 'var(--gold)', transform: 'translate(30%, -30%)' }}
          />
          <div className="relative z-10">
            <p className="section-tag mb-3" style={{ color: 'var(--gold)' }}>Đặc biệt</p>
            <h3 className="font-display text-cream font-700 text-2xl md:text-3xl mb-2">
              Thanh lý toàn bộ? <span className="italic text-gradient">Gọi cho chúng tôi.</span>
            </h3>
            <p className="font-body text-cream/65 text-sm">
              Thu mua nguyên căn, văn phòng, khách sạn — giá tốt nhất, nhanh nhất.
            </p>
          </div>
          <a
            href={PHONE_URL}
            onClick={(event) => handleContactConversion(event, PHONE_URL)}
            className="btn-primary relative z-10 whitespace-nowrap text-sm flex-shrink-0"
          >
            📞 {PHONE_NUMBER}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
