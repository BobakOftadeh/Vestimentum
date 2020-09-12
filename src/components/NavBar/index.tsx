import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/shopContext";
import { IoIosCart } from "react-icons/io";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../images/Logo.svg";

const StyledNavBar = styled.nav`
  color: var(--color-orange);
  background-color: white;
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  top: 0;
  height: 8vh;
  z-index: 999;
  grid-column: full-start/full-end;
`;

const StyledLogo = styled(Logo)`
  height: 100%;
  width: 5rem;
`;

const StyledCartSVG = styled(IoIosCart)`
  height: 80%;
  width: 2rem;
  display: inline-block;
  position: relative;
`;

const NavTitleContainer = styled(Link)`
  font-size: var(--h3);
  font-family: "Indie Flower", sans-serif;
  color: var(--color-orange);
  text-decoration: none;
`;

const StyledCartSVGContainer = styled(Link)`
  position: relative;
  transition: all 0.5s;
  color: var(--color-orange);

  &::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: var(--color-orange);
    border-radius: 3px;
    z-index: -1;
    left: 0;
    top: -2px;
    opacity: 0;
    transition: all 0.5s;
  }

  &:hover {
    color: var(--color-white);
  }

  &:hover&::after {
    opacity: 1;
  }
`;

const NavBar = () => {
  const { openCart } = useContext(ShopContext);

  return (
    <StyledNavBar>
      <Link to="/">
        <StyledLogo />
      </Link>
      <NavTitleContainer to="/">Vestimentum</NavTitleContainer>
      <StyledCartSVGContainer to="/checkout">
        <StyledCartSVG />
      </StyledCartSVGContainer>
    </StyledNavBar>
  );
};

export default NavBar;
