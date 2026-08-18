// Header.jsx – Sticky navigation với logo, menu, nút CTA
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, Phone } from 'lucide-react';
import {
  handleContactConversion,
  PHONE_NUMBER,
  PHONE_URL,
} from '../utils/googleAdsConversion';

const NAV_LINKS = [
  { label: 'Trang chủ',  href: '/#hero' },
  { label: 'Quy trình',  href: '/#process' },
  { label: 'Liên hệ',    href: '/#contact' },
];

const SERVICE_LINKS = [
  { label: 'Thu mua cửa gỗ cũ', href: '/thu-mua-cua-go-cu/' },
  { label: 'Thu mua cửa nhôm cũ', href: '/thu-mua-cua-nhom-cu/' },
  { label: 'Thu mua cửa nhôm Xingfa cũ', href: '/thu-mua-cua-nhom-xingfa-cu/' },
];

export default function Header({ forceSolid = false }) {
  const [scrolled,    setScrolled]    = useState(false);
  const [mobileOpen,  setMobileOpen]  = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const desktopServicesRef = useRef(null);

  // Đổi nền header khi scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Khóa scroll khi menu mobile mở
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    document.body.classList.toggle('mobile-menu-open', mobileOpen);
    if (!mobileOpen) setMobileServicesOpen(false);
    return () => {
      document.body.style.overflow = '';
      document.body.classList.remove('mobile-menu-open');
    };
  }, [mobileOpen]);

  useEffect(() => {
    const closeOnOutsideClick = (event) => {
      if (!desktopServicesRef.current?.contains(event.target)) {
        setDesktopServicesOpen(false);
      }
    };
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setDesktopServicesOpen(false);
    };

    document.addEventListener('mousedown', closeOnOutsideClick);
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.removeEventListener('mousedown', closeOnOutsideClick);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, []);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
    setDesktopServicesOpen(false);
    const hash = href.includes('#') ? `#${href.split('#')[1]}` : '';

    if (window.location.pathname === '/' && hash) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    window.location.href = href;
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled || forceSolid
            ? 'bg-walnut/95 backdrop-blur-md shadow-warm'
            : 'bg-transparent'
        }`}
        style={{ '--tw-bg-opacity': 1 }}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16 flex items-center justify-between h-16 md:h-20">

          {/* ── Logo ── */}
          <button
            onClick={() => handleNavClick('/#hero')}
            className="flex items-center gap-3 group"
          >
            {/* Icon logo: chữ TM cách điệu */}
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-display font-700 text-lg"
              style={{ background: 'linear-gradient(135deg, #C97B2A, #E8A83E)' }}
            >
              DĐ
            </div>
            <div className="leading-tight">
              <span className="block font-display font-600 text-cream text-[1.1rem] leading-none">
                ĐỒ CŨ DUY ĐÔNG
              </span>
              <span className="block text-[0.65rem] font-body font-400 tracking-widest uppercase text-amber opacity-80">
                Đồ gỗ · Các loại nhôm , cửa cuốn 
              </span>
            </div>
          </button>

          {/* ── Desktop Nav ── */}
          <nav className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => handleNavClick(NAV_LINKS[0].href)}
              className="group relative text-sm font-body font-500 tracking-wide text-cream/80 transition-colors duration-300 hover:text-gold"
            >
              {NAV_LINKS[0].label}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </button>

            <div
              ref={desktopServicesRef}
              className="relative"
              onMouseEnter={() => setDesktopServicesOpen(true)}
              onMouseLeave={() => setDesktopServicesOpen(false)}
            >
              <button
                type="button"
                aria-expanded={desktopServicesOpen}
                aria-haspopup="menu"
                onClick={() => setDesktopServicesOpen((open) => !open)}
                className="group relative inline-flex items-center gap-1.5 text-sm font-body font-500 tracking-wide text-cream/80 transition-colors duration-300 hover:text-gold"
              >
                Thu mua cửa cũ
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-200 ${desktopServicesOpen ? 'rotate-180' : ''}`}
                />
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </button>

              <AnimatePresence>
                {desktopServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-1/2 top-full w-[300px] -translate-x-1/2 pt-3"
                  >
                    <div
                      role="menu"
                      className="overflow-hidden rounded-2xl border border-amber/15 bg-[#FFF7F5] p-2 shadow-[0_18px_45px_rgba(26,10,10,0.2)]"
                    >
                      {SERVICE_LINKS.map((service) => (
                        <a
                          key={service.href}
                          href={service.href}
                          role="menuitem"
                          onClick={() => setDesktopServicesOpen(false)}
                          className="group/item flex items-center justify-between gap-3 rounded-xl px-4 py-3.5 text-sm font-semibold text-walnut transition-colors duration-200 hover:bg-sand hover:text-amber"
                        >
                          <span>{service.label}</span>
                          <span aria-hidden="true" className="text-amber transition-transform group-hover/item:translate-x-0.5">›</span>
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {NAV_LINKS.slice(1).map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="relative text-cream/80 hover:text-gold text-sm font-body font-500 tracking-wide transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </nav>

          {/* ── CTA ── */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={PHONE_URL}
              onClick={(event) => handleContactConversion(event, PHONE_URL)}
              className="flex items-center gap-2 text-sm font-body font-600 text-cream/90 hover:text-gold transition-colors duration-300 cursor-pointer"
            >
              <Phone size={15} className="text-amber" />
              {PHONE_NUMBER}
            </a>
            <button
              onClick={() => handleNavClick('#contact')}
              className="btn-primary text-sm"
            >
              Báo Giá Ngay
            </button>
          </div>

          {/* ── Mobile hamburger ── */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-cream p-1"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-40 bg-walnut/70 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.38, ease: [0.4, 0, 0.2, 1] }}
              className="fixed right-0 top-0 bottom-0 z-50 w-72 flex flex-col"
              style={{ background: 'var(--walnut)' }}
            >
              {/* Close */}
              <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-white/10">
                <span className="font-display text-cream text-xl font-600">Menu</span>
                <button onClick={() => setMobileOpen(false)} className="text-cream/70 hover:text-cream">
                  <X size={22} />
                </button>
              </div>

              {/* Links */}
              <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-6">
                <motion.button
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => handleNavClick(NAV_LINKS[0].href)}
                  className="rounded-xl px-4 py-3.5 text-left text-base font-body font-500 text-cream/85 transition-all duration-200 hover:bg-white/5 hover:text-gold"
                >
                  {NAV_LINKS[0].label}
                </motion.button>

                <motion.div
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08, duration: 0.3 }}
                >
                  <button
                    type="button"
                    aria-expanded={mobileServicesOpen}
                    onClick={() => setMobileServicesOpen((open) => !open)}
                    className="flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-left text-base font-body font-500 text-cream/85 transition-all duration-200 hover:bg-white/5 hover:text-gold"
                  >
                    <span>Thu mua cửa cũ</span>
                    <ChevronDown
                      size={17}
                      className={`text-amber transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.24 }}
                        className="overflow-hidden"
                      >
                        <div className="ml-3 space-y-1 border-l border-amber/30 py-1 pl-3">
                          {SERVICE_LINKS.map((service) => (
                            <a
                              key={service.href}
                              href={service.href}
                              onClick={() => {
                                setMobileOpen(false);
                                setMobileServicesOpen(false);
                              }}
                              className="block rounded-xl px-3 py-3 text-sm leading-5 text-cream/75 transition-colors hover:bg-white/5 hover:text-gold"
                            >
                              {service.label}
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {NAV_LINKS.slice(1).map((link, i) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 * (i + 2), duration: 0.3 }}
                    onClick={() => handleNavClick(link.href)}
                    className="rounded-xl px-4 py-3.5 text-left text-base font-body font-500 text-cream/85 transition-all duration-200 hover:bg-white/5 hover:text-gold"
                  >
                    {link.label}
                  </motion.button>
                ))}
              </nav>

              {/* Bottom CTA */}
              <div className="p-6 border-t border-white/10 space-y-3">
                <a
                  href={PHONE_URL}
                  onClick={(event) => handleContactConversion(event, PHONE_URL)}
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full border border-amber/60 text-amber font-body font-600 text-sm cursor-pointer"
                >
                  <Phone size={15} /> {PHONE_NUMBER}
                </a>
                <button
                  onClick={() => handleNavClick('#contact')}
                  className="btn-primary w-full justify-center text-sm"
                >
                  Báo Giá Miễn Phí
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
