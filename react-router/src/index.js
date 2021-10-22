import React from "react";
import ReactDOM from "react-dom";

import "./css/index.css";
import Router from "./components/Router";

const mapping = {
  "#profile": (
    <div>
      Profile (<a href="#">home</a>)
    </div>
  ),
  "#account": (
    <div>
      Account (<a href="#">home</a>)
    </div>
  ),
  "*": (
    <div>
      Dashboard <br />
      <a href="#profile">Profile</a>
      <br />
      <a href="#account">Account</a>
      <br />
    </div>
  ),
};

ReactDOM.render(<Router mapping={mapping} />, document.getElementById("app"));
