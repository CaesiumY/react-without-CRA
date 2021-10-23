import React from "react";
import { NavLink } from "react-router-dom";

const Content = () => {
  return (
    <div>
      <h1>Node University</h1>
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
          <li>
            <NavLink to="/contact" activeClassName="active">
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/counter" activeClassName="active">
              redux-toolkit counter example
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Content;
