import React from 'react';
import Productlist from './Components/product-List/Productlist';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddProduct from './Components/AddProduct/AddProduct';
import { ProductProvider } from './Context/ProductsContext';
import UpdateProduct from './Components/UpdateProduct/UpdateProduct';

const App = () => {
  return (
    <ProductProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Productlist />} />
          <Route path='/add-product' element={<AddProduct />} />
          <Route path='/update-product/:id' element={<UpdateProduct/>}/>
        </Routes>
      </Router>
    </ProductProvider>
  );
};

export default App;
