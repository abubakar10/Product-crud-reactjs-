import React, { createContext, useContext, useState } from "react";
import ProductData from "./../Components/product-List/single-product/ProductData"; // Make sure this is an array

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(ProductData); 

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProductContext = () => useContext(ProductContext);

export { useProductContext, ProductProvider };
