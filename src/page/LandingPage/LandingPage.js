import React, { Component } from "react";
import Header from "../../component/Header/Header";
import HeaderLinks from "../../component/Header/HeaderLinks";
import Parallax from "../../component/Parallax/Parallax";
import styles from "../../asset/jss/material-kit-react/views/components.js";
import IntroSection from "../../component/HomeIntroSection/IntroSection";
import "./LandingPage.scss";
import Footer from "../../component/Footer/Footer";
import GridContainer from "../../component/Grid/GridContainer";
import GridItem from "../../component/Grid/GridItem";
import { makeStyles } from "@material-ui/core/styles";
import Button from "../../component/CustomButtons/Button";

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
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
                  Share more wisdom <br /> Expand your life dimension
                </h2>
                <br />
                <br />
                <div className={classes.subtitle}>
                  Get started now! dsffdExplore the extensive good posts we have
                  here.
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
      <div id="introDivStyle">
        <IntroSection></IntroSection>
      </div>
      <br />
      <Footer />
    </div>
  );
}
