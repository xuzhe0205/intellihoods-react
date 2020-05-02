import { container } from "../../material-kit-react.js";

const componentsStyle = {
  container,
  brand: {
    color: "#FFFFFF",
    textAlign: "center",
    "@media (min-width: 1000px)": {
      marginTop: "-16rem !important",
    },
    "@media screen and (min-height: 810px), screen and (max-height: 1000px)": {
      marginTop: "-12rem",
    },
    "@media screen and (max-height: 700px)": {
      marginTop: "-5rem",
    },
  },
  title: {
    "@media (min-width: 577px)": {
      fontSize: "4.2rem",
    },
    "@media (max-width: 576px)": {
      fontSize: "2rem",
    },
    fontFamily: "Times New Roman",
    color: "#FFFAFA",
    fontWeight: "600",
    display: "inline-block",
    position: "relative",
  },
  landingPageExploreBtn: {
    "@media (min-width: 577px)": {
      fontSize: "1.3rem",
      width: "15rem",
    },
    "@media (max-width: 576px)": {
      fontSize: "1.2rem",
      width: "15rem",
    },
    color: "#FFFAFA",

    backgroundColor: "#05a87d",
    position: "relative",
    padding: "0.9375rem",
    fontWeight: "bold",
    fontFamily: "Source Sans Pro",
    textTransform: "initial",
    borderRadius: "5px",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex",
    "&:hover,&:focus": {
      color: "#FFFAFA",
      background: "#059f75",
    },
  },
  subtitle: {
    "@media (min-width: 577px)": {
      fontSize: "1.5rem",
    },
    "@media (max-width: 576px)": {
      fontSize: "1.1rem",
    },
    color: "#FFFAFA",
    margin: "20px 0 40px",
    fontWeight: "bold",
    fontFamily: "Source Sans Pro",
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
  link: {
    textDecoration: "none",
  },
  textCenter: {
    textAlign: "center",
  },
};

export default componentsStyle;
