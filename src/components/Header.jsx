// Header.jsx – Sticky navigation với logo, menu, nút CTA
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Trang chủ',  href: '#hero' },
  { label: 'Dịch vụ',    href: '#services' },
  { label: 'Quy trình',  href: '#process' },
  { label: 'Liên hệ',    href: '#contact' },
];

export default function Header() {
  const [scrolled,    setScrolled]    = useState(false);
  const [mobileOpen,  setMobileOpen]  = useState(false);

  // Đổi nền header khi scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Khóa scroll khi menu mobile mở
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? 'bg-walnut/95 backdrop-blur-md shadow-warm'
            : 'bg-transparent'
        }`}
        style={{ '--tw-bg-opacity': 1 }}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16 flex items-center justify-between h-16 md:h-20">

          {/* ── Logo ── */}
          <button
            onClick={() => handleNavClick('#hero')}
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
                Đồ gỗ · Các loại nhôm , cửa cuốn s
              </span>
            </div>
          </button>

          {/* ── Desktop Nav ── */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
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
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:0328296013"
              className="flex items-center gap-2 text-sm font-body font-600 text-cream/90 hover:text-gold transition-colors duration-300"
            >
              <Phone size={15} className="text-amber" />
              0328296013
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
            className="md:hidden text-cream p-1"
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
              <nav className="flex flex-col gap-1 px-4 pt-6 flex-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 * i, duration: 0.3 }}
                    onClick={() => handleNavClick(link.href)}
                    className="text-left px-4 py-3.5 rounded-xl text-cream/85 hover:text-gold hover:bg-white/5 font-body font-500 text-base transition-all duration-200"
                  >
                    {link.label}
                  </motion.button>
                ))}
              </nav>

              {/* Bottom CTA */}
              <div className="p-6 border-t border-white/10 space-y-3">
                <a
                  href="tel:0328296013"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full border border-amber/60 text-amber font-body font-600 text-sm"
                >
                  <Phone size={15} /> 0328296013
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
