import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Button, Alert } from "@material-ui/core";
import Home from "../page/Home/Home";
import Signup from "../user/signup/Signup";

import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      currentUser: null,
      loading: false,
    };
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" exact component={Signup} />
        </Switch>
      </div>
    );
  }
}

export default App;
