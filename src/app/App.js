import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Button, Alert } from "@material-ui/core";
import Home from "../page/Home/Home";

import "./App.scss";

class App extends Component {
  test(message) {
    alert(message);
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
