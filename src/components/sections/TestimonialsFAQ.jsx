import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Star } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { testimonials } from '../../data/testimonials';
import { faqItems } from '../../data/faq';
import { useInView } from '../../hooks/useInView';
import './TestimonialsFAQ.css';

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}>
      <button
        type="button"
        className="faq-item__trigger"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span>{item.question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown size={20} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <div
            className="faq-item__content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
          >
            <p>{item.answer}</p>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function TestimonialsFAQ() {
  const [ref, isInView] = useInView();
  const [openFaq, setOpenFaq] = useState(faqItems[0]?.id ?? null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <section id="faq" className="section">
      <div className="container">
        <div
          ref={ref}
          className="testimonials-faq"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
        >
          <div
            className="testimonials-faq__testimonials"
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader
              label="Đánh giá"
              title="Khách hàng nói gì về Nora"
              subtitle="Niềm tin từ những không gian đã hoàn thiện."
            />

            <div className="testimonials__carousel">
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={activeTestimonial}
                  className="testimonial-card"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="testimonial-card__stars">
                    {Array.from({ length: testimonials[activeTestimonial].rating }).map(
                      (_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      )
                    )}
                  </div>
                  <p className="testimonial-card__text">
                    "{testimonials[activeTestimonial].content}"
                  </p>
                  <footer className="testimonial-card__author">
                    <img
                      src={testimonials[activeTestimonial].avatar}
                      alt=""
                      className="testimonial-card__avatar"
                    />
                    <div>
                      <cite>{testimonials[activeTestimonial].name}</cite>
                      <span>{testimonials[activeTestimonial].role}</span>
                    </div>
                  </footer>
                </motion.blockquote>
              </AnimatePresence>

              <div className="testimonials__dots">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    className={`testimonials__dot ${i === activeTestimonial ? 'testimonials__dot--active' : ''}`}
                    aria-label={`Xem đánh giá ${i + 1}`}
                    onClick={() => setActiveTestimonial(i)}
                  />
                ))}
              </div>
            </div>
          </div>

          <div
            className="testimonials-faq__faq"
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <SectionHeader
              label="FAQ"
              title="Câu hỏi thường gặp"
              subtitle="Giải đáp nhanh về đặt hàng, giao hàng và bảo hành."
            />

            <div className="faq__list">
              {faqItems.map((item) => (
                <FAQItem
                  key={item.id}
                  item={item}
                  isOpen={openFaq === item.id}
                  onToggle={() => setOpenFaq(openFaq === item.id ? null : item.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
