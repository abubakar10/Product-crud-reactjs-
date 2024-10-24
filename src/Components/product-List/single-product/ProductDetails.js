import React, { useState } from 'react';
import "./ProductStyle.css";

const ProductDetails = ({ product, onDelete }) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes[1]); // Default to Medium

  // Helper function to calculate the discounted price
  const calculateDiscountedPrice = (price, discount) => {
    return price - (price * (discount / 100));
  };

  const discountedPrice = calculateDiscountedPrice(selectedSize.price, product.discount);

  return (
    <div className="product-details">
      <h3>{product.brand}</h3>
      <h1>{product.title}</h1>
      <p>{product.description}</p>

      {/* Price Section */}
      <div className="price-container">
        <span id="discount-price" className="discount-price">
          ${discountedPrice.toFixed(2)} ({product.discount}% off)
        </span><br />
        <span id="original-price" className="original-price" style={{ textDecoration: 'line-through' }}>
          ${selectedSize.price.toFixed(2)}
        </span>
      </div>

      {/* Size Options */}
      <div className="sizes">
        <label>Choose Size:</label>
        <div id="size-options">
          {product.sizes.map((sizeObj, i) => (
            <button
              key={i}
              className={selectedSize.size === sizeObj.size ? 'active' : ''}
              onClick={() => setSelectedSize(sizeObj)}
            >
              {sizeObj.size}
            </button>
          ))}
        </div>
      </div>

      <button id="add-to-bag-btn">Add to Bag</button>
      <button id="delete-btn" onClick={() => onDelete(product.id)} className="delete-btn">
        Delete Product
      </button>
    </div>
  );
};

export default ProductDetails;
