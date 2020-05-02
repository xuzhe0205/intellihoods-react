import React, { Component } from "react";
import "./Signin.scss";
import signinStyles from "../../asset/jss/material-kit-react/views/componentsSections/loginStyle.js";
import Card from "../../component/Card/Card";
import CardHeader from "../../component/Card/CardHeader";
import CardBody from "../../component/Card/CardBody";
import CardFooter from "../../component/Card/CardFooter";
import CustomInput from "../../component/CustomInput/CustomInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import People from "@material-ui/icons/People";
import Email from "@material-ui/icons/Email";
import Icon from "@material-ui/core/Icon";
import Button from "../../component/CustomButtons/Button";
import { makeStyles } from "@material-ui/core/styles";
import { login } from "../../util/APIUtils";
import {
  GOOGLE_AUTH_URL,
  FACEBOOK_AUTH_URL,
  GITHUB_AUTH_URL,
  ACCESS_TOKEN,
} from "../../model/APIConstant";

const useSigninStyles = makeStyles(signinStyles);
export default function LoginSignin() {
  return <LocalSigninComponent />;
}

class LocalSigninComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const inputName = target.name;
    const inputValue = target.value;

    this.setState({
      [inputName]: inputValue,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const loginRequest = Object.assign({}, this.state);

    login(loginRequest)
      .then((response) => {
        localStorage.setItem(ACCESS_TOKEN, response.accessToken);
        alert("You're successfully logged in!");
        this.setState({
          email: "",
          password: "",
        });
      })
      .catch((error) => {
        alert(
          (error && error.message) ||
            "Oops! Something went wrong. Please try again!"
        );
      });
  }

  render() {
    return (
      <Card style={{ marginTop: `10px` }}>
        <form className={useSigninStyles.form} onSubmit={this.handleSubmit}>
          <CardBody>
            <CustomInput
              labelText="Email"
              id="email"
              formControlProps={{
                fullWidth: true,
              }}
              inputProps={{
                name: "email",
                type: "email",
                endAdornment: (
                  <InputAdornment position="end">
                    <Email className={useSigninStyles.inputIconsColor} />
                  </InputAdornment>
                ),
                onChange: this.handleInputChange,
                value: this.state.email,
              }}
            />
            <CustomInput
              labelText="Password"
              id="pass"
              formControlProps={{
                fullWidth: true,
              }}
              inputProps={{
                name: "password",
                type: "password",
                endAdornment: (
                  <InputAdornment position="end">
                    <Icon className={useSigninStyles.inputIconsColor}>
                      lock_outline
                    </Icon>
                  </InputAdornment>
                ),
                onChange: this.handleInputChange,
                value: this.state.password,
                autoComplete: "off",
              }}
            />
          </CardBody>
          <CardFooter
            className={useSigninStyles.cardFooter}
            style={{
              justifyContent: `center`,
              height: `3rem`,
            }}
          >
            <Button
              color="success"
              style={{ textTransform: "Initial", fontSize: "14px" }}
              type="submit"
            >
              Sign in
            </Button>
          </CardFooter>
        </form>
      </Card>
    );
  }
}
