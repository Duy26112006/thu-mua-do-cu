// Contact.jsx – Form liên hệ + thông tin liên lạc
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, MessageSquare, MapPin, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';

// Thông tin liên hệ
const CONTACT_INFO = [
  {
    icon: <Phone size={20} />,
    label: 'Điện thoại',
    value: '0328296013',
    href: 'tel:0328296013',
  },
  {
    icon: <MessageSquare size={20} />,
    label: 'Zalo',
    value: '0328296013',
    href: 'https://zalo.me/0328296013',
  },
  {
    icon: <MapPin size={20} />,
    label: 'Khu vực',
    value: 'TP. Hồ Chí Minh & vùng lân cận',
    href: null,
  },
  {
    icon: <Clock size={20} />,
    label: 'Giờ làm việc',
    value: 'MỌI KHUNG GIỜ',
    href: null,
  },
];

// Loại đồ cần thu mua
const CATEGORIES = [
  'Cửa cuốn / Ghế', 'Tủ / Kệ', 'Bàn / Giường',
  'Cửa nhôm Xingfa', 'Đồ gỗ', 'Nội thất gỗ', 'Khác',
];

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  // Form state
  const [form, setForm] = useState({
    name: '', phone: '', address: '', category: '', note: '',
  });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Giả lập gửi form (thay bằng API thật nếu cần)
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    setStatus('loading');

    try {
      // Thay thế URL này bằng endpoint API thực của bạn
      // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(form), headers: {'Content-Type':'application/json'} });
      await new Promise(r => setTimeout(r, 1200)); // Giả lập độ trễ mạng
      setStatus('success');
      setForm({ name: '', phone: '', address: '', category: '', note: '' });
    } catch {
      setStatus('error');
    }

    // Reset status sau 5 giây
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <section id="contact" className="py-24 md:py-32" style={{ background: 'var(--cream)' }}>
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16">

        {/* ── Header ── */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-tag justify-center mb-4">Liên Hệ Ngay</p>
          <h2
            className="font-display font-700 text-walnut mb-4"
            style={{ fontSize: 'clamp(1.9rem, 4vw, 3rem)' }}
          >
            Nhận Báo Giá <span className="text-gradient italic">Miễn Phí</span>
          </h2>
          <p className="font-body text-muted max-w-md mx-auto text-sm leading-relaxed">
            Để lại thông tin – chúng tôi sẽ liên hệ lại trong vòng 30 phút để định giá và sắp xếp lịch.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">

          {/* ── Left: Contact info ── */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4"
          >
            {/* Info cards */}
            {CONTACT_INFO.map(({ icon, label, value, href }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.45 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-5 rounded-2xl"
                style={{ background: '#fff', boxShadow: '0 2px 16px rgba(44,26,14,0.07)' }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center text-white"
                  style={{ background: 'linear-gradient(135deg, var(--amber), var(--gold))' }}
                >
                  {icon}
                </div>
                <div>
                  <p className="font-body text-xs text-muted uppercase tracking-widest font-600 mb-0.5">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      className="font-body font-600 text-walnut text-sm hover:text-amber transition-colors duration-300"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="font-body font-600 text-walnut text-sm">{value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Testimonial quote */}
            <motion.blockquote
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-6 p-6 rounded-2xl relative overflow-hidden"
              style={{
                background: 'var(--walnut)',
                border: '1px solid rgba(232,168,62,0.2)',
              }}
            >
              <span className="absolute top-3 left-4 font-display text-6xl text-amber/20 leading-none select-none">"</span>
              <p className="font-body text-cream/80 text-sm leading-relaxed relative z-10 mt-4">
                CẢM ƠN QUÝ KHÁCH ĐÃ TIN TƯỞNG 
              </p>
              <footer className="mt-3 text-xs font-body font-600 text-amber">— Chị Việt, Quận Gò Vấp</footer>
            </motion.blockquote>
          </motion.div>

          {/* ── Right: Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div
              className="rounded-3xl p-7 md:p-10"
              style={{ background: '#fff', boxShadow: '0 8px 40px rgba(44,26,14,0.1)' }}
            >
              <h3 className="font-display text-walnut font-700 text-2xl mb-6">Gửi Yêu Cầu Định Giá</h3>

              {/* Success / Error states */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-3 p-4 rounded-xl mb-6 text-sm font-body font-600"
                  style={{ background: '#ECFDF5', color: '#065F46' }}
                >
                  <CheckCircle2 size={18} />
                  Cảm ơn! Chúng tôi sẽ liên hệ lại trong vòng 30 phút.
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-3 p-4 rounded-xl mb-6 text-sm font-body font-600"
                  style={{ background: '#FEF2F2', color: '#991B1B' }}
                >
                  <AlertCircle size={18} />
                  Có lỗi xảy ra. Vui lòng thử lại hoặc gọi trực tiếp cho chúng tôi.
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name + Phone */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-body font-600 text-muted mb-1.5 uppercase tracking-wider">
                      Họ & Tên *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Nguyễn Văn A"
                      className="form-input"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-body font-600 text-muted mb-1.5 uppercase tracking-wider">
                      Số Điện Thoại *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="09xx xxx xxx"
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                {/* Address */}
                <div>
                  <label className="block text-xs font-body font-600 text-muted mb-1.5 uppercase tracking-wider">
                    Địa Chỉ
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    placeholder="Số nhà, đường, quận/huyện, TP.HCM"
                    className="form-input"
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="block text-xs font-body font-600 text-muted mb-1.5 uppercase tracking-wider">
                    Loại Đồ Cần Bán
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {CATEGORIES.map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setForm(p => ({ ...p, category: cat }))}
                        className="px-3.5 py-2 rounded-full text-xs font-body font-600 transition-all duration-250"
                        style={
                          form.category === cat
                            ? { background: 'var(--amber)', color: '#fff', boxShadow: '0 3px 12px rgba(201,123,42,0.4)' }
                            : { background: 'var(--sand)', color: 'var(--walnut)' }
                        }
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Note */}
                <div>
                  <label className="block text-xs font-body font-600 text-muted mb-1.5 uppercase tracking-wider">
                    Mô Tả Thêm (tuỳ chọn)
                  </label>
                  <textarea
                    name="note"
                    value={form.note}
                    onChange={handleChange}
                    placeholder="Ví dụ: Cửa cuốn, chất liệu , đã dùng 3 năm..."
                    rows={3}
                    className="form-input resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary w-full justify-center text-base mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                      </svg>
                      Đang gửi...
                    </>
                  ) : (
                    <><Send size={16} /> Gửi Yêu Cầu Định Giá</>
                  )}
                </button>

                <p className="text-xs font-body text-muted text-center">
                  Chúng tôi cam kết bảo mật thông tin và liên hệ trong vòng 30 phút.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
