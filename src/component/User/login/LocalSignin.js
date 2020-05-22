import React, { Component } from "react";
import "./Signin.scss";
import signinStyles from "../../../asset/jss/material-kit-react/views/componentsSections/loginStyle.js";
import Card from "../../../component/Card/Card";
import CardBody from "../../../component/Card/CardBody";
import CardFooter from "../../../component/Card/CardFooter";
import CustomInput from "../../../component/CustomInput/CustomInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import Email from "@material-ui/icons/Email";
import Icon from "@material-ui/core/Icon";
import Button from "../../../component/CustomButtons/Button";
import { makeStyles } from "@material-ui/core/styles";
import { signin } from "../../../util/APIUtils";
import {
  GOOGLE_AUTH_URL,
  FACEBOOK_AUTH_URL,
  GITHUB_AUTH_URL,
  ACCESS_TOKEN,
} from "../../../util/APIConstant";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as authActionCreator from "../../../store/actionCreators/authActionCreator";

const useSigninStyles = makeStyles(signinStyles);
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

    const signinRequest = Object.assign({}, this.state);

    this.props.signin(signinRequest);
    // signin(signinRequest)
    //   .then((response) => {
    //     localStorage.setItem(ACCESS_TOKEN, response.accessToken);
    //     alert("You're successfully logged in!");
    //     this.setState({
    //       email: "",
    //       password: "",
    //     });
    //   })
    //   .catch((error) => {
    //     alert(
    //       (error && error.message) ||
    //         "Oops! Something went wrong. Please try again!"
    //     );
    //   });
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      signin: authActionCreator.signin,
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(LocalSigninComponent);
