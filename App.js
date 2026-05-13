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

const RestrauntData = {
  id: "1061429",
  name: "Apni Rasoi",
  cloudinaryImageId:
    "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/14/55d46e30-9d3f-48dd-b1b1-be2f19f52fcf_1061429.jpg",
  locality: "Rohini",
  areaName: "Rohini",
  costForTwo: "₹300 for two",
  cuisines: ["North Indian", "Chinese", "Indian"],
  avgRating: 4.3,
  veg: true,
  parentId: "508151",
  avgRatingString: "4.3",
};

const RestrauntCard = (props) => {
  // same as destructuring of object because props is just a object
  const { ResData } = props;
  const { name, avgRating, cuisines, costForTwo } = props.ResData;
  // or can write directly like const { name, avgRating, cuisines } = props.ResData;
  return (
    <div className="restraunt-card">
      <img
        alt="res-img"
        src="https://media.istockphoto.com/id/1457979959/photo/snack-junk-fast-food-on-table-in-restaurant-soup-sauce-ornament-grill-hamburger-french-fries.jpg?s=612x612&w=0&k=20&c=QbFk2SfDb-7oK5Wo9dKmzFGNoi-h8HVEdOYWZbIjffo="
      />
      <h3>{name}</h3>
      <h4>{avgRating}</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
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
        <RestrauntCard ResData={RestrauntData} />
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
