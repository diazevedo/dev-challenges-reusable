import React from "react";
import { Switch, Route } from "react-router";
import Buttons from "../pages/Buttons";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Buttons />
      </Route>
      <Route exact path="/buttons">
        <Buttons />
      </Route>
    </Switch>
  );
};

export default Routes;
