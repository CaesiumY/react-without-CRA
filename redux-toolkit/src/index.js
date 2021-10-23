import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, withRouter } from "react-router-dom";
import "./css/index.css";
import Content from "./components/Content";
import About from "./components/About";
import Posts from "./components/Posts";
import Contact from "./components/Contact";

const WithRouterContact = withRouter(Contact);
const WithRouterPosts = withRouter(Posts);

const posts = {
  title: "Post",
  content: "Post Content",
};

ReactDOM.render(
  <HashRouter>
    <Route path="/">
      <Content />
      <Route path="/about">
        <About />
      </Route>
      <Route exact path="/posts">
        <Posts posts={posts} />
      </Route>
      <Route path="/posts/:id">
        <WithRouterPosts posts={posts} />
      </Route>
      <Route path="/contact">
        <WithRouterContact />
      </Route>
    </Route>
  </HashRouter>,
  document.getElementById("app")
);
