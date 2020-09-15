import React, { useContext } from "react";
import { ShopContext } from "../context/shopContext";
import styled from "styled-components";
import { PageContainer } from "./style";
import Cart from "../components/Cart";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import CheckoutSummary from "../components/CheckoutSummary";

const CheckoutPageStyled = styled(PageContainer)`
  grid-template-rows: min-content [content-start] minmax(90vh, min-content) [content-end] min-content;
  color: var(--color-orange);
  @media only screen and (max-width: 1100px) {
    grid-template-rows: min-content [content-start] auto [content-end] min-content;
  }
`;

const CheckoutPage = () => {
  return (
    <CheckoutPageStyled>
      <NavBar />
      <Cart />
      <CheckoutSummary />
      <Footer />
    </CheckoutPageStyled>
  );
};

export default CheckoutPage;
