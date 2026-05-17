import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { SafeImage } from '../ui/SafeImage';
import { collections } from '../../data/collections';
import { useInView } from '../../hooks/useInView';
import './FeaturedCollections.css';

export function FeaturedCollections() {
  const [ref, isInView] = useInView();
  const featured = collections.find((c) => c.featured);
  const rest = collections.filter((c) => !c.featured);

  return (
    <section id="collections" className="section collections">
      <motion.div
        ref={ref}
        className="container"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
      >
        <SectionHeader
          label="Bộ sưu tập"
          title="Không gian theo phong cách riêng"
          subtitle="Mỗi bộ sưu tập được thiết kế đồng bộ — vật liệu, màu sắc và ánh sáng hài hòa từ đầu đến cuối."
        />

        {featured && (
          <Link to={`/bo-suu-tap/${featured.id}`} className="collection-hero">
            <div className="collection-hero__media">
              <SafeImage
                src={featured.image}
                fallback={featured.fallback}
                alt={featured.name}
                loading="lazy"
              />
              <div className="collection-hero__overlay" />
            </div>
            <div className="collection-hero__content">
              <span className="collection-hero__tag">Bộ sưu tập nổi bật</span>
              <h3>{featured.name}</h3>
              <p>{featured.description}</p>
              <span className="collection-hero__cta">
                Khám phá bộ sưu tập
                <ArrowUpRight size={18} />
              </span>
            </div>
          </Link>
        )}

        <div className="collections__grid">
          {rest.map((item, i) => (
            <motion.div
              key={item.id}
              className="collection-tile"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.15 + i * 0.07 }}
            >
              <Link to={`/bo-suu-tap/${item.id}`} className="collection-tile">
              <div className="collection-tile__media">
                <SafeImage
                  src={item.image}
                  fallback={item.fallback}
                  alt={item.name}
                  loading="lazy"
                />
                <div className="collection-tile__overlay" />
                <span className="collection-tile__hover-cta">
                  Xem chi tiết <ArrowUpRight size={16} />
                </span>
              </div>
              <div className="collection-tile__content">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
