import React from "react";
import { Router } from "react-router";
import createBrowserHistory from "history/createBrowserHistory";
import { Switch, Route } from "react-router-dom";
import NotFoundPage from "routes/404";
import Index from "routes/Index";
import TicTacToe from "routes/TicTacToe";

const history = new createBrowserHistory();

const router = () => (
  <Router history={history}>
    <Switch>
      <Route path="/" exact component={Index} />
      <Route path="/tictactoe" component={TicTacToe} />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
);

export default router;
