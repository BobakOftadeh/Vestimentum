import styled from "styled-components";

export const StyledOrderSummary = styled.div`
  grid-column: col-start 6 / col-end 8;
  grid-row: content-start / content-end;
  display: flex;
  padding-top: 5rem;
  justify-content: center;

  @media only screen and (max-width: 1000px) {
    grid-column: full-start / full-end;
    padding: 6rem;
    grid-row: auto;
  }
`;

export const SummaryContainer = styled.div`
  & > :not(:last-child) {
    margin-bottom: 1.5rem;
  }

  a {
    font-size: 1.2rem;
  }

  p {
    display: flex;
    justify-content: space-between;
  }
`;

export const PriceContainer = styled.div`
  padding: 1rem;
  border: 5px solid var(--color-orange-light);
`;
