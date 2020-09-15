import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  grid-column: full-start/full-end;
  background-color: var(--color-orange-light);
  color: var(--color-orange);
  height: 13vh;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
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
