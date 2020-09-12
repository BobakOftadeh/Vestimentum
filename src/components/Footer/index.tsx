import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  grid-column: full-start/full-end;
  background-color: var(--color-orange-light);
  color: var(--color-orange);
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <span>&#169; Bobak Oftadeh</span>
      <span>This is not a real store, no orders will be fufilled</span>
    </StyledFooter>
  );
};

export default Footer;
