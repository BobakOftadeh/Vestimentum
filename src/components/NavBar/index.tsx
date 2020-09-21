import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  StyledNavBar,
  StyledNavBarContainer,
  StyledLogo,
  NavTitleContainer,
  StyledCartSVGContainer,
  StyledCartSVG,
} from "./style";

interface NavBarProps {
  fixed?: boolean;
}

const NavBar: React.FC<NavBarProps> = (props) => {
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
