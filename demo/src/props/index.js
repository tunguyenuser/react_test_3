import React, { Component } from "react";
import ClassProps from "./classProps";
import FunctionProps from "./functionProps";

export default class Props extends Component {
  name = "Nguyen";

  render() {
    return (
      <div>
        <h3 className="title">* Props</h3>
        <ClassProps name={this.name} />
        <ClassProps name="ABC" />
        <FunctionProps username={this.name} />
      </div>
    );
  }
}
