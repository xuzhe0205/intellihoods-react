import React from "react";
// plugin that creates slider
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";
import Switch from "@material-ui/core/Switch";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import People from "@material-ui/icons/People";
import Check from "@material-ui/icons/Check";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
// core components
import GridContainer from "../../component/Grid/GridContainer.js";
import GridItem from "../../component/Grid/GridItem.js";
import Button from "../../component/CustomButtons/Button.js";
import image from "../../asset/image/pt-biglogo-black.png";

import styles from "../../asset/jss/material-kit-react/views/componentsSections/basicsStyle.js";
import { Typography } from "@material-ui/core";
import "./IntroSection.scss";

const useStyles = makeStyles(styles);

export default function IntroSection() {
  const classes = useStyles();
  return (
    <div id="introContainer" className={classes.container}>
      <GridContainer spacing={1}>
        <GridItem xs={12} sm={6} md={4} lg={3}>
          <span id="slogan2">Educational, joyful, casual</span>
        </GridItem>
        <GridItem xs={12} sm={6} md={4} lg={3} className="normalArea">
          <span>This is what Posthem all about:</span>
        </GridItem>
        <GridItem xs={12} sm={6} md={4} lg={3} className="normalArea">
          <span></span>
        </GridItem>
        <GridItem xs={12} sm={6} md={4} lg={3}>
          <img className="image" src={image} alt="Posthem" />
        </GridItem>
      </GridContainer>
    </div>
  );
}
