import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { PageBreadcrumb } from '../components/ui/PageBreadcrumb';
import { SafeImage } from '../components/ui/SafeImage';
import { getCollectionById } from '../data/collections';
import { getProductsByCollection } from '../data/products';
import './CollectionPage.css';

export function CollectionPage() {
  const { collectionId } = useParams();
  const collection = getCollectionById(collectionId);
  const items = getProductsByCollection(collectionId);

  if (!collection) return <Navigate to="/" replace />;

  return (
    <main className="page collection-page">
      <div className="container">
        <PageBreadcrumb items={[{ label: 'Bộ sưu tập', href: '/#collections' }, { label: collection.name }]} />

        <header className="collection-page__hero">
          <div className="collection-page__hero-media">
            <SafeImage src={collection.image} fallback={collection.fallback} alt={collection.name} />
          </div>
          <div className="collection-page__hero-text">
            <span className="collection-page__label">Bộ sưu tập</span>
            <h1>{collection.name}</h1>
            <p>{collection.longDescription || collection.description}</p>
            <Link to="/#tu-van" className="collection-page__cta">
              Tư vấn thiết kế <ArrowUpRight size={16} />
            </Link>
          </div>
        </header>

        <section className="collection-page__products">
          <h2>Sản phẩm trong bộ sưu tập</h2>
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

