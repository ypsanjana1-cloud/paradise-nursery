import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  selectCartItems,
  selectTotalAmount,
  selectTotalQuantity,
} from './CartSlice.jsx';
import Navbar from './Navbar.jsx';
import PlantImage from './PlantImage.jsx';

export default function CartItem() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const items = useSelector(selectCartItems);
  const total = useSelector(selectTotalAmount);
  const count = useSelector(selectTotalQuantity);

  return (
    <>
      <Navbar />
      <main className="page">
        <h1 className="page-title">Shopping Cart</h1>

        {items.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty. 🌱</p>
            <button className="btn btn-primary" onClick={() => navigate('/plants')}>
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="cart-list">
              {items.map((item) => (
                <div key={item.id} className="cart-row">
                  <PlantImage className="cart-img" src={item.image} name={item.name} />
                  <div className="cart-info">
                    <h3>{item.name}</h3>
                    <p className="muted">Unit price: ${item.price.toFixed(2)}</p>
                  </div>
                  <div className="qty-controls">
                    <button
                      className="qty-btn"
                      aria-label={`Decrease quantity of ${item.name}`}
                      disabled={item.quantity <= 1}
                      onClick={() => dispatch(decreaseQuantity(item.id))}
                    >
                      −
                    </button>
                    <span className="qty-value">{item.quantity}</span>
                    <button
                      className="qty-btn"
                      aria-label={`Increase quantity of ${item.name}`}
                      onClick={() => dispatch(increaseQuantity(item.id))}
                    >
                      +
                    </button>
                  </div>
                  <p className="line-total">${(item.price * item.quantity).toFixed(2)}</p>
                  <button
                    className="btn btn-danger"
                    onClick={() => dispatch(removeItem(item.id))}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <p className="muted">Total items: {count}</p>
              <h2 className="cart-total">Total: ${total.toFixed(2)}</h2>
              <div className="cart-actions">
                <button className="btn btn-outline" onClick={() => navigate('/plants')}>
                  Continue Shopping
                </button>
                <button className="btn btn-primary" onClick={() => alert('Coming Soon')}>
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </main>
    </>
  );
}
