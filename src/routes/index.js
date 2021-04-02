import React from "react";
import { Switch, Route } from "react-router";
import Buttons from "../pages/Buttons";

const Routes = () => {
  return (
    <Switch>
      <Route path="/buttons">
        <Buttons />
      </Route>
    </Switch>
  );
};

export default Routes;
