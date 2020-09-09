import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CheckoutPage from "./pages/CheckoutPage";
import ShopProvider from "./context/shopContext";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
  --font-size: 100%; /* 16px */
  --ratio: 1.5;
  --ratio-alt: 1.333;
  --ratio-alt-2: 1.155;
  --color-primary: #add2c9;
  --color-white: #faf9f9;
  --color-pale: #5ea3a3;
  --color-pale-light: #488b8f;
  
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
  
  @media only screen and (max-width: 900px) {
  :root {
    --ratio: var(--ratio-alt);
  }
}


@media only screen and (max-width: 400px) {
  :root {
    --ratio: var(--ratio-alt-2);
  }
}
  
`;

function App() {
  return (
    <ShopProvider>
      <GlobalStyle />
      <Router>
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
