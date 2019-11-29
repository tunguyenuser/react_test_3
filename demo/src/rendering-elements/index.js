import React, { Component } from "react";

export default class RenderingElements extends Component {
  name = "Nguyen";
  lop = "FE32";

  renderInfo = () => {
    return (
      <div>
        Ho ten: {this.name} - Lop: {this.lop}
      </div>
    );
  };

  render() {
    return (
      <div>
        <h3 className="title">* RenderingElements</h3>
        <div>Name: {this.name}</div>
        <div>Lop: {this.lop}</div>
        {this.renderInfo()}
      </div>
    );
  }
}
