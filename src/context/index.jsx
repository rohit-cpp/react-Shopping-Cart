import { createContext } from "react";

export const ShoppingCartContext = createContext(null);

import React from "react";

const ShoppingCartProvider = ({ children }) => {
  return (
    <ShoppingCartContext.Provider value={" "}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;
