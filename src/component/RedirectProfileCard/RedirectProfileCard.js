import React, { Component } from "react";
import "./RedirectProfileCard.scss";
import Card from "../../component/Card/Card";
import CardHeader from "../../component/Card/CardHeader";
import CardBody from "../../component/Card/CardBody";
import CustomInput from "../../component/CustomInput/CustomInput";

class RedirectProfileCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bio: "",
      avatar: null,
    };
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

  handleSubmit(event) {
    event.preventDefault();
    const updateProfileRequest = Object.assign({}, this.state);
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
          <span className="redirectProfileTitle">Update Profile</span>

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
            <img
              src={require("../../asset/image/addAvatar.png")}
              id="redirectAvatarBtn"
              alt="Add profile avatar"
            />
            <h4 style={{ color: "red" }}>{this.state.error}</h4>
            <h4 style={{ color: "green" }}>{this.state.msg}</h4>
            <br />
            <input onChange={this.onFileChange} type="file"></input>
            <button onClick={this.uploadFile}>Upload</button>
          </div>
        </CardBody>
      </form>
    );
  }
}

export default RedirectProfileCard;
