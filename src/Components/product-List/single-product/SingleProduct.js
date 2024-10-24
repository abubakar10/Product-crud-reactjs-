import React from 'react';
import ProductImages from './ProductImages';
import ProductDetails from './ProductDetails';
import { useNavigate } from 'react-router-dom'; 
import "./SingleProoducts.css"

const SingleProduct = ({ product, onDelete }) => {
  const navigate = useNavigate();
  const handleUpdate = (id) => {
    navigate(`/update-product/${id}`);
  };
  const selectedProduct = product; 

  return (
    <div className='main-container'>
    <div className="product-container">
      <div className='image-container'>
        <ProductImages images={selectedProduct.images} />
      </div>
      <div className='info-container'>
        <ProductDetails 
          product={selectedProduct} 
          onDelete={onDelete} 
        />
      </div>
      
    </div>
    <button className='update-button' onClick={() => handleUpdate(product.id)}>Update</button>
    </div>
  );
};

export default SingleProduct;
