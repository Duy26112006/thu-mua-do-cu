import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Home,
  MessageCircle,
  Phone,
} from 'lucide-react';
import { servicePages } from '../data/servicePages';
import {
  handleContactConversion,
  PHONE_NUMBER,
  PHONE_URL,
  ZALO_URL,
} from '../utils/googleAdsConversion';

export default function ServicePage({ service }) {
  const relatedServices = Object.values(servicePages).filter(
    ({ slug }) => slug !== service.slug,
  );

  return (
    <>
      <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24" style={{ background: 'var(--walnut)' }}>
        <div className="absolute inset-0">
          <img
            src={service.image}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover opacity-25"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-walnut via-walnut/90 to-walnut/60" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-10 lg:px-16">
          <nav aria-label="Breadcrumb" className="mb-8 overflow-x-auto text-sm text-cream/65">
            <ol className="flex min-w-max items-center gap-2">
              <li>
                <a href="/" className="inline-flex items-center gap-1.5 transition-colors hover:text-gold">
                  <Home size={14} /> Trang chủ
                </a>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-cream">{service.label}</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <p className="section-tag mb-5">{service.eyebrow}</p>
            <h1
              className="mb-6 font-display font-700 leading-tight text-cream"
              style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
            >
              {service.h1}
            </h1>
            <p className="max-w-2xl font-body text-base leading-relaxed text-cream/75 md:text-lg">
              {service.intro}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={PHONE_URL}
                onClick={(event) => handleContactConversion(event, PHONE_URL)}
                className="btn-primary justify-center sm:justify-start"
              >
                <Phone size={17} /> Gọi {PHONE_NUMBER}
              </a>
              <a
                href={ZALO_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(event) => handleContactConversion(event, ZALO_URL, { openInNewTab: true })}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0068FF] px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                <MessageCircle size={17} /> Gửi ảnh qua Zalo
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ background: 'var(--cream)' }}>
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:px-16">
          <div>
            <p className="section-tag mb-4">Thông tin dịch vụ</p>
            <h2 className="mb-6 font-display text-3xl font-700 text-walnut md:text-4xl">
              {service.overviewTitle}
            </h2>
            <div className="space-y-4 font-body text-sm leading-7 text-muted md:text-base">
              {service.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>

          <figure className="overflow-hidden rounded-3xl bg-white shadow-warm">
            <img
              src={service.image}
              alt={service.imageAlt}
              className="h-72 w-full object-cover sm:h-96 lg:h-full"
              loading="lazy"
              onLoad={(event) => event.currentTarget.classList.add('loaded')}
            />
          </figure>
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ background: 'var(--sand)' }}>
        <div className="mx-auto max-w-7xl px-5 md:px-10 lg:px-16">
          <div className="mb-10 max-w-2xl">
            <p className="section-tag mb-4">Hạng mục tiếp nhận</p>
            <h2 className="font-display text-3xl font-700 text-walnut md:text-4xl">
              {service.itemsTitle}
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {service.items.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-2xl bg-white p-6 shadow-card"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-sand text-amber">
                  <CheckCircle2 size={20} />
                </div>
                <h3 className="mb-2 font-display text-xl font-700 text-walnut">{item.title}</h3>
                <p className="font-body text-sm leading-6 text-muted">{item.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ background: 'var(--cream)' }}>
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-10 lg:grid-cols-2 lg:gap-16 lg:px-16">
          <div>
            <p className="section-tag mb-4">Chuẩn bị thông tin</p>
            <h2 className="mb-6 font-display text-3xl font-700 text-walnut md:text-4xl">
              {service.evaluationTitle}
            </h2>
            <ul className="space-y-4">
              {service.evaluation.map((item) => (
                <li key={item} className="flex items-start gap-3 font-body text-sm leading-6 text-muted md:text-base">
                  <CheckCircle2 size={18} className="mt-1 flex-shrink-0 text-amber" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="rounded-3xl p-7 text-cream md:p-10" style={{ background: 'var(--walnut)' }}>
            <p className="section-tag mb-4">Liên hệ trực tiếp</p>
            <h2 className="mb-4 font-display text-3xl font-700">Gửi hình ảnh để trao đổi hiện trạng</h2>
            <p className="mb-7 font-body text-sm leading-6 text-cream/70">
              Gửi ảnh, số lượng và địa chỉ qua Zalo hoặc gọi trực tiếp. Thông tin rõ ràng giúp việc xem xét và sắp xếp khảo sát thuận tiện hơn.
            </p>
            <a
              href={ZALO_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(event) => handleContactConversion(event, ZALO_URL, { openInNewTab: true })}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0068FF] px-6 py-3.5 font-body text-sm font-semibold text-white sm:w-auto"
            >
              <MessageCircle size={17} /> Zalo {PHONE_NUMBER}
            </a>
          </aside>
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ background: 'var(--sand)' }}>
        <div className="mx-auto max-w-4xl px-5 md:px-10">
          <div className="mb-10 text-center">
            <p className="section-tag mb-4 justify-center">Câu hỏi thường gặp</p>
            <h2 className="font-display text-3xl font-700 text-walnut md:text-4xl">
              FAQ về {service.label.toLowerCase()}
            </h2>
          </div>
          <div className="space-y-4">
            {service.faq.map(({ question, answer }) => (
              <details key={question} className="group rounded-2xl bg-white p-5 shadow-card md:p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-body font-semibold text-walnut">
                  <span>{question}</span>
                  <ChevronDown size={18} className="flex-shrink-0 text-amber transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-4 border-t border-sand pt-4 font-body text-sm leading-6 text-muted">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20" style={{ background: 'var(--cream)' }}>
        <div className="mx-auto max-w-7xl px-5 md:px-10 lg:px-16">
          <h2 className="mb-7 font-display text-3xl font-700 text-walnut">Dịch vụ liên quan</h2>
          <div className="grid gap-5 md:grid-cols-2">
            {relatedServices.map((related) => (
              <a
                key={related.slug}
                href={`/${related.slug}/`}
                className="group flex items-center justify-between gap-4 rounded-2xl bg-white p-6 shadow-card transition-transform hover:-translate-y-1"
              >
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-amber">Xem thêm</p>
                  <h3 className="font-display text-xl font-700 text-walnut">{related.label}</h3>
                </div>
                <ArrowRight size={20} className="flex-shrink-0 text-amber transition-transform group-hover:translate-x-1" />
              </a>
            ))}
          </div>
          <a href="/#services" className="mt-7 inline-flex items-center gap-2 font-body text-sm font-semibold text-amber hover:text-walnut">
            Xem tất cả dịch vụ trên trang chủ <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </>
  );
}
