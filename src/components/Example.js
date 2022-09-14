import "../styles/example.css";

function Example(props) {
  // console.log("this is props of example", props);

  return <div className="style-example">{props.children}</div>;
}

export default Example;
