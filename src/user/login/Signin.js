import React, { Component } from "react";
import "./Signin.css";
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
import Signup from "../signup/Signup";
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
import loginStyles from "../../asset/jss/material-kit-react/views/componentsSections/loginStyle.js";

const useStyles = makeStyles(styles);
const useModalStyles = makeStyles(modalStyles);
const useButtonStyles = makeStyles(buttonStyles);
const useLoginStyles = makeStyles(loginStyles);
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});
Transition.displayName = "Transition";
export default function Signin(props) {
  const classes = useStyles();
  const modalClasses = useModalStyles();
  const buttonClasses = useButtonStyles();
  const loginClasses = useLoginStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div className="login-container">
      <div className="login-content">
        <h2 className="login-title">Welcome back.</h2>
        <br />
        <SocialLogin />
        <hr className="hr-text" data-content="or" />
        <LocalLogin />

        <span className="signup-link">
          No account?{" "}
          <Link to="/signup">
            <b style={{ color: `69904E` }}> Sign up! </b>
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
        Sign in
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

class SocialLogin extends Component {
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

class LocalLogin extends Component {
  render() {
    return (
      <Card style={{ marginTop: `10px` }}>
        <form className={useLoginStyles.form}>
          <CardBody>
            <CustomInput
              labelText="Email..."
              id="email"
              formControlProps={{
                fullWidth: true,
              }}
              inputProps={{
                type: "email",
                endAdornment: (
                  <InputAdornment position="end">
                    <Email className={useLoginStyles.inputIconsColor} />
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
                    <Icon className={useLoginStyles.inputIconsColor}>
                      lock_outline
                    </Icon>
                  </InputAdornment>
                ),
                autoComplete: "off",
              }}
            />
          </CardBody>
          <CardFooter
            className={useLoginStyles.cardFooter}
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
