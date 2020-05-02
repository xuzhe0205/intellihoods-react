import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Header from "../../component/Header/Header";
import HeaderLinks from "../../component/Header/HeaderLinks";

export default function Home(props) {
  const { ...rest } = props;
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
      <div>home content body</div>
    </div>
  );
}
