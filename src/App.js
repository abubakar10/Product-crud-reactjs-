import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ProductProvider } from './Context/ProductsContext';
import Navigation from './Components/Navigation/Navigation';
import Footer from './Components/Footer/Footer';
import Homepage from './Components/Home/Homepage';
import Aboutus from './Components/Aboutus/Aboutus';
import Productlist from './Components/product-List/Productlist';
import AddProduct from './Components/AddProduct/AddProduct';
import UpdateProduct from './Components/UpdateProduct/UpdateProduct';
import './App.css';

const App = () => {
  return (
    <ProductProvider>
      <Router>
        <div className="app">
          <Navigation />
          <main className="main-content">
            <Routes>
              <Route path='/' element={<Homepage />} />
              <Route path='/products' element={<Productlist />} />
              <Route path='/about' element={<Aboutus />} />
              <Route path='/add-product' element={<AddProduct />} />
              <Route path='/update-product/:id' element={<UpdateProduct/>}/>
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ProductProvider>
  );
};

export default App;
