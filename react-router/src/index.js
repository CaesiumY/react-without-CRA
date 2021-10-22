import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route } from "react-router-dom";
import Content from "./components/Content";
import About from "./components/About";

import "./css/index.css";

ReactDOM.render(
  <HashRouter>
    <Route path="/">
      <Content />
      <Route path="/about">
        <About />
      </Route>
    </Route>
  </HashRouter>,
  document.getElementById("app")
);
