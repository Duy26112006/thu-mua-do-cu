import { motion } from 'framer-motion';
import { handleContactConversion } from '../utils/googleAdsConversion';

export default function ZaloFloat({ phoneNumber = '0938228764' }) {
  const phoneUrl = `tel:${phoneNumber}`;
  const zaloUrl = `https://zalo.me/${phoneNumber}`;

  return (
    <div className="fixed bottom-6 left-5 z-[999] flex flex-col gap-3 items-start">

      {/* Nút Zalo - rung mạnh và gắn mã theo dõi */}
      <motion.a
        href={zaloUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(event) => handleContactConversion(event, zaloUrl, { openInNewTab: true })}
        animate={{
          rotate: [0, -15, 15, -15, 15, -10, 10, 0],
          scale: [1, 1.15, 1.15, 1.15, 1.15, 1.1, 1.1, 1],
        }}
        transition={{ repeat: Infinity, duration: 0.8, repeatDelay: 1.5 }}
        className="w-14 h-14 rounded-2xl overflow-hidden cursor-pointer"
        style={{ boxShadow: '0 6px 24px rgba(0,104,255,0.6)' }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg"
          alt="Zalo"
          className="w-full h-full object-cover"
        />
      </motion.a>

      {/* Nút gọi điện - rung mạnh và gắn mã theo dõi */}
      <motion.a
        href={phoneUrl}
        onClick={(event) => handleContactConversion(event, phoneUrl)}
        animate={{
          scale: [1, 1.12, 0.95, 1.12, 0.95, 1.08, 1],
          x: [0, -4, 4, -4, 4, -2, 0],
        }}
        transition={{ repeat: Infinity, duration: 0.7, repeatDelay: 1.5 }}
        className="flex items-center gap-2 px-4 py-3 rounded-full text-white font-semibold text-sm cursor-pointer"
        style={{ background: '#C41E3A', boxShadow: '0 4px 20px rgba(196,30,58,0.6)' }}
      >
        <span>📞</span> {phoneNumber}
      </motion.a>

    </div>
  );
}
