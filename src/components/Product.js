import React from "react";
import Name from "./Name";
import Description from "./Description";
import "../styles/product.css";

function Product({ name, description }) {
  if (!description && !name) {
    return (
      <div className="product-item">
        <p>No product info</p>
      </div>
    );
  }

  return (
    <div className="product-item">
      <Name name={name} />
      <Description description={description} />
    </div>
  );
}

export default Product;
