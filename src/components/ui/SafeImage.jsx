import { useEffect, useState } from 'react';

const PLACEHOLDER =
  'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=85&auto=format&fit=crop';

export function SafeImage({ src, fallback, alt, className, loading }) {
  const candidates = [src, fallback, PLACEHOLDER].filter(Boolean);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [src, fallback]);

  const current = candidates[Math.min(index, candidates.length - 1)];

  return (
    <img
      src={current}
      alt={alt}
      className={className}
      loading={loading}
      onError={() => {
        setIndex((i) => (i < candidates.length - 1 ? i + 1 : i));
      }}
    />
  );
}
