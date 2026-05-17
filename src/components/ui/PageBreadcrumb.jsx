import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import './PageBreadcrumb.css';

export function PageBreadcrumb({ items }) {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <ol className="breadcrumb__list">
        <li>
          <Link to="/">Trang chủ</Link>
        </li>
        {items.map((item, i) => (
          <li key={item.label}>
            <ChevronRight size={14} aria-hidden />
            {item.href && i < items.length - 1 ? (
              <Link to={item.href}>{item.label}</Link>
            ) : (
              <span aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
