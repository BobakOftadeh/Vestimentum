import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/shopContext";
import { PageContainer } from "./style";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Button from "../components/Button";
import Skeleton from "react-loading-skeleton";
import Footer from "../components/Footer";
import styled from "styled-components";

const ProductPageStyled = styled(PageContainer)`
  grid-template-rows: min-content 95vh min-content;
  color: var(--color-orange);
  @media only screen and (max-width: 1000px) {
    grid-template-rows: auto;
  }
`;

const ProductImage = styled.img`
  display: inline-block;
  height: auto;
  width: 100%;
`;

const ProductImageContainer = styled.div`
  grid-column: full-start / col-end 5;
  background-color: var(--color-white-pale);
  display: grid;
  place-content: center;
  height: 100%;

  @media only screen and (max-width: 1000px) {
    grid-column: full-start / full-end;
  }
`;

const ProductInfo = styled.div`
  grid-column: col-start 6 / center-end;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0;
  margin-left: 5rem;
  align-items: stretch;
  & > * {
    margin-bottom: 2rem;
  }

  @media only screen and (max-width: 1000px) {
    grid-column: full-start / full-end;
    align-items: center;
    padding: 3rem;
    margin-left: 0;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  color: var(--color-orange);

  button {
    font-size: 1.5rem;
  }

  & > :not(:last-child) {
    margin-right: 1rem;
  }
`;

const SizeButton = styled.button`
  background-color: none;
  color: var(--color-orange);
  cursor: pointer;
  padding: 0.75rem;
  border: none;
`;

const AddCartButton = styled(Link)`
  text-transform: uppercase;
  color: white;
  background-color: var(--color-orange);
  text-decoration: none;
  padding: 1rem 3.5rem;
  display: inline-block;
  border-radius: 8rem;
  transition: all 0.2s;
  position: relative;
  font-size: 1.5rem;
  border: none;
  width: max-content;
  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);

    &::after {
      transform: scale(1.5);
      opacity: 0;
    }
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }

  &::after {
    content: "";
    background-color: var(--color-orange);
    position: absolute;
    border-radius: 10rem;
    transition: all 0.2s;
    top: 0;
    left: 0;
    z-index: -1;
    height: 100%;
    width: 100%;
  }

  @media only screen and (max-width: 1000px) {
    width: auto;
  }
`;

const ProductPage = () => {
  const [variant, setVariant] = useState(0);
  let { id } = useParams();
  const {
    fetchProductWithId,
    addItemToCheckout,
    clearProduct,
    product,
  } = useContext(ShopContext);

  useEffect(() => {
    fetchProductWithId(id);
    return () => {
      clearProduct();
    };
  }, [fetchProductWithId, clearProduct, id]);

  if (!product.title) {
    return (
      <div>
        <ProductPageStyled>
          <NavBar />
          <ProductImageContainer>
            <Skeleton />
          </ProductImageContainer>
          <ProductInfo>
            <h2>
              <Skeleton />
            </h2>
            <h3>
              <Skeleton />
            </h3>
            <h4>
              <Skeleton />
            </h4>
          </ProductInfo>
          <Footer />
        </ProductPageStyled>
      </div>
    );
  }

  return (
    <ProductPageStyled>
      <NavBar />
      <ProductImageContainer>
        <ProductImage src={product.images[0].src} alt="" />
      </ProductImageContainer>
      <ProductInfo>
        <h2>{product.title}</h2>
        <h3>${product.variants[0].price}</h3>
        <h4>Select Size</h4>
        <ButtonContainer>
          <SizeButton
            onClick={() => {
              setVariant(0);
            }}
          >
            S
          </SizeButton>
          <SizeButton
            onClick={() => {
              setVariant(1);
            }}
          >
            M
          </SizeButton>
          <SizeButton
            onClick={() => {
              setVariant(2);
            }}
          >
            L
          </SizeButton>
        </ButtonContainer>
        <AddCartButton
          to="/checkout"
          onClick={() => {
            addItemToCheckout(product.variants[variant].id, "1");
          }}
        >
          Add to Cart
        </AddCartButton>
      </ProductInfo>
      <Footer />
    </ProductPageStyled>
  );
};

export default ProductPage;
