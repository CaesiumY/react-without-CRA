import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Movies from "./components/movies";
import Movie from "./components/movie";
import "./app.css";

const App = () => {
  return (
    <HashRouter>
      <Route path="/">
        <Switch>
          <Route exact path="/movies">
            <Movies />
          </Route>
          <Route path="/movies/:id">
            <Movie />
          </Route>
        </Switch>
      </Route>
    </HashRouter>
  );
};

export default App;
