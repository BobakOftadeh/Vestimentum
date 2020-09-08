import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/shopContext";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Highlights from "../components/Highlights";
import Store from "../components/Store";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Highlights />
      <Store />
    </div>
  );
};

export default HomePage;
