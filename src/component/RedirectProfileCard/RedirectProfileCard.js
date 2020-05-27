import React, { Component } from "react";
import "./RedirectProfileCard.scss";
import Card from "../../component/Card/Card";
import CardHeader from "../../component/Card/CardHeader";
import CardBody from "../../component/Card/CardBody";
import CustomInput from "../../component/CustomInput/CustomInput";
import { Button, Alert } from "@material-ui/core";

class RedirectProfileCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bio: "",
      file: "",
      avatar: null,
      error: "",
      msg: "",
    };
    this.onFileChange = this.onFileChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const inputName = target.name;
    const inputValue = target.value;

    this.setState({
      [inputName]: inputValue,
    });
  }

  onFileChange = (event) => {
    this.setState({
      file: event.target.files[0],
    });
  };

  handleSubmit(event) {
    event.preventDefault();
    const updateProfileRequest = Object.assign({}, this.state);
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
    console.log(this.state);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <CardHeader>
          <div id="redirectProfileHeader">
            <img
              id="redirectLogo"
              src={require("../../asset/image/pt-white-logo.png")}
              alt="Posthem redirect logo"
            />
            <span id="redirectSkip">Skip for now</span>
          </div>
        </CardHeader>
        <CardBody>
          <br />
          <br />
          <br />
          <span className="redirectProfileTitle">Add profile bio</span>

          <CustomInput
            labelText="Your bio here..."
            id="pass"
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              name: "bio",
              onChange: this.handleInputChange,
              value: this.state.bio,
              autoComplete: "off",
            }}
            white={true}
          />
          <br />
          <br />
          <div className="redirectProfileTitle">Upload a profile picture</div>
          <div id="redirectUploadProfileContainer">
            <div className="image-upload">
              <label htmlFor="file-input">
                <img
                  src={require("../../asset/image/addAvatar.png")}
                  id="redirectAvatarBtn"
                  alt="Add profile avatar"
                />
              </label>
              <input
                id="file-input"
                onChange={this.onFileChange}
                type="file"
                accept="image/*"
              ></input>
            </div>

            <h4 style={{ color: "red" }}>{this.state.error}</h4>
            <h4 style={{ color: "green" }}>{this.state.msg}</h4>
            <br />

            <Button variant="contained" type="submit">
              Upload
            </Button>
          </div>
        </CardBody>
      </form>
    );
  }
}

export default RedirectProfileCard;
