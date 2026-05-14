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

export default Header;
