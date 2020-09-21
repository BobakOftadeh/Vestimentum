import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import { ShopContext } from "../../context/shopContext";
import { Link } from "react-router-dom";
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

const StyledStore = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  grid-gap: 3rem;
  place-items: center;
  padding: 3rem;

  @media only screen and (max-width: 1000px) {
    grid-template-columns: repeat(auto-fit, minmax(min-content, 1fr));
  }
`;

const StoreWrapper = styled.section`
  grid-column: center-start/center-end;
`;

const StoreTitle = styled.h2`
  margin-top: 1rem;
  color: var(--color-orange);
  text-align: center;
`;

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
