import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/Button';
import { contactInfo } from '../../data/navigation';
import { spaceTypes, budgetRanges } from '../../data/consultation';
import { useInView } from '../../hooks/useInView';
import './ConsultationForm.css';

const initialForm = {
  name: '',
  phone: '',
  email: '',
  spaceType: '',
  budget: '',
  area: '',
  message: '',
};

export function ConsultationForm() {
  const [ref, isInView] = useInView();
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name.trim() && form.phone.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section id="tu-van" className="section consultation">
      <div
        ref={ref}
        className="container consultation__grid"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
      >
        <div
          className="consultation__info"
          initial={{ opacity: 0, x: -24 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          <span className="section-label">Đăng ký tư vấn</span>
          <h2 className="consultation__title">
            Bắt đầu dự án
            <br />
            không gian của bạn
          </h2>
          <p className="consultation__desc">
            Điền form bên cạnh — chuyên viên Nora sẽ liên hệ trong vòng{' '}
            <strong>24 giờ</strong> để tư vấn miễn phí, đo đạc và báo giá sơ bộ.
          </p>

          <ul className="consultation__perks">
            <li>
              <CheckCircle2 size={18} />
              Tư vấn & bản vẽ 3D miễn phí
            </li>
            <li>
              <CheckCircle2 size={18} />
              Không ràng buộc khi chưa ký hợp đồng
            </li>
            <li>
              <CheckCircle2 size={18} />
              Bảo mật thông tin cá nhân
            </li>
          </ul>

          <div className="consultation__contact">
            <p>
              <MapPin size={16} />
              {contactInfo.address}
            </p>
            <p>
              <Phone size={16} />
              <a href={`tel:${contactInfo.phone}`}>{contactInfo.phoneDisplay}</a>
            </p>
            <p>
              <Clock size={16} />
              {contactInfo.hours}
            </p>
          </div>
        </div>

        <div
          className="consultation__form-wrap"
          initial={{ opacity: 0, x: 24 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          {submitted ? (
            <div
              className="consultation__success"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <CheckCircle2 size={48} strokeWidth={1.5} />
              <h3>Đã gửi đăng ký thành công!</h3>
              <p>
                Cảm ơn bạn, {form.name}. Chúng tôi sẽ gọi điện hoặc nhắn Zalo trong thời gian
                sớm nhất.
              </p>
              <Button variant="outline" size="md" onClick={() => setSubmitted(false)}>
                Gửi yêu cầu khác
              </Button>
            </div>
          ) : (
            <form className="consultation__form" onSubmit={handleSubmit} noValidate>
              <div className="form-row form-row--2">
                <label>
                  Họ và tên <span>*</span>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Nguyễn Văn A"
                    required
                  />
                </label>
                <label>
                  Số điện thoại <span>*</span>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="0901 234 567"
                    required
                  />
                </label>
              </div>

              <label>
                Email
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="email@example.com"
                />
              </label>

              <div className="form-row form-row--2">
                <label>
                  Loại không gian
                  <select name="spaceType" value={form.spaceType} onChange={handleChange}>
                    <option value="">Chọn loại</option>
                    {spaceTypes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </label>
                <label>
                  Ngân sách dự kiến
                  <select name="budget" value={form.budget} onChange={handleChange}>
                    <option value="">Chọn mức</option>
                    {budgetRanges.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label>
                Diện tích (m²)
                <input
                  type="text"
                  name="area"
                  value={form.area}
                  onChange={handleChange}
                  placeholder="VD: 85m²"
                />
              </label>

              <label>
                Mô tả nhu cầu
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Phong cách mong muốn, thời gian bàn giao..."
                />
              </label>

              <Button type="submit" variant="primary" size="lg" className="consultation__submit">
                Gửi đăng ký tư vấn
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
