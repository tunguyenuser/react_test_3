import React, { Component } from "react";
import DanhSachSanPham from "./danh-sach-san-pham";

export default class LiftingStateUp extends Component {
  render() {
    return (
      <div>
        <h3 className="title">LiftingStateUp</h3>
        <DanhSachSanPham />
      </div>
    );
  }
}
