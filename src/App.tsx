import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CheckoutPage from "./pages/CheckoutPage";
import ShopProvider from "./context/shopContext";
import ScrollToTop from "./components/ScrollToTop";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
  --font-size: 100%; /* 16px */
  --ratio: 1.5;
  --ratio-alt: 1.333;
  --ratio-alt-2: 1.155;
  --ratio-alt-3: 1;
  --color-orange: #ff971d;
  --color-orange-light: #ffe8d6;
  --color-white: #ffffff;
  --color-white-pale: #f9f6f7;
  
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
    font-family: "Open Sans", sans-serif;
    text-rendering: optimizeLegibility;


    @media only screen and (max-width: 1000px) {
  font-size: 80%
}
    @media only screen and (max-width: 600px) {
  font-size: 60%
}

@media only screen and (max-width: 400px) {
  font-size: 50%
}

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

p,
li,
h1,
h2,
h3,
h4 {
  word-break: break-word;

  hyphens: auto;
}
  
  @media only screen and (max-width: 1400px) {
  :root {
    --ratio: var(--ratio-alt);
  }
  font-size: 80%;
}

`;

function App() {
  return (
    <ShopProvider>
      <GlobalStyle />
      <Router>
        <ScrollToTop />
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
      </Router>
    </ShopProvider>
  );
}

export default App;
