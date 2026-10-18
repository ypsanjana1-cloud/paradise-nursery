import { useDispatch, useSelector } from 'react-redux';
import { addItem, selectCartItems } from './CartSlice.jsx';
import Navbar from './Navbar.jsx';
import PlantImage from './PlantImage.jsx';

// Images: keyword-based photo URLs. If any fail, <PlantImage> shows a built-in fallback.
const img = (keyword, lock) => `https://loremflickr.com/400/400/${keyword}?lock=${lock}`;

const plantCategories = [
  {
    category: 'Air Purifying Plants',
    plants: [
      { id: 1, name: 'Snake Plant', price: 15, image: img('snakeplant,houseplant', 1) },
      { id: 2, name: 'Spider Plant', price: 12, image: img('spiderplant,houseplant', 2) },
      { id: 3, name: 'Peace Lily', price: 18, image: img('peacelily,flower', 3) },
      { id: 4, name: 'Boston Fern', price: 14, image: img('bostonfern,fern', 4) },
      { id: 5, name: 'Rubber Plant', price: 20, image: img('rubberplant,houseplant', 5) },
      { id: 6, name: 'Areca Palm', price: 24, image: img('arecapalm,palm', 6) },
    ],
  },
  {
    category: 'Aromatic & Fragrant Plants',
    plants: [
      { id: 7, name: 'Lavender', price: 16, image: img('lavender,plant', 7) },
      { id: 8, name: 'Jasmine', price: 17, image: img('jasmine,flower', 8) },
      { id: 9, name: 'Rosemary', price: 11, image: img('rosemary,herb', 9) },
      { id: 10, name: 'Mint', price: 9, image: img('mint,herb', 10) },
      { id: 11, name: 'Lemon Balm', price: 10, image: img('lemonbalm,herb', 11) },
      { id: 12, name: 'Gardenia', price: 22, image: img('gardenia,flower', 12) },
    ],
  },
  {
    category: 'Low-Maintenance Succulents',
    plants: [
      { id: 13, name: 'Aloe Vera', price: 13, image: img('aloevera,plant', 13) },
      { id: 14, name: 'Jade Plant', price: 15, image: img('jadeplant,succulent', 14) },
      { id: 15, name: 'Echeveria', price: 8, image: img('echeveria,succulent', 15) },
      { id: 16, name: 'Zebra Haworthia', price: 9, image: img('haworthia,succulent', 16) },
      { id: 17, name: 'String of Pearls', price: 19, image: img('stringofpearls,succulent', 17) },
      { id: 18, name: 'Burro’s Tail', price: 14, image: img('burrostail,succulent', 18) },
    ],
  },
];

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const inCart = (id) => cartItems.some((i) => i.id === id);

  return (
    <>
      <Navbar />
      <main className="page">
        <h1 className="page-title">Our Plants</h1>
        {plantCategories.map((cat) => (
          <section key={cat.category} className="category">
            <h2 className="category-title">{cat.category}</h2>
            <div className="product-grid">
              {cat.plants.map((plant) => {
                const added = inCart(plant.id);
                return (
                  <article key={plant.id} className="product-card">
                    <PlantImage className="product-img" src={plant.image} name={plant.name} />
                    <h3 className="product-name">{plant.name}</h3>
                    <p className="product-price">${plant.price.toFixed(2)}</p>
                    <button
                      className="btn btn-primary"
                      disabled={added}
                      onClick={() => dispatch(addItem(plant))}
                    >
                      {added ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </article>
                );
              })}
            </div>
          </section>
        ))}
      </main>
    </>
  );
}
