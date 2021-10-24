import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Movies from "./components/movies";
import Movie from "./components/movie";

const HelloWorld = () => <div>Hello world</div>;

const App = () => {
  return (
    <HashRouter>
      <Route path="/">
        <HelloWorld />
        <Route path="/movies">
          <Movies />
          <Route path="/:id">
            <Movie />
          </Route>
        </Route>
      </Route>
    </HashRouter>
  );
};

export default App;
