import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  grid-column: full-start/full-end;
  background-color: var(--color-primary);
  height: 10vh;
`;

const Footer = () => {
  return <StyledFooter>Footer</StyledFooter>;
};

export default Footer;
