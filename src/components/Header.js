import { useContext, useState } from "react";
import { FOOD_LOGO_URL } from "../utils/constant";
import { CART_LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

  const[btntext, setBtnText] = useState("Login")
  const onlineStatus = useOnlineStatus();
  // const {loggedinUser,setUser} = useContext(UserContext)
  const items = useSelector((store)=>store.cart.itemList)
  const count = items?.length||""

  return (

    <div className="flex justify-between p-4 sm:bg-pink-100 shadow-lg bg-blue-100">  
      <div className="logo-container ">
        <img className="logo w-24 h-24 rounded-full" src={FOOD_LOGO_URL} alt="logo" />
      </div>

      <div className="nav-items flex items-center">
        <ul className="flex items-center gap-5">
          <li>Online Status : {onlineStatus? "🟢" : "🔴"}</li>
          <li><Link className="link" to="/">Home</Link></li>
          <li><Link to="/about">About us</Link></li>
           <li><Link to="/contact">Contact us</Link></li>
           <li><Link to="/grocery">Grocery</Link></li>
          <li className="cart-container flex">
            <Link to="/cart"> <img className="cart-logo w-12 h-12 rounded-full" src={CART_LOGO_URL} /></Link>
            {count}
          </li>
          <button className="login-btn border border-gray-700 rounded-xl p-1 hover:bg-gray-50 cursor-pointer"
          onClick={()=>{
              // btntext==="Login" ? (setBtnText("Logout"),setUser("User")) : (setBtnText("Login"),setUser("Anjali"))
               btntext==="Login" ? (setBtnText("Logout")) : (setBtnText("Login"))
          }}>
            {btntext}
          </button>
          {/* <li className="text-blue-500">{loggedinUser}</li> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
