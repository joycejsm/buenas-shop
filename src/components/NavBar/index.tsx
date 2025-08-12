import './navbar.css';

interface NavProps {
  onCartClick?: () => void;
  cartCount?: number;
}

export function Nav({ onCartClick, cartCount = 0 }: NavProps) {
  return (
    <nav className="nav">
      <div className="nav-logo">
        Buenas <span>Shop</span>
      </div>

      <button className="cart-button" onClick={onCartClick}>
        🛒 {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
      </button>
    </nav>
  );
}