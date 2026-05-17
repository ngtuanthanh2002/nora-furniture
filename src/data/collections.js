const FALLBACK = 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=85&auto=format&fit=crop';

export const collections = [
  {
    id: 'living',
    name: 'Phòng khách',
    description: 'Sofa, bàn trà & decor — không gian tiếp khách ấm áp, tinh tế.',
    longDescription:
      'Bộ sưu tập phòng khách Nora kết hợp sofa bọc da cao cấp, bàn trà gỗ tự nhiên và ánh sáng layer — tạo không gian tiếp khách ấm áp, đẳng cấp.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=85&auto=format&fit=crop',
    fallback: FALLBACK,
    featured: true,
  },
  {
    id: 'bedroom',
    name: 'Phòng ngủ',
    description: 'Giường, tủ & ánh sáng — nghỉ ngơi trọn vẹn mỗi đêm.',
    longDescription:
      'Thiết kế phòng ngủ tối giản sang trọng với giường bọc đầu cao cấp, tủ âm tường và đèn ngủ ấm — tối ưu cho giấc ngủ sâu.',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=85&auto=format&fit=crop',
    fallback: 'https://images.unsplash.com/photo-1522771739844-4743f0992acb?w=800&q=85&auto=format&fit=crop',
    featured: false,
  },
  {
    id: 'dining',
    name: 'Phòng ăn',
    description: 'Bàn ghế đồng bộ — bữa cơm gia đình trọn vẹn.',
    longDescription:
      'Bàn ăn gỗ óc chó kết hợp ghế bọc vải cao cấp — không gian sum họp gia đình ấm cúng, tinh tế.',
    image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&q=85&auto=format&fit=crop',
    fallback: 'https://images.unsplash.com/photo-1615529328331-f8917597711f?w=800&q=85&auto=format&fit=crop',
    featured: false,
  },
  {
    id: 'decor',
    name: 'Decor',
    description: 'Đèn, gương & phụ kiện — điểm nhấn tinh tế cho mọi góc.',
    longDescription:
      'Phụ kiện trang trí được chọn lọc — đèn chùm, gương, tranh và vật dụng tạo điểm nhấn cho mọi không gian.',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=85&auto=format&fit=crop',
    fallback: FALLBACK,
    featured: false,
  },
  {
    id: 'office',
    name: 'Văn phòng',
    description: 'Bàn làm việc & kệ — hiệu quả trong không gian thanh lịch.',
    longDescription:
      'Nội thất văn phòng tại nhà và doanh nghiệp — bàn ergonomic, kệ lưu trữ và ghế executive đồng bộ.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=85&auto=format&fit=crop',
    fallback: FALLBACK,
    featured: false,
  },
];

export function getCollectionById(id) {
  return collections.find((c) => c.id === id);
}
