import logo from "./logo.svg";
import { greeting } from "./lessons/functions/functions";
import { Bike } from "./lessons/classes/classes";
import "./App.css";

function App() {
  const initialGreeting = () => {
    return `Hello ${greeting()}`;
  };

  // const firstBike = new Bike("mountain");

  const firstBike = {
    type: "mountain",
  };

  const secondBike = new Bike("BMX");
  const today = new Date();

  console.log(firstBike);
  console.log(secondBike);
  console.log(today);

  return (
    <div className="App">
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
        <p>{initialGreeting()}</p>
      </header>
    </div>
  );
}

export default App;
