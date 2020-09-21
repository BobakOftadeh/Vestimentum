import styled from "styled-components";

export const StyledHighlights = styled.section`
  grid-column: center-start/center-end;
  color: var(--color-orange);
  padding: 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
  text-align: center;

  svg {
    font-size: 3rem;
  }

  @media only screen and (max-width: 1600px) {
    grid-template-columns: repeat(auto-fit, minmax(33rem, 1fr));
  }
`;

export const HighlightItem = styled.div`
  padding: 2rem;
  height: 18rem;
  background-color: var(--color-orange-light);
  transition: all 0.3s;
  backface-visibility: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);

  & > *:not(:last-child) {
    margin-bottom: 0.5rem;
  }

  &:hover {
    transform: scale(1.15);
  }
`;
