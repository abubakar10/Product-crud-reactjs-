import React from 'react';
import { Link } from 'react-router-dom';
import { useProductContext } from '../../Context/ProductsContext';
import './Homepage.css';

const Homepage = () => {
  const { products } = useProductContext();
  const featuredProducts = products.slice(0, 3); // Show first 3 products as featured

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Discover Amazing <span className="highlight">Products</span>
            </h1>
            <p className="hero-description">
              Browse through our extensive collection of premium products. 
              Find exactly what you're looking for with unbeatable quality and prices.
            </p>
            <div className="hero-buttons">
              <Link to="/products" className="btn btn-primary">
                Shop Now
              </Link>
              <Link to="/about" className="btn btn-secondary">
                Learn More
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-image-placeholder">
              <h3>Featured Collection</h3>
              <p>Premium Quality Products</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚚</div>
              <h3>Fast Delivery</h3>
              <p>Quick and reliable shipping to your doorstep</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💎</div>
              <h3>Premium Quality</h3>
              <p>Only the best products make it to our store</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>Secure Shopping</h3>
              <p>Your data and transactions are always protected</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Best Prices</h3>
              <p>Competitive pricing with amazing discounts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products-section">
        <div className="container">
          <h2 className="section-title">Featured Products</h2>
          <div className="products-grid">
            {featuredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img 
                    src={product.images && product.images[0] ? product.images[0] : '/placeholder-image.jpg'} 
                    alt={product.title}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/placeholder-image.jpg';
                    }}
                  />
                  <div className="product-overlay">
                    <Link to="/products" className="view-product-btn">
                      View Details
                    </Link>
                  </div>
                </div>
                <div className="product-info">
                  <h3 className="product-brand">{product.brand}</h3>
                  <h4 className="product-title">{product.title}</h4>
                  <div className="product-price">
                    {product.sizes && product.sizes.length > 0 ? (
                      <>
                        <span className="current-price">
                          ${(product.sizes[0].price * (1 - product.discount / 100)).toFixed(2)}
                        </span>
                        <span className="original-price">
                          ${product.sizes[0].price.toFixed(2)}
                        </span>
                        <span className="discount">
                          {product.discount}% OFF
                        </span>
                      </>
                    ) : (
                      <span className="current-price">Price: Contact for details</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="view-all-products">
            <Link to="/products" className="btn btn-outline">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Shopping?</h2>
            <p>Join thousands of satisfied customers and find your perfect products today.</p>
            <Link to="/products" className="btn btn-primary btn-large">
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
