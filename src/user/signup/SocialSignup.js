import React, { Component } from "react";
import "./Signup.css";
import Button from "../../component/CustomButtons/Button";
import buttonStyles from "../../asset/jss/material-kit-react/components/buttonStyle";

export default function SocialSignup() {
  return <SocialSignupComponent />;
}

class SocialSignupComponent extends Component {
  render() {
    return (
      <div className="social-login">
        <div style={{ marginBottom: `2%` }}>
          <Button
            color="facebook"
            style={buttonStyles.socials}
            startIcon={<i className={" fa fa-facebook-f"} />}
          >
            <span style={{ marginRight: "-1rem", marginLeft: "0.8rem" }}>
              {" "}
              Sign up with Facebook
            </span>
          </Button>
        </div>
        <div style={{ marginBottom: `2%` }}>
          <Button
            color="google"
            style={buttonStyles.socials}
            startIcon={<i className={" fa fa-google"} />}
          >
            <span style={{ marginLeft: "1rem" }}>Sign up with Google</span>
          </Button>
        </div>
        <div style={{ marginBottom: `2%` }}>
          <Button
            color="github"
            style={buttonStyles.socials}
            startIcon={<i className={" fa fa-github"} />}
          >
            <span style={{ marginLeft: "1rem" }}>Sign up with Github</span>
          </Button>
        </div>
      </div>
    );
  }
}
