import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { searchProducts } from '../../data/products';
import { SafeImage } from '../ui/SafeImage';
import './SearchModal.css';

export function SearchModal({ open, onClose }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);
  const results = searchProducts(query);

  useEffect(() => {
    if (open) {
      setQuery('');
      setTimeout(() => inputRef.current?.focus(), 80);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (open) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="search-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label="Tìm kiếm sản phẩm"
        >
          <button type="button" className="search-modal__backdrop" onClick={onClose} aria-label="Đóng" />
          <motion.div
            className="search-modal__panel"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.22 }}
          >
            <div className="search-modal__head">
              <Search size={20} className="search-modal__icon" />
              <input
                ref={inputRef}
                type="search"
                className="search-modal__input"
                placeholder="Tìm sofa, bàn ăn, giường, mã SKU..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoComplete="off"
              />
              <button type="button" className="search-modal__close" onClick={onClose} aria-label="Đóng">
                <X size={22} />
              </button>
            </div>

            <div className="search-modal__body">
              {query.trim() === '' && (
                <p className="search-modal__hint">Nhập tên sản phẩm hoặc mã SKU để tìm kiếm</p>
              )}
              {query.trim() !== '' && results.length === 0 && (
                <p className="search-modal__empty">Không tìm thấy sản phẩm phù hợp</p>
              )}
              {results.length > 0 && (
                <ul className="search-modal__results">
                  {results.map((product) => (
                    <li key={product.slug}>
                      <Link
                        to={`/san-pham/${product.slug}`}
                        className="search-modal__result"
                        onClick={onClose}
                      >
                        <SafeImage
                          src={product.image}
                          fallback={product.fallback}
                          alt=""
                          className="search-modal__thumb"
                        />
                        <div>
                          <span className="search-modal__name">{product.name}</span>
                          <span className="search-modal__meta">
                            {product.priceDisplay} · {product.sku}
                          </span>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
