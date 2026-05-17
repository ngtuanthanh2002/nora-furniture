import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Button.css';

const variants = {
  primary: 'btn--primary',
  secondary: 'btn--secondary',
  outline: 'btn--outline',
  ghost: 'btn--ghost',
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  onClick,
  disabled = false,
  className = '',
  type = 'button',
  ...props
}) {
  const classes = `btn ${variants[variant]} btn--${size} ${className}`.trim();

  const motionProps = {
    whileHover: disabled ? {} : { scale: 1.02 },
    whileTap: disabled ? {} : { scale: 0.98 },
    transition: { duration: 0.2 },
  };

  if (to) {
    return (
      <Link to={to} className={classes} aria-disabled={disabled} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        aria-disabled={disabled}
        {...motionProps}
        {...props}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...motionProps}
      {...props}
    >
      {children}
    </motion.button>
  );
}
