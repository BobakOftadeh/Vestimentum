import React, { useContext } from "react";
import { ShopContext } from "../context/shopContext";

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

const CheckoutPage = () => {
  const { isCartOpen, closeCart, checkout } = useContext(ShopContext);

  return (
    <div>
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
      <a href={checkout.webUrl} target="_blank" rel="noopener noreferrer">
        Checkout2
      </a>
    </div>
  );
};

export default CheckoutPage;
