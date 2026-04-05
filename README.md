# 🏠 Thu Mua Đồ Cũ – Website Chuyên Nghiệp

Website thu mua nội thất cũ và cửa nhôm Xingfa. Xây dựng với React + Vite + TailwindCSS + Framer Motion.

---

## 📁 Cấu Trúc Thư Mục

```
thu-mua-do-cu/
├── index.html               # HTML gốc + SEO meta tags + Google Fonts
├── package.json             # Dependencies
├── vite.config.js           # Vite config
├── tailwind.config.js       # Tailwind theme (màu sắc, font)
├── postcss.config.js        # PostCSS
└── src/
    ├── main.jsx             # Entry point React
    ├── App.jsx              # Root component
    ├── index.css            # Global styles + CSS variables
    └── components/
        ├── Header.jsx       # Sticky nav + mobile drawer
        ├── Hero.jsx         # Banner chính + parallax + stats
        ├── Services.jsx     # 4 dịch vụ + lazy-load ảnh
        ├── Process.jsx      # Quy trình 4 bước
        ├── Contact.jsx      # Form liên hệ + thông tin
        ├── Footer.jsx       # Footer đầy đủ
        └── ZaloFloat.jsx    # Nút Zalo/gọi điện cố định
```

---

## 🚀 Hướng Dẫn Chạy

### Yêu cầu
- Node.js >= 18
- npm >= 8

### Cài đặt và chạy

```bash
# 1. Vào thư mục project
cd thu-mua-do-cu

# 2. Cài packages
npm install

# 3. Chạy development server
npm run dev
```

Mở trình duyệt tại: **http://localhost:3000**

### Build production

```bash
npm run build
npm run preview   # Xem thử bản production
```

---

## ✨ Tính Năng

| Tính năng              | Chi tiết                                      |
|------------------------|-----------------------------------------------|
| Parallax Hero          | Background scroll nhẹ tốc độ 0.38x           |
| Lazy Load ảnh          | IntersectionObserver, load khi vào viewport   |
| Framer Motion          | Fade-up, slide-in, stagger animation          |
| Responsive             | Mobile-first, Tablet, Desktop Full HD         |
| Sticky Header          | Đổi nền khi scroll, mobile drawer             |
| Form liên hệ           | Validation, loading state, success/error      |
| Zalo Float Button      | Expand menu gọi/Zalo, pulse animation         |
| SEO cơ bản             | Meta tags, og:title, description              |
| Transition mượt        | 300–500ms cubic-bezier trên tất cả elements   |

---

## 🎨 Thiết Kế

- **Aesthetic**: Editorial Luxury – ấm áp, sang trọng như tạp chí nội thất
- **Font chính**: Cormorant Garamond (display) + Plus Jakarta Sans (body)
- **Màu sắc**:
  - `#2C1A0E` – Walnut (nâu gỗ chủ đạo)
  - `#C97B2A` – Amber (cam đất)
  - `#E8A83E` – Gold (vàng nhạt accent)
  - `#F6EDD9` – Cream (nền sáng)
- **Ảnh**: Unsplash (miễn phí, lazy-loaded)

---

## 📞 Cấu Hình Số Điện Thoại

Thay `0328296013` tại các file:
- `src/components/Header.jsx` – line ~70
- `src/components/Contact.jsx` – CONTACT_INFO
- `src/components/Footer.jsx` – href tel
- `src/App.jsx` – prop phoneNumber của ZaloFloat

---

## 🔌 Kết Nối API Form (tuỳ chọn)

Trong `Contact.jsx`, uncomment và cấu hình:

```js
await fetch('/api/contact', {
  method: 'POST',
  body: JSON.stringify(form),
  headers: { 'Content-Type': 'application/json' }
});
```

Tạo Express server đơn giản:

```js
// server.js
import express from 'express';
const app = express();
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { name, phone, address, category, note } = req.body;
  // Gửi email/Zalo/Telegram notification ở đây
  console.log('Yêu cầu mới:', { name, phone, address, category });
  res.json({ success: true });
});

app.listen(4000, () => console.log('API running on :4000'));
```
