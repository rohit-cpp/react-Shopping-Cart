import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProductListPage from "./pages/productList";
import ProductDetailsPage from "./pages/productDetails";
import ProductCartPage from "./pages/productCart";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/product-list" element={<ProductListPage />} />
        <Route path="/product-details/:id" element={<ProductDetailsPage />} />
        <Route path="/product-cart" element={<ProductCartPage />} />
      </Routes>
    </Fragment>
  );
}

export default App;
