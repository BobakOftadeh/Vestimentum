import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledCart = styled.div`
  grid-column: full-start / col-end 5;
  grid-row: content-start / content-end;
  background-color: var(--color-white-pale);
  padding: 3rem;

  @media only screen and (max-width: 1000px) {
    grid-column: full-start / full-end;
  }
`;

export const StyledEmptyCart = styled(StyledCart)`
  height: auto;

  @media only screen and (max-width: 600px) {
    height: 50vh;
  }
`;

export const StyledImg = styled.img`
  width: 100%;
`;

export const ImgContainer = styled(Link)`
  width: 28rem;
`;

export const CartItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  grid-gap: 0.5rem;
  margin-bottom: 2rem;
  justify-items: center;

  &:not(:last-child) {
    border-bottom: 3px solid var(--color-orange-light);
  }
`;

export const QuantityContainer = styled.div`
  height: 2rem;
  grid-column: 2/3;
  grid-row: 1/2;
  margin-top: 3rem;
  display: flex;
  align-items: center;

  & > :not(:last-child) {
    margin-right: 1.5rem;
  }

  svg {
    font-size: 1.3rem;
  }
`;

export const TitleContainer = styled.h4`
  grid-column: 2/3;
  grid-row: 1/2;
`;

export const PriceContainer = styled.h4`
  grid-row: 1/2;
  grid-column: 3/4;
`;

export const TrashContainer = styled.button`
  height: 2rem;
  font-size: 1.7rem;
  border: none;
  background-color: inherit;
  cursor: pointer;
  justify-self: end;
  grid-column: 3/4;
  grid-row: 1/2;
  color: var(--color-orange);
  outline-color: var(--color-orange);
  &:focus,
  &:hover {
    filter: brightness(120%);
  }
`;

export const EmptyCartTitle = styled.h3`
  height: 50vh;
  display: grid;
  place-items: center;
`;
