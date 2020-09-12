import React, { useContext } from "react";
import { ShopContext } from "../../context/shopContext";
import styled from "styled-components";
import Button from "../Button";

type image = {
  src: string;
};

type variant = {
  image: image;
  price: string;
  title: string;
};

interface checkout {
  id: string;
  title: string;
  quantity: string;
  images: image[];
  variant: variant;
}

const StyledOrderSummary = styled.div`
  grid-column: col-start 6 / col-end 8;
  grid-row: content-start / content-end;
  display: flex;
  padding-top: 5rem;
  justify-content: center;
`;

const SummaryContainer = styled.div`
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

const PriceContainer = styled.div`
  padding: 1rem;
  border: 5px solid var(--color-orange-light);
`;

const CheckoutSummary = () => {
  const { checkout } = useContext(ShopContext);

  return (
    <StyledOrderSummary>
      <SummaryContainer>
        <h3>Order Summary</h3>
        <PriceContainer>
          <p>
            <span>Subtotal : </span>
            <span>${checkout.totalPrice}</span>
          </p>
          <p>
            <span>Tax </span>
            <span>${checkout.totalPrice * 0.13}</span>
          </p>
          <p>
            <span>Total </span>
            <span>${checkout.totalPrice}</span>
          </p>
        </PriceContainer>
        <Button href={checkout.weburl}>Proceed To Checkout</Button>
      </SummaryContainer>
    </StyledOrderSummary>
  );
};

export default CheckoutSummary;
