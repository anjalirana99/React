import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://img.magnific.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg"
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li className="cart-container">
            <img
              className="cart-logo"
              src="https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG4.png"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

const RestrauntCard = (props) => {
  const { name, rating, cuisine };
  return (
    <div className="restraunt-card">
      <img
        alt="res-img"
        src="https://media.istockphoto.com/id/1457979959/photo/snack-junk-fast-food-on-table-in-restaurant-soup-sauce-ornament-grill-hamburger-french-fries.jpg?s=612x612&w=0&k=20&c=QbFk2SfDb-7oK5Wo9dKmzFGNoi-h8HVEdOYWZbIjffo="
      />
      <h3>{name}</h3>
      <h3>{rating}</h3>
      <h3>{cuisine}</h3>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          name="Restraunt"
          placeholder="Search your food/Restraunt"
        />
      </div>
      <div className="restraunt-container">
        <RestrauntCard
          name="burger king"
          rating="4.5"
          cuisine="Bureger,Fries"
        />
        <RestrauntCard name="dominoz" rating="4.2" cuisine="Pizza" />
        <RestrauntCard name="Mc D" rating="4.1" cuisine="Burger,Fries" />
        <RestrauntCard name="Hira Sweets" rating="4.0" cuisine="North Indian" />
      </div>
    </div>
  );
};

const footerStyle = {
  // inline css JS object
  fontStyle: "italic",
};
const Footer = () => {
  return (
    <div className="footer" style={footerStyle}>
      <h1>My Food Delivery APP</h1>
    </div>
  );
};
const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
