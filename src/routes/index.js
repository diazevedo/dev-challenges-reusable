import React from "react";
import { Switch, Route, Redirect } from "react-router";
import Buttons from "../pages/Buttons";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/buttons" />
      </Route>
      <Route exact path="/buttons">
        <Buttons />
      </Route>
    </Switch>
  );
};

export default Routes;
