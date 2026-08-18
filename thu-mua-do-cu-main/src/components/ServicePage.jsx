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
      <section
        data-service-hero
        className="relative overflow-hidden border-b border-amber/10 pb-12 pt-24 md:pb-20 md:pt-32"
        style={{ background: '#FFF7F5' }}
      >
        <div className="pointer-events-none absolute -right-24 top-20 h-72 w-72 rounded-full bg-sand/70 blur-3xl md:h-96 md:w-96" />
        <div className="pointer-events-none absolute -left-28 bottom-0 h-64 w-64 rounded-full bg-white blur-3xl" />

        <div className="relative z-10 mx-auto max-w-[1400px] px-5 md:px-10 lg:px-12 xl:px-14">
          <nav aria-label="Breadcrumb" className="mb-5 overflow-x-auto text-xs text-muted sm:text-sm md:mb-8">
            <ol className="flex min-w-max items-center gap-2">
              <li>
                <a href="/" className="inline-flex items-center gap-1.5 transition-colors hover:text-amber">
                  <Home size={14} /> Trang chủ
                </a>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="font-semibold text-walnut">{service.label}</li>
            </ol>
          </nav>

          <div className="grid items-center gap-7 lg:grid-cols-2 lg:gap-14 xl:gap-20">
            <div>
              <p className="section-tag mb-3 md:mb-5">{service.eyebrow}</p>
              <h1
                className="mb-4 font-display font-700 leading-[1.02] text-walnut md:mb-6"
                style={{ fontSize: 'clamp(2.375rem, 10vw, 4rem)' }}
              >
                {service.h1}
              </h1>
              <p className="max-w-2xl font-body text-[15px] leading-6 text-muted sm:text-base md:text-lg md:leading-relaxed lg:text-[18px]">
                {service.intro}
              </p>

              <div className="mt-5 grid gap-3 min-[400px]:grid-cols-2 sm:mt-8 sm:flex sm:flex-row sm:flex-wrap">
                <a
                  href={PHONE_URL}
                  onClick={(event) => handleContactConversion(event, PHONE_URL)}
                  className="btn-primary justify-center px-5 sm:justify-start sm:px-7"
                >
                  <Phone size={17} /> Gọi {PHONE_NUMBER}
                </a>
                <a
                  href={ZALO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(event) => handleContactConversion(event, ZALO_URL, { openInNewTab: true })}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0068FF] px-5 py-3.5 text-sm font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5 sm:px-7"
                >
                  <MessageCircle size={17} /> Gửi ảnh qua Zalo
                </a>
              </div>
            </div>

            <figure className="aspect-[4/3] overflow-hidden rounded-[22px] border border-white bg-white shadow-[0_22px_60px_rgba(94,34,34,0.16)] md:rounded-[28px] lg:h-[clamp(400px,32vw,500px)] lg:aspect-auto">
              <img
                src={service.image}
                alt={service.imageAlt}
                width="960"
                height="720"
                className="h-full w-full object-contain"
                fetchPriority="high"
                decoding="async"
              />
            </figure>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 lg:py-28" style={{ background: 'var(--cream)' }}>
        <div className="mx-auto grid max-w-[1400px] gap-10 px-5 md:px-10 lg:grid-cols-2 lg:gap-20 lg:px-12 xl:px-14">
          <div>
            <p className="section-tag mb-4">Thông tin dịch vụ</p>
            <h2 className="mb-6 font-display text-3xl font-700 text-walnut md:text-4xl lg:text-[clamp(2.25rem,3vw,2.875rem)]">
              {service.overviewTitle}
            </h2>
            <div className="space-y-4 font-body text-sm leading-7 text-muted md:text-base lg:text-[17px] lg:leading-8">
              {service.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>

          <figure className="aspect-[4/3] overflow-hidden rounded-3xl bg-white shadow-warm lg:aspect-auto lg:min-h-[26rem]">
            <img
              src={service.overviewImage}
              alt={service.overviewImageAlt}
              width="960"
              height="720"
              className="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
              onLoad={(event) => event.currentTarget.classList.add('loaded')}
            />
          </figure>
        </div>
      </section>

      <section className="py-16 md:py-24 lg:py-28" style={{ background: 'var(--sand)' }}>
        <div className="mx-auto max-w-[1400px] px-5 md:px-10 lg:px-12 xl:px-14">
          <div className="mb-10 max-w-2xl">
            <p className="section-tag mb-4">Hạng mục tiếp nhận</p>
            <h2 className="font-display text-3xl font-700 text-walnut md:text-4xl lg:text-[clamp(2.25rem,3vw,2.875rem)]">
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
                className="overflow-hidden rounded-2xl bg-white shadow-card"
              >
                <div className="aspect-[4/3] overflow-hidden bg-sand">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    width="800"
                    height="600"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                    decoding="async"
                    onLoad={(event) => event.currentTarget.classList.add('loaded')}
                  />
                </div>
                <div className="p-6 lg:p-8">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-sand text-amber">
                    <CheckCircle2 size={20} />
                  </div>
                  <h3 className="mb-2 font-display text-xl font-700 text-walnut lg:text-2xl">{item.title}</h3>
                  <p className="font-body text-sm leading-6 text-muted lg:text-base lg:leading-7">{item.text}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 lg:py-28" style={{ background: 'var(--cream)' }}>
        <div className="mx-auto max-w-[1400px] px-5 md:px-10 lg:px-12 xl:px-14">
          <div className="mb-10 max-w-2xl">
            <p className="section-tag mb-4">Ảnh thực tế</p>
            <h2 className="font-display text-3xl font-700 text-walnut md:text-4xl lg:text-[clamp(2.25rem,3vw,2.875rem)]">{service.galleryTitle}</h2>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {service.gallery.map((image) => (
              <figure key={image.src} className="overflow-hidden rounded-2xl bg-white shadow-card">
                <div className="aspect-[4/3] overflow-hidden bg-sand">
                  <img
                    src={image.src}
                    alt={image.alt}
                    width="800"
                    height="600"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                    decoding="async"
                    onLoad={(event) => event.currentTarget.classList.add('loaded')}
                  />
                </div>
                <figcaption className="px-5 py-4 font-body text-sm font-semibold text-walnut">{image.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 lg:py-28" style={{ background: 'var(--sand)' }}>
        <div className="mx-auto grid max-w-[1400px] gap-10 px-5 md:px-10 lg:grid-cols-2 lg:gap-20 lg:px-12 xl:px-14">
          <div>
            <p className="section-tag mb-4">Chuẩn bị thông tin</p>
            <h2 className="mb-6 font-display text-3xl font-700 text-walnut md:text-4xl lg:text-[clamp(2.25rem,3vw,2.875rem)]">
              {service.evaluationTitle}
            </h2>
            <ul className="space-y-4">
              {service.evaluation.map((item) => (
                <li key={item} className="flex items-start gap-3 font-body text-sm leading-6 text-muted md:text-base lg:text-[17px] lg:leading-7">
                  <CheckCircle2 size={18} className="mt-1 flex-shrink-0 text-amber" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="rounded-3xl p-7 text-cream md:p-10" style={{ background: 'var(--walnut)' }}>
            <p className="section-tag mb-4">Liên hệ trực tiếp</p>
            <h2 className="mb-4 font-display text-3xl font-700 lg:text-[clamp(2.25rem,3vw,2.875rem)]">Gửi hình ảnh để trao đổi hiện trạng</h2>
            <p className="mb-7 font-body text-sm leading-6 text-cream/70 lg:text-base lg:leading-7">
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

      <section className="py-16 md:py-24 lg:py-28" style={{ background: 'var(--cream)' }}>
        <div className="mx-auto max-w-5xl px-5 md:px-10">
          <div className="mb-10 text-center">
            <p className="section-tag mb-4 justify-center">Câu hỏi thường gặp</p>
            <h2 className="font-display text-3xl font-700 text-walnut md:text-4xl lg:text-[clamp(2.25rem,3vw,2.875rem)]">
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
                <p className="mt-4 border-t border-sand pt-4 font-body text-sm leading-6 text-muted lg:text-base lg:leading-7">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24" style={{ background: 'var(--sand)' }}>
        <div className="mx-auto max-w-[1400px] px-5 md:px-10 lg:px-12 xl:px-14">
          <h2 className="mb-7 font-display text-3xl font-700 text-walnut lg:text-[clamp(2.25rem,3vw,2.875rem)]">Dịch vụ liên quan</h2>
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
