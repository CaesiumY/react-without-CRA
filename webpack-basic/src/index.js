import "./css/index.css";

import React from "react";
import ReactDOM from "react-dom";

import Content from "./components/content";

const App = () => <div>Hello, Webpack!</div>;

ReactDOM.render(<Content />, document.getElementById("app"));
