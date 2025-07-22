import React, { useState, useEffect } from 'react';
import SingleProduct from './single-product/SingleProduct';
import { useNavigate, useSearchParams } from 'react-router-dom'; 
import { useProductContext } from './../../Context/ProductsContext'; 
import "./single-product/ProductStyle.css"
import "./Productlist.css"

const Productlist = () => {
  const { products, setProducts } = useProductContext(); 
  const navigate = useNavigate(); 
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');

  // Handle URL parameters for brand filtering
  useEffect(() => {
    const brandParam = searchParams.get('brand');
    if (brandParam) {
      setSelectedBrand(brandParam);
    }
  }, [searchParams]);

  const handleDelete = (id) => {
    const updatedProducts = products.filter(product => product.id !== id);
    setProducts(updatedProducts);
  };

  // Filter products based on search term and brand
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrand = selectedBrand === '' || product.brand === selectedBrand;
    return matchesSearch && matchesBrand;
  });

  // Get unique brands for filter
  const brands = [...new Set(products.map(product => product.brand))];

  return (
    <div className="products-page">
      <div className="products-header">
        <div className="container">
          <h1>Our Products</h1>
          <p>Discover our amazing collection of premium products</p>
        </div>
      </div>

      <div className="products-content">
        <div className="container">
          {/* Filters and Search */}
          <div className="products-controls">
            <div className="search-section">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
            
            <div className="filter-section">
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="brand-filter"
              >
                <option value="">All Brands</option>
                {brands.map(brand => (
                  <option key={brand} value={brand}>{brand}</option>
                ))}
              </select>
            </div>

            <button className='add-product-btn' onClick={() => navigate('/add-product')}> 
              Add New Product
            </button>
          </div>

          {/* Products Grid */}
          <div className="products-grid">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => (
                <div key={product.id} className="product-item">
                  <SingleProduct 
                    product={product}
                    index={index}
                    onDelete={handleDelete} 
                  />
                </div>
              ))
            ) : (
              <div className="no-products">
                <h3>No products found</h3>
                <p>Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productlist;
