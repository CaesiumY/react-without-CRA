import React, { useState } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Header from "./components/Header";
import Products from "./components/Products";
import Shelf from "./components/Shelf";
import { PRODUCTS } from "./utils/constants";

const App = () => {
  const [cartItems, setCartItems] = useState({});

  const addCart = (id) => {
    cartItems[id]
      ? setCartItems((prev) => ({ ...prev, [id]: (prev[id] += 1) }))
      : setCartItems((prev) => ({ ...prev, [id]: (prev[id] = 1) }));
  };

  return (
    <HashRouter>
      <Switch>
        <Route path="/checkout">
          <Checkout cartItems={cartItems} products={PRODUCTS} />
        </Route>

        <Route path="/">
          <Header />
          <Shelf />
          <Switch>
            <Route path="/products/:id">
              <Products addCart={addCart} products={PRODUCTS} />
            </Route>
            <Route path="/cart">
              <Cart cartItems={cartItems} products={PRODUCTS} />
            </Route>
          </Switch>
        </Route>
      </Switch>
    </HashRouter>
  );
};

export default App;
