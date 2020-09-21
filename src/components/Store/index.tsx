import React, { useEffect, useContext } from "react";
import { ShopContext } from "../../context/shopContext";
import { StoreWrapper, StoreTitle, StyledStore } from "./style";
import Card from "../Card";

type image = {
  src: string;
};

type variant = {
  price: string;
};

interface product {
  id: string;
  title: string;
  images: image[];
  variants: variant[];
}

const Store = () => {
  const { fetchAllProducts, products } = useContext(ShopContext);

  useEffect(() => {
    fetchAllProducts();
    return () => {};
  }, [fetchAllProducts]);

  if (!products) return <div>loading</div>;

  return (
    <StoreWrapper id="section-store">
      <StoreTitle>Our Products</StoreTitle>
      <StyledStore>
        {products.map((product: product) => (
          <Card
            key={product.id}
            id={product.id}
            image={product.images[0].src}
            name={product.title}
            price={product.variants[0].price}
          />
        ))}
      </StyledStore>
    </StoreWrapper>
  );
};

export default Store;
