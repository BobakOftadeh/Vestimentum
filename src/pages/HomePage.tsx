import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/shopContext";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import { PageContainer } from "./style";
import Highlights from "../components/Highlights";
import NavBar from "../components/NavBar";
import Selection from "../components/Selection";
import Store from "../components/Store";
import Footer from "../components/Footer";

const HomeStyled = styled(PageContainer)``;

const HomePage = () => {
  return (
    <HomeStyled>
      <NavBar />
      <Header />
      <Selection />
      <Highlights />
      <Store />
      <Footer />
    </HomeStyled>
  );
};

export default HomePage;
