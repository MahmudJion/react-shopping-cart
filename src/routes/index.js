import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Store from '../pages/Store';
import NotFound from '../pages/NotFound';
import Cart from "../pages/Cart";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Store} />
        <Route path="/cart" component={Cart} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default Routes;
