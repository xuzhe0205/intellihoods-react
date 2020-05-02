import React, { Component } from "react";
import Header from "../../component/Header/Header";
import HeaderLinks from "../../component/Header/HeaderLinks";
import Parallax from "../../component/Parallax/Parallax";
import styles from "../../asset/jss/material-kit-react/views/components.js";
import classNames from "classnames";
import IntroSection from "../../component/HomeIntroSection/IntroSection";
import "./Home.scss";
import Footer from "../../component/Footer/Footer";
import GridContainer from "../../component/Grid/GridContainer";
import GridItem from "../../component/Grid/GridItem";
import { makeStyles } from "@material-ui/core/styles";
import Button from "../../component/CustomButtons/Button";

const useStyles = makeStyles(styles);

export default function Home(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const introDivStyle = {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  };
  const landingPageStyle = {};
  return (
    <div>
      <Header
        brand="Posthem"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax image={require("../../asset/image/lake-kid-phone.jpeg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h2 className={classes.title}>
                  Share more wisdom <br /> Expand dimension of your life
                </h2>
                <br />
                <br />
                <div className={classes.subtitle}>
                  Explore the world with the extensive good posts here.
                </div>
                <Button
                  color="transparent"
                  target="_blank"
                  className={classes.landingPageExploreBtn}
                >
                  Explore
                </Button>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div style={introDivStyle}>
        <IntroSection></IntroSection>
      </div>
      <br />
      <Footer />
    </div>
  );
}
