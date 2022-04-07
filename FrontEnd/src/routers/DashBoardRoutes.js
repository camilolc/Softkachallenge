import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Game } from "../components/Game";
import { Config } from "../components/Config";
import { NavBar } from "../ui/NavBar";
import { Scores } from "../components/Scores";

export const DashboardRoutes = () => {
  return (
    <>
      <div>
        <Switch>
          <Route exact path="/home" component={NavBar} />
          <Route exact path="/game" component={Game} />

          <Route exact path="/config" component={Config} />
          <Route exact path="/score" component={Scores} />
          <Redirect to="/home" />
        </Switch>
      </div>
    </>
  );
};
