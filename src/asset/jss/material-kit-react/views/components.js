import { container } from "../../material-kit-react.js";

const componentsStyle = {
  container,
  brand: {
    color: "#FFFFFF",
    textAlign: "center",
    marginTop: "-20rem",
  },
  title: {
    "@media (min-width: 577px)": {
      fontSize: "4rem",
    },
    "@media (max-width: 576px)": {
      fontSize: "1.48rem",
    },
    fontFamily: "minion pro",
    color: "#FFFAFA",
    fontWeight: "600",
    display: "inline-block",
    position: "relative",
  },
  landingPageExploreBtn: {
    color: "#FFFAFA",
    width: "8rem",
    backgroundColor: "#05a87d",
    position: "relative",
    padding: "0.9375rem",
    fontWeight: "bold",
    fontSize: "15px",
    textTransform: "uppercase",
    borderRadius: "5px",
    lineHeight: "15px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex",
    "&:hover,&:focus": {
      color: "#FFFAFA",
      background: "#059f75",
    },
  },
  subtitle: {
    fontSize: "1.313rem",
    color: "#FFFAFA",
    margin: "0 0 20px",
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
