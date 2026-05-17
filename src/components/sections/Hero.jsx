import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import './Hero.css';

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=2400&q=90&auto=format&fit=crop';

const heroStats = [
  { value: '500+', label: 'Dự án hoàn thiện' },
  { value: '12+', label: 'Năm kinh nghiệm' },
  { value: '98%', label: 'Khách hài lòng' },
];

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);

  return (
    <section id="hero" className="hero" ref={ref}>
      <div className="hero__media">
        <motion.div className="hero__image-wrap" style={{ y: imageY }}>
          <img
            src={HERO_IMAGE}
            alt="Không gian nội thất cao cấp Nội thất Nora"
            className="hero__image"
            loading="eager"
          />
        </motion.div>
        <div className="hero__gradient" aria-hidden />
      </div>

      <div className="hero__body container">
        <motion.div
          className="hero__copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
        >
          <p className="hero__eyebrow">
            <span className="hero__eyebrow-dot" aria-hidden />
            Showroom Quận 1 · Tư vấn & thiết kế 3D miễn phí
          </p>

          <h1 className="hero__title">
            <span className="hero__title-top">Kiến tạo không gian</span>
            <span className="hero__title-highlight">sống đẳng cấp</span>
            <span className="hero__title-bottom">bền vững theo thời gian</span>
          </h1>

          <p className="hero__lead">
            <strong>Nội thất Nora</strong> — thiết kế đồng bộ, vật liệu chọn lọc, thi công trọn gói.
            Từ ý tưởng đến bàn giao, mọi bước đều minh bạch.
          </p>

          <div className="hero__cta">
            <Button href="#tu-van" variant="primary" size="lg" className="hero__btn-primary">
              Đăng ký tư vấn miễn phí
              <ArrowRight size={18} />
            </Button>
            <Button href="#collections" variant="secondary" size="lg">
              Xem bộ sưu tập
            </Button>
          </div>
        </motion.div>
      </div>

      <div className="hero__stats-bar">
        <div className="hero__stats-bar-inner container">
          {heroStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="hero__stat"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 + i * 0.08 }}
            >
              <span className="hero__stat-value">{stat.value}</span>
              <span className="hero__stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
