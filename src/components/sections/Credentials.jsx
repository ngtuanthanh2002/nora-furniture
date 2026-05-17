import { motion } from 'framer-motion';
import { featureHighlights } from '../../data/features';
import { trustStats } from '../../data/trust';
import { useInView } from '../../hooks/useInView';
import './Credentials.css';

export function Credentials() {
  const [ref, isInView] = useInView({ threshold: 0.12 });

  return (
    <section className="credentials" aria-label="Cam kết và thành tựu">
      <div
        ref={ref}
        className="credentials__inner container"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
      >
        <div className="credentials__top">
          <div
            className="credentials__intro"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55 }}
          >
            <span className="section-label">Tại sao tin Nora</span>
            <h2 className="credentials__title">
              Tiêu chuẩn cao cấp
              <br />
              trong từng chi tiết
            </h2>
            <p className="credentials__desc">
              Không chỉ bán nội thất — chúng tôi chịu trách nhiệm trọn vẹn cho trải nghiệm
              từ thiết kế, sản xuất đến lắp đặt và hậu mãi.
            </p>
          </div>

          <div
            className="credentials__stats"
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.06 } },
            }}
          >
            {trustStats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="credentials__stat"
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
                  }}
                >
                  <Icon size={18} strokeWidth={1.5} className="credentials__stat-icon" />
                  <span className="credentials__stat-value">{stat.value}</span>
                  <span className="credentials__stat-label">{stat.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div
          className="credentials__features"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
          }}
        >
          {featureHighlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                className="credentials__feature"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                whileHover={{ y: -4 }}
              >
                <span className="credentials__feature-num">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="credentials__feature-icon">
                  <Icon size={22} strokeWidth={1.5} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
