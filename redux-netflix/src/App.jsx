import React from "react";
import { HashRouter, Route } from "react-router-dom";

const HelloWorld = () => <div>Hello world</div>;

const App = () => {
  return (
    <HashRouter>
      <Route path="/">
        <HelloWorld />
      </Route>
    </HashRouter>
  );
};

export default App;
