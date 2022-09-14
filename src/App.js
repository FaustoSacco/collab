import FullBurger from "./components/FullBurger";
import logo from "./assets/logo.svg";
import burger from "./assets/burger-bar.png";
import "./styles/App.css";
import React from "react";
import Footer from "./components/Footer";
import FooterText from "./components/FooterText";
import Search from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <FullBurger />
      <img src={burger} className="Burger-logo" alt="burger" />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Footer />
      <FooterText />
      <Search />
    </div>
  );
}

export default App;
