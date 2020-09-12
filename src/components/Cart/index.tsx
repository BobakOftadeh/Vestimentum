import React, { useEffect, useState, useContext } from "react";
import { ShopContext } from "../../context/shopContext";
import { Link } from "react-router-dom";
import Button from "../Button";
import { IoIosAdd } from "react-icons/io";
import { IoIosRemove } from "react-icons/io";
import { IoIosTrash } from "react-icons/io";
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
  border-bottom: 3px solid var(--color-orange-light);
  margin-bottom: 2rem;
  justify-items: center;
`;

const QuantityContainer = styled.div`
  height: 2rem;
  grid-column: 2/3;
  grid-row: 1/2;
  margin-top: 3rem;
  display: flex;

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
  font-size: 1.5rem;
  border: none;
  background-color: inherit;
  cursor: pointer;
  justify-self: end;
  grid-column: 3/4;
  grid-row: 1/2;
  color: var(--color-orange);

  &:focus,
  &:hover {
    filter: brightness(120%);
  }
`;

const Cart = () => {
  const {
    isCartOpen,
    closeCart,
    checkout,
    removeItemFromCheckout,
    fetchCheckout,
  } = useContext(ShopContext);

  const [lineItems, setLineItems] = useState<any>([]);

  useEffect(() => {
    setLineItems(checkout.lineItems);

    return () => {};
  }, []);

  const removeItem = (id: string) => {
    let item = [id];
    removeItemFromCheckout(checkout.id, item);
  };

  if (!checkout || checkout.length === 0) {
    return <StyledCart>loading</StyledCart>;
  }

  return (
    <StyledCart>
      {console.log(checkout)}
      {checkout.lineItems &&
        checkout.lineItems.map((item: checkout) => (
          <CartItemContainer key={item.id}>
            <ImgContainer to="/">
              <StyledImg src={item.variant.image.src} alt="" />
            </ImgContainer>
            <TitleContainer>
              {item.title}, {item.variant.title}
            </TitleContainer>
            <QuantityContainer>
              <button>
                <IoIosRemove />
              </button>
              <h4>{item.quantity}</h4>
              <button>
                <IoIosAdd />
              </button>
            </QuantityContainer>
            <PriceContainer>$ {item.variant.price}</PriceContainer>
            <TrashContainer onClick={removeItem.bind(null, item.id)}>
              <IoIosTrash />
            </TrashContainer>
          </CartItemContainer>
        ))}
    </StyledCart>
  );
};

export default Cart;
