import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Dashboard";
import SurveyNew from "../SurveyNew";

const Routes = props => {
  return (
    <section className="container">
      <Switch>
        <PrivateRoute exact path="/surveys" component={Dashboard} />
        <PrivateRoute exact path="/surveys/new" component={SurveyNew} />
      </Switch>
    </section>
  );
};

export default Routes;
