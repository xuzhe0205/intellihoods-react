import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import { Button, Alert } from "@material-ui/core";
import LandingPage from "../page/LandingPage/LandingPage";
import Profile from "../component/User/profile/Profile";
import OAuth2RedirectHandler from "../component/User/oauth2/OAuth2RedirectHandler";
import "./App.scss";
import PrivateRoute from "../common/PrivateRoute";
import { getCurrentUser } from "../util/APIUtils";
import LoadingIndicator from "../common/LoadingIndicator.js";
import Home from "../page/Home/Home";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      currentUser: null,
      loading: false,
    };
    this.loadCurrentlyLoggedInUser = this.loadCurrentlyLoggedInUser.bind(this);
  }
  loadCurrentlyLoggedInUser() {
    this.setState({
      loading: true,
    });

    getCurrentUser()
      .then((response) => {
        this.setState({
          currentUser: response,
          authenticated: true,
          loading: false,
        });
        console.log(this.state.authenticated);
        console.log(this.state.currentUser);
      })
      .catch((error) => {
        // alert("shit happens: " + error);
        this.setState({
          loading: false,
        });
      });
  }
  componentDidMount() {
    this.loadCurrentlyLoggedInUser();
  }
  render() {
    if (this.state.loading) {
      return <LoadingIndicator />;
    }
    return (
      <div className="App">
        <Switch>
          {this.state.authenticated ? (
            <PrivateRoute
              exact
              path="/"
              authenticated={this.state.authenticated}
              currentUser={this.state.currentUser}
              component={Home}
            />
          ) : (
            <Route exact path="/" component={LandingPage} />
          )}
          <PrivateRoute
            path="/profile"
            authenticated={this.state.authenticated}
            currentUser={this.state.currentUser}
            component={Profile}
          ></PrivateRoute>
          <Route
            path="/oauth2/redirect"
            component={OAuth2RedirectHandler}
          ></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
