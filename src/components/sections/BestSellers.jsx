import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';
import { SafeImage } from '../ui/SafeImage';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';
import { useInView } from '../../hooks/useInView';
import './BestSellers.css';

export function BestSellers() {
  const [ref, isInView] = useInView();
  const { addItem } = useCart();

  return (
    <section id="products" className="section">
      <div className="container">
        <SectionHeader
          label="Sản phẩm"
          title="Sản phẩm bán chạy"
          subtitle="Những món nội thất được khách hàng yêu thích nhất — chất lượng, thẩm mỹ và độ bền."
        />

        <motion.div
          ref={ref}
          className="products__grid"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {products.map((product) => (
            <motion.article
              key={product.id}
              className="product-card"
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <Link to={`/san-pham/${product.slug}`} className="product-card__image-wrap">
                <SafeImage
                  src={product.image}
                  fallback={product.fallback}
                  alt={product.name}
                  className="product-card__image"
                  loading="lazy"
                />
                <div className="product-card__image-shade" aria-hidden />
                {product.tag && <span className="product-card__tag">{product.tag}</span>}
              </Link>
              <div className="product-card__body">
                <Link to={`/san-pham/${product.slug}`}>
                  <h3 className="product-card__name">{product.name}</h3>
                </Link>
                <p className="product-card__desc">{product.shortDescription}</p>
                <div className="product-card__footer">
                  <span className="product-card__price">{product.priceDisplay}</span>
                  <div className="product-card__footer-actions">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={(e) => {
                        e.preventDefault();
                        addItem(product.slug);
                      }}
                    >
                      <ShoppingBag size={14} />
                      Thêm giỏ
                    </Button>
                    <Button to={`/san-pham/${product.slug}`} variant="ghost" size="sm">
                      Chi tiết
                    </Button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
