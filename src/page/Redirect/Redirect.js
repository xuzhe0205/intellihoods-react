import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./Redirect.scss";
import Card from "../../component/Card/Card";
import CardHeader from "../../component/Card/CardHeader";
import CardBody from "../../component/Card/CardBody";
import CustomInput from "../../component/CustomInput/CustomInput";
import styles from "../../asset/jss/material-kit-react/views/componentsSections/redirectStyle";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";

class Redirect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bio: "",
      file: "",
      error: "",
      msg: "",
    };
    this.onFileChange = this.onFileChange.bind(this);
  }

  onFileChange = (event) => {
    this.setState({
      file: event.target.files[0],
    });
  };

  uploadFile = (event) => {
    event.preventDefault();
    this.setState({ error: "", msg: "" });

    if (!this.state.file) {
      this.setState({ error: "Please upload a file." });
      return;
    }

    if (this.state.file.size >= 2000000) {
      this.setState({ error: "File size exceeds limit of 2MB." });
      return;
    }
    alert(this.state.file.size);
    console.log("check redirect");
    console.log(this.state.file);
  };

  render() {
    return (
      <div>
        <img
          src={require("../../asset/image/white-wall.jpeg")}
          id="bg"
          alt=""
        ></img>
        <div style={styles.section}>
          <div style={styles.container} id="modalContainer">
            <Card id="redirectCard">
              <CardHeader>
                <br />
                <h2>Your Info</h2>
              </CardHeader>
              <CardBody>
                <CustomInput
                  labelText="Your bio here..."
                  id="pass"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    name: "bio",
                    onChange: this.handleInputChange,
                    value: this.state.password,
                    autoComplete: "off",
                  }}
                  white={{ color: `#fffafa` }}
                />
                <h3>Upload a file</h3>
                <h4 style={{ color: "red" }}>{this.state.error}</h4>
                <h4 style={{ color: "green" }}>{this.state.msg}</h4>
                <input onChange={this.onFileChange} type="file"></input>
                <button onClick={this.uploadFile}>Upload</button>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Redirect);
