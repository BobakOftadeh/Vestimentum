import styled from "styled-components";

export const StyledStore = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  grid-gap: 3rem;
  place-items: center;
  padding: 3rem;

  @media only screen and (max-width: 1000px) {
    grid-template-columns: repeat(auto-fit, minmax(min-content, 1fr));
  }
`;

export const StoreWrapper = styled.section`
  grid-column: center-start/center-end;
`;

export const StoreTitle = styled.h2`
  margin-top: 1rem;
  color: var(--color-orange);
  text-align: center;
`;
