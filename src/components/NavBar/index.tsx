import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/shopContext";

const NavBar = () => {
  const { openCart } = useContext(ShopContext);

  return (
    <div>
      <Link to="/">Logo</Link>
      <Link to="/checkout">Cart</Link>
    </div>
  );
};

export default NavBar;
