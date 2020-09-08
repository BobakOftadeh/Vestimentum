import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  grid-column: full-start/full-end;
`;

const Header = () => {
  return <StyledHeader>Header</StyledHeader>;
};

export default Header;
