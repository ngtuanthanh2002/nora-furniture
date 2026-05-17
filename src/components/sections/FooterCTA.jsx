import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Share2, MessageCircle, Play } from 'lucide-react';
import { Button } from '../ui/Button';
import { footerLinks, contactInfo } from '../../data/navigation';
import { Logo } from '../ui/Logo';
import { useInView } from '../../hooks/useInView';
import './FooterCTA.css';

const socialLinks = [
  { icon: Share2, href: '#', label: 'Facebook' },
  { icon: MessageCircle, href: '#', label: 'Instagram' },
  { icon: Play, href: '#', label: 'Youtube' },
];

export function FooterCTA() {
  const [ref, isInView] = useInView();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return (
    <>
      <section className="final-cta">
        <div
          className="final-cta__bg"
          initial={{ scale: 1.05 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        />
        <div
          ref={ref}
          className="final-cta__content container"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="final-cta__title">
            Sẵn sàng biến không gian của bạn?
          </h2>
          <p className="final-cta__subtitle">
            Đặt lịch tư vấn miễn phí — đội ngũ Nora sẽ đồng hành từ ý tưởng đến hoàn thiện.
          </p>
          <div className="final-cta__buttons">
            <Button href="#tu-van" variant="primary" size="lg">
              Đặt tư vấn ngay
            </Button>
            <Button href="#collections" variant="secondary" size="lg">
              Khám phá bộ sưu tập
            </Button>
          </div>
        </div>
      </section>

      <footer id="contact" className="footer">
        <div
          className="footer__inner container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="footer__grid">
            <div className="footer__brand">
              <a href="#hero" className="footer__logo-link">
                <Logo variant="footer" />
              </a>
              <p className="footer__tagline">
                Thiết kế & nội thất cao cấp — đồng hành từ ý tưởng đến không gian hoàn thiện
                cho gia đình và doanh nghiệp tại Việt Nam.
              </p>
              <div className="footer__contact">
                <a href="#" className="footer__contact-item">
                  <MapPin size={18} />
                  {contactInfo.address}
                </a>
                <a href={`tel:${contactInfo.phone}`} className="footer__contact-item">
                  <Phone size={18} />
                  Hotline: {contactInfo.phoneDisplay}
                </a>
                <a href={`mailto:${contactInfo.email}`} className="footer__contact-item">
                  <Mail size={18} />
                  {contactInfo.email}
                </a>
                <p className="footer__hours">{contactInfo.hours}</p>
                <p className="footer__hours">{contactInfo.zalo}</p>
              </div>
              <div className="footer__social">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="footer__social-link"
                    aria-label={label}
                  >
                    <Icon size={20} strokeWidth={1.5} />
                  </a>
                ))}
              </div>
            </div>

            <div className="footer__links">
              <div>
                <h4>Khám phá</h4>
                <ul>
                  {footerLinks.explore.map((link) => (
                    <li key={link.label}>
                      <a href={link.href}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4>Hỗ trợ</h4>
                <ul>
                  {footerLinks.support.map((link) => (
                    <li key={link.label}>
                      <a href={link.href}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4>Công ty</h4>
                <ul>
                  {footerLinks.company.map((link) => (
                    <li key={link.label}>
                      <a href={link.href}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="footer__newsletter">
              <h4>Nhận ưu đãi độc quyền</h4>
              <p>Đăng ký để nhận bản tin và ưu đãi dành riêng cho thành viên.</p>
              <form className="footer__form" onSubmit={handleNewsletter}>
                <input
                  type="email"
                  placeholder="Email của bạn"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={submitted}
                  aria-label="Email đăng ký"
                />
                <Button type="submit" variant="primary" size="md" disabled={submitted}>
                  {submitted ? 'Đã đăng ký' : 'Đăng ký'}
                </Button>
              </form>
            </div>
          </div>

          <div className="footer__bottom">
            <p>© {new Date().getFullYear()} Nội thất Nora. Bảo lưu mọi quyền.</p>
            <div className="footer__legal">
              <a href="#">Chính sách bảo mật</a>
              <a href="#">Điều khoản sử dụng</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
