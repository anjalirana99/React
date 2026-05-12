import React from "react";
import ReactDOM from "react-dom/client";

const Logo = () => (
  <div>
    <img
      className="logo"
      src="https://previews.123rf.com/images/miracel123/miracel1231801/miracel123180100797/94312688-food-delivery-logo.jpg"
    />
  </div>
);
const Icon = () => (
  <div>
    <img
      className="user-icon"
      src="https://www.citypng.com/public/uploads/preview/white-user-member-guest-icon-png-image-31634946729lnhivlto5f.png"
    />
  </div>
);
const Header = () => (
  <div id="header">
    <Logo />
    <div className="search-align">
      <input type="text" name="searchInput" placeholder="Search..." />
    </div>
    <Icon />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
