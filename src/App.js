import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";

const RestrauntCard = (props) => {
  // same as destructuring of object because props is just a object
  const { ResData } = props;
  const { name, avgRating, cuisines, costForTwo, cloudinaryImageId } =
    props.ResData;
  // or can write directly like const { name, avgRating, cuisines } = props.ResData;
  return (
    <div className="restraunt-card">
      <img
        alt="res-img"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{avgRating}</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
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
