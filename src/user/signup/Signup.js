import React, { Component } from "react";
import "./Signup.css";
import { Link, Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../asset/jss/material-kit-react/components/headerLinksStyle.js";
import Button from "../../component/CustomButtons/Button";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import GridContainer from "../../component/Grid/GridContainer";
import GridItem from "../../component/Grid/GridItem";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Slide from "@material-ui/core/Slide";
import Close from "@material-ui/icons/Close";
import modalStyles from "../../asset/jss/material-kit-react/views/componentsSections/javascriptStyles";
import buttonStyles from "../../asset/jss/material-kit-react/components/buttonStyle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Modal from "@material-ui/core/Modal";
import fbLogo from "../../asset/image/social/fb-logo.png";
import googleLogo from "../../asset/image/social/google-logo.png";
import githubLogo from "../../asset/image/social/github-logo.png";
import Card from "../../component/Card/Card";
import CardHeader from "../../component/Card/CardHeader";
import CardBody from "../../component/Card/CardBody";
import CardFooter from "../../component/Card/CardFooter";
import CustomInput from "../../component/CustomInput/CustomInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import People from "@material-ui/icons/People";
import Email from "@material-ui/icons/Email";
import Icon from "@material-ui/core/Icon";
import signupStyles from "../../asset/jss/material-kit-react/views/componentsSections/loginStyle.js";

const useStyles = makeStyles(styles);
const useModalStyles = makeStyles(modalStyles);
const useButtonStyles = makeStyles(buttonStyles);
const useSignupStyles = makeStyles(signupStyles);
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});
Transition.displayName = "Transition";
export default function Signup(props) {
  const classes = useStyles();
  const modalClasses = useModalStyles();
  const buttonClasses = useButtonStyles();
  const signupClasses = useSignupStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div className="signup-container">
      <div className="signup-content">
        <h2 className="signup-title">Join Posthem.</h2>
        <br />
        <SocialSignup />
        <hr className="hr-text" data-content="or" />
        <LocalSignup />

        <span className="signup-link">
          Already account?
          <Link to="/signin">
            <b style={{ color: `69904E` }}> Sign in! </b>
          </Link>
        </span>
        <br />
        <br />
      </div>
    </div>
  );

  return (
    <GridContainer>
      <Button
        color="transparent"
        target="_blank"
        className={classes.signButton}
        onClick={handleOpen}
      >
        Sign up
      </Button>

      <Dialog
        classes={{
          root: modalClasses.center,
          paper: modalClasses.modal,
        }}
        open={open}
        TransitionComponent={Transition}
        maxWidth="sm"
        keepMounted
        onClose={() => setOpen(false)}
        aria-labelledby="classic-modal-slide-title"
        aria-describedby="classic-modal-slide-description"
      >
        {body}
      </Dialog>
    </GridContainer>
  );
}

class SocialSignup extends Component {
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

class LocalSignup extends Component {
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
