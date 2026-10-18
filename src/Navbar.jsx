import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectTotalQuantity } from './CartSlice.jsx';

export default function Navbar() {
  const count = useSelector(selectTotalQuantity);
  return (
    <header className="navbar">
      <Link to="/" className="brand">🌿 Paradise Nursery</Link>
      <nav className="nav-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/plants">Plants</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/cart" className="cart-link" aria-label={`Cart with ${count} items`}>
          <span className="cart-icon" aria-hidden="true">🛒</span>
          <span className="cart-count" data-testid="cart-count">{count}</span>
          <span className="cart-text">Cart</span>
        </NavLink>
      </nav>
    </header>
  );
}
