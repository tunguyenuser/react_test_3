import React, { Component } from "react";

export default class State extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "Nguyen",
      isLogin: false
    };
  }

  renderInfo = () => {
    //Cach 1
    // if (this.state.isLogin) {
    //   return <div>Hello {this.state.username}</div>;
    // }

    // return (
    //   <button className="btn btn-success" onClick={this.handleLogin}>
    //     Login
    //   </button>
    // );

    //Cach 2
    return this.state.isLogin ? (
      <div>Hello {this.state.username}</div>
    ) : (
      <button className="btn btn-success" onClick={this.handleLogin}>
        Login
      </button>
    );
  };

  handleLogin = () => {
    this.setState({
      isLogin: true
    });
  };

  render() {
    return (
      <div>
        <h3 className="title">* State</h3>
        {this.renderInfo()}
      </div>
    );
  }
}
