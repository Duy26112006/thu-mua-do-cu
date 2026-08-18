import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { handleContactConversion } from '../utils/googleAdsConversion';

export default function ZaloFloat({ phoneNumber = '0938228764', hideInitially = false }) {
  const phoneUrl = `tel:${phoneNumber}`;
  const zaloUrl = `https://zalo.me/${phoneNumber}`;
  const [isVisible, setIsVisible] = useState(!hideInitially);

  useEffect(() => {
    if (!hideInitially) {
      setIsVisible(true);
      return undefined;
    }

    const updateVisibility = () => setIsVisible(window.scrollY >= 560);
    updateVisibility();
    window.addEventListener('scroll', updateVisibility, { passive: true });

    return () => window.removeEventListener('scroll', updateVisibility);
  }, [hideInitially]);

  return (
    <div
      aria-hidden={!isVisible}
      className={`zalo-contact-float fixed left-4 z-[999] flex flex-col items-start gap-3 transition-all duration-300 ease-out sm:left-5 ${
        isVisible
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >

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
        aria-label={`Mở Zalo ${phoneNumber}`}
        tabIndex={isVisible ? 0 : -1}
        className="h-14 w-14 cursor-pointer overflow-hidden rounded-full bg-[#0068FF]"
        style={{ boxShadow: '0 6px 24px rgba(0,104,255,0.6)' }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg"
          alt="Biểu tượng Zalo"
          width="56"
          height="56"
          className="h-full w-full object-cover"
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
        aria-label={`Gọi ${phoneNumber}`}
        tabIndex={isVisible ? 0 : -1}
        className="flex cursor-pointer items-center gap-2 rounded-full px-4 py-3 text-sm font-semibold text-white"
        style={{ background: '#C41E3A', boxShadow: '0 4px 20px rgba(196,30,58,0.6)' }}
      >
        <span>📞</span> {phoneNumber}
      </motion.a>

    </div>
  );
}
