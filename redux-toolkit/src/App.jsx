import React from "react";
import { HashRouter, Route, withRouter } from "react-router-dom";
import Content from "./components/Content";
import About from "./components/About";
import Posts from "./components/Posts";
import Contact from "./components/Contact";
import Counter from "./components/Counter";
import Pokemon from "./components/Pokemon";

const posts = {
  title: "Post",
  content: "Post Content",
};

const WithRouterContact = withRouter(Contact);
const WithRouterPosts = withRouter(Posts);

const App = () => {
  return (
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
        <Route path="/counter">
          <Counter />
        </Route>
        <Route path="/pokemon">
          <Pokemon />
        </Route>
      </Route>
    </HashRouter>
  );
};

export default App;
