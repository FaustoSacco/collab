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
