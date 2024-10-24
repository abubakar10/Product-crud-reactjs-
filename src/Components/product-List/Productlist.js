import React from 'react';
import SingleProduct from './single-product/SingleProduct';
import { useNavigate } from 'react-router-dom'; 
import { useProductContext } from './../../Context/ProductsContext'; 
import "./single-product/ProductStyle.css"

const Productlist = () => {
  const { products, setProducts } = useProductContext(); 
  const navigate = useNavigate(); 

  const handleDelete = (id) => {
    const updatedProducts = products.filter(product => product.id !== id);
    setProducts(updatedProducts);
  };



  return (
    <div className="product-list">
      <button className='addNewProduct' onClick={() => navigate('/add-product')}> 
        Add New Product
      </button>

      {products.map((product, index) => (
        <div key={index}>
          <SingleProduct 
            product={product}
            index={index}
            onDelete={handleDelete} 
          />
          
        </div>
      ))}
    </div>
  );
};

export default Productlist;
