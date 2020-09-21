import React, { useEffect, useState, useContext } from "react";
import { ShopContext } from "../../context/shopContext";
import { Link } from "react-router-dom";
import Button from "../Button";
import { IoIosAdd } from "react-icons/io";
import { IoIosRemove } from "react-icons/io";
import { IoIosTrash } from "react-icons/io";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";

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

const StyledCart = styled.div`
  grid-column: full-start / col-end 5;
  grid-row: content-start / content-end;
  background-color: var(--color-white-pale);
  padding: 3rem;

  @media only screen and (max-width: 1000px) {
    grid-column: full-start / full-end;
  }
`;

const StyledEmptyCart = styled(StyledCart)`
  padding: 10rem;
`;

const StyledImg = styled.img`
  width: 100%;
`;

const ImgContainer = styled(Link)`
  width: 28rem;
`;

const CartItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  grid-gap: 0.5rem;
  margin-bottom: 2rem;
  justify-items: center;

  &:not(:last-child) {
    border-bottom: 3px solid var(--color-orange-light);
  }
`;

const QuantityContainer = styled.div`
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

const TitleContainer = styled.h4`
  grid-column: 2/3;
  grid-row: 1/2;
`;

const PriceContainer = styled.h4`
  grid-row: 1/2;
  grid-column: 3/4;
`;

const TrashContainer = styled.button`
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

const styledQuantityButton = styled(TrashContainer)`
  font-size: 2rem;
`;

const Cart = () => {
  const {
    isCartOpen,
    closeCart,
    checkout,
    fetchCheckout,
    removeItemFromCheckout,
    updateItemInCheckout,
  } = useContext(ShopContext);

  const [lineItemsLength, setLineItemLength] = useState(0);

  useEffect(() => {
    if (checkout.id !== "") {
      setLineItemLength(checkout.lineItems.length);
    }
    return () => {};
  }, [checkout]);

  const removeItem = (id: string) => {
    let item = [id];
    removeItemFromCheckout(checkout.id, item);
  };

  const increaseQuantity = (itemId: string, quantity: string) => {
    let incrementedQuantity = +quantity + 1;
    const lineItemtoUpdate = [{ id: itemId, quantity: incrementedQuantity }];
    updateItemInCheckout(checkout.id, lineItemtoUpdate);
  };

  const decreaseQuantity = (itemId: string, quantity: string) => {
    let decrementedQuantity = +quantity - 1;
    if (decrementedQuantity > 0) {
      const lineItemtoUpdate = [{ id: itemId, quantity: decrementedQuantity }];
      updateItemInCheckout(checkout.id, lineItemtoUpdate);
    }
  };

  const EmptyCartTitle = styled.h3`
    display: grid;
    place-items: center;
    padding: 2rem;
  `;

  if (checkout.id === "") {
    return (
      <StyledEmptyCart>
        <Skeleton />
        <Skeleton count={5} />
      </StyledEmptyCart>
    );
  }

  return (
    <StyledCart>
      {lineItemsLength === 0 ? (
        <EmptyCartTitle>YOUR SHOPPING CART IS EMPTY</EmptyCartTitle>
      ) : (
        checkout.lineItems &&
        checkout.lineItems.map((item: checkout) => (
          <CartItemContainer key={item.id}>
            <ImgContainer to={`/product/${item.id}`}>
              <StyledImg src={item.variant.image.src} alt="" />
            </ImgContainer>
            <TitleContainer>
              {item.title}, {item.variant.title}
            </TitleContainer>
            <QuantityContainer>
              <TrashContainer
                onClick={decreaseQuantity.bind(null, item.id, item.quantity)}
              >
                <IoIosRemove />
              </TrashContainer>
              <h4>{item.quantity}</h4>
              <TrashContainer
                onClick={increaseQuantity.bind(null, item.id, item.quantity)}
              >
                <IoIosAdd />
              </TrashContainer>
            </QuantityContainer>
            <PriceContainer>$ {item.variant.price}</PriceContainer>
            <TrashContainer onClick={removeItem.bind(null, item.id)}>
              <IoIosTrash />
            </TrashContainer>
          </CartItemContainer>
        ))
      )}
    </StyledCart>
  );
};

export default Cart;
