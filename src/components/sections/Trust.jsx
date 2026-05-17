import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { trustStats } from '../../data/trust';
import './Trust.css';

export function Trust() {
  const [ref, isInView] = useInView();

  return (
    <section className="trust" aria-label="Thống kê thương hiệu">
      <div
        ref={ref}
        className="trust__inner container"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {trustStats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="trust__item"
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <div className="trust__icon">
                <Icon size={22} strokeWidth={1.5} />
              </div>
              <span className="trust__value">{stat.value}</span>
              <span className="trust__label">{stat.label}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
