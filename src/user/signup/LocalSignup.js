import React, { Component } from "react";
import "./Signup.css";
import Button from "../../component/CustomButtons/Button";
import { makeStyles } from "@material-ui/core/styles";
import buttonStyles from "../../asset/jss/material-kit-react/components/buttonStyle";
import signupStyles from "../../asset/jss/material-kit-react/views/componentsSections/loginStyle.js";
import Card from "../../component/Card/Card";
import CardHeader from "../../component/Card/CardHeader";
import CardBody from "../../component/Card/CardBody";
import CardFooter from "../../component/Card/CardFooter";
import CustomInput from "../../component/CustomInput/CustomInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import People from "@material-ui/icons/People";
import Email from "@material-ui/icons/Email";
import Icon from "@material-ui/core/Icon";

const useSignupStyles = makeStyles(signupStyles);
export default function LocalSignup() {
  return <LocalSignupComponent />;
}

class LocalSignupComponent extends Component {
  render() {
    return (
      <Card style={{ marginTop: `10px` }}>
        <form className={useSignupStyles.form}>
          <CardBody>
            <CustomInput
              labelText="Name"
              id="first"
              formControlProps={{
                fullWidth: true,
              }}
              inputProps={{
                type: "text",
                endAdornment: (
                  <InputAdornment position="end">
                    <People className={useSignupStyles.inputIconsColor} />
                  </InputAdornment>
                ),
              }}
            />
            <CustomInput
              labelText="Email"
              id="email"
              formControlProps={{
                fullWidth: true,
              }}
              inputProps={{
                type: "email",
                endAdornment: (
                  <InputAdornment position="end">
                    <Email className={useSignupStyles.inputIconsColor} />
                  </InputAdornment>
                ),
              }}
            />
            <CustomInput
              labelText="Password"
              id="pass"
              formControlProps={{
                fullWidth: true,
              }}
              inputProps={{
                type: "password",
                endAdornment: (
                  <InputAdornment position="end">
                    <Icon className={useSignupStyles.inputIconsColor}>
                      lock_outline
                    </Icon>
                  </InputAdornment>
                ),
                autoComplete: "off",
              }}
            />
          </CardBody>
          <CardFooter
            className={useSignupStyles.cardFooter}
            style={{
              justifyContent: `center`,
              height: `3rem`,
            }}
          >
            <Button
              color="success"
              style={{ textTransform: "Initial", fontSize: "14px" }}
            >
              Sign up
            </Button>
          </CardFooter>
        </form>
      </Card>
    );
  }
}
