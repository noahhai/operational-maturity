import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { SurveyPage } from "./Survey";
import { ExportToPDFPage } from "./Export";

import "bootstrap/dist/css/bootstrap.css";

export default function SurveyJSReactApplication() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="/">
                Operational Maturity
              </a>
            </div>
          </div>
        </nav>

        <Switch>
          <Route exact path="/">
            <SurveyPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
