import React, { Component } from "react";
import LocalSignup from "./LocalSignup";
import SocialSignup from "./SocialSignup";
import "./Signup.css";
import "../login/SigninBody";
import SigninBody from "../login/SigninBody";

class SignupBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: props.curHidden,
    };
  }
  componentWillReceiveProps(newProps) {
    this.setState({ hidden: newProps.curHidden });
  }
  render() {
    const realSignupBody = (
      <div className="signup-content">
        <h2 className="signup-title">Join Posthem.</h2>
        <br />
        <SocialSignup />
        <hr className="hr-text" data-content="or" />
        <LocalSignup />

        <span className="login-link">
          Already have an account?
          <b
            style={{ color: `#69904E`, cursor: `pointer` }}
            onClick={() => this.setState({ hidden: true })}
          >
            &nbsp; Sign in!
          </b>
        </span>
        <br />
        <br />
      </div>
    );
    const signinBody = <SigninBody myhidden={true} />;
    return (
      <div className="signup-container">
        {this.state.hidden ? signinBody : realSignupBody}
      </div>
    );
  }
}

export default SignupBody;
