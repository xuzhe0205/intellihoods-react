import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Header from "../../component/Header/Header";
import HeaderLinks from "../../component/Header/HeaderLinks";
import styles from "../../asset/jss/material-kit-react/views/componentsSections/navbarsStyle.js";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "../../component/CustomButtons/Button.js";
import CustomDropdown from "../../component/CustomDropdown/CustomDropdown.js";
import Email from "@material-ui/icons/Email";
import CovidApp from "../../component/Covid19/CovidApp";

const useStyles = makeStyles(styles);
export default function Home(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      {/* <Header
        brand="Posthem"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      /> */}
      <Header
        brand="Posthem"
        color="dark"
        rightLinks={
          <List className={classes.list}>
            <ListItem className={classes.listItem}>
              <Button
                href="#pablo"
                className={classes.navLink}
                onClick={(e) => e.preventDefault()}
                color="transparent"
              >
                Discover
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Button
                href="#pablo"
                className={classes.navLink}
                onClick={(e) => e.preventDefault()}
                color="transparent"
              >
                Wishlist
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Button
                justIcon
                round
                href="#pablo"
                className={classes.notificationNavLink}
                onClick={(e) => e.preventDefault()}
                color="rose"
              >
                <Email className={classes.icons} />
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <CustomDropdown
                left
                caret={false}
                hoverColor="black"
                dropdownHeader="Dropdown Header"
                buttonText={
                  <img
                    src={props.currentUser.imageUrl}
                    className={classes.img}
                    alt="profile"
                  />
                }
                buttonProps={{
                  className:
                    classes.navLink + " " + classes.imageDropdownButton,
                  color: "transparent",
                }}
                dropdownList={["Me", "Settings and other stuff", "Sign out"]}
              />
            </ListItem>
          </List>
        }
      />
      <div>home content body</div>
      <CovidApp />
    </div>
  );
}
