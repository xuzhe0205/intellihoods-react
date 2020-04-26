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
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

const useStyles = makeStyles(styles);
const useModalStyles = makeStyles(modalStyles);
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});
Transition.displayName = "Transition";
export default function Signup(props) {
  const classes = useStyles();
  const modalClasses = useModalStyles();
  const [classicModal, setClassicModal] = React.useState(false);
  return (
    <GridContainer>
      <Button
        color="transparent"
        target="_blank"
        className={classes.signButton}
        onClick={() => setClassicModal(true)}
      >
        Sign up
      </Button>

      <Dialog
        classes={{
          root: modalClasses.center,
          paper: modalClasses.modal,
        }}
        open={classicModal}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setClassicModal(false)}
        aria-labelledby="classic-modal-slide-title"
        aria-describedby="classic-modal-slide-description"
      >
        <DialogTitle
          id="classic-modal-slide-title"
          disableTypography
          className={modalClasses.modalHeader}
        >
          <IconButton
            className={modalClasses.modalCloseButton}
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={() => setClassicModal(false)}
          >
            <Close className={modalClasses.modalClose} />
          </IconButton>
          <h4 className={modalClasses.modalTitle}>Modal title</h4>
        </DialogTitle>
        <DialogContent
          id="classic-modal-slide-description"
          className={modalClasses.modalBody}
        >
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean. A small river named Duden flows by their place and
            supplies it with the necessary regelialia. It is a paradisematic
            country, in which roasted parts of sentences fly into your mouth.
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic life One day however a small line of
            blind text by the name of Lorem Ipsum decided to leave for the far
            World of Grammar.
          </p>
        </DialogContent>
        <DialogActions className={modalClasses.modalFooter}>
          <Button color="transparent" simple>
            Nice Button
          </Button>
          <Button onClick={() => setClassicModal(false)} color="danger" simple>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </GridContainer>
  );
}
