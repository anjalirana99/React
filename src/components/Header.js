import { FOOD_LOGO_URL } from "../utils/constant";
import { CART_LOGO_URL } from "../utils/constant";
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={FOOD_LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li className="cart-container">
            <img className="cart-logo" src={CART_LOGO_URL} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
