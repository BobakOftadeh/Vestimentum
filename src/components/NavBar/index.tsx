import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/shopContext";
import styled from "styled-components";

const StyledNavBar = styled.nav`
  grid-column: full-start/full-end;
`;

const NavBar = () => {
  const { openCart } = useContext(ShopContext);

  return (
    <StyledNavBar>
      <Link to="/">Logo</Link>
      <Link to="/checkout">Cart</Link>
    </StyledNavBar>
  );
};

export default NavBar;
