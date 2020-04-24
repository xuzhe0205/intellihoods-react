import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
// sections for this page
import HeaderLinks from "./Header/HeaderLinks.js";

import styles from "../asset/jss/material-kit-react/views/components";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="Material Kit React"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />

      <div className={classNames(classes.main, classes.mainRaised)}>
        testtesttest
      </div>
      <Footer />
    </div>
  );
}
