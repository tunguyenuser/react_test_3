import React, { Component } from "react";

export default class HandlingEvent extends Component {
  handlingEvent = () => {
    console.log(1234);
  };

  handlingEventParam = (name, lop) => {
    console.log(name, lop);
  };

  render() {
    return (
      <div>
        <h3 className="title">* HandlingEvent</h3>
        <button className="btn btn-success" onClick={this.handlingEvent}>
          Handling event
        </button>

        <button
          className="btn btn-danger"
          onClick={() => {
            this.handlingEventParam("Nguyen", "FE32");
          }}
        >
          HandlingEvent Params
        </button>
      </div>
    );
  }
}
