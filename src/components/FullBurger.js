import BurgerIcon from "./BurgerIcon";
import BurgerBottom from "./BurgerBottom";
import BurgerMenu from "./BurgerMenu";
import Menu from "./Menu";
import Example from "./Example";
import Sky from "./Sky";

function FullBurger() {
  return (
    <Example>
      <Menu />
      <Sky />
      <div id="first-child">
        <div id="second-child">
          <p>This is just an example</p>
        </div>
      </div>
      <BurgerMenu
        name="Aadam"
        age="37"
        friends={["Ben", "Fausto", "Greg", "Danielle"]}
      />
      <BurgerBottom />
      <BurgerIcon />
    </Example>
  );
}

export default FullBurger;
