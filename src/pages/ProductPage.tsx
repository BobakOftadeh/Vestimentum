import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/shopContext";

const ProductPage = () => {
  let { id } = useParams();
  const { fetchProductWithId, addItemToCheckout, product } = useContext(
    ShopContext
  );

  useEffect(() => {
    fetchProductWithId(id);
    return () => {};
  }, [fetchProductWithId, id]);

  console.log(useParams());

  if (!product.title) {
    return <div>loading</div>;
  }

  console.log(product);
  return (
    <div>
      <div>
        <img src={product.images[0].src} alt="" width="42" height="42" />
      </div>
      <div>{product.title}</div>
      <div>${product.variants[0].price}</div>
      {console.log(product.variants[0].id)}
      <button
        onClick={() => {
          addItemToCheckout(product.variants[0].id, "1");
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductPage;
