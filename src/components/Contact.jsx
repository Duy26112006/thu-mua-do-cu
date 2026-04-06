import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Phone, MessageCircle, MapPin, Clock, Star } from "lucide-react";

const CONTACT_INFO = [
  { icon: null, label: "Dia chi", value: "1364 Le Duc Tho, An Hoi Dong, TP.HCM" },
  { icon: null, label: "Gio lam viec", value: "Thu 2 - CN: 7:00 - 19:00" },
];

const REVIEWS = [
  { name: "Chi Lan - Quan 7", text: "Den dung hen, dinh gia hop ly, thanh toan ngay. Rat hai long!", stars: 5 },
  { name: "Anh Minh - Binh Thanh", text: "Goi la co mat ngay, thao do nhanh gon, gia tot hon cho khac.", stars: 5 },
  { name: "Chi Hoa - Go Vap", text: "Thanh ly nguyen phong khach san, duoc gia, thu tuc don gian.", stars: 5 },
];

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <section id="contact" className="py-24 md:py-32" style={{ background: "var(--cream)" }}>
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16">
        <motion.div ref={ref} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <p className="section-tag justify-center mb-4">Lien He Ngay</p>
          <h2 className="font-display font-700 text-walnut mb-4" style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)" }}>
            Goi Hoac Nhan Zalo <span className="text-gradient italic">Nhan Gia Ngay</span>
          </h2>
          <p className="font-body text-muted max-w-md mx-auto text-sm leading-relaxed">
            Chup anh do can ban — nhan Zalo — nhan bao gia trong 15 phut. Khong mat phi, khong rang buoc.
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="flex flex-col sm:flex-row gap-5 justify-center mb-16">
          <a href="tel:0328296013" className="flex items-center justify-center gap-4 px-10 py-6 rounded-2xl text-white font-body font-semibold transition-all duration-300 hover:-translate-y-1" style={{ background: "linear-gradient(135deg, var(--amber), var(--gold))", boxShadow: "0 8px 30px rgba(196,30,58,0.4)" }}>
            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0"><Phone size={24} /></div>
            <div className="text-left">
              <p className="text-xs opacity-80 font-normal tracking-widest uppercase mb-0.5">Goi dien ngay</p>
              <p className="text-2xl font-display font-700 leading-none">0328 296 013</p>
            </div>
          </a>
          <a href="https://zalo.me/0328296013" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-4 px-10 py-6 rounded-2xl text-white font-body font-semibold transition-all duration-300 hover:-translate-y-1" style={{ background: "linear-gradient(135deg, #0068FF, #0099FF)", boxShadow: "0 8px 30px rgba(0,104,255,0.4)" }}>
            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0"><MessageCircle size={24} /></div>
            <div className="text-left">
              <p className="text-xs opacity-80 font-normal tracking-widest uppercase mb-0.5">Nhan Zalo ngay</p>
              <p className="text-2xl font-display font-700 leading-none">0328 296 013</p>
            </div>
          </a>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="rounded-3xl p-8" style={{ background: "var(--walnut)" }}>
            <h3 className="font-display text-cream font-700 text-2xl mb-6">Thong Tin Lien He</h3>
            <div className="flex items-start gap-4 mb-4">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 text-white" style={{ background: "linear-gradient(135deg, var(--amber), var(--gold))" }}><MapPin size={18} /></div>
              <div><p className="text-xs font-body tracking-widest uppercase text-cream/50 mb-0.5">Dia chi</p><p className="font-body text-cream/90 text-sm font-semibold">1364 Le Duc Tho, An Hoi Dong, TP.HCM</p></div>
            </div>
            <div className="flex items-start gap-4 mb-6">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 text-white" style={{ background: "linear-gradient(135deg, var(--amber), var(--gold))" }}><Clock size={18} /></div>
              <div><p className="text-xs font-body tracking-widest uppercase text-cream/50 mb-0.5">Gio lam viec</p><p className="font-body text-cream/90 text-sm font-semibold">Thu 2 - CN: 7:00 - 19:00</p></div>
            </div>
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-3 text-center">
              {["Mien phi dinh gia", "Thanh toan ngay", "Den tan noi"].map((item) => (
                <div key={item} className="rounded-xl p-3" style={{ background: "rgba(255,255,255,0.06)" }}><p className="text-cream/70 text-xs font-body leading-tight">{item}</p></div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="space-y-4">
            <h3 className="font-display text-walnut font-700 text-2xl mb-6">Khach Hang Noi Gi</h3>
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
