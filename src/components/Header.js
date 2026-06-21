import { useState } from "react";
import { FOOD_LOGO_URL } from "../utils/constant";
import { CART_LOGO_URL } from "../utils/constant";
const Header = () => {
  const[btntext, setBtnText] = useState("Login")
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
          <button className="login-btn"
          onClick={()=>{
              btntext==="Login" ? setBtnText("Logout") : setBtnText("Login")
          }}>
            {btntext}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
