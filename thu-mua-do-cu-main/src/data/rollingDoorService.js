const realImage = (filename) => `/images/thuc-te/${filename}`;

export const rollingDoorService = {
  slug: 'thu-mua-cua-cuon-cu',
  label: 'Thu mua cửa cuốn cũ',
  eyebrow: 'Dịch vụ cửa cuốn cũ tại TP.HCM',
  h1: 'Thu Mua Cửa Cuốn Cũ Tận Nơi Tại TP.HCM',
  intro: 'Nhận thu mua cửa cuốn cũ đã qua sử dụng, cửa còn lắp tại nhà, cửa hàng hoặc đã tháo dỡ và tập kết. Khách hàng có thể gửi hình ảnh qua Zalo để trao đổi trước về loại cửa, kích thước, số lượng và tình trạng thực tế.',
  image: realImage('cua-cuon-cu-cac-bo-da-thao.jpg'),
  imageAlt: 'Nhiều bộ cửa cuốn cũ đã tháo dỡ và cuộn gọn',
  overviewImage: realImage('cua-cuon-cu-cuon-tap-ket.jpg'),
  overviewImageAlt: 'Các bộ cửa cuốn cũ được cuộn và xếp tại điểm tập kết',
  overviewTitle: 'Khảo sát cửa cuốn cũ theo hiện trạng',
  overview: [
    'Cửa cuốn cũ có nhiều loại nan, kích thước, trục cuốn và phương thức vận hành khác nhau. Việc đánh giá dựa trên loại cửa, chiều rộng, chiều cao, mức độ nguyên vẹn của nan, trục, ray dẫn hướng và các bộ phận còn đi kèm.',
    'Khách hàng có thể gửi ảnh để trao đổi ban đầu. Khi cần kiểm tra trực tiếp, đội thu mua sẽ khảo sát tại địa điểm, thống nhất mức giá theo hiện trạng và trao đổi phương án tháo dỡ, vận chuyển phù hợp trước khi thực hiện.',
  ],
  itemsTitle: 'Các hạng mục cửa cuốn cũ có thể gửi xem',
  items: [
    { title: 'Cửa cuốn nan nhôm', text: 'Bộ nan cửa cuốn bằng nhôm đã qua sử dụng, còn lắp đặt hoặc đã tháo khỏi công trình.', image: realImage('cua-cuon-cu-nan-nhom.jpg'), imageAlt: 'Các thanh nan cửa cuốn nhôm cũ được xếp tại điểm tập kết' },
    { title: 'Bộ cửa cuốn đã tháo', text: 'Cửa đã được cuộn gọn cùng trục, ray và các chi tiết còn lại để chuẩn bị thanh lý.', image: realImage('cua-cuon-cu-nan-va-truc.jpg'), imageAlt: 'Bộ nan cửa cuốn cũ cùng các trục kim loại đã tháo rời' },
    { title: 'Nan, trục và ray cửa cuốn', text: 'Các phần nan cửa, trục cuốn và ray dẫn hướng cần được xem xét theo số lượng và tình trạng thực tế.', image: realImage('cua-cuon-cu-thao-roi.jpg'), imageAlt: 'Nan, trục và ray cửa cuốn cũ được tháo rời' },
  ],
  galleryTitle: 'Hình ảnh cửa cuốn cũ thực tế',
  gallery: [
    { src: realImage('cua-cuon-cu-cac-bo-da-thao.jpg'), alt: 'Nhiều bộ cửa cuốn cũ màu trắng và xanh đã tháo dỡ', caption: 'Các bộ cửa cuốn đã tháo' },
    { src: realImage('cua-cuon-cu-cuon-tap-ket.jpg'), alt: 'Các cuộn nan cửa cuốn cũ được xếp thành hàng', caption: 'Cửa cuốn cũ tập kết' },
    { src: realImage('cua-cuon-cu-nan-va-truc.jpg'), alt: 'Hai cuộn nan cửa cuốn cùng nhiều trục kim loại', caption: 'Nan và trục cửa cuốn' },
    { src: realImage('cua-cuon-cu-thao-roi.jpg'), alt: 'Nan, trục và ray cửa cuốn cũ đặt trên nền', caption: 'Bộ cửa cuốn tháo rời' },
    { src: realImage('cua-cuon-cu-nan-nhom.jpg'), alt: 'Các bó nan cửa cuốn nhôm cũ tại nơi tập kết', caption: 'Nan cửa cuốn nhôm' },
    { src: realImage('cua-cuon-cu-tap-ket-cung-khung.jpg'), alt: 'Một cuộn cửa cuốn cũ đặt cạnh các khung cửa đã tháo', caption: 'Cửa cuốn chờ thanh lý' },
  ],
  evaluationTitle: 'Thông tin cần có khi gửi cửa cuốn',
  evaluation: [
    'Ảnh toàn bộ mặt cửa và khu vực đang lắp đặt.',
    'Chiều rộng, chiều cao và số lượng bộ cửa ước tính.',
    'Tình trạng nan, trục, ray dẫn hướng và bộ phận vận hành.',
    'Cửa còn lắp tại công trình hay đã tháo dỡ và tập kết.',
  ],
  faq: [
    { question: 'Cửa cuốn đã tháo dỡ có thể gửi xem không?', answer: 'Có. Bạn nên gửi ảnh toàn bộ phần nan, trục, ray và các bộ phận còn đi kèm để đội thu mua kiểm tra tình trạng thực tế.' },
    { question: 'Cửa cuốn còn lắp tại nhà hoặc cửa hàng có thu mua không?', answer: 'Có thể tiếp nhận để khảo sát. Phương án thu mua và tháo dỡ sẽ được trao đổi dựa trên kết cấu cửa, vị trí lắp đặt và điều kiện vận chuyển.' },
    { question: 'Giá thu mua cửa cuốn cũ được xác định như thế nào?', answer: 'Mức giá được trao đổi theo loại cửa, kích thước, số lượng, tình trạng nan, trục, ray và các bộ phận còn sử dụng được sau khi xem hình ảnh hoặc khảo sát.' },
    { question: 'Có hỗ trợ tháo dỡ và vận chuyển cửa cuốn không?', answer: 'Có thể hỗ trợ khi phù hợp với hiện trạng công trình. Cách tháo dỡ và vận chuyển sẽ được thống nhất trước khi thực hiện.' },
  ],
};
