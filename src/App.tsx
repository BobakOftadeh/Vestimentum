import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CheckoutPage from "./pages/CheckoutPage";
import NavBar from "./components/NavBar";
import ShopProvider from "./context/shopContext";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
  --font-size: 100%; /* 16px */
  --ratio: 1.333;

/* Calculate values */
  --h4: calc(var(--font-size) * var(--ratio));
  --h3: calc(var(--h4) * var(--ratio));
  --h2: calc(var(--h3) * var(--ratio));
  --h1: calc(var(--h2) * var(--ratio));
}


  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html {
    font-size: 1rem;
    font-family: "Lato";
    text-rendering: optimizeLegibility;
  }
  body {
    line-height: 1.5;
  }

  p {
  font-size: var(--font-size);
}

h4 {
  font-size: var(--h4);
}

h3 {
  font-size: var(--h3);
}

h2 {
  font-size: var(--h2);
}

h1 {
  font-size: var(--h1);
}
  
  @media only screen and (min-width: 405px) {
    html {
      font-size: 80%;
    }
  }
`;

const AppContainer = styled.div`
  display: grid;
  grid-template-columns:
    [full-start] 1fr [center-start] repeat(8, minmax(min-content, 13rem))
    [center-end] 1fr [full-end];
`;

function App() {
  return (
    <ShopProvider>
      <AppContainer className="App">
        <GlobalStyle />
        <Router>
          <NavBar />
          <Switch>
            <Route path="/product/:id">
              <ProductPage />
            </Route>
            <Route path="/checkout">
              <CheckoutPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AppContainer>
    </ShopProvider>
  );
}

export default App;
