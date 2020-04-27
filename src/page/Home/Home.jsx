import React, { Component } from "react";
import Header from "../../component/Header/Header";
import HeaderLinks from "../../component/Header/HeaderLinks";
import Parallax from "../../component/Parallax/Parallax";
import styles from "../../asset/jss/material-kit-react/views/components.js";
import classNames from "classnames";
import IntroSection from "../../component/HomeIntroSection/IntroSection";
import "./Home.scss";

class Home extends Component {
  render() {
    const introDivStyle = {
      background: "#FFFFFF",
      position: "relative",
      zIndex: "3",
      margin: "-60px 30px 0px",
      borderRadius: "6px",
      boxShadow:
        "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    };
    return (
      <div className="homeDiv">
        <Header
          brand="Posthem"
          rightLinks={<HeaderLinks />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: "white",
          }}
          {...this.props}
        />
        <Parallax
          image={require("../../asset/image/lake-kid-phone.jpeg")}
        ></Parallax>
        <div style={introDivStyle}>
          <IntroSection></IntroSection>
        </div>
      </div>
    );
  }
}

export default Home;
