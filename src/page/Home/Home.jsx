import React, { Component } from "react";
import Header from "../../component/Header/Header";
import HeaderLinks from "../../component/Header/HeaderLinks";
import Parallax from "../../component/Parallax/Parallax";

import "./Home.scss";

class Home extends Component {
  render() {
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
        <Parallax image={require("../../asset/image/bg7.jpg")}></Parallax>
        <section>wtf</section>
      </div>
    );
  }
}

export default Home;
