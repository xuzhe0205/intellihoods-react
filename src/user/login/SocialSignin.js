import React, { Component } from "react";
import "./Signin.css";
import Button from "../../component/CustomButtons/Button";
import buttonStyles from "../../asset/jss/material-kit-react/components/buttonStyle";
import {
  GOOGLE_AUTH_URL,
  FACEBOOK_AUTH_URL,
  GITHUB_AUTH_URL,
  ACCESS_TOKEN,
} from "../../model/APIConstant";

export default function SocialSignin() {
  return <SocialSigninComponent />;
}

class SocialSigninComponent extends Component {
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
              Sign in with Facebook
            </span>
          </Button>
        </div>
        <div style={{ marginBottom: `2%` }}>
          <Button
            color="google"
            style={buttonStyles.socials}
            startIcon={<i className={" fa fa-google"} />}
            href={GOOGLE_AUTH_URL}
          >
            <span style={{ marginLeft: "1rem" }}>Sign in with Google</span>
          </Button>
        </div>
        <div style={{ marginBottom: `2%` }}>
          <Button
            color="github"
            style={buttonStyles.socials}
            startIcon={<i className={" fa fa-github"} />}
          >
            <span style={{ marginLeft: "1rem" }}>Sign in with Github</span>
          </Button>
        </div>
      </div>
    );
  }
}
