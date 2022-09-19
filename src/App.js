import React from "react";
import Product from "./components/Product";

function App() {
  return (
    <div className="App">
      <Product name="Fairy" description="Washing up liquid" />
      <Product name="Hovis Bread" description="Bread" />
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
