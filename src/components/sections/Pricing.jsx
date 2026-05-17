import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';
import { pricingPlans } from '../../data/pricing';
import { useInView } from '../../hooks/useInView';
import './Pricing.css';

export function Pricing() {
  const [ref, isInView] = useInView();

  return (
    <section id="pricing" className="section pricing-section">
      <motion.div
        ref={ref}
        className="container"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <SectionHeader
          label="Bảng giá"
          title="Gói dịch vụ rõ ràng, dễ so sánh"
          subtitle="Minh bạch từng hạng mục — chọn gói phù hợp quy mô và ngân sách của bạn."
          align="center"
        />

        <div className="pricing-table">
          {pricingPlans.map((plan, i) => (
            <motion.article
              key={plan.id}
              className={`pricing-plan ${plan.featured ? 'pricing-plan--featured' : ''}`}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.1 }}
            >
              {plan.badge && <span className="pricing-plan__badge">{plan.badge}</span>}

              <header className="pricing-plan__head">
                <span className="pricing-plan__tier">Gói {plan.name}</span>
                <p className="pricing-plan__price">{plan.price}</p>
                {plan.timeline && (
                  <p className="pricing-plan__timeline">Thời gian: {plan.timeline}</p>
                )}
                <p className="pricing-plan__audience">{plan.audience}</p>
              </header>

              <div className="pricing-plan__divider" />

              <ul className="pricing-plan__features">
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <span className="pricing-plan__check">
                      <Check size={14} strokeWidth={2.5} />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                href="#tu-van"
                variant={plan.featured ? 'primary' : 'outline'}
                size="md"
                className="pricing-plan__cta"
              >
                {plan.cta}
              </Button>
            </motion.article>
          ))}
        </div>

        <p className="pricing-note">
          * Giá tham khảo, báo giá chi tiết sau khảo sát thực tế. Hỗ trợ trả góp 0% qua đối tác ngân hàng.
        </p>
      </motion.div>
    </section>
  );
}
