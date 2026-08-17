import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Phone, MessageCircle, MapPin, Clock, Star } from "lucide-react";
import {
  handleContactConversion,
  PHONE_URL,
  ZALO_URL,
} from "../utils/googleAdsConversion";

const REVIEWS = [
  { name: "Chị Lan - Quận 7", text: "Đến đúng hẹn, định giá hợp lý, thanh toán ngay. Rất hài lòng!", stars: 5 },
  { name: "Anh Minh - Bình Thạnh", text: "Gọi là có mặt, tháo dỡ nhanh gọn, trao đổi rõ ràng.", stars: 5 },
  { name: "Chị Hoa - Gò Vấp", text: "Thanh lý đồ dùng trong phòng, thủ tục đơn giản.", stars: 5 },
];

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <section id="contact" className="py-24 md:py-32" style={{ background: "var(--cream)" }}>
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16">
        <motion.div ref={ref} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <p className="section-tag justify-center mb-4">Liên Hệ Ngay</p>
          <h2 className="font-display font-700 text-walnut mb-4" style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)" }}>
            Gọi Hoặc Nhắn Zalo <span className="text-gradient italic">Để Trao Đổi</span>
          </h2>
          <p className="font-body text-muted max-w-md mx-auto text-sm leading-relaxed">
            Chụp ảnh cửa hoặc đồ cần thanh lý, gửi qua Zalo để chúng tôi xem hiện trạng và liên hệ lại.
          </p>
        </motion.div>
     <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="flex flex-col sm:flex-row gap-5 justify-center mb-16">
          <a href={PHONE_URL} onClick={(event) => handleContactConversion(event, PHONE_URL)} className="flex items-center justify-center gap-4 px-6 sm:px-10 py-6 rounded-2xl text-white font-body font-semibold transition-all duration-300 hover:-translate-y-1" style={{ background: "linear-gradient(135deg, var(--amber), var(--gold))", boxShadow: "0 8px 30px rgba(196,30,58,0.4)" }}>
            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0"><Phone size={24} /></div>
            <div className="text-left">
              <p className="text-xs opacity-80 font-normal tracking-widest uppercase mb-0.5">Gọi điện ngay</p>
              <p className="text-2xl font-display font-700 leading-none">0938 228 764</p>
            </div>
          </a>
          <a href={ZALO_URL} target="_blank" rel="noopener noreferrer" onClick={(event) => handleContactConversion(event, ZALO_URL, { openInNewTab: true })} className="flex items-center justify-center gap-4 px-6 sm:px-10 py-6 rounded-2xl text-white font-body font-semibold transition-all duration-300 hover:-translate-y-1" style={{ background: "linear-gradient(135deg, #0068FF, #0099FF)", boxShadow: "0 8px 30px rgba(0,104,255,0.4)" }}>
            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0"><MessageCircle size={24} /></div>
            <div className="text-left">
              <p className="text-xs opacity-80 font-normal tracking-widest uppercase mb-0.5">Nhắn Zalo ngay</p>
              <p className="text-2xl font-display font-700 leading-none">0938 228 764</p>
            </div>
          </a>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="rounded-3xl p-8" style={{ background: "var(--walnut)" }}>
            <h3 className="font-display text-cream font-700 text-2xl mb-6">Thông Tin Liên Hệ</h3>
            <div className="flex items-start gap-4 mb-4">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 text-white" style={{ background: "linear-gradient(135deg, var(--amber), var(--gold))" }}><MapPin size={18} /></div>
              <div><p className="text-xs font-body tracking-widest uppercase text-cream/50 mb-0.5">Địa chỉ</p><p className="font-body text-cream/90 text-sm font-semibold">1364 Lê Đức Thọ, An Hội Đông, TP.HCM</p></div>
            </div>
            <div className="flex items-start gap-4 mb-6">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 text-white" style={{ background: "linear-gradient(135deg, var(--amber), var(--gold))" }}><Clock size={18} /></div>
              <div><p className="text-xs font-body tracking-widest uppercase text-cream/50 mb-0.5">Giờ làm việc</p><p className="font-body text-cream/90 text-sm font-semibold">Thứ 2 - CN: 7:00 - 19:00</p></div>
            </div>
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-3 text-center">
              {["Trao đổi hiện trạng", "Thanh toán tại chỗ", "Đến tận nơi"].map((item) => (
                <div key={item} className="rounded-xl p-3" style={{ background: "rgba(255,255,255,0.06)" }}><p className="text-cream/70 text-xs font-body leading-tight">{item}</p></div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="space-y-4">
            <h3 className="font-display text-walnut font-700 text-2xl mb-6">Khách Hàng Nói Gì</h3>
            {REVIEWS.map(({ name, text, stars }) => (
              <div key={name} className="rounded-2xl p-5" style={{ background: "#fff", boxShadow: "0 2px 16px rgba(44,26,14,0.07)" }}>
                <div className="flex gap-0.5 mb-2">{Array(stars).fill(0).map((_, i) => (<Star key={i} size={13} style={{ fill: "var(--amber)", color: "var(--amber)" }} />))}</div>
                <p className="font-body text-muted text-sm leading-relaxed mb-2">"{text}"</p>
                <p className="font-body font-semibold text-walnut text-xs">{name}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
