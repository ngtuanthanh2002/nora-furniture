import { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { Check, Minus, Plus, ShoppingBag } from 'lucide-react';
import { ProductGallery } from '../components/product/ProductGallery';
import { PageBreadcrumb } from '../components/ui/PageBreadcrumb';
import { Button } from '../components/ui/Button';
import { useCart } from '../context/CartContext';
import { getProductBySlug, products } from '../data/products';
import { getCollectionById } from '../data/collections';
import { SafeImage } from '../components/ui/SafeImage';
import './ProductDetailPage.css';

export function ProductDetailPage() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) return <Navigate to="/" replace />;

  const collection = getCollectionById(product.collectionId);
  const related = products
    .filter((p) => p.collectionId === product.collectionId && p.slug !== product.slug)
    .slice(0, 3);

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
            <p className="product-detail__desc">{product.description}</p>

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
                <button
                  type="button"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  aria-label="Giảm số lượng"
                >
                  <Minus size={16} />
                </button>
                <span>{qty}</span>
                <button
                  type="button"
                  onClick={() => setQty((q) => q + 1)}
                  aria-label="Tăng số lượng"
                >
                  <Plus size={16} />
                </button>
              </div>
              <Button
                variant="primary"
                size="lg"
                className="product-detail__add"
                onClick={handleAdd}
              >
                <ShoppingBag size={18} />
                {added ? 'Đã thêm vào giỏ' : 'Thêm vào giỏ'}
              </Button>
            </div>

            <Button to="/gio-hang" variant="outline" size="md">
              Xem giỏ hàng
            </Button>

            <p className="product-detail__stock">
              {product.inStock ? '✓ Còn hàng — Giao 7–14 ngày' : 'Liên hệ đặt trước'}
            </p>
          </div>
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

