import React from "react";
import Product from "./components/Product";

function App() {
  return (
    <div className="App">
      <Product
        name="Fairy"
        description="Washing up liquid"
        category="Cleaning"
        benefits="Two times longer than other brands"
      />
      <Product
        name="Hovis Bread"
        description="Bread"
        category="Food"
        benefits="Same Quality for less money"
      />
      <Product
        name="iPhone 13 Pro Max"
        description="Mobile service"
        category="Technology"
        benefits="Maximize screen space"
      />
      <Product />
    </div>
  );
}

export default App;

/*
  We need to think about architecture: Three personas

  1. shift swap initiatee
  2. shift swap initiator
  3. manager role to approve OR decline

*/
