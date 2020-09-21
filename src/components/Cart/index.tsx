import React, { useEffect, useState, useContext } from "react";
import { ShopContext } from "../../context/shopContext";
import { IoIosAdd } from "react-icons/io";
import { IoIosRemove } from "react-icons/io";
import { IoIosTrash } from "react-icons/io";
import {
  StyledCart,
  StyledEmptyCart,
  StyledImg,
  ImgContainer,
  CartItemContainer,
  QuantityContainer,
  TitleContainer,
  PriceContainer,
  TrashContainer,
  EmptyCartTitle,
} from "./style";
import Skeleton from "react-loading-skeleton";

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

const Cart = () => {
  const { checkout, removeItemFromCheckout, updateItemInCheckout } = useContext(
    ShopContext
  );

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
