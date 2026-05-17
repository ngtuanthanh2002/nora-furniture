import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Search, ShoppingBag, User, Menu, X } from 'lucide-react';
import { mainNavLinks } from '../../data/navigation';
import { Logo } from '../ui/Logo';
import { Button } from '../ui/Button';
import { SearchModal } from '../search/SearchModal';
import { useCart } from '../../context/CartContext';
import './Header.css';

function NavLink({ link, className, onClick }) {
  const isHash = link.href.includes('#');
  if (isHash) {
    return (
      <a href={link.href} className={className} onClick={onClick}>
        {link.label}
      </a>
    );
  }
  return (
    <Link to={link.href} className={className} onClick={onClick}>
      {link.label}
    </Link>
  );
}

export function Header() {
  const { pathname } = useLocation();
  const { itemCount } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const isHome = pathname === '/';
  const forceSolid = !isHome || scrolled || mobileOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen || searchOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen, searchOpen]);

  const logoVariant = forceSolid ? 'default' : 'light';

  return (
    <>
      <header
        className={`site-header ${forceSolid ? 'site-header--scrolled' : ''} ${mobileOpen ? 'site-header--menu-open' : ''}`}
      >
        <div className="header">
          <div className="header__inner container">
            <Link to="/" className="header__logo-link" aria-label="Nội thất Nora — Trang chủ">
              <Logo variant={logoVariant} />
            </Link>

            <nav className="header__nav" aria-label="Menu chính">
              <ul className="header__menu">
                {mainNavLinks.map((link) => (
                  <li key={link.href}>
                    <NavLink link={link} className="header__link" />
                  </li>
                ))}
              </ul>
            </nav>

            <div className="header__actions">
              <button
                type="button"
                className="header__icon"
                aria-label="Tìm kiếm"
                onClick={() => setSearchOpen(true)}
              >
                <Search size={20} strokeWidth={1.75} />
              </button>
              <Link to="/gio-hang" className="header__icon" aria-label="Giỏ hàng">
                <ShoppingBag size={20} strokeWidth={1.75} />
                {itemCount > 0 && (
                  <span className="header__cart-badge">{itemCount > 9 ? '9+' : itemCount}</span>
                )}
              </Link>
              <Link
                to="/tai-khoan"
                className="header__icon header__icon--account"
                aria-label="Tài khoản"
              >
                <User size={20} strokeWidth={1.75} />
              </Link>
              <Button href="/#tu-van" variant="primary" size="sm" className="header__cta">
                Đặt tư vấn
              </Button>
              <button
                type="button"
                className="header__burger"
                aria-label={mobileOpen ? 'Đóng menu' : 'Mở menu'}
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                className="header__mobile"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.22 }}
              >
                <nav className="header__mobile-nav container">
                  {mainNavLinks.map((link) => (
                    <NavLink
                      key={link.href}
                      link={link}
                      className="header__mobile-link"
                      onClick={() => setMobileOpen(false)}
                    />
                  ))}
                  <Link
                    to="/gio-hang"
                    className="header__mobile-link"
                    onClick={() => setMobileOpen(false)}
                  >
                    Giỏ hàng {itemCount > 0 ? `(${itemCount})` : ''}
                  </Link>
                  <Link
                    to="/tai-khoan"
                    className="header__mobile-link"
                    onClick={() => setMobileOpen(false)}
                  >
                    Tài khoản
                  </Link>
                  <Button href="/#tu-van" variant="primary" size="md" className="header__mobile-cta">
                    Đặt tư vấn miễn phí
                  </Button>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
