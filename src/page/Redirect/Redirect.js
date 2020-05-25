import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

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
      <div className="App-intro">
        <h3>Upload a file</h3>
        <h4 style={{ color: "red" }}>{this.state.error}</h4>
        <h4 style={{ color: "green" }}>{this.state.msg}</h4>
        <input onChange={this.onFileChange} type="file"></input>
        <button onClick={this.uploadFile}>Upload</button>
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
