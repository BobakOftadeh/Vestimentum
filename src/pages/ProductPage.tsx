import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  let { id } = useParams();

  console.log(useParams());

  return <div>Product page {id}</div>;
};

export default ProductPage;
