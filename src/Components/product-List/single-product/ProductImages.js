import React, { useState } from 'react';
import "./ProductStyle.css"
const ProductImages = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(images?.[0]);

  return (
    <div className="image-gallery-container">
      {/* Thumbnails */}
      <div className="thumbnails">
        {images.map((image, index) => (
          <div key={index}>
            <img
              className={`thumbnail ${selectedImage === image ? 'active' : ''}`}
              src={image}
              alt={`Product view ${index + 1}`}
              onClick={() => setSelectedImage(image)}
            />
          </div>
        ))}
      </div>

      {/* Main Image */}
      <div className="image-gallery">
        <img id="main-image" src={selectedImage} alt="Selected product" />
      </div>
    </div>
  );
};

export default ProductImages;

