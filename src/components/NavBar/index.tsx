import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/shopContext";
import { IoIosCart } from "react-icons/io";
import styled from "styled-components";

const StyledNavBar = styled.nav`
  background-color: var(--color-white);
  position: sticky;
  top: 0;
  height: 6vh;
  z-index: 999;
  grid-column: full-start/full-end;
`;

const NavBar = () => {
  const { openCart } = useContext(ShopContext);

  return (
    <StyledNavBar>
      <Link to="/">Logo</Link>
      <Link to="/checkout">
        <IoIosCart />
        Cart
      </Link>
    </StyledNavBar>
  );
};

export default NavBar;
