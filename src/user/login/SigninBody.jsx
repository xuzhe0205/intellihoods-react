import React, { Component } from "react";
import "./Signin.css";
import SocialSignin from "./SocialSignin";
import LocalSignin from "./LocalSignin";
import SignupBody from "../signup/SignupBody";

class SigninBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: props.myhidden,
    };
  }
  componentWillReceiveProps(newProps) {
    this.setState({ hidden: newProps.myhidden });
  }
  render() {
    const signupBody = <SignupBody curHidden={false} />;
    const body = (
      <div className="login-content">
        <h2 className="login-title">Welcome back.</h2>
        <br />
        <SocialSignin />
        <hr className="hr-text" data-content="or" />
        <LocalSignin />

        <span
          className="signup-link"
          onClick={() => this.setState({ hidden: false })}
        >
          No account?
          <b style={{ color: `#69904E`, cursor: `pointer` }}> Sign up! </b>
        </span>
        <br />
        <br />
      </div>
    );
    return (
      <div className="login-container">
        {this.state.hidden ? body : signupBody}
      </div>
    );
  }
}

export default SigninBody;
