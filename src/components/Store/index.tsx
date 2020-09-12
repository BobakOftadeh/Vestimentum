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

const StyledStore = styled.section`
  grid-column: center-start/center-end;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  grid-gap: 2rem;
  place-items: center;
  padding: 3rem;
`;

const Store = () => {
  const { fetchAllProducts, products } = useContext(ShopContext);

  useEffect(() => {
    fetchAllProducts();
    return () => {};
  }, [fetchAllProducts]);

  if (!products) return <div>loading</div>;

  return (
    <StyledStore id="section-store">
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
  );
};

export default Store;
