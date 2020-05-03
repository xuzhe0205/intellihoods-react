import React, { Component } from "react";
import { ACCESS_TOKEN } from "../../model/APIConstant";
import { Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class OAuth2RedirectHandlerComponent extends Component {
  getUrlParameter(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");

    var results = regex.exec(this.props.location.search);
    return results === null
      ? ""
      : decodeURIComponent(results[1].replace(/\+/g, " "));
  }

  render() {
    const token = this.getUrlParameter("token");
    const error = this.getUrlParameter("error");
    console.log("token: " + token);

    if (token) {
      localStorage.setItem(ACCESS_TOKEN, token);
      return (
        <Redirect
          to={{
            pathname: "/",
            state: { from: this.props.location },
          }}
        />
      );
    } else {
      return (
        <Redirect
          to={{
            pathname: "/login",
            state: {
              from: this.props.location,
              error: error,
            },
          }}
        />
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    from: state.from,
  };
};

const OAuth2RedirectHandler = withRouter(
  connect(mapStateToProps)(OAuth2RedirectHandlerComponent)
);

export default OAuth2RedirectHandler;
