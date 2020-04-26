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
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Modal from "@material-ui/core/Modal";
import Signup from "../signup/Signup";
import fbLogo from "../../asset/image/social/fb-logo.png";
import googleLogo from "../../asset/image/social/google-logo.png";
import githubLogo from "../../asset/image/social/github-logo.png";

const useStyles = makeStyles(styles);
const useModalStyles = makeStyles(modalStyles);
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});
Transition.displayName = "Transition";
export default function Signin(props) {
  const classes = useStyles();
  const modalClasses = useModalStyles();
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
        <h1 className="login-title">Login to Your Social</h1>
        <SocialLogin />
        <div className="or-separator">
          <span className="or-text">OR</span>
        </div>
        <LoginForm {...this.props} />
        <span className="signup-link">
          New user? <Link to="/signup">Sign up!</Link>
        </span>
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

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </GridContainer>
  );
}

class SocialLogin extends Component {
  render() {
    return (
      <div className="social-login">
        <a className="btn btn-block social-btn google" href={"www.google.com"}>
          <img src={googleLogo} alt="Google" /> Log in with Google
        </a>
        <a
          className="btn btn-block social-btn facebook"
          href={"www.facebook.com"}
        >
          <img src={fbLogo} alt="Facebook" /> Log in with Facebook
        </a>
        <a className="btn btn-block social-btn github" href={"www.github.com"}>
          <img src={githubLogo} alt="Github" /> Log in with Github
        </a>
      </div>
    );
  }
}

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-item">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleInputChange}
            required
          />
        </div>
        <div className="form-item">
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleInputChange}
            required
          />
        </div>
        <div className="form-item">
          <button type="submit" className="btn btn-block btn-primary">
            Login
          </button>
        </div>
      </form>
    );
  }
}
