// Services.jsx – Các dịch vụ thu mua với ảnh lazy-load từ Unsplash
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Sofa, DoorClosed, LayoutGrid, Package, ArrowRight } from 'lucide-react';

// Ảnh Unsplash theo từng dịch vụ (furniture, aluminum, living room, misc)
const SERVICES = [
  {
    id:    1,
    icon:  <Sofa size={26} />,
    title: 'Nội Thất Gỗ & Bàn Ghế Gỗ',
    desc:  'Thu mua cửa gỗ, bàn ghế, tủ quần áo, giường, kệ sách và mọi loại nội thất gỗ đã qua sử dụng — tình trạng bất kỳ.',
    img:   'https://res.cloudinary.com/dhshucomg/image/upload/v1775361214/z7685167018639_b702c3bf01416a6db116b5938f9ad4d7_jrjkgo.jpg',
    tags:  ['Bàn ghế gỗ ', 'Tủ', 'Bàn ghế', 'Giường'],
  },
  {
    id:    2,
    icon:  <DoorClosed size={26} />,
    title: 'Cửa Nhôm Xingfa',
    desc:  'Chuyên thu mua cửa nhôm Xingfa tháo dỡ, cửa nhôm, vách ngăn nhôm — còn mới hay đã qua sử dụng đều được.',
    img:   'https://res.cloudinary.com/dhshucomg/image/upload/v1775361213/z7685167016021_2faea2a1c3d0922c86f0d0c559215ac1_j9zzpo.jpg',
    tags:  ['Xingfa', 'Cửa nhôm', 'Vách ngăn'],
  },
  {
    id:    3,
    icon:  <LayoutGrid size={26} />,
    title: 'Cửa cuốn ',
    desc:  'Thu mua cửa sắt , cửa cuốn cũ , và thiết bị thanh lý công ty.',
    img:   'https://res.cloudinary.com/dhshucomg/image/upload/v1775361213/z7685166985411_c9b327cc4951283066058a56ad19e277_e1t4tv.jpg',
    tags:  ['Cửa cuốn ', 'Cửa sắt ', 'Tủ gỗ '],
  },
  {
    id:    4,
    icon:  <Package size={26} />,
    title: 'Đồ Điện Lạnh & Gia Dụng',
    desc:  'Máy lạnh, tủ lạnh, máy giặt và các thiết bị gia dụng còn hoạt động — thu mua với giá hợp lý và nhanh chóng.',
    img:   'https://res.cloudinary.com/dhshucomg/image/upload/v1775361213/z7685166964291_ac0fe9e9a44e126fb86861e7383686a5_jvf1sk.jpg',
    tags:  ['Máy lạnh', 'Tủ lạnh', 'Gia dụng'],
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
      loading="lazy"
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
          alt={service.title}
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
          href="#contact"
          onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
          className="inline-flex items-center gap-1.5 text-sm font-body font-600 text-amber hover:text-walnut transition-colors duration-300 group/link"
        >
          Gửi yêu cầu
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
            href="tel:0328296013"
            className="btn-primary relative z-10 whitespace-nowrap text-sm flex-shrink-0"
          >
            📞 0328296013
          </a>
        </motion.div>
      </div>
    </section>
  );
}
