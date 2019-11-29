import React, { Component } from "react";

export default class ExampleHandlingEvent extends Component {
  username = "Nguyen";
  isLogin = false;

  renderInfo = () => {
    if (this.isLogin) {
      return <div>Hello {this.username}</div>;
    }

    return (
      <button className="btn btn-success" onClick={this.handleLogin}>
        Login
      </button>
    );
  };

  handleLogin = () => {
    this.isLogin = true;
    console.log(this.isLogin);
  };

  render() {
    return (
      <div>
        <h3 className="title">* ExampleHandlingEvent</h3>
        {this.renderInfo()}
      </div>
    );
  }
}
