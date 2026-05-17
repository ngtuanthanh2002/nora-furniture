import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';
import { SafeImage } from '../ui/SafeImage';
import { services } from '../../data/services';
import { useInView } from '../../hooks/useInView';
import './WhyChoose.css';

export function WhyChoose() {
  const [ref, isInView] = useInView();
  const [primary, ...others] = services;
  const PrimaryIcon = primary?.icon;

  return (
    <section id="services" className="section why-choose">
      <div className="container">
        <div
          className="why-choose__header"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <SectionHeader
            label="Dịch vụ"
            title="Vì sao chọn Nội thất Nora"
            subtitle="Chúng tôi đồng hành từ ý tưởng đến không gian hoàn thiện — chuyên nghiệp, minh bạch, đáng tin."
          />
          <Button href="#tu-van" variant="outline" size="md" className="why-choose__cta">
            Đăng ký tư vấn
            <ArrowRight size={16} />
          </Button>
        </div>

        <div ref={ref} className="why-choose__layout">
          {primary && (
            <motion.article
              className="why-card why-card--featured"
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <SafeImage
                src={primary.image}
                fallback={primary.image}
                alt=""
                className="why-card__bg"
              />
              <div className="why-card__bg-overlay" />
              <span className="why-card__num">01</span>
              <div className="why-card__body">
                <div className="why-card__icon">
                  {PrimaryIcon && <PrimaryIcon size={28} strokeWidth={1.25} />}
                </div>
                <h3>{primary.title}</h3>
                <p>{primary.description}</p>
              </div>
            </motion.article>
          )}

          <div className="why-choose__list">
            {others.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.article
                  key={service.title}
                  className="why-card why-card--compact"
                  initial={{ opacity: 0, x: 16 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.1 + i * 0.06 }}
                >
                  <span className="why-card__num">{String(i + 2).padStart(2, '0')}</span>
                  <div className="why-card__row">
                    <div className="why-card__icon why-card__icon--sm">
                      <Icon size={22} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
