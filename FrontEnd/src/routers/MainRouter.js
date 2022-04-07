import React from "react";
import { DashboardRoutes } from "./DashBoardRoutes";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
export const MainRouter = () => {
  return (
    <>
      <Router>
        <div>
          <Switch>
            <Route path="/" component={DashboardRoutes} />
          </Switch>
        </div>
      </Router>
    </>
  );
};
