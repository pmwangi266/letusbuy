import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './Product.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showMobileCategories, setShowMobileCategories] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [authModal, setAuthModal] = useState(false);
  const img_url = "https://Peter10.pythonanywhere.com/static/images/";
  const navigate = useNavigate();
  const location = useLocation();

  // Static categories that match Home.jsx
  const staticCategories = ["All", "Electronics", "Home Appliances", "Clothing & Accessories", 
                          "Beauty Products", "Smart Devices", "Furniture", "Shoes", "Kids Toys"];

  const getProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://Peter10.pythonanywhere.com/api/get_products"
      );
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
    if (location.state?.selectedCategory) {
      setSelectedCategory(location.state.selectedCategory);
    }
  }, [location.state]);

  // Use either static categories or dynamic ones from products
  const categories = products.length > 0 
    ? ["All", ...new Set(products.map(p => p.product_category).filter(Boolean))]
    : staticCategories;

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.product_name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.product_category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const isAuthenticated = () => {
    return localStorage.getItem('token') !== null;
  };

  const handleBuyNow = (productLink) => {
    if (!isAuthenticated()) {
      setAuthModal(true);
      return;
    }
    
    if (productLink) {
      window.open(productLink, '_blank');
    }
  };

  const openProductDetails = (product) => {
    setSelectedProduct(product);
    document.body.style.overflow = 'hidden';
  };

  const closeProductDetails = () => {
    setSelectedProduct(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="products-page">
      {/* Product Details Overlay */}
      {selectedProduct && (
        <div className="product-details-overlay">
          <div className="product-details-modal">
            <button className="close-details-btn" onClick={closeProductDetails}>
              &times;
            </button>
            
            <div className="details-content">
              <div className="details-image-container">
                <img
                  src={img_url + selectedProduct.product_photo}
                  alt={selectedProduct.product_name}
                  className="details-image"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/500x300?text=No+Image";
                  }}
                />
              </div>
              
              <div className="details-text">
                <h2>{selectedProduct.product_name}</h2>
                <p className="details-category">{selectedProduct.product_category}</p>
                <p className="details-price">$ {selectedProduct.product_cost}</p>
                
                <div className="details-description">
                  <h3>Description</h3>
                  <p>{selectedProduct.product_description}</p>
                </div>
                
                <div className="details-actions">
                  <button
                    className="view-details-btn"
                    onClick={closeProductDetails}
                  >
                    Back to Products
                  </button>
                  {selectedProduct.product_link && (
                    <button
                      className="buy-now-btn"
                      onClick={() => handleBuyNow(selectedProduct.product_link)}
                    >
                      Buy Now
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Authentication Required Modal */}
      {authModal && (
        <div className="auth-modal-overlay">
          <div className="auth-modal">
            <h3>Authentication Required</h3>
            <p>You need to sign in or create an account to proceed with your purchase.</p>
            <div className="auth-modal-buttons">
              <button 
                className="auth-modal-btn signin-btn"
                onClick={() => {
                  setAuthModal(false);
                  navigate('/signin');
                }}
              >
                Sign In
              </button>
              <button 
                className="auth-modal-btn signup-btn"
                onClick={() => {
                  setAuthModal(false);
                  navigate('/signup');
                }}
              >
                Sign Up
              </button>
              <button 
                className="auth-modal-btn cancel-btn"
                onClick={() => setAuthModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Category Toggle Button */}
      <button 
        className="mobile-category-toggle"
        onClick={() => setShowMobileCategories(!showMobileCategories)}
      >
        {showMobileCategories ? '× Close' : '☰ Categories'}
      </button>

      <div className={`category-sidebar ${showMobileCategories ? 'mobile-visible' : ''}`}>
        <h3 className="sidebar-title">Categories</h3>
        <ul className="category-list">
          {categories.map((category, index) => (
            <li
              key={index}
              className={`category-item ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => {
                setSelectedCategory(category);
                setShowMobileCategories(false);
              }}
            >
              {category}
              {selectedCategory === category && <span className="active-indicator"></span>}
            </li>
          ))}
        </ul>
      </div>

      <div className="products-container">
        <div className="products-header">
          <h1 className="products-title">Explore Products</h1>
          
          <div className="search-container">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <span className="search-icon">🔍</span>
          </div>
        </div>

        {loading ? (
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p>Loading products...</p>
          </div>
        ) : filteredProducts.length > 0 ? (
          <div className="products-grid">
            {filteredProducts.map((product, index) => (
              <div className="product-card" key={index}>
                <div className="product-image-container">
                  <img
                    src={img_url + product.product_photo}
                    alt={product.product_name}
                    className="product-image"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/300x200?text=No+Image";
                    }}
                  />
                </div>
                
                <div className="product-details">
                  <h3 className="product-name">{product.product_name}</h3>
                  <p className="product-category">{product.product_category}</p>
                  <p className="product-price">$ {product.product_cost}</p>
                  
                  <div className="product-actions">
                    <button
                      className="view-details-btn"
                      onClick={() => openProductDetails(product)}
                    >
                      View Details
                    </button>
                    {product.product_link && (
                      <button
                        className="buy-now-btn"
                        onClick={() => handleBuyNow(product.product_link)}
                      >
                        Buy Now
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-products">
            <p>No products found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;