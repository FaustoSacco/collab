import React from "react";
import Name from "./Name";
import Description from "./Description";
import Category from "./Category";
import Benefits from "./Benefits";
import "../styles/product.css";

function Product({ name, description, category, benefits }) {
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
      <Category category={category} />
      <Benefits benefits={benefits} />
    </div>
  );
}

export default Product;
