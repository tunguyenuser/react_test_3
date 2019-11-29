import React, { Component } from "react";
import SanPham from "./san-pham";
import data from "./data.json";

export default class DanhSachSanPham extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mangSanPham: data,
      detailProduct: data[0]
    };
  }

  handleDetail = sanPham => {
    this.setState({
      detailProduct: sanPham
    });
  };

  renderHTML = () => {
    return this.state.mangSanPham.map((item, index) => {
      return (
        <SanPham key={index} sanPham={item} detailProduct={this.handleDetail} />
      );
    });
  };

  render() {
    let { detailProduct } = this.state;

    return (
      <div className="container">
        <div className="row">{this.renderHTML()}</div>
        <div className="row">
          <div className="col-sm-5">
            <img className="img-fluid" src={detailProduct.hinhAnh} alt="" />
          </div>
          <div className="col-sm-7">
            <h3>Thong so ky thuat</h3>
            <table className="table">
              <tbody>
                <tr>
                  <td>Màn hình</td>
                  <td>{detailProduct.manHinh}</td>
                </tr>
                <tr>
                  <td>HDH</td>
                  <td>{detailProduct.heDieuHanh}</td>
                </tr>
                <tr>
                  <td>Camera trước</td>
                  <td>{detailProduct.cameraTruoc}</td>
                </tr>
                <tr>
                  <td>Camera sau</td>
                  <td>{detailProduct.cameraSau}</td>
                </tr>
                <tr>
                  <td>Ram</td>
                  <td>{detailProduct.ram}</td>
                </tr>
                <tr>
                  <td>Rom</td>
                  <td>{detailProduct.rom}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
