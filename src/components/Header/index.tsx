import React from "react";
import Button from "../Button";
import { StyledHeader, StyledTitle, StyledSubTitle } from "./style";

const Header = () => {
  return (
    <StyledHeader>
      <StyledTitle>Vestimentum</StyledTitle>
      <StyledSubTitle>Buy the latest and greatest shirts</StyledSubTitle>
      <Button href="#section-store">Shop Now</Button>
    </StyledHeader>
  );
};

export default Header;
