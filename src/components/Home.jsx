import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import Carousel from './Carousel'; 
import Footer from './Footer';
import Scroll from './Scroll';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showMobileCategories, setShowMobileCategories] = useState(false);
  const navigate = useNavigate();

  // Categories that match Product.jsx
  const categories = ["All", "Electronics", "Home Appliances", "Clothing & Accessories", 
                     "Beauty Products", "Smart Devices", "Furniture", "Shoes", "Kids Toys"];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setShowMobileCategories(false);
    navigate('/products', { state: { selectedCategory: category } });
  };

  return (
    <div className="landing-page">
      {/* Mobile Category Toggle Button */}
      <button 
        className="mobile-category-toggle"
        onClick={() => setShowMobileCategories(!showMobileCategories)}
      >
        {showMobileCategories ? '× Close' : '☰ Categories'}
      </button>

      {/* Combined Carousel and Category Section */}
      <section className="carousel-category-section">
        {/* Compact Category Sidebar */}
        <div className={`compact-category-sidebar ${showMobileCategories ? 'mobile-visible' : ''}`}>
          <h3 className="sidebar-title">Shop By Category</h3>
          <ul className="category-list">
            {categories.map((category, index) => (
              <li
                key={index}
                className={`category-item ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* Carousel */}
        <div className="carousel-container">
          <Carousel />
        </div>
      </section>

      <Scroll />
      
     {/* Product Categories - Filtered by selected category */}
<section className="section">
  <h2>Top Categories We Cover</h2>
  <div className="product-grid">
    {[
      { title: 'Electronics', desc: 'Smart TVs, laptops, smartphones, tablets, and more.', category: 'Electronics' },
      { title: 'Home Appliances', desc: 'Refrigerators, cookers, microwaves, blenders, etc.', category: 'Home Appliances' },
      { title: 'Clothing & Accessories', desc: "Men's, Women's, Kids' wear and fashion accessories.", category: 'Clothing & Accessories' },
      { title: 'Beauty Products', desc: 'Skin care, hair care, makeup, and grooming tools.', category: 'Beauty Products' },
      { title: 'Smart Devices', desc: 'Smartwatches, fitness bands, home automation tools.', category: 'Smart Devices' },
      { title: 'Furniture', desc: 'Office chairs, sofas, beds, tables, ergonomic desks.', category: 'Furniture' },
      { title: 'Shoes', desc: 'Running shoes, leather boots, heels, casual footwear.', category: 'Shoes' },
      { title: 'Kids Toys', desc: 'Educational toys, games, outdoor play, and creative activities for children.', category: 'Kids Toys' },
    ]
    .filter(cat => selectedCategory === "All" || cat.category === selectedCategory)
    .map((cat, index) => (
      <div className="product-card" key={index}>
        <h3>{cat.title}</h3>
        <p>{cat.desc}</p>
        <button 
          className="view-more-btn"
          onClick={() => handleCategoryClick(cat.category)}
        >
          View More →
        </button>
      </div>
    ))}
  </div>
</section>
      {/* Featured Products - Filtered by selected category */}
      <section className="section">
        <h2>Top Products You Shouldn't Miss</h2>
        <div className="product-grid">
          {[
            {
              img: 'tv.jpg',
              title: '72" Ultra HD Smart TV',
              desc: 'Experience cinema-quality visuals and voice control from the comfort of your living room.',
              category: 'Electronics'
            },
            {
              img: 'laptop.jpg',
              title: 'Intel i7 Premium Laptop',
              desc: 'Power meets portability — ideal for remote work, editing, and business users.',
              category: 'Electronics'
            },
            {
              img: 'watch.jpg',
              title: 'NextGen Smart Watch',
              desc: 'Track health, fitness, and notifications hands-free — stylish and waterproof.',
              category: 'Smart Devices'
            },
            {
              img: 'sofa.jpg',
              title: 'Luxury Recliner Sofa Set',
              desc: 'Redefine comfort with ergonomic seating and a premium finish for your living space.',
              category: 'Furniture'
            },
            {
              img: 'shoes.jpg',
              title: "Executive Leather Shoes",
              desc: 'Polished style, supreme comfort — ideal for formal occasions or business wear.',
              category: 'Shoes'
            },
            {
              img: 'skin.jpg',
              title: 'Luxury Skincare Kit',
              desc: 'Restore your glow with dermatologist-approved, nutrient-rich formulations.',
              category: 'Beauty Products'
            },
            {
              img: 'office.jpeg',
              title: 'Ergonomic Office Chair',
              desc: 'Premium comfort with adjustable height and lumbar support for long work sessions.',
              category: 'Furniture'
            },
            {
              img: 'bedroom.jpg',
              title: 'Memory Foam Mattress',
              desc: 'Pressure-relieving sleep surface with cooling technology for ultimate comfort.',
              category: 'Furniture'
            }
          ]
          .filter(product => selectedCategory === "All" || product.category === selectedCategory)
          .map((product, index) => (
            <div className="product-card" key={index}>
              <img src={product.img} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer/>
    </div>
  );
};

export default Home;