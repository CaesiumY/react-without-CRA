import React, { useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";

const Content = (props) => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/posts" activeClassName="active">
            Blog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Content;
