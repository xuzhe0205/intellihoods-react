import React, { Component } from "react";
import "./Signin.scss";
import { Link, Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../../asset/jss/material-kit-react/components/headerLinksStyle.js";
import Button from "../../../component/CustomButtons/Button";
import Dialog from "@material-ui/core/Dialog";
import GridContainer from "../../../component/Grid/GridContainer";
import Slide from "@material-ui/core/Slide";
import Close from "@material-ui/icons/Close";
import modalStyles from "../../../asset/jss/material-kit-react/views/componentsSections/javascriptStyles";
import buttonStyles from "../../../asset/jss/material-kit-react/components/buttonStyle";
import loginStyles from "../../../asset/jss/material-kit-react/views/componentsSections/loginStyle.js";
import SigninBody from "./SigninBody.jsx";

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
  const [hidden, setHidden] = React.useState(true);

  return (
    <GridContainer>
      <Button
        color="transparent"
        target="_blank"
        className={classes.signinButton}
        onClick={() => {
          setOpen(true);
        }}
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
        onClose={() => {
          setOpen(false);
          setHidden(true);
        }}
        aria-labelledby="classic-modal-slide-title"
        aria-describedby="classic-modal-slide-description"
      >
        <SigninBody myhidden={true} />
      </Dialog>
    </GridContainer>
  );
}
