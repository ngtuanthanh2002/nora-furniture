import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowUpRight, Check } from 'lucide-react';
import { PageBreadcrumb } from '../components/ui/PageBreadcrumb';
import { SafeImage } from '../components/ui/SafeImage';
import { getCollectionById } from '../data/collections';
import { getProductsByCollection } from '../data/products';
import './CollectionPage.css';

const collectionFeatures = {
  living: ['Sofa & ghế bọc cao cấp', 'Bàn trà & kệ trang trí', 'Ánh sáng layer', 'Tư vấn phối màu'],
  bedroom: ['Giường & nệm đồng bộ', 'Tủ âm tường tùy chỉnh', 'Rèm & đèn ngủ', 'Vật liệu chống ẩm'],
  dining: ['Bàn đá & gỗ tự nhiên', 'Ghế bọc đồng bộ', 'Tủ rượu tích hợp', 'Kích thước may đo'],
  decor: ['Đèn chùm & đèn bàn', 'Gương & tranh nghệ thuật', 'Phụ kiện điểm nhấn', 'Styling tận nơi'],
  office: ['Bàn làm việc ergonomic', 'Kệ & tủ lưu trữ', 'Ghế executive', 'Quản lý dây điện'],
};

export function CollectionPage() {
  const { collectionId } = useParams();
  const collection = getCollectionById(collectionId);
  const items = getProductsByCollection(collectionId);
  const features = collectionFeatures[collectionId] || [];

  if (!collection) return <Navigate to="/" replace />;

  return (
    <main className="page collection-page">
      <div className="container">
        <PageBreadcrumb
          items={[{ label: 'Bộ sưu tập', href: '/#collections' }, { label: collection.name }]}
        />

        <header className="collection-page__hero">
          <div className="collection-page__hero-media">
            <SafeImage src={collection.image} fallback={collection.fallback} alt={collection.name} />
          </div>
          <div className="collection-page__hero-text">
            <span className="collection-page__label">Bộ sưu tập</span>
            <h1>{collection.name}</h1>
            <p className="collection-page__lead">{collection.longDescription || collection.description}</p>
            <p className="collection-page__meta">
              {items.length} sản phẩm · Thiết kế đồng bộ · Bảo hành chính hãng
            </p>
            <Link to="/#tu-van" className="collection-page__cta">
              Đăng ký tư vấn miễn phí <ArrowUpRight size={16} />
            </Link>
          </div>
        </header>

        {features.length > 0 && (
          <section className="collection-page__features">
            <h2>Đặc trưng bộ sưu tập</h2>
            <ul>
              {features.map((f) => (
                <li key={f}>
                  <Check size={18} strokeWidth={2} />
                  {f}
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="collection-page__process">
          <h2>Quy trình đặt hàng</h2>
          <ol>
            <li>
              <strong>01 — Khảo sát</strong>
              <span>Đo đạc thực tế, tư vấn phong cách & ngân sách tại showroom hoặc tại nhà.</span>
            </li>
            <li>
              <strong>02 — Thiết kế 3D</strong>
              <span>Bản phối cảnh 3D miễn phí, chỉnh sửa đến khi bạn hài lòng.</span>
            </li>
            <li>
              <strong>03 — Sản xuất</strong>
              <span>Minh bạch tiến độ, vật liệu có nguồn gốc rõ ràng.</span>
            </li>
            <li>
              <strong>04 — Bàn giao</strong>
              <span>Giao hàng, lắp đặt và nghiệm thu tận nơi.</span>
            </li>
          </ol>
        </section>

        <section className="collection-page__products">
          <div className="collection-page__products-head">
            <h2>Sản phẩm trong bộ sưu tập</h2>
            <Link to="/#products">Xem tất cả sản phẩm bán chạy</Link>
          </div>
          {items.length === 0 ? (
            <p className="collection-page__empty">Đang cập nhật sản phẩm cho bộ sưu tập này.</p>
          ) : (
            <div className="collection-page__grid">
              {items.map((product) => (
                <Link key={product.slug} to={`/san-pham/${product.slug}`} className="collection-product">
                  <div className="collection-product__media">
                    <SafeImage src={product.image} fallback={product.fallback} alt={product.name} />
                    {product.tag && <span className="collection-product__tag">{product.tag}</span>}
                  </div>
                  <div className="collection-product__body">
                    <h3>{product.name}</h3>
                    <p>{product.shortDescription}</p>
                    <span className="collection-product__price">{product.priceDisplay}</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
