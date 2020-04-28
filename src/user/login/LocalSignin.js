import React, { Component } from "react";
import "./Signin.css";
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

const useSigninStyles = makeStyles(signinStyles);
export default function LoginSignin() {
  return <LocalSigninComponent />;
}

class LocalSigninComponent extends Component {
  render() {
    return (
      <Card style={{ marginTop: `10px` }}>
        <form className={useSigninStyles.form}>
          <CardBody>
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
                    <Email className={useSigninStyles.inputIconsColor} />
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
                    <Icon className={useSigninStyles.inputIconsColor}>
                      lock_outline
                    </Icon>
                  </InputAdornment>
                ),
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
            >
              Sign in
            </Button>
          </CardFooter>
        </form>
      </Card>
    );
  }
}
