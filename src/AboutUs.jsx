import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar.jsx';

export default function AboutUs() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <main className="page about">
        <h1 className="page-title">About Paradise Nursery</h1>
        <div className="about-card">
          <p>
            Paradise Nursery is a family-run plant shop devoted to making indoor greenery
            accessible to everyone. Since our founding, we have hand-selected healthy,
            sustainably grown houseplants, from forgiving beginner favorites to striking
            statement pieces.
          </p>
          <h2>Our Mission</h2>
          <p>
            To help people connect with nature in their daily lives. Plants improve air
            quality, lift mood, and make any room feel like home.
          </p>
          <h2>Why Choose Us</h2>
          <ul>
            <li>Healthy, carefully inspected plants</li>
            <li>Beginner-friendly care guidance with every purchase</li>
            <li>Sustainable growing and eco-friendly packaging</li>
            <li>Friendly plant experts ready to help</li>
          </ul>
          <button className="btn btn-primary" onClick={() => navigate('/plants')}>
            Shop Plants
          </button>
        </div>
      </main>
    </>
  );
}
