/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import styles from "../../asset/jss/material-kit-react/components/footerStyle";

import Button from "../CustomButtons/Button";

import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a href="/about" className={classes.block} target="_blank">
                About Posthem
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="/help" className={classes.block} target="_blank">
                Help
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="/legal" className={classes.block} target="_blank">
                Legal
              </a>
            </ListItem>
            <ListItem className={classes.listItem}>
              {/*<Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>*/}
              <Tooltip
                id="instagram-twitter"
                title="Connect me via Linkedin"
                placement={window.innerWidth > 959 ? "top" : "left"}
                classes={{ tooltip: classes.tooltip }}
              >
                <Button
                  href="https://www.linkedin.com/in/zhe-oliver-xu/"
                  target="_blank"
                  color="transparent"
                  className={classes.navLink}
                >
                  <i className={classes.socialIcons + " fa fa-linkedin"} />
                </Button>
              </Tooltip>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Tooltip
                id="instagram-facebook"
                title="Friend me on Facebook"
                placement={window.innerWidth > 959 ? "top" : "left"}
                classes={{ tooltip: classes.tooltip }}
              >
                <Button
                  color="transparent"
                  href="https://www.facebook.com/zhe.xu.311/"
                  target="_blank"
                  className={classes.navLink}
                >
                  <i className={classes.socialIcons + " fa fa-facebook"} />
                </Button>
              </Tooltip>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Tooltip
                id="instagram-tooltip"
                title="Follow me on Instagram"
                placement={window.innerWidth > 959 ? "top" : "left"}
                classes={{ tooltip: classes.tooltip }}
              >
                <Button
                  color="transparent"
                  href="https://www.instagram.com/olivertsui/"
                  target="_blank"
                  className={classes.navLink}
                >
                  <i className={classes.socialIcons + " fa fa-instagram"} />
                </Button>
              </Tooltip>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()} , built with{" "}
          <Favorite className={classes.icon} /> by{" "}
          <a
            href="https://github.com/xuzhe0205"
            className={aClasses}
            target="_blank"
          >
            OliverTsui
          </a>{" "}
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool,
};
