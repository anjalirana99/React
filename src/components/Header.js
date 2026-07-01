import { useState } from "react";
import { FOOD_LOGO_URL } from "../utils/constant";
import { CART_LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const[btntext, setBtnText] = useState("Login")
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={FOOD_LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status : {onlineStatus? "🟢" : "🔴"}</li>
          <li><Link className="link" to="/">Home</Link></li>
          <li><Link className="link" to="/about">About us</Link></li>
           <li><Link className="link" to="/contact">Contact us</Link></li>
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
