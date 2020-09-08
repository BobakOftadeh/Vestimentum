import React from "react";
import styled from "styled-components";

const StyledHighlights = styled.section`
  grid-column: center-start/center-end;
`;

const Highlights = () => {
  return (
    <StyledHighlights>
      <div>item 1</div>
      <div>item 2</div>
      <div>item 3</div>
    </StyledHighlights>
  );
};

export default Highlights;
