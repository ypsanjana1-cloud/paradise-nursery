import { Routes, Route, useNavigate } from 'react-router-dom';
import ProductList from './ProductList.jsx';
import CartItem from './CartItem.jsx';
import AboutUs from './AboutUs.jsx';

function Landing() {
  const navigate = useNavigate();
  return (
    <div className="landing">
      <div className="landing-overlay">
        <div className="landing-content">
          <h1 className="landing-title">🌿 Paradise Nursery</h1>
          <p className="landing-tagline">Where Green Meets Serenity</p>
          <p className="landing-text">
            Welcome to Paradise Nursery, your home for beautiful, healthy houseplants.
            Bring nature indoors and transform any space into a calm, leafy paradise.
          </p>
          <button className="btn btn-primary btn-lg" onClick={() => navigate('/plants')}>
            Get Started
          </button>
          <div>
            <button className="link-btn" onClick={() => navigate('/about')}>
              Learn about us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/plants" element={<ProductList />} />
      <Route path="/cart" element={<CartItem />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="*" element={<Landing />} />
    </Routes>
  );
}
