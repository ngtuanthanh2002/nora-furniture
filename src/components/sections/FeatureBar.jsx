import { motion } from 'framer-motion';
import { featureHighlights } from '../../data/features';
import { useInView } from '../../hooks/useInView';
import './FeatureBar.css';

export function FeatureBar() {
  const [ref, isInView] = useInView();

  return (
    <section className="feature-bar" aria-label="Cam kết dịch vụ">
      <div
        ref={ref}
        className="feature-bar__inner container"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.08 } },
        }}
      >
        {featureHighlights.map((item) => {
          const Icon = item.icon;
          return (
            <motion.article
              key={item.title}
              className="feature-bar__item"
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
              }}
            >
              <div className="feature-bar__icon">
                <Icon size={22} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="feature-bar__title">{item.title}</h3>
                <p className="feature-bar__desc">{item.description}</p>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
