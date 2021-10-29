import React, { useState } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Products from "./components/Products";
import { PRODUCTS } from "./utils/constants";

const Heading = () => <h1>Nile 서점</h1>;

const Copy = () => (
  <p>
    팝업에서 자세한 내용을 확인하려면 책을 클릭하세요. 팝업의 링크를 복사하거나
    붙여넣을 수 있습니다. 링크는 책에 대한 별도의 페이지로 연결됩니다.
  </p>
);

const LibraryApp = () => <div>library</div>;
const Index = () => <div>index</div>;

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
          <LibraryApp />
          <Index />
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
