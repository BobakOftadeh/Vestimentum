import styled from "styled-components";
import Shirts from "../../images/Shirts.png";
import Sweaters from "../../images/Sweaters.png";

export const SelectionWraper = styled.section`
  grid-column: full-start/full-end;
  display: grid;
  grid-template-columns: repeat(
    8,
    [col-start] minmax(min-content, 1fr) [col-end]
  );
  grid-template-rows: repeat(2, min-content);
`;

export const ShirtImage = styled.div`
  height: 40rem;
  grid-column: col-start 1 / col-end 4;
  color: white;
  display: grid;
  place-items: center;
  background-image: linear-gradient(
      rgba(255, 151, 29, 0.8),
      rgba(255, 151, 29, 0.8)
    ),
    url(${Shirts});
  background-size: cover;

  @media only screen and (max-width: 500px) {
    grid-column: col-start 1 / col-end 8;
  }
`;

export const SweaterImage = styled.div`
  grid-column: col-start 5 / -1;
  height: 40rem;
  grid-row: 2/3;
  display: grid;
  color: white;
  place-items: center;
  background-size: cover;
  background-image: linear-gradient(
      rgba(255, 151, 29, 0.8),
      rgba(255, 151, 29, 0.8)
    ),
    url(${Sweaters});

  @media only screen and (max-width: 500px) {
    grid-column: col-start 1 / col-end 8;
  }
`;
