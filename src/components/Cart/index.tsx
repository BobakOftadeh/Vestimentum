import React, { useContext } from "react";
import { ShopContext } from "../../context/shopContext";
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

const Cart = () => {
  const { isCartOpen, closeCart, checkout } = useContext(ShopContext);

  if (!checkout) {
    return <div>loading</div>;
  }

  return (
    <div>
      {console.log(checkout)}
      {checkout.lineItems &&
        checkout.lineItems.map((item: checkout) => (
          <div key={item.id}>
            <div>
              <img src={item.variant.image.src} alt="" width="42" height="42" />
            </div>
            <div>
              <div>{item.title}</div>
              <div>{item.variant.title}</div>
              <div>{item.quantity}</div>
            </div>
            <div>{item.variant.price}</div>
          </div>
        ))}
      <a href={checkout.weburl} target="_blank" rel="noopener noreferrer">
        Checkout
      </a>
    </div>
  );
};

export default Cart;
