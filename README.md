# Paradise Nursery Shopping Application

Paradise Nursery is an e-commerce web app for an online houseplant store. Visitors land on an
attractive home page, browse plants grouped by category, add them to a shopping cart, and manage
their cart.

## Features
- **Landing page** with company name, plant-themed background, and a working **Get Started** button.
- **Product listing** with 3 categories and 6 unique houseplants each (image, name, price, Add to Cart).
  - Adding a plant updates Redux state, disables that plant's button while it is in the cart, and
    updates the cart-icon count in the navigation bar.
- **Shopping cart** with thumbnails, names, unit prices, quantities, per-item totals, and overall total.
  - Increase / decrease (never below 1) / delete controls.
  - **Checkout** button shows "Coming Soon"; **Continue Shopping** returns to the plant list.
- **Shared navigation bar** (Home, Plants, About Us, Cart with live count) on all inner pages.
- **About Us** page describing the nursery.
- Responsive design; broken images fall back to a built-in placeholder.

## Tech Stack
React 18, Vite, Redux Toolkit, React Redux, React Router, CSS.

## Run Locally
```bash
npm install
npm run dev      # open the printed URL, usually http://localhost:5173
npm run build    # production build into dist/
```

## Project Structure
```
src/
  App.jsx        Landing page + routes
  App.css        Styling
  AboutUs.jsx    About page
  CartSlice.jsx  Redux Toolkit cart slice
  ProductList.jsx  Plant catalog
  CartItem.jsx   Shopping cart page
  Navbar.jsx     Shared navigation bar
  PlantImage.jsx Image with fallback
  main.jsx       Entry point and Redux store
```
