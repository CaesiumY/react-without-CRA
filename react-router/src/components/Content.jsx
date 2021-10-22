import React, { useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";

const Content = ({ children }) => {
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
        </ul>
      </nav>
      {children}
    </div>
  );
};

export default Content;
