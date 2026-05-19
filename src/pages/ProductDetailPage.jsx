import { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import {
  Check,
  Minus,
  Plus,
  ShoppingBag,
  Truck,
  Shield,
  Package,
  ChevronDown,
} from 'lucide-react';
import { ProductGallery } from '../components/product/ProductGallery';
import { PageBreadcrumb } from '../components/ui/PageBreadcrumb';
import { Button } from '../components/ui/Button';
import { SafeImage } from '../components/ui/SafeImage';
import { useCart } from '../context/CartContext';
import { getProductBySlug, products } from '../data/products';
import { getCollectionById } from '../data/collections';
import { deliveryInfo, warrantyInfo } from '../data/productContent';
import './ProductDetailPage.css';

export function ProductDetailPage() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  if (!product) return <Navigate to="/" replace />;

  const collection = getCollectionById(product.collectionId);
  const related = products
    .filter((p) => p.collectionId === product.collectionId && p.slug !== product.slug)
    .slice(0, 4);

  const handleAdd = () => {
    addItem(product.slug, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <main className="page product-detail">
      <div className="container">
        <PageBreadcrumb
          items={[
            ...(collection
              ? [{ label: collection.name, href: `/bo-suu-tap/${collection.id}` }]
              : []),
            { label: product.name },
          ]}
        />

        <div className="product-detail__grid">
          <ProductGallery
            images={product.gallery}
            alt={product.name}
            fallback={product.fallback}
          />

          <div className="product-detail__info">
            {product.tag && <span className="product-detail__tag">{product.tag}</span>}
            <h1>{product.name}</h1>
            <p className="product-detail__sku">SKU: {product.sku}</p>
            <p className="product-detail__price">{product.priceDisplay}</p>
            <p className="product-detail__short">{product.shortDescription}</p>

            <ul className="product-detail__trust">
              <li><Truck size={16} /> Giao 7–14 ngày</li>
              <li><Shield size={16} /> Bảo hành chính hãng</li>
              <li><Package size={16} /> Lắp đặt miễn phí</li>
            </ul>

            <ul className="product-detail__highlights">
              {product.highlights.map((h) => (
                <li key={h}>
                  <Check size={16} strokeWidth={2.5} />
                  {h}
                </li>
              ))}
            </ul>

            <div className="product-detail__buy">
              <div className="product-detail__qty">
                <button type="button" onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Giảm">
                  <Minus size={16} />
                </button>
                <span>{qty}</span>
                <button type="button" onClick={() => setQty((q) => q + 1)} aria-label="Tăng">
                  <Plus size={16} />
                </button>
              </div>
              <Button variant="primary" size="lg" className="product-detail__add" onClick={handleAdd}>
                <ShoppingBag size={18} />
                {added ? 'Đã thêm vào giỏ' : 'Thêm vào giỏ'}
              </Button>
            </div>

            <div className="product-detail__secondary-cta">
              <Button to="/gio-hang" variant="outline" size="md">
                Xem giỏ hàng
              </Button>
              <Button href="/#tu-van" variant="ghost" size="md">
                Tư vấn thiết kế
              </Button>
            </div>

            <p className="product-detail__stock">
              {product.inStock ? '✓ Còn hàng tại showroom Quận 1' : 'Liên hệ đặt trước'}
            </p>
          </div>
        </div>

        <section className="product-detail__block">
          <h2>Mô tả chi tiết</h2>
          <div className="product-detail__prose">
            <p>{product.description}</p>
            {product.longDescription && <p>{product.longDescription}</p>}
          </div>
        </section>

        <div className="product-detail__columns">
          <section className="product-detail__block">
            <h2>Vật liệu & hoàn thiện</h2>
            <ul className="product-detail__list">
              {product.materials?.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </section>

          <section className="product-detail__block">
            <h2>Trong hộp có gì</h2>
            <ul className="product-detail__list">
              {product.included?.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="product-detail__block">
            <h2>Hướng dẫn bảo quản</h2>
            <ul className="product-detail__list">
              {product.care?.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </section>
        </div>

        <section className="product-detail__specs">
          <h2>Thông số kỹ thuật</h2>
          <dl className="product-detail__spec-table">
            {Object.entries(product.specs).map(([key, value]) => (
              <div key={key} className="product-detail__spec-row">
                <dt>{key}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <div className="product-detail__policies">
          <article>
            <h3>{deliveryInfo.title}</h3>
            <ul>
              {deliveryInfo.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article>
            <h3>{warrantyInfo.title}</h3>
            <ul>
              {warrantyInfo.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>

        {product.faq?.length > 0 && (
          <section className="product-detail__faq">
            <h2>Câu hỏi thường gặp</h2>
            <div className="faq-accordion">
              {product.faq.map((item, i) => (
                <div key={item.q} className={`faq-item ${openFaq === i ? 'faq-item--open' : ''}`}>
                  <button
                    type="button"
                    className="faq-item__trigger"
                    onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                    aria-expanded={openFaq === i}
                  >
                    {item.q}
                    <ChevronDown size={18} />
                  </button>
                  {openFaq === i && <div className="faq-item__answer">{item.a}</div>}
                </div>
              ))}
            </div>
          </section>
        )}

        {related.length > 0 && (
          <section className="product-detail__related">
            <h2>Sản phẩm liên quan</h2>
            <div className="product-detail__related-grid">
              {related.map((p) => (
                <Link key={p.slug} to={`/san-pham/${p.slug}`} className="related-card">
                  <SafeImage src={p.image} fallback={p.fallback} alt={p.name} />
                  <div>
                    <h3>{p.name}</h3>
                    <span>{p.priceDisplay}</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
