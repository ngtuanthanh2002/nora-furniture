const img = (id, w = 900) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=85&auto=format&fit=crop`;

const U = {
  sofa: '1555041469-a586c61ea9bc',
  living: '1618221195710-dd6b41faaea6',
  dining: '1600585154340-be6161a56a0c',
  diningAlt: '1615529328331-f8917597711f',
  bed: '1505693416388-ac5ce068fe85',
  bedAlt: '1522771739844-4743f0992acb',
  shelf: '1586023492125-27b2c045efd7',
  desk: '1567016432779-094069958ea5',
  decor: '1616486338812-3dadae4b4ace',
  office: '1497366216548-37526070297c',
  chair: '1592078615290-033ee584e267',
};

export const products = [
  {
    id: 1,
    slug: 'sofa-milano',
    name: 'Sofa Milano',
    price: 28900000,
    priceDisplay: '28.900.000₫',
    collectionId: 'living',
    tag: 'Bán chạy',
    bestseller: true,
    sku: 'NORA-SF-001',
    inStock: true,
    shortDescription: 'Da thật Ý, khung gỗ sồi, 3 chỗ.',
    description:
      'Sofa Milano là điểm nhấn của phòng khách hiện đại — khung gỗ sồi chắc chắn, bọc da thật Ý mềm mại, đường may tinh xảo.',
    longDescription:
      'Thiết kế 3 chỗ ngồi với độ sâu ghế 62cm mang cảm giác ôm ấp nhưng vẫn giữ dáng thanh lịch. Chân sofa kim loại mạ champagne tạo cảm giác nhẹ, phù hợp căn hộ penthouse và biệt thự. Có thể đặt may đo màu da và kích thước module góc chữ L theo mặt bằng.',
    image: img(U.sofa),
    fallback: img(U.living),
    gallery: [img(U.sofa, 1200), img(U.living, 1200), img(U.decor, 1200)],
    materials: ['Da bò Ý nhập khẩu', 'Khung gỗ sồi FSC', 'Đệm HR 35kg/m³', 'Chân inox mạ PVD'],
    included: ['Sofa 3 chỗ', 'Gối tựa × 2', 'Chân sofa + kit lắp', 'Sổ bảo hành & hướng dẫn'],
    care: [
      'Lau khô bằng vải mềm hàng tuần',
      'Dùng kem dưỡng da chuyên dụng 3–6 tháng/lần',
      'Tránh ánh nắng trực tiếp > 2 giờ/ngày',
    ],
    specs: {
      'Kích thước': '220 × 95 × 85 cm',
      'Chất liệu': 'Da bò Ý, gỗ sồi',
      'Màu': 'Cognac / Slate grey',
      'Bảo hành': '5 năm khung · 2 năm da',
    },
    highlights: ['Da thật chống trầy', 'Đệm HR đàn hồi cao', 'Module góc chữ L', 'May đo màu da'],
    faq: [
      { q: 'Có thể đổi màu da không?', a: 'Có — 12 màu da trong catalogue, thời gian sản xuất thêm 2–3 tuần.' },
      { q: 'Sofa có tháo rời để vào thang máy hẹp?', a: 'Chân tháo rời; thân sofa vào được cửa rộng từ 75cm.' },
    ],
  },
  {
    id: 2,
    slug: 'ban-an-nordic',
    name: 'Bàn ăn Nordic',
    price: 15500000,
    priceDisplay: '15.500.000₫',
    collectionId: 'dining',
    tag: 'Mới',
    bestseller: true,
    sku: 'NORA-TB-002',
    inStock: true,
    shortDescription: 'Mặt đá + chân gỗ óc chó, 6 chỗ.',
    description:
      'Bàn ăn Nordic kết hợp mặt đá cẩm thạch và chân gỗ óc chó uốn cong phong cách Bắc Âu.',
    longDescription:
      'Mặt đá Carrara nguyên khối dày 20mm, bề mặt phủ chống thấm chuẩn châu Âu. Chân gỗ óc chó FSC uốn cong tạo cảm giác mềm mại, chịu lực tốt. Phù hợp không gian ăn 12–18m², kết hợp bộ ghế Nora đồng bộ.',
    image: img(U.dining),
    fallback: img(U.diningAlt),
    gallery: [img(U.dining, 1200), img(U.diningAlt, 1200), img(U.living, 1200)],
    materials: ['Đá Carrara tự nhiên', 'Gỗ óc chó FSC', 'Keo E0', 'Phủ matte chống bám'],
    included: ['Mặt bàn + chân', 'Kit cố định chân', 'Miếng lót sàn', 'Hướng dẫn bảo quản đá'],
    care: ['Lau bụi bằng khăn ẩm', 'Không đặt vật nóng trực tiếp', 'Dùng lót ly tránh vết axit'],
    specs: {
      'Kích thước': '180 × 90 × 76 cm',
      'Sức chứa': '6 người',
      'Bảo hành': '3 năm',
    },
    highlights: ['Đá nguyên khối', 'Chân gỗ FSC', 'Góc bo an toàn', 'Ghế đồng bộ tùy chọn'],
    faq: [
      { q: 'Mặt đá có bị ố vàng?', a: 'Lớp phủ chống thấm giúp hạn chế thấm; tránh chanh, giấm lâu trên bề mặt.' },
    ],
  },
  {
    id: 3,
    slug: 'giuong-zen',
    name: 'Giường Zen',
    price: 22000000,
    priceDisplay: '22.000.000₫',
    collectionId: 'bedroom',
    tag: 'Yêu thích',
    bestseller: true,
    sku: 'NORA-BD-003',
    inStock: true,
    shortDescription: 'Tối giản, kèm nệm memory foam.',
    description: 'Giường Zen — headboard bouclé, khung gỗ tần bì, nệm memory foam 25cm.',
    longDescription:
      'Triết lý tối giản Nhật Bản: đường nét sạch, không chi tiết thừa. Headboard bọc vải bouclé chống bụi, hộc đầu giường 2 ngăn. Nệm memory foam 25cm chia 7 vùng nâng đỡ cột sống.',
    image: img(U.bed),
    fallback: img(U.bedAlt),
    gallery: [img(U.bed, 1200), img(U.bedAlt, 1200), img(U.diningAlt, 1200)],
    materials: ['Vải bouclé', 'Gỗ tần bì', 'Nệm memory foam', 'Lò xo pocket độc lập'],
    included: ['Khung giường + headboard', 'Nệm 25cm', 'Chân giường', 'Bộ vít lắp đặt'],
    care: ['Hút bụi headboard hàng tháng', 'Xoay nệm 3 tháng/lần', 'Không nhảy trên giường'],
    specs: {
      'Kích thước': '200 × 180 cm (King)',
      'Bảo hành': '5 năm khung · 3 năm nệm',
    },
    highlights: ['Headboard bouclé', 'Nệm 7 vùng', 'Ngăn đầu giường', 'Queen / King'],
    faq: [{ q: 'Có bán riêng nệm không?', a: 'Có — liên hệ showroom để chọn độ cứng nệm.' }],
  },
  {
    id: 4,
    slug: 'ke-sach-artisan',
    name: 'Kệ sách Artisan',
    price: 8900000,
    priceDisplay: '8.900.000₫',
    collectionId: 'office',
    tag: null,
    bestseller: true,
    sku: 'NORA-SH-004',
    inStock: true,
    shortDescription: 'Gỗ tần bì 5 tầng, thủ công.',
    description: 'Kệ sách Artisan — gỗ tần bì nguyên khối, 5 tầng mở, modular.',
    longDescription:
      'Chế tác thủ công từ gỗ tần bì chọn vân, phủ dầu hardwax an toàn trẻ em. Thiết kế modular có thể ghép thêm module ngang. Tải 40kg/tầng, phù hợp phòng làm việc và phòng khách.',
    image: img(U.shelf),
    fallback: img(U.living),
    gallery: [img(U.shelf, 1200), img(U.desk, 1200), img(U.living, 1200)],
    materials: ['Gỗ tần bì', 'Dầu hardwax', 'Ốc inox 304'],
    included: ['5 tấm kệ + 2 thành', 'Bộ ốc + căn chỉnh', 'Hướng dẫn lắp'],
    care: ['Lau khô', 'Tránh nước đọng', 'Không treo quá tải một tầng'],
    specs: { 'Kích thước': '180 × 35 × 200 cm', 'Tải trọng': '40kg/tầng', 'Bảo hành': '3 năm' },
    highlights: ['Vân gỗ tự nhiên', 'Modular mở rộng', 'Không khoan tường', 'Chống cong vênh'],
    faq: [{ q: 'Có lắp đặt tận nơi?', a: 'Có — miễn phí nội thành TP.HCM.' }],
  },
  {
    id: 5,
    slug: 'den-chandelier-lumiere',
    name: 'Đèn Chandelier Lumière',
    price: 12500000,
    priceDisplay: '12.500.000₫',
    collectionId: 'decor',
    tag: 'Mới',
    bestseller: true,
    sku: 'NORA-LT-005',
    inStock: true,
    shortDescription: 'Đèn chùm thủy tinh, LED 3000K.',
    description: 'Đèn chùm Lumière — tinh thể thổi tay, khung đồng mạ vàng.',
    longDescription:
      '12 tinh thể thủy tinh thổi tay, khung đồng mạ PVD champagne. LED 48W dimmer 3 mức, ánh sáng 3000K ấm áp. Phù hợp phòng khách trần từ 2.8m.',
    image: img(U.decor),
    fallback: img(U.living),
    gallery: [img(U.decor, 1200), img(U.living, 1200), img(U.dining, 1200)],
    materials: ['Thủy tinh thổi tay', 'Đồng mạ PVD', 'LED Samsung'],
    included: ['Đèn chùm', 'Bóng LED', 'Dây treo + pát trần', 'Điều khiển dimmer'],
    care: ['Tháo tinh thể vệ sinh 6 tháng/lần', 'Tắt nguồn trước khi lau'],
    specs: { 'Đường kính': '60 cm', 'Công suất': '48W LED', 'Bảo hành': '2 năm' },
    highlights: ['Dimmer 3 mức', 'LED tiết kiệm điện', 'Thủy tinh thổi tay'],
    faq: [{ q: 'Trần thấp 2.5m có treo được?', a: 'Nên chọn bản 45cm — liên hệ tư vấn.' }],
  },
  {
    id: 6,
    slug: 'ban-lam-viec-executive',
    name: 'Bàn làm việc Executive',
    price: 18900000,
    priceDisplay: '18.900.000₫',
    collectionId: 'office',
    tag: 'Bán chạy',
    bestseller: true,
    sku: 'NORA-DK-006',
    inStock: true,
    shortDescription: 'Walnut + khe quản lý dây.',
    description: 'Bàn Executive — mặt walnut, khung thép, khe dây tích hợp.',
    longDescription:
      'Mặt gỗ walnut nguyên tấm phủ PU chống trầy, viền bo mềm. Khe dây điện giữa mặt bàn, ngăn kéo âm tủ. Khung thép sơn tĩnh điện chịu lực, chân điều chỉnh mặt phẳng.',
    image: img(U.desk),
    fallback: img(U.office),
    gallery: [img(U.desk, 1200), img(U.shelf, 1200), img(U.chair, 1200)],
    materials: ['Gỗ walnut', 'Thép sơn tĩnh điện', 'Phủ PU cao cấp'],
    included: ['Mặt bàn + khung', 'Ngăn kéo', 'Bộ điều chỉnh chân'],
    care: ['Lau khô', 'Dùng lót chuột', 'Không kê ghế có bánh xe sắc'],
    specs: { 'Kích thước': '160 × 75 × 76 cm', 'Bảo hành': '5 năm' },
    highlights: ['Khe dây gọn', 'Ngăn kéo âm', 'Chân điều chỉnh'],
    faq: [{ q: 'Có mặt kính không?', a: 'Tùy chọn mặt kính cường lực +2.5 triệu.' }],
  },
  {
    id: 7,
    slug: 'ghe-armchair-aura',
    name: 'Ghế Armchair Aura',
    price: 11900000,
    priceDisplay: '11.900.000₫',
    collectionId: 'living',
    tag: 'Mới',
    bestseller: true,
    sku: 'NORA-AC-007',
    inStock: true,
    shortDescription: 'Bọc vải cao cấp, chân gỗ tần bì.',
    description: 'Ghế Aura — silhouette cong mềm, bọc vải stain-resistant.',
    longDescription:
      'Thiết kế armchair Scandinavian với tay vịn cong liền khối. Vải bọc chống bám bụi, đệm mousse đa lớp. Chân gỗ tần bì nghiêng 15° tạo cảm giác thư giãn khi đọc sách hoặc tiếp khách thân mật.',
    image: img(U.chair),
    fallback: img(U.sofa),
    gallery: [img(U.chair, 1200), img(U.sofa, 1200), img(U.living, 1200)],
    materials: ['Vải polyester cao cấp', 'Gỗ tần bì', 'Đệm mousse HR'],
    included: ['Ghế hoàn thiện', 'Gối lumbar', 'Chân + vít'],
    care: ['Hút bụi vải hàng tuần', 'Giặt khô tẩy điểm vết'],
    specs: { 'Kích thước': '78 × 82 × 85 cm', 'Bảo hành': '3 năm' },
    highlights: ['Vải chống bám', 'Đệm HR', 'Gối lumbar kèm'],
    faq: [{ q: 'Có bản da không?', a: 'Có — phụ thu 3.5 triệu, sản xuất 3 tuần.' }],
  },
  {
    id: 8,
    slug: 'ban-tra-mocha',
    name: 'Bàn trà Mocha',
    price: 6900000,
    priceDisplay: '6.900.000₫',
    collectionId: 'living',
    tag: null,
    bestseller: true,
    sku: 'NORA-CT-008',
    inStock: true,
    shortDescription: 'Gỗ ash, mặt tròn 90cm.',
    description: 'Bàn trà Mocha — mặt tròn gỗ ash, chân chữ X kim loại.',
    longDescription:
      'Mặt tròn đường kính 90cm từ gỗ ash xử lý chống ẩm. Chân chữ X sơn tĩnh điện màu đen matte. Phối hợp sofa Milano hoặc ghế Aura tạo góc tiếp khách ấm cúng.',
    image: img(U.living),
    fallback: img(U.sofa),
    gallery: [img(U.living, 1200), img(U.sofa, 1200), img(U.decor, 1200)],
    materials: ['Gỗ ash', 'Sơn tĩnh điện', 'Keo E0'],
    included: ['Mặt bàn', 'Chân X', 'Miếng lót sàn'],
    care: ['Lau khăn ẩm', 'Dùng lót ly'],
    specs: { 'Đường kính': '90 cm · Cao 42 cm', 'Bảo hành': '2 năm' },
    highlights: ['Gỗ ash bền', 'Chân X chắc', 'Phối bộ sofa Nora'],
    faq: [{ q: 'Có size 100cm?', a: 'Có — báo giá +1.2 triệu.' }],
  },
];

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCollection(collectionId) {
  return products.filter((p) => p.collectionId === collectionId);
}

export function getBestsellerProducts() {
  return products.filter((p) => p.bestseller);
}

export function searchProducts(query) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.shortDescription.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      (p.longDescription && p.longDescription.toLowerCase().includes(q)) ||
      p.sku.toLowerCase().includes(q)
  );
}
