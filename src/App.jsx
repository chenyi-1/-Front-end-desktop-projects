import React, { Component } from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
  Link,
  Routes,
} from "react-router-dom";

import routes from "./routes";

import Home from "./components/Home";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          {routes.map((route) => {
            return (
              <Route
                path={route.path}
                key={route.path}
                element={<route.component />}
              ></Route>
            );
          })}
          <Route path="/" element={<Home to="home" />} />
        </Routes>
      </Router>
    );
  }
}
