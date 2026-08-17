// Footer.jsx – Footer đầy đủ với link, thông tin, copyright
import { Phone, MessageSquare, MapPin, ChevronRight } from 'lucide-react';
import {
  handleContactConversion,
  PHONE_NUMBER,
  PHONE_URL,
  ZALO_URL,
} from '../utils/googleAdsConversion';

const SERVICES_LIST = [
  { label: 'Thu mua cửa gỗ cũ', href: '/thu-mua-cua-go-cu/' },
  { label: 'Thu mua cửa nhôm cũ', href: '/thu-mua-cua-nhom-cu/' },
  { label: 'Thu mua cửa nhôm Xingfa cũ', href: '/thu-mua-cua-nhom-xingfa-cu/' },
  { label: 'Đồ gỗ cũ khác', href: '/#services' },
  { label: 'Liên hệ thu mua tận nơi', href: '/#contact' },
];

const AREAS = [
  'Quận 1, 2, 3, 4, 5', 'Quận 6, 7, 8, 9', 'Bình Thạnh, Gò Vấp',
  'Tân Bình, Tân Phú', 'Thủ Đức, Bình Dương',
];

export default function Footer() {
  return (
    <footer
      className="grain-overlay relative pt-16 pb-6"
      style={{ background: 'var(--walnut)' }}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, var(--amber), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">

          {/* ── Brand column ── */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-display font-700 text-lg flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #C97B2A, #E8A83E)' }}
              >
                TM
              </div>
              <div>
                <span className="block font-display font-600 text-cream text-[1.05rem] leading-none">Thu Mua Đồ Cũ</span>
                <span className="block text-[0.6rem] font-body tracking-[0.18em] uppercase text-amber/70 mt-0.5">
                  ĐỒ GỖ  · Các lại cửa nhôm , cửa cuốn 
                </span>
              </div>
            </div>
            <p className="font-body text-cream/55 text-sm leading-relaxed mb-6">
              Chuyên thu mua nội thất đã qua sử dụng và cửa nhôm Xingfa tại TP.HCM —
              giá cao, nhanh gọn, uy tín hơn 10 năm.
            </p>

            {/* Contacts */}
            <div className="space-y-3">
              <a href={PHONE_URL} onClick={(event) => handleContactConversion(event, PHONE_URL)} className="flex items-center gap-2.5 text-cream/70 hover:text-gold text-sm font-body transition-colors duration-300">
                <Phone size={14} className="text-amber flex-shrink-0" /> {PHONE_NUMBER}
              </a>
              <a href={ZALO_URL} target="_blank" rel="noopener noreferrer" onClick={(event) => handleContactConversion(event, ZALO_URL, { openInNewTab: true })} className="flex items-center gap-2.5 text-cream/70 hover:text-gold text-sm font-body transition-colors duration-300">
                <MessageSquare size={14} className="text-amber flex-shrink-0" /> Zalo: {PHONE_NUMBER}
              </a>
              <span className="flex items-start gap-2.5 text-cream/70 text-sm font-body">
                <MapPin size={14} className="text-amber flex-shrink-0 mt-0.5" /> TP. Hồ Chí Minh
              </span>
            </div>
          </div>

          {/* ── Services ── */}
          <div>
            <h4 className="font-display text-cream font-600 text-lg mb-5">Dịch Vụ</h4>
            <ul className="space-y-2.5">
              {SERVICES_LIST.map((service) => (
                <li key={service.href}>
                  <a
                    href={service.href}
                    className="flex items-center gap-1.5 text-cream/55 hover:text-gold text-sm font-body transition-colors duration-300 text-left"
                  >
                    <ChevronRight size={13} className="text-amber/60 flex-shrink-0" />
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Navigation ── */}
          <div>
            <h4 className="font-display text-cream font-600 text-lg mb-5">Điều Hướng</h4>
            <ul className="space-y-2.5">
              {[
                ['Trang chủ',  '/#hero'],
                ['Dịch vụ',   '/#services'],
                ['Quy trình', '/#process'],
                ['Liên hệ',   '/#contact'],
              ].map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="flex items-center gap-1.5 text-cream/55 hover:text-gold text-sm font-body transition-colors duration-300"
                  >
                    <ChevronRight size={13} className="text-amber/60 flex-shrink-0" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Areas served ── */}
          <div>
            <h4 className="font-display text-cream font-600 text-lg mb-5">Khu Vực Phục Vụ</h4>
            <ul className="space-y-2">
              {AREAS.map((a) => (
                <li key={a} className="flex items-center gap-1.5 text-cream/50 text-sm font-body">
                  <span className="w-1 h-1 rounded-full bg-amber/50 flex-shrink-0" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-cream/35 text-xs font-body text-center sm:text-left">
            © {new Date().getFullYear()} Thu Mua Đồ Cũ. All rights reserved.
          </p>
          <p className="text-cream/25 text-xs font-body">
            Thiết kế bởi chủ nhân thương hiệu
          </p>
        </div>
      </div>
    </footer>
  );
}
