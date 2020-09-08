import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import { ShopContext } from "../../context/shopContext";
import { Link } from "react-router-dom";

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

const StyledHeader = styled.section`
  grid-column: center-start/center-end;
`;

const Store = () => {
  const { fetchAllProducts, products } = useContext(ShopContext);

  useEffect(() => {
    fetchAllProducts();
    return () => {};
  }, [fetchAllProducts]);

  if (!products) return <div>loading</div>;

  return (
    <StyledHeader>
      {products.map((product: product) => (
        <div key={product.id}>
          <Link to={`/product/${product.id}`}>
            <div>
              <img src={product.images[0].src} alt="" width="42" height="42" />
            </div>
            <span>{product.title}</span>
            <div>{product.variants[0].price}</div>
          </Link>
        </div>
      ))}
    </StyledHeader>
  );
};

export default Store;
