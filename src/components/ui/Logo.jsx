import './Logo.css';

export function Logo({ variant = 'default', className = '' }) {
  const isCompact = variant === 'compact';
  const isFooter = variant === 'footer';
  const isLight = variant === 'light';

  return (
    <span className={`logo logo--${variant} ${className}`.trim()}>
      <img
        src={isLight ? '/logo-mark-light.svg' : '/logo-mark.svg'}
        alt=""
        className="logo__mark"
        width={isCompact ? 36 : 42}
        height={isCompact ? 36 : 42}
        aria-hidden
      />
      <span className="logo__text">
        <span className="logo__name">Nội thất Nora</span>
        {!isCompact && (
          <span className="logo__tagline">
            {isFooter
              ? 'Thiết kế · Thi công · Hoàn thiện'
              : 'Premium Interior Studio'}
          </span>
        )}
      </span>
    </span>
  );
}
