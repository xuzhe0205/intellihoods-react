import React, { Component } from "react";
import "./Signup.scss";
import Button from "../../CustomButtons/Button";
import { makeStyles } from "@material-ui/core/styles";
import buttonStyles from "../../../asset/jss/material-kit-react/components/buttonStyle";
import signupStyles from "../../../asset/jss/material-kit-react/views/componentsSections/loginStyle.js";
import Card from "../../Card/Card";
import CardHeader from "../../Card/CardHeader";
import CardBody from "../../Card/CardBody";
import CardFooter from "../../Card/CardFooter";
import CustomInput from "../../CustomInput/CustomInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import People from "@material-ui/icons/People";
import Email from "@material-ui/icons/Email";
import Icon from "@material-ui/core/Icon";
import { signup } from "../../../util/APIUtils";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as authActionCreator from "../../../store/actionCreators/authActionCreator";
import PropTypes from "prop-types";
import * as authActionConstant from "../../../util/AuthConstant";
import { Redirect } from "react-router-dom";

const useSignupStyles = makeStyles(signupStyles);

export class LocalSignupComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
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
    const signUpRequest = Object.assign({}, this.state);
    this.props.signup(signUpRequest);
    alert(this.props.success);
    // signup(signUpRequest)
    //   .then((response) => {
    //     alert("You're successfully registered. Please login to continue!");
    //     this.setState({
    //       name: "",
    //       email: "",
    //       password: "",
    //     });
    //     // this.props.history.push("/login");
    //   })
    //   .catch((error) => {
    //     alert(
    //       (error && error.message) ||
    //         "Oops! Something went wrong. Please try again!"
    //     );
    //   });
  }
  render() {
    if (this.props.success === true) {
      return (
        <Redirect
          to={{
            pathname: "/signup/redirect",
          }}
        />
      );
    }
    return (
      <Card style={{ marginTop: `10px` }}>
        <form className={useSignupStyles.form} onSubmit={this.handleSubmit}>
          <CardBody>
            <CustomInput
              labelText="Username"
              id="first"
              formControlProps={{
                fullWidth: true,
              }}
              inputProps={{
                name: "name",
                type: "text",
                endAdornment: (
                  <InputAdornment position="end">
                    <People className={useSignupStyles.inputIconsColor} />
                  </InputAdornment>
                ),
                onChange: this.handleInputChange,
                value: this.state.name,
              }}
            />
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
                    <Email className={useSignupStyles.inputIconsColor} />
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
                    <Icon className={useSignupStyles.inputIconsColor}>
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
            className={useSignupStyles.cardFooter}
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
              Sign up
            </Button>
          </CardFooter>
        </form>
      </Card>
    );
  }
}

LocalSignupComponent.propTypes = {
  success: PropTypes.bool,
};

const mapStateToProps = (state) => {
  return {
    success: state.auth.success,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      signup: authActionCreator.signup,
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocalSignupComponent);
