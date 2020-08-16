import React from "react";
import { Switch, Route } from "react-router-dom";
import Todo from "../pages/todo";
import About from "../pages/about";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Todo} />
    <Route path="/todos" component={Todo} />
    <Route path="/about" component={About} />
  </Switch>
);

export default Routes;
