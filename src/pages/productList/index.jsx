import React, { useContext } from "react";
import { ShoppingCartContext } from "../../context";
import ProductTile from "../../components/productTile";

const ProductListPage = () => {
  const { listOfproducts, loading } = useContext(ShoppingCartContext);
  console.log(listOfproducts);
  if (loading) return <h1>Loading data...</h1>;
  return (
    <section className="p-8 bg-[#b5d6d6]">
      <h1 className="text-7xl text-black text-center font-extrabold">
        PRODUCT <span className="ml-8"></span>DETAILS
      </h1>
      <div className="grid grid-cols-2 gap-5 mt-10 lg:mt-16 lg:gap-8 lg:grid-cols-4">
        {listOfproducts && listOfproducts.length ? (
          listOfproducts.map((singleProductTile) => (
            <ProductTile singleProductTile={singleProductTile} />
          ))
        ) : (
          <h2>No Products Found</h2>
        )}
      </div>
    </section>
  );
};

export default ProductListPage;
