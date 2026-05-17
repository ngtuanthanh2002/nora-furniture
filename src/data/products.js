const img = (id, w = 900) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=85&auto=format&fit=crop`;

export const products = [
  {
    id: 1,
    slug: 'sofa-milano',
    name: 'Sofa Milano',
    price: 28900000,
    priceDisplay: '28.900.000₫',
    collectionId: 'living',
    tag: 'Bán chạy',
    sku: 'NORA-SF-001',
    inStock: true,
    shortDescription: 'Da thật Ý, khung gỗ sồi, 3 chỗ ngồi.',
    description:
      'Sofa Milano là điểm nhấn của phòng khách hiện đại — khung gỗ sồi chắc chắn, bọc da thật Ý mềm mại, đường may tinh xảo. Thiết kế 3 chỗ ngồi thoải mái, phù hợp căn hộ cao cấp và biệt thự.',
    image: img('1555041469-a586c61ea9bc'),
    fallback: img('1618221195710-dd6b41faaea6'),
    gallery: [
      img('1555041469-a586c61ea9bc', 1200),
      img('1618221195710-dd6b41faaea6', 1200),
      img('1586023492125-27b2c045efd7', 1200),
      img('1567016432779-094069958ea5', 1200),
    ],
    specs: {
      'Kích thước': '220 × 95 × 85 cm (D × R × C)',
      'Chất liệu': 'Da bò Ý, khung gỗ sồi',
      'Màu sắc': 'Nâu cognac / Xám slate',
      'Bảo hành': '5 năm khung, 2 năm da',
      'Xuất xứ': 'Thiết kế Ý · Lắp ráp VN',
    },
    highlights: [
      'Da thật nhập khẩu, chống trầy xước',
      'Đệm mousse HR đàn hồi cao',
      'Chân sofa kim loại mạ vàng champagne',
      'Tùy chọn module góc chữ L',
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
    sku: 'NORA-TB-002',
    inStock: true,
    shortDescription: 'Gỗ óc chó, mặt đá cẩm thạch tự nhiên.',
    description:
      'Bàn ăn Nordic kết hợp mặt đá cẩm thạch Carrara và chân gỗ óc chó uốn cong theo phong cách Bắc Âu. Bề mặt chống thấm, dễ vệ sinh — lý tưởng cho gia đình 4–6 người.',
    image: img('1592078615290-033ee584e267'),
    fallback: img('1615529328331-f8917597711f'),
    gallery: [
      img('1592078615290-033ee584e267', 1200),
      img('1615529328331-f8917597711f', 1200),
      img('1600585154340-be6161a56a0c', 1200),
      img('1618221195710-dd6b41faaea6', 1200),
    ],
    specs: {
      'Kích thước': '180 × 90 × 76 cm',
      'Chất liệu': 'Đá cẩm thạch + gỗ óc chó',
      'Sức chứa': '6 người',
      'Bảo hành': '3 năm',
      'Hoàn thiện': 'Phủ matte chống bám',
    },
    highlights: [
      'Mặt đá nguyên khối, vân tự nhiên',
      'Chân gỗ FSC chứng nhận',
      'Góc bo tròn an toàn trẻ em',
      'Kèm bộ ghế đồng bộ (tùy chọn)',
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
    sku: 'NORA-BD-003',
    inStock: true,
    shortDescription: 'Thiết kế tối giản, nệm memory foam cao cấp.',
    description:
      'Giường Zen mang triết lý tối giản Nhật Bản — headboard bọc vải cao cấp, khung gỗ tần bì vững chắc, tích hợp hộc đầu giường tiện lợi. Kèm nệm memory foam 25cm.',
    image: img('1505693416388-ac5ce068fe85'),
    fallback: img('1522771739844-4743f0992acb'),
    gallery: [
      img('1505693416388-ac5ce068fe85', 1200),
      img('1522771739844-4743f0992acb', 1200),
      img('1616594039964-ae9021a400a0', 1200),
      img('1631049307264-da0ec9d70304', 1200),
    ],
    specs: {
      'Kích thước': '200 × 180 cm (King)',
      'Chất liệu': 'Vải bouclé, gỗ tần bì',
      'Nệm kèm': 'Memory foam 25cm',
      'Bảo hành': '5 năm khung',
      'Tải trọng': 'Đến 300kg',
    },
    highlights: [
      'Headboard bọc vải chống bụi',
      'Hệ thống giảm rung, không kêu',
      'Ngăn kéo đầu giường tích hợp',
      'Tùy chọn kích Queen / King',
    ],
  },
  {
    id: 4,
    slug: 'ke-sach-artisan',
    name: 'Kệ sách Artisan',
    price: 8900000,
    priceDisplay: '8.900.000₫',
    collectionId: 'office',
    tag: null,
    sku: 'NORA-SH-004',
    inStock: true,
    shortDescription: 'Gỗ tần bì, tay nghề thủ công tinh xảo.',
    description:
      'Kệ sách Artisan được chế tác thủ công từ gỗ tần bì nguyên khối — 5 tầng, thiết kế mở giúp không gian thoáng. Phù hợp phòng làm việc, phòng khách hoặc hành lang.',
    image: img('1594620302200-9a762244a506'),
    fallback: img('1497366216548-37526070297c'),
    gallery: [
      img('1594620302200-9a762244a506', 1200),
      img('1497366216548-37526070297c', 1200),
      img('1524758646731-f3e662c261c8', 1200),
      img('1631679706189-7b14fbada3cb', 1200),
    ],
    specs: {
      'Kích thước': '180 × 35 × 200 cm',
      'Chất liệu': 'Gỗ tần bì tự nhiên',
      'Số tầng': '5 tầng mở',
      'Bảo hành': '3 năm',
      'Tải trọng': '40kg/tầng',
    },
    highlights: [
      'Vân gỗ tự nhiên, phủ dầu an toàn',
      'Lắp đặt không cần khoan tường',
      'Modular — mở rộng thêm module',
      'Chống cong vênh, mối mọt',
    ],
  },
  {
    id: 5,
    slug: 'den-chandelier-lumiere',
    name: 'Đèn Chandelier Lumière',
    price: 12500000,
    priceDisplay: '12.500.000₫',
    collectionId: 'decor',
    tag: 'Mới',
    sku: 'NORA-LT-005',
    inStock: true,
    shortDescription: 'Đèn chùm thủy tinh, ánh sáng vàng ấm 3000K.',
    description:
      'Đèn chùm Lumière với tinh thể thủy tinh thổi tay và khung đồng mạ vàng — tạo điểm nhấn sang trọng cho phòng khách hoặc sảnh.',
    image: img('1616486338812-3dadae4b4ace'),
    fallback: img('1618221195710-dd6b41faaea6'),
    gallery: [
      img('1616486338812-3dadae4b4ace', 1200),
      img('1513506003901-1e6a229e2d15', 1200),
      img('1565814329452-e1efa11c48b9', 1200),
    ],
    specs: {
      'Đường kính': '60 cm',
      'Công suất': 'LED 48W',
      'Nhiệt độ màu': '3000K warm',
      'Bảo hành': '2 năm',
      'Lắp đặt': 'Trần thạch cao / bê tông',
    },
    highlights: ['Dimmer điều chỉnh 3 mức', 'Tiết kiệm điện LED', 'Dễ tháo vệ sinh'],
  },
  {
    id: 6,
    slug: 'ban-lam-viec-executive',
    name: 'Bàn làm việc Executive',
    price: 18900000,
    priceDisplay: '18.900.000₫',
    collectionId: 'office',
    tag: 'Bán chạy',
    sku: 'NORA-DK-006',
    inStock: true,
    shortDescription: 'Mặt gỗ walnut, hệ thống quản lý dây tích hợp.',
    description:
      'Bàn Executive dành cho không gian làm việc chuyên nghiệp — mặt walnut nguyên tấm, khung thép sơn tĩnh điện, khe quản lý dây điện gọn gàng.',
    image: img('1497366216548-37526070297c'),
    fallback: img('1594620302200-9a762244a506'),
    gallery: [
      img('1497366216548-37526070297c', 1200),
      img('1594620302200-9a762244a506', 1200),
      img('1631679706189-7b14fbada3cb', 1200),
    ],
    specs: {
      'Kích thước': '160 × 75 × 76 cm',
      'Chất liệu': 'Gỗ walnut, thép',
      'Tính năng': 'Khe dây, ngăn kéo',
      'Bảo hành': '5 năm',
    },
    highlights: ['Chống trầy PU cao cấp', 'Tùy chọn mặt kính', 'Ghế executive đồng bộ'],
  },
];

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCollection(collectionId) {
  return products.filter((p) => p.collectionId === collectionId);
}

export function searchProducts(query) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.shortDescription.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.sku.toLowerCase().includes(q)
  );
}
