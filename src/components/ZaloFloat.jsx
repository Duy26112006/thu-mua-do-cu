// ZaloFloat.jsx – Nút Zalo float + nút gọi điện cố định góc phải
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, X, MessageCircle } from 'lucide-react';

export default function ZaloFloat({ phoneNumber = '0328296013' }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 left-5 z-[999] flex flex-col items-end gap-3">

      {/* ── Expanded options ── */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 16 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-col items-end gap-2.5 mb-1"
          >
            {/* Call button */}
            <a
              href={`tel:${phoneNumber}`}
              className="flex items-center gap-2.5 pr-4 pl-3 py-2.5 rounded-full shadow-warm text-sm font-body font-600 text-white"
              style={{ background: '#22C55E', boxShadow: '0 4px 16px rgba(34,197,94,0.4)' }}
            >
              <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <Phone size={14} />
              </div>
              Gọi ngay
            </a>

            {/* Zalo button */}
            <a
              href={`https://zalo.me/${phoneNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 pr-4 pl-3 py-2.5 rounded-full shadow-warm text-sm font-body font-600 text-white"
              style={{ background: '#0068FF', boxShadow: '0 4px 16px rgba(0,104,255,0.4)' }}
            >
              <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <MessageCircle size={14} />
              </div>
              Chat Zalo
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Main toggle button ── */}
      <motion.button
        whileTap={{ scale: 0.92 }}
        onClick={() => setExpanded(v => !v)}
        className="zalo-float"
        aria-label="Liên hệ Zalo hoặc gọi điện"
        title="Liên hệ ngay"
      >
        <AnimatePresence mode="wait" initial={false}>
          {expanded ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} color="#fff" />
            </motion.span>
          ) : (
            <motion.span
              key="zalo"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {/* SVG icon Zalo */}
              <svg width="26" height="26" viewBox="0 0 48 48" fill="none">
                <path d="M24 4C12.954 4 4 12.954 4 24c0 5.44 2.126 10.374 5.594 14.02L4 44l6.22-2.068A19.905 19.905 0 0024 44c11.046 0 20-8.954 20-20S35.046 4 24 4z" fill="white"/>
                <path d="M13 20.5c0-1.105.895-2 2-2h18c1.105 0 2 .895 2 2v8.5c0 1.105-.895 2-2 2H15c-1.105 0-2-.895-2-2v-8.5z" fill="#0068FF"/>
                <path d="M17 23h14M17 26.5h8" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    {/* Nút gọi điện rung */}

    <a href="tel:0328296013"
  className="flex items-center gap-2 pr-4 pl-3 py-3 rounded-full text-white font-body font-semibold text-sm"
  style={{
    background: 'linear-gradient(135deg, #C41E3A, #E8334A)',
    boxShadow: '0 4px 20px rgba(196,30,58,0.5)',
    animation: 'ring 1.5s infinite',
  }}
>
  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
    <Phone size={16} />
  </div>
  0328 296 013
</a>
      </div>
  );
}
