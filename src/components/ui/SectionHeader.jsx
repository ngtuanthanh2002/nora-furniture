import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import './SectionHeader.css';

export function SectionHeader({ label, title, subtitle, align = 'left', id }) {
  const [ref, isInView] = useInView();

  return (
    <motion.header
      ref={ref}
      id={id}
      className={`section-header section-header--${align}`}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >
      {label && <span className="section-label">{label}</span>}
      {title && <h2 className="section-title">{title}</h2>}
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </motion.header>
  );
}
