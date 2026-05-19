import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, ShoppingBag } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { SafeImage } from '../ui/SafeImage';
import { getBestsellerProducts } from '../../data/products';
import { useCart } from '../../context/CartContext';
import { useInView } from '../../hooks/useInView';
import './BestSellers.css';

export function BestSellers() {
  const [ref, isInView] = useInView();
  const { addItem } = useCart();
  const products = getBestsellerProducts();

  return (
    <section id="products" className="section products-section">
      <div className="container">
        <SectionHeader
          label="Sản phẩm"
          title="Sản phẩm bán chạy"
          subtitle="8 món nội thất được khách Nora yêu thích — chất lượng, thẩm mỹ và độ bền vượt trội."
        />

        <motion.div
          ref={ref}
          className="products__grid"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.06 } },
          }}
        >
          {products.map((product) => (
            <motion.article
              key={product.id}
              className="product-card"
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
            >
              <Link to={`/san-pham/${product.slug}`} className="product-card__media">
                <SafeImage
                  src={product.image}
                  fallback={product.fallback}
                  alt={product.name}
                  className="product-card__image"
                  loading="lazy"
                />
                {product.tag && <span className="product-card__tag">{product.tag}</span>}
                <span className="product-card__overlay">
                  Xem chi tiết <ArrowUpRight size={14} />
                </span>
              </Link>

              <div className="product-card__body">
                <Link to={`/san-pham/${product.slug}`}>
                  <h3 className="product-card__name">{product.name}</h3>
                </Link>
                <p className="product-card__desc">{product.shortDescription}</p>
                <div className="product-card__row">
                  <span className="product-card__price">{product.priceDisplay}</span>
                  <button
                    type="button"
                    className="product-card__cart"
                    aria-label={`Thêm ${product.name} vào giỏ`}
                    onClick={() => addItem(product.slug)}
                  >
                    <ShoppingBag size={16} />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <p className="products-section__note">
          Giá đã bao gồm VAT · Miễn phí giao nội thành TP.HCM ·{' '}
          <Link to="/#tu-van">Đặt lịch tư vấn miễn phí</Link>
        </p>
      </div>
    </section>
  );
}
