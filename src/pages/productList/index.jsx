import React, { useContext } from "react";
import { ShoppingCartContext } from "../../context";

const ProductListPage = () => {
  const { listOfproducts } = useContext(ShoppingCartContext);
  console.log(listOfproducts);

  return <section> </section>;
};

export default ProductListPage;
