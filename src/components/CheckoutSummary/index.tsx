import React, { useContext } from "react";
import { ShopContext } from "../../context/shopContext";
import { StyledOrderSummary, SummaryContainer, PriceContainer } from "./style";
import Skeleton from "react-loading-skeleton";
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

const CheckoutSummary = () => {
  const { checkout } = useContext(ShopContext);

  if (!checkout || checkout.length === 0) {
    return (
      <StyledOrderSummary>
        <Skeleton />
        <Skeleton count={5} />
      </StyledOrderSummary>
    );
  }

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
            <span>Tax: </span>
            <span>${(+checkout.totalPrice * 0.13).toFixed(2)}</span>
          </p>
          <p>
            <span>Total: </span>
            <span>
              ${(+checkout.totalPrice + +checkout.totalPrice * 0.13).toFixed(2)}
            </span>
          </p>
        </PriceContainer>
        <Button href={checkout.webUrl}>Proceed To Checkout</Button>
      </SummaryContainer>
    </StyledOrderSummary>
  );
};

export default CheckoutSummary;
