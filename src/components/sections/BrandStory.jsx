import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { brandStory } from '../../data/story';
import { useInView } from '../../hooks/useInView';
import './BrandStory.css';

export function BrandStory() {
  const [ref, isInView] = useInView();

  return (
    <section id="story" className="section section--alt brand-story">
      <div
        ref={ref}
        className="container brand-story__grid"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
      >
        <div
          className="brand-story__media"
          initial={{ opacity: 0, x: -24 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <img src={brandStory.image} alt="Không gian showroom Nội thất Nora" loading="lazy" />
        </div>

        <div
          className="brand-story__content"
          initial={{ opacity: 0, x: 24 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="section-label">{brandStory.label}</span>
          <h2 className="section-title">{brandStory.title}</h2>
          {brandStory.paragraphs.map((p) => (
            <p key={p.slice(0, 24)} className="brand-story__para">
              {p}
            </p>
          ))}

          <div className="brand-story__stats">
            {brandStory.stats.map((stat) => (
              <div key={stat.label} className="brand-story__stat">
                <span className="brand-story__stat-value">{stat.value}</span>
                <span className="brand-story__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>

          <Button href="#tu-van" variant="outline" size="md">
            Tìm hiểu thêm về Nora
          </Button>
        </div>
      </div>
    </section>
  );
}
