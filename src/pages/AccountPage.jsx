import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Package, MapPin, User, Heart } from 'lucide-react';
import { PageBreadcrumb } from '../components/ui/PageBreadcrumb';
import { Button } from '../components/ui/Button';
import './AccountPage.css';

const mockOrders = [
  { id: 'NORA-2401', date: '12/04/2026', status: 'Đang giao', total: '44.400.000₫' },
  { id: 'NORA-2388', date: '28/02/2026', status: 'Hoàn thành', total: '28.900.000₫' },
];

const tabs = [
  { id: 'overview', label: 'Tổng quan', icon: User },
  { id: 'orders', label: 'Đơn hàng', icon: Package },
  { id: 'wishlist', label: 'Yêu thích', icon: Heart },
  { id: 'address', label: 'Địa chỉ', icon: MapPin },
];

export function AccountPage() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <main className="page account-page">
      <div className="container">
        <PageBreadcrumb items={[{ label: 'Tài khoản' }]} />
        <h1 className="account-page__title">Xin chào, Khách Nora</h1>

        <div className="account-page__layout">
          <nav className="account-nav" aria-label="Menu tài khoản">
            {tabs.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                type="button"
                className={`account-nav__item ${activeTab === id ? 'account-nav__item--active' : ''}`}
                onClick={() => setActiveTab(id)}
              >
                <Icon size={18} />
                {label}
              </button>
            ))}
          </nav>

          <div className="account-panel">
            {activeTab === 'overview' && (
              <div>
                <h2>Tổng quan tài khoản</h2>
                <p className="account-panel__lead">
                  Quản lý đơn hàng, địa chỉ giao hàng và danh sách yêu thích của bạn.
                </p>
                <div className="account-stats">
                  <div>
                    <strong>2</strong>
                    <span>Đơn hàng</span>
                  </div>
                  <div>
                    <strong>4</strong>
                    <span>Sản phẩm yêu thích</span>
                  </div>
                  <div>
                    <strong>1</strong>
                    <span>Địa chỉ đã lưu</span>
                  </div>
                </div>
                <Button to="/gio-hang" variant="primary" size="md">
                  Xem giỏ hàng
                </Button>
              </div>
            )}

            {activeTab === 'orders' && (
              <div>
                <h2>Đơn hàng của tôi</h2>
                <ul className="account-orders">
                  {mockOrders.map((order) => (
                    <li key={order.id} className="account-order">
                      <div>
                        <span className="account-order__id">{order.id}</span>
                        <span className={`account-order__status account-order__status--${order.status === 'Hoàn thành' ? 'done' : 'pending'}`}>
                          {order.status}
                        </span>
                      </div>
                      <div>
                        <span>{order.date}</span>
                        <strong>{order.total}</strong>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === 'wishlist' && (
              <div>
                <h2>Danh sách yêu thích</h2>
                <p className="account-panel__lead">
                  Chưa có sản phẩm yêu thích.{' '}
                  <Link to="/#products">Khám phá bộ sưu tập</Link>
                </p>
              </div>
            )}

            {activeTab === 'address' && (
              <div>
                <h2>Địa chỉ giao hàng</h2>
                <address className="account-address">
                  <strong>Nguyễn Văn A</strong>
                  <br />
                  123 Nguyễn Huệ, Quận 1, TP.HCM
                  <br />
                  0901 234 567
                </address>
                <Button variant="outline" size="sm">
                  Thêm địa chỉ mới
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
