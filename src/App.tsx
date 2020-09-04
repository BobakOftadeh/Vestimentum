import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CheckoutPage from "./pages/CheckoutPage";
import NavBar from "./components/NavBar";
import ShopProvider from "./context/shopContext";
import Cart from "./components/Cart";

function App() {
  return (
    <ShopProvider>
      <div className="App">
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
        </Router>
      </div>
    </ShopProvider>
  );
}

export default App;
