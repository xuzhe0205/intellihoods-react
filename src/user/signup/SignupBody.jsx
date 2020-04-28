import React, { Component } from "react";
import LocalSignup from "./LocalSignup";
import SocialSignup from "./SocialSignup";
import "./Signup.css";

class SignupBody extends Component {
  render() {
    return (
      <div className="signup-container">
        <div className="signup-content">
          <h2 className="signup-title">Join Posthem.</h2>
          <br />
          <SocialSignup />
          <hr className="hr-text" data-content="or" />
          <LocalSignup />

          <span className="signup-link">
            Already account?
            <b style={{ color: `#69904E` }}> Sign in! </b>
          </span>
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default SignupBody;
