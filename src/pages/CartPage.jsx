import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { PageBreadcrumb } from '../components/ui/PageBreadcrumb';
import { Button } from '../components/ui/Button';
import { SafeImage } from '../components/ui/SafeImage';
import { useCart } from '../context/CartContext';
import './CartPage.css';

export function CartPage() {
  const { cartLines, itemCount, subtotal, formatPrice, updateQuantity, removeItem, clearCart } =
    useCart();

  return (
    <main className="page cart-page">
      <div className="container">
        <PageBreadcrumb items={[{ label: 'Giỏ hàng' }]} />
        <h1 className="cart-page__title">Giỏ hàng</h1>
        <p className="cart-page__intro">
          Kiểm tra sản phẩm, số lượng và tổng tạm tính. Sau khi xác nhận, đội Nora sẽ liên hệ tư vấn báo giá
          chi tiết và lịch giao lắp đặt.
        </p>

        {itemCount === 0 ? (
          <div className="cart-page__empty">
            <p>Giỏ hàng của bạn đang trống.</p>
            <Button to="/#products" variant="primary" size="md">
              Khám phá sản phẩm
            </Button>
          </div>
        ) : (
          <div className="cart-page__layout">
            <ul className="cart-page__items">
              {cartLines.map(({ slug, quantity, product, lineTotal }) => (
                <li key={slug} className="cart-item">
                  <Link to={`/san-pham/${slug}`} className="cart-item__thumb">
                    <SafeImage src={product.image} fallback={product.fallback} alt={product.name} />
                  </Link>
                  <div className="cart-item__info">
                    <Link to={`/san-pham/${slug}`}>
                      <h2>{product.name}</h2>
                    </Link>
                    <p className="cart-item__sku">{product.sku}</p>
                    <p className="cart-item__unit">{product.priceDisplay}</p>
                  </div>
                  <div className="cart-item__qty">
                    <button
                      type="button"
                      onClick={() => updateQuantity(slug, quantity - 1)}
                      aria-label="Giảm"
                    >
                      <Minus size={14} />
                    </button>
                    <span>{quantity}</span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(slug, quantity + 1)}
                      aria-label="Tăng"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                  <p className="cart-item__total">{formatPrice(lineTotal)}</p>
                  <button
                    type="button"
                    className="cart-item__remove"
                    onClick={() => removeItem(slug)}
                    aria-label="Xóa sản phẩm"
                  >
                    <Trash2 size={18} />
                  </button>
                </li>
              ))}
            </ul>

            <aside className="cart-summary">
              <h2>Tóm tắt đơn hàng</h2>
              <div className="cart-summary__row">
                <span>Tạm tính ({itemCount} sản phẩm)</span>
                <strong>{formatPrice(subtotal)}</strong>
              </div>
              <div className="cart-summary__row cart-summary__row--muted">
                <span>Phí vận chuyển</span>
                <span>Miễn phí nội thành</span>
              </div>
              <div className="cart-summary__total">
                <span>Tổng cộng</span>
                <strong>{formatPrice(subtotal)}</strong>
              </div>
              <Button to="/#tu-van" variant="primary" size="lg" className="cart-summary__checkout">
                Tiến hành đặt hàng
              </Button>
              <button type="button" className="cart-summary__clear" onClick={clearCart}>
                Xóa toàn bộ giỏ
              </button>
              <ul className="cart-summary__perks">
                <li>Miễn phí giao nội thành TP.HCM</li>
                <li>Lắp đặt tận nơi lần đầu</li>
                <li>Hỗ trợ trả góp 0% qua ngân hàng</li>
              </ul>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
}
