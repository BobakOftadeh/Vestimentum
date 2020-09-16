import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/shopContext";
import { IoIosCart } from "react-icons/io";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../images/Logo.svg";

const StyledNavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  height: 8vh;
`;

const StyledNavBarContainer = styled.nav<{ toShow: boolean }>`
  color: var(--color-orange);
  background-color: white;
  position: sticky;
  justify-content: space-between;
  align-items: center;
  transition: all 0.2s ease-out;
  opacity: ${(props) => (props.toShow ? 1 : 0)};
  top: 0;
  height: 8vh;
  z-index: 999;
  grid-column: 1/-1;

  .active {
    visibility: visible;
    transition: all 0.2s ease-in;
  }
  .hidden {
    visibility: hidden;
    transition: all 0.2s ease-out;
    z-index: -999;
    transform: translate(0, -100%);
  }
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
  margin-right: 1rem;

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

interface NavBarProps {
  fixed?: boolean;
}

const NavBar: React.FC<NavBarProps> = (props) => {
  const { openCart } = useContext(ShopContext);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [show, setShow] = useState(true);

  const onScroll = () => {
    setScrollPosition(document.body.getBoundingClientRect().top);
    setShow(document.body.getBoundingClientRect().top > scrollPosition);
  };

  useEffect(() => {
    if (!props.fixed) {
      window.addEventListener("scroll", onScroll);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });

  return (
    <StyledNavBarContainer toShow={show}>
      <StyledNavBar className={show ? "active" : "hidden"}>
        <Link to="/">
          <StyledLogo />
        </Link>
        <NavTitleContainer to="/">Vestimentum</NavTitleContainer>
        <StyledCartSVGContainer to="/checkout">
          <StyledCartSVG />
        </StyledCartSVGContainer>
      </StyledNavBar>
    </StyledNavBarContainer>
  );
};

export default NavBar;
