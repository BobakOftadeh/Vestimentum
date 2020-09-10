import React from "react";
import styled from "styled-components";
import HeroBg from "../../images/HeroBg.jpg";
import Button from "../Button";

const StyledHeader = styled.header`
  grid-column: full-start/full-end;
  color: var(--color-white);
  grid-row-gap: 0.5rem;
  display: grid;
  place-content: center;
  place-items: center;
  background-image: linear-gradient(
      rgba(68, 82, 79, 0.7),
      rgba(68, 82, 79, 0.7)
    ),
    url(${HeroBg});
  background-size: cover;
  height: 75vh;
`;

const Header = () => {
  return (
    <StyledHeader>
      <h1>The Sports Store</h1>
      <h2>Buy the latest and greatest shirts</h2>
      <Button href="#section-store">Shop Now</Button>
    </StyledHeader>
  );
};

export default Header;
