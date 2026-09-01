const REAL_IMAGE_BASE = '/images/thuc-te';
const realImage = (filename) => `${REAL_IMAGE_BASE}/${filename}`;

export const servicePages = {
  'thu-mua-cua-go-cu': {
    slug: 'thu-mua-cua-go-cu',
    label: 'Thu mua cửa gỗ cũ',
    eyebrow: 'Dịch vụ cửa gỗ cũ tại TP.HCM',
    h1: 'Thu Mua Cửa Gỗ Cũ Tận Nơi Tại TP.HCM',
    intro: 'Nhận thu mua các loại cửa gỗ đã qua sử dụng khi sửa nhà, thay cửa hoặc thanh lý công trình. Khách hàng có thể gửi hình ảnh qua Zalo để trao đổi trước về loại cửa, kích thước và tình trạng thực tế.',
    image: realImage('cua-go-4-canh-hoa-van-thuc-te.webp'),
    imageAlt: 'Cửa gỗ cũ được tháo dỡ để thu mua tại TP.HCM',
    overviewImage: realImage('bo-cua-go-da-thao.webp'),
    overviewImageAlt: 'Nhiều bộ cửa gỗ cũ đã được tháo và xếp cùng nhau',
    overviewTitle: 'Những loại cửa gỗ cũ nhận thu mua',
    overview: [
      'Dịch vụ phù hợp với hộ gia đình, chủ nhà, đơn vị sửa chữa và công trình đang cần thanh lý cửa gỗ không còn sử dụng. Việc đánh giá dựa trên vật liệu, kết cấu, kích thước, số lượng và khả năng tháo dỡ tại địa điểm.',
      'Đội thu mua trao đổi trước qua điện thoại hoặc Zalo, sau đó khảo sát khi cần thiết. Nếu hai bên thống nhất, cửa được tháo dỡ, di chuyển và thanh toán theo thỏa thuận tại chỗ.',
    ],
    itemsTitle: 'Các hạng mục cửa gỗ thường gặp',
    items: [
      { title: 'Cửa phòng bằng gỗ', text: 'Cửa phòng ngủ, cửa thông phòng và bộ cửa kèm khung còn nguyên hoặc đã tháo rời.', image: realImage('cua-go-phong-cu.webp'), imageAlt: 'Một cánh cửa phòng bằng gỗ màu nâu' },
      { title: 'Cửa gỗ nhiều cánh', text: 'Cửa hai cánh, bốn cánh và cửa mặt tiền bằng gỗ với nhiều kích thước khác nhau.', image: realImage('cua-go-nhieu-canh-thuc-te.webp'), imageAlt: 'Nhiều cánh cửa gỗ được xếp cạnh nhau' },
      { title: 'Cửa gỗ nguyên khối', text: 'Cửa gỗ tự nhiên, cánh dày hoặc bộ cửa có kết cấu chắc chắn cần khảo sát thực tế.', image: realImage('cua-go-cham-hoa-van.webp'), imageAlt: 'Bộ cửa gỗ nhiều cánh có hoa văn chạm nổi' },
    ],
    galleryTitle: 'Hình ảnh cửa gỗ thực tế',
    gallery: [
      { src: realImage('cua-go-4-canh-hoa-van-thuc-te.webp'), alt: 'Bộ cửa gỗ bốn cánh có hoa văn', caption: 'Cửa gỗ nhiều cánh' },
      { src: realImage('cua-go-phong-cu.webp'), alt: 'Cánh cửa phòng gỗ màu nâu', caption: 'Cửa phòng gỗ cũ' },
      { src: realImage('bo-cua-go-da-thao.webp'), alt: 'Nhiều cánh cửa gỗ đã được tháo rời', caption: 'Bộ cửa gỗ đã tháo' },
      { src: realImage('cua-go-cham-hoa-van.webp'), alt: 'Cửa gỗ có chi tiết chạm hoa văn', caption: 'Cửa gỗ chạm hoa văn' },
      { src: realImage('cua-go-cu-can-thanh-ly.webp'), alt: 'Hai cánh cửa gỗ cũ dựng ngoài trời', caption: 'Cửa gỗ cần thanh lý' },
    ],
    evaluationTitle: 'Thông tin cần có khi gửi yêu cầu',
    evaluation: [
      'Ảnh toàn bộ mặt trước và mặt sau của cửa.',
      'Số lượng cánh cửa, khung cửa và phụ kiện đi kèm.',
      'Kích thước ước tính và vị trí tầng lầu nếu có.',
      'Tình trạng cong vênh, nứt, mối mọt hoặc đã sơn sửa.',
    ],
    faq: [
      { question: 'Cửa gỗ đã cũ hoặc trầy xước có thu mua không?', answer: 'Có thể tiếp nhận để xem xét. Tình trạng bề mặt, kết cấu, loại gỗ và khả năng tái sử dụng sẽ được đánh giá qua hình ảnh hoặc khảo sát thực tế.' },
      { question: 'Có nhận tháo dỡ cửa gỗ tại nhà không?', answer: 'Có hỗ trợ trao đổi phương án tháo dỡ tại địa điểm. Cách thực hiện phụ thuộc vào kết cấu bộ cửa và điều kiện vận chuyển thực tế.' },
      { question: 'Cần chuẩn bị gì để được xem cửa nhanh?', answer: 'Bạn nên gửi ảnh rõ toàn bộ cửa, số lượng, kích thước ước tính và địa chỉ tại TP.HCM qua Zalo 0938228764.' },
      { question: 'Chỉ có một bộ cửa gỗ thì có thể liên hệ không?', answer: 'Có. Bạn có thể gửi thông tin trước để đội thu mua kiểm tra loại cửa và sắp xếp trao đổi phù hợp.' },
    ],
  },
  'thu-mua-cua-nhom-cu': {
    slug: 'thu-mua-cua-nhom-cu',
    label: 'Thu mua cửa nhôm cũ',
    eyebrow: 'Dịch vụ cửa nhôm cũ tại TP.HCM',
    h1: 'Thu Mua Cửa Nhôm Cũ, Cửa Nhôm Kính Cũ Tại TP.HCM',
    intro: 'Nhận thu mua cửa nhôm cũ và cửa nhôm kính đã qua sử dụng từ nhà ở, cửa hàng, văn phòng hoặc công trình cải tạo. Dịch vụ tiếp nhận cửa nhôm phổ thông, bộ cửa nhôm Xingfa, vách nhôm kính và khung nhôm cần thanh lý.',
    image: realImage('cua-nhom-kinh-trang-thuc-te.webp'),
    imageAlt: 'Cửa nhôm kính cũ cần thanh lý tại TP.HCM',
    overviewImage: realImage('thao-do-khung-nhom.webp'),
    overviewImageAlt: 'Khung nhôm đang được tháo dỡ bên trong công trình',
    overviewTitle: 'Thu mua cửa nhôm cũ theo hiện trạng thực tế',
    overview: [
      'Cửa nhôm cũ có nhiều hệ khung, độ dày và kiểu kính khác nhau. Vì vậy, thông tin về kích thước, số lượng, loại cửa mở và tình trạng kính giúp việc trao đổi ban đầu rõ ràng hơn.',
      'Đối với cửa đang lắp tại công trình, đội thu mua sẽ xem xét vị trí, phương án tháo dỡ và đường vận chuyển. Việc thu mua chỉ được thực hiện sau khi hai bên thống nhất hiện trạng và cách xử lý.',
    ],
    itemsTitle: 'Các loại cửa nhôm cũ có thể gửi xem',
    items: [
      { title: 'Cửa nhôm kính phổ thông', text: 'Cửa đi, cửa sổ và bộ khung nhôm kính đang lắp hoặc đã được tháo khỏi công trình.', image: realImage('cua-nhom-kinh-mot-canh.webp'), imageAlt: 'Cửa nhôm kính một cánh màu trắng' },
      { title: 'Vách ngăn nhôm kính', text: 'Vách văn phòng, vách cửa hàng và khung nhôm kính cần tháo dỡ khi cải tạo mặt bằng.', image: realImage('vach-cua-nhom-kinh.webp'), imageAlt: 'Dãy vách và cửa nhôm kính màu trắng' },
      { title: 'Khung nhôm và phụ kiện', text: 'Khung cửa, cánh cửa cùng kính, bản lề, khóa hoặc ray trượt còn đi kèm.', image: realImage('khung-nhom-da-thao.webp'), imageAlt: 'Khung nhôm đã tháo được tập kết ngoài đường' },
    ],
    galleryTitle: 'Hình ảnh cửa nhôm cũ thực tế',
    gallery: [
      { src: realImage('cua-nhom-kinh-trang-thuc-te.webp'), alt: 'Các bộ cửa nhôm kính trắng dựng cạnh nhau', caption: 'Cửa nhôm kính trắng' },
      { src: realImage('cua-nhom-nha-ve-sinh.webp'), alt: 'Cửa nhôm kính mờ dùng cho khu vệ sinh', caption: 'Cửa nhôm nhà vệ sinh' },
      { src: realImage('cua-nhom-kinh-tap-ket.webp'), alt: 'Nhiều khung cửa nhôm kính được xếp cùng nhau', caption: 'Cửa nhôm kính đã tháo' },
      { src: realImage('khung-nhom-da-thao.webp'), alt: 'Các thanh khung nhôm đã tháo và tập kết', caption: 'Khung nhôm đã tháo' },
      { src: realImage('thao-do-khung-nhom.webp'), alt: 'Hiện trạng tháo dỡ khung nhôm trong công trình', caption: 'Tháo dỡ khung nhôm' },
      { src: realImage('cua-nhom-kinh-xam-hai-canh.webp'), alt: 'Bộ cửa nhôm kính màu xám hai cánh kết hợp vách kính hai bên', caption: 'Bộ cửa nhôm kính hai cánh' },
      { src: realImage('cua-nhom-kinh-xam-mat-tien-thuc-te.webp'), alt: 'Bộ cửa nhôm kính màu xám bốn cánh lắp tại mặt tiền nhà', caption: 'Bộ cửa nhôm kính mặt tiền' },
    ],
    evaluationTitle: 'Yếu tố cần kiểm tra trước khi thu mua',
    evaluation: [
      'Loại cửa mở quay, mở lùa hoặc cửa sổ.',
      'Kích thước, số lượng và màu của hệ khung nhôm.',
      'Tình trạng kính, khung, ray trượt và phụ kiện.',
      'Cửa đã tháo sẵn hay vẫn đang lắp tại công trình.',
    ],
    faq: [
      { question: 'Cửa nhôm kính bị cũ màu có thể gửi xem không?', answer: 'Có. Bạn có thể gửi ảnh để kiểm tra tình trạng khung nhôm, kính và phụ kiện. Khả năng thu mua được xác định theo hiện trạng cụ thể.' },
      { question: 'Có nhận vách ngăn nhôm kính văn phòng không?', answer: 'Có tiếp nhận thông tin vách nhôm kính từ văn phòng và cửa hàng. Cần cung cấp kích thước ước tính, số lượng và ảnh khu vực lắp đặt.' },
      { question: 'Cửa còn lắp trên tường thì liên hệ được không?', answer: 'Được. Đội thu mua sẽ trao đổi về kết cấu và điều kiện tháo dỡ trước khi thống nhất phương án thực hiện.' },
      { question: 'Cửa nhôm cũ và cửa nhôm Xingfa cũ có được đánh giá giống nhau không?', answer: 'Không hoàn toàn. Hệ nhôm, độ dày, phụ kiện và kết cấu của từng loại khác nhau, vì vậy cửa nhôm Xingfa được xem xét theo đặc điểm riêng.' },
    ],
  },
  'thu-mua-cua-nhom-xingfa-cu': {
    slug: 'thu-mua-cua-nhom-xingfa-cu',
    label: 'Thu mua cửa nhôm Xingfa cũ',
    eyebrow: 'Dịch vụ cửa nhôm Xingfa cũ tại TP.HCM',
    h1: 'Thu Mua Cửa Nhôm Xingfa Cũ Tận Nơi Tại TP.HCM',
    intro: 'Nhận xem và thu mua các bộ cửa nhôm Xingfa cũ khi gia chủ hoặc công trình thay đổi thiết kế. Việc đánh giá chú trọng hệ nhôm, quy cách cánh, kính, phụ kiện và mức độ nguyên vẹn của cả bộ cửa.',
    image: realImage('cua-nhom-kinh-xam-mat-tien-thuc-te.webp'),
    imageAlt: 'Bộ cửa nhôm kính màu xám nhiều cánh ở mặt tiền',
    overviewImage: realImage('cua-nhom-kinh-xam-cua-di.webp'),
    overviewImageAlt: 'Bộ cửa đi nhôm kính màu xám nhiều cánh',
    overviewTitle: 'Đánh giá riêng cho cửa nhôm Xingfa đã qua sử dụng',
    overview: [
      'Cửa nhôm Xingfa thường được lắp thành bộ gồm khung, cánh, kính và phụ kiện đồng bộ. Khi gửi yêu cầu, hình ảnh tem hệ nhôm nếu còn, góc khung, bản lề, khóa và toàn bộ bộ cửa sẽ giúp nhận diện chính xác hơn.',
      'Với cửa còn lắp đặt, cần xem xét cách liên kết khung vào tường và không gian vận chuyển. Đội thu mua trao đổi phương án phù hợp trước khi tháo dỡ để hạn chế ảnh hưởng tới khu vực xung quanh.',
    ],
    itemsTitle: 'Hạng mục cửa nhôm Xingfa nhận xem xét',
    items: [
      { title: 'Cửa đi Xingfa', text: 'Cửa đi một cánh, hai cánh hoặc nhiều cánh sử dụng khung nhôm Xingfa và kính.', image: realImage('cua-nhom-kinh-xam-hai-canh.webp'), imageAlt: 'Cửa đi nhôm kính màu xám hai cánh' },
      { title: 'Cửa sổ Xingfa', text: 'Cửa sổ mở quay, mở hất hoặc mở lùa cùng khung và phụ kiện hiện có.', image: realImage('cua-nhom-kinh-xam-mot-canh.webp'), imageAlt: 'Một cánh cửa nhôm kính màu xám mở quay' },
      { title: 'Bộ cửa và vách kính đồng bộ', text: 'Cụm cửa kết hợp vách kính, khung bao và các phụ kiện cần thanh lý cùng nhau.', image: realImage('cua-nhom-kinh-xam-nhieu-canh.webp'), imageAlt: 'Bộ cửa nhôm kính màu xám kết hợp vách kính' },
    ],
    galleryTitle: 'Một số mẫu cửa nhôm kính thường gặp',
    gallery: [
      { src: realImage('cua-nhom-kinh-xam-mat-tien-thuc-te.webp'), alt: 'Cửa nhôm kính màu xám bốn cánh ở mặt tiền', caption: 'Cửa nhôm kính mặt tiền' },
      { src: realImage('cua-nhom-kinh-xam-hai-canh.webp'), alt: 'Cửa nhôm kính màu xám hai cánh', caption: 'Cửa nhôm kính hai cánh' },
      { src: realImage('cua-nhom-kinh-xam-mot-canh.webp'), alt: 'Cửa nhôm kính màu xám một cánh', caption: 'Cửa nhôm kính một cánh' },
      { src: realImage('cua-nhom-kinh-gap.webp'), alt: 'Bộ cửa nhôm kính màu sáng có nhiều cánh gấp', caption: 'Cửa nhôm kính nhiều cánh' },
      { src: realImage('cua-nhom-kinh-xam-cua-di.webp'), alt: 'Cửa đi nhôm kính màu xám nhiều cánh', caption: 'Cửa đi hệ nhôm kính' },
    ],
    evaluationTitle: 'Thông tin giúp nhận diện bộ cửa Xingfa',
    evaluation: [
      'Ảnh tổng thể và ảnh cận cảnh góc khung nhôm.',
      'Kiểu mở, số cánh và kích thước ước tính.',
      'Tình trạng kính, gioăng, bản lề, khóa và tay nắm.',
      'Thông tin hệ nhôm hoặc tem nhận diện nếu còn nhìn thấy.',
    ],
    faq: [
      { question: 'Làm sao để xác định cửa đang dùng có phải Xingfa không?', answer: 'Bạn có thể chụp tem trên thanh nhôm nếu còn, mặt cắt khung, góc ghép và phụ kiện. Đội thu mua sẽ xem hình ảnh và trao đổi thêm khi cần.' },
      { question: 'Cửa Xingfa thiếu khóa hoặc phụ kiện có gửi xem được không?', answer: 'Có. Tình trạng thiếu hoặc hỏng phụ kiện cần được báo rõ để đánh giá tổng thể bộ cửa theo hiện trạng.' },
      { question: 'Có nhận cửa sổ nhôm Xingfa cũ không?', answer: 'Có tiếp nhận thông tin cửa sổ Xingfa mở quay, mở hất hoặc mở lùa. Bạn nên gửi kèm số lượng và kích thước ước tính.' },
      { question: 'Có hỗ trợ tháo bộ cửa Xingfa đang lắp đặt không?', answer: 'Có thể trao đổi phương án tháo dỡ sau khi xem kết cấu, vị trí lắp đặt và lối vận chuyển tại công trình.' },
    ],
  },
};

export const getServicePageFromPath = (pathname) => {
  const slug = pathname.split('/').filter(Boolean)[0];
  return servicePages[slug] ?? null;
};
