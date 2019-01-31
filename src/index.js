import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./header";
import Login from "./login";
import Logout from "./logout";
import Page1 from "./page1";

class App extends React.Component {
  render() {
    return (
      <Router basename={"/"}>
        <div className="App">
          <Header />

          <h1>Hello CodeSandbox</h1>
          <h2>Start editing to see some magic happen!</h2>

          <div style={{ marginTop: "10px" }}>
            <Route
              path="/login"
              exact
              strict
              render={routeProps => <Login {...routeProps} />}
            />
            <Route
              path="/logout"
              exact
              strict
              render={routeProps => <Logout {...routeProps} />}
            />
            <Route
              path="/page1"
              exact
              strict
              render={routeProps => <Page1 {...routeProps} />}
            />
          </div>
        </div>
      </Router>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
