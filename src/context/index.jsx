import { createContext, useEffect, useState } from "react";

export const ShoppingCartContext = createContext(null);

import React from "react";

const ShoppingCartProvider = ({ children }) => {
  const [listOfproducts, setListOfProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  async function handleProductApi() {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const result = await response.json();

      if (result && result?.products) {
        setListOfProducts(result?.products);
      } else {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handleProductApi();
  }, []);

  return (
    <ShoppingCartContext.Provider value={{ listOfproducts }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;
