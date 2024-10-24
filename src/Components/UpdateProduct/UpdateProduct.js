import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useProductContext } from '../../Context/ProductsContext';
import './UpdateProduct.css';

const UpdateProduct = () => {
  const { products, setProducts } = useProductContext();
  const { id } = useParams();
  const navigate = useNavigate();

  const currentProduct = products.find(product => product.id === id);

  const [newProduct, setNewProduct] = useState({
    id: currentProduct?.id || '',
    title: currentProduct?.title || '',
    brand: currentProduct?.brand || '',
    description: currentProduct?.description || '',
    discount: currentProduct?.discount || '',
    images: currentProduct?.images || [],
    sizes: currentProduct?.sizes || []
  });

  const [sizeInputs, setSizeInputs] = useState(currentProduct?.sizes.map(size => ({ size: size.size, price: size.price })) || [{ size: '', price: '' }]);
  const [imageLink, setImageLink] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (!currentProduct) {
      navigate('/'); // Redirect if product is not found
    }
  }, [currentProduct, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleSizeChange = (index, e) => {
    const { name, value } = e.target;
    const updatedSizes = [...sizeInputs];
    updatedSizes[index][name] = value;
    setSizeInputs(updatedSizes);
  };

  const addSizeField = () => {
    setSizeInputs([...sizeInputs, { size: '', price: '' }]);
  };

  const handleAddImage = () => {
    if (imageLink) {
      if (newProduct.images.length < 5) {
        setNewProduct({ ...newProduct, images: [...newProduct.images, imageLink] });
        setImageLink('');
        setError('');
      } else {
        setError('Maximum of 5 images allowed.');
      }
    } else {
      setError('Please enter a valid image URL.');
    }
  };

  const handleRemoveImage = (index) => {
    const updatedImages = newProduct.images.filter((_, i) => i !== index);
    setNewProduct({ ...newProduct, images: updatedImages });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const productWithSizes = {
      ...newProduct,
      sizes: sizeInputs.map(size => ({
        size: size.size,
        price: parseFloat(size.price)
      })),
      id: currentProduct.id // Keep the same ID for update
    };

    setProducts((prevProducts) => prevProducts.map(product => product.id === id ? productWithSizes : product));
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='Container'>
        <h2>Update Product</h2>

        <label>Title:</label>
        <input 
          type="text" 
          name="title" 
          value={newProduct.title} 
          onChange={handleInputChange} 
          required 
        />

        <label>Brand:</label>
        <select 
          name="brand" 
          value={newProduct.brand} 
          onChange={handleInputChange} 
          required
        >
          <option value="" disabled>Select a brand</option>
          <option value="Nike">Nike</option>
          <option value="Adidas">Adidas</option>
          <option value="Puma">Puma</option>
          <option value="Reebok">Reebok</option>
          <option value="Under Armour">Under Armour</option>
        </select>

        <label>Description:</label>
        <textarea 
          name="description" 
          value={newProduct.description} 
          onChange={handleInputChange} 
          required 
        />

        <label>Discount (%):</label>
        <input 
          type="number" 
          name="discount" 
          value={newProduct.discount} 
          onChange={handleInputChange} 
          required 
        />

        <label>Image Link:</label>
        <input 
          className='image-url'
          type="url" 
          value={imageLink} 
          onChange={(e) => setImageLink(e.target.value)} 
          placeholder="Enter image URL"  
        />
        <button type="button" onClick={handleAddImage}>Add Image</button>
        {error && <p className="error-message">{error}</p>}

        <h4>Images:</h4>
        <ul>
          {newProduct.images.map((img, index) => (
            <li key={index}>
              {img} <br />
              <button className='remove image' type="button" onClick={() => handleRemoveImage(index)}>Remove</button>
            </li>
          ))}
        </ul>

        <h3>Product Sizes and Prices</h3>
        {sizeInputs.map((input, index) => (
          <div key={index}>
            <label>Size:</label>
            <input 
              type="text" 
              name="size" 
              value={input.size} 
              onChange={(e) => handleSizeChange(index, e)} 
              required 
            />

            <label>Price ($):</label>
            <input 
              type="number" 
              name="price" 
              value={input.price} 
              onChange={(e) => handleSizeChange(index, e)} 
              required 
            />
          </div>
        ))}

        <button type="button" onClick={addSizeField}>Add Another Size</button><br />

        <button type="submit">Update Product</button>
      </div>
    </form>
  );
};

export default UpdateProduct;
