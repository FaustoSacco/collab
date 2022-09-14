import "../styles/burgerMenu.css";

const BurgerMenu = (props) => {
  console.log("this is props from burger menu", props);

  return (
    <div className="style-menu">
      <p>{props.name}</p>
      <p>{props.age}</p>
    </div>
  );
};

export default BurgerMenu;
