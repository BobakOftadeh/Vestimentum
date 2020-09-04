import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";

import ShopProvider from "./context/shopContext";

function App() {
  return (
    <ShopProvider>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/product/:id">
              <ProductPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </Router>
      </div>
    </ShopProvider>
  );
}

export default App;
