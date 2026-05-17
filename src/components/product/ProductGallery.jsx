import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SafeImage } from '../ui/SafeImage';
import './ProductGallery.css';

export function ProductGallery({ images, alt, fallback }) {
  const slides = images?.length ? images : [fallback];
  const [active, setActive] = useState(0);

  const go = (dir) => {
    setActive((i) => (i + dir + slides.length) % slides.length);
  };

  return (
    <div className="product-gallery">
      <div className="product-gallery__main">
        <SafeImage
          src={slides[active]}
          fallback={fallback || slides[0]}
          alt={alt}
          className="product-gallery__image"
        />
        {slides.length > 1 && (
          <>
            <button
              type="button"
              className="product-gallery__nav product-gallery__nav--prev"
              onClick={() => go(-1)}
              aria-label="Ảnh trước"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              type="button"
              className="product-gallery__nav product-gallery__nav--next"
              onClick={() => go(1)}
              aria-label="Ảnh sau"
            >
              <ChevronRight size={22} />
            </button>
            <div className="product-gallery__dots">
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`product-gallery__dot ${i === active ? 'product-gallery__dot--active' : ''}`}
                  onClick={() => setActive(i)}
                  aria-label={`Ảnh ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      {slides.length > 1 && (
        <div className="product-gallery__thumbs">
          {slides.map((src, i) => (
            <button
              key={`${src}-${i}`}
              type="button"
              className={`product-gallery__thumb ${i === active ? 'product-gallery__thumb--active' : ''}`}
              onClick={() => setActive(i)}
            >
              <SafeImage src={src} fallback={fallback} alt="" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

